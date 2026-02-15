// Storage keys for localStorage
const STORAGE_KEYS = {
  USERS: 'linguaquest_users',
  SESSION: 'linguaquest_session',
  getUserData: (username) => `linguaquest_userdata_${username}`
};

// Initial user data template for new users
export const INITIAL_USER_DATA = {
  stats: {
    spanish: { xp: 0, level: 1, streak: 0, lessonsCompleted: 0 },
    korean: { xp: 0, level: 1, streak: 0, lessonsCompleted: 0 }
  },
  achievements: [
    { id: 1, name: 'First Steps', icon: '👶', unlocked: false },
    { id: 2, name: 'Streak Master', icon: '🔥', unlocked: false },
    { id: 3, name: 'Polyglot', icon: '🌍', unlocked: false },
    { id: 4, name: 'Perfect Score', icon: '💯', unlocked: false },
    { id: 5, name: 'Speed Demon', icon: '⚡', unlocked: false },
    { id: 6, name: 'Grammar Guru', icon: '📖', unlocked: false }
  ],
  currentLevel: 'A1',
  selectedLanguage: null,
  currentLessonIndex: 0,
  createdAt: new Date().toISOString(),
  lastUpdated: new Date().toISOString()
};

// Simple password hashing (base64 for MVP)
export function hashPassword(password) {
  return btoa(password);
}

// Verify hashed password
export function verifyPasswordHash(password, hash) {
  return btoa(password) === hash;
}

// Get all registered users
export function getUsers() {
  try {
    const users = localStorage.getItem(STORAGE_KEYS.USERS);
    return users ? JSON.parse(users) : {};
  } catch (error) {
    console.error('Error reading users from localStorage:', error);
    return {};
  }
}

// Save user credentials
export function saveUser(username, password) {
  try {
    const users = getUsers();
    const passwordHash = hashPassword(password);

    users[username.toLowerCase()] = {
      username: username,
      passwordHash: passwordHash,
      createdAt: new Date().toISOString()
    };

    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
    return true;
  } catch (error) {
    console.error('Error saving user to localStorage:', error);
    return false;
  }
}

// Verify user credentials
export function verifyUser(username, password) {
  try {
    const users = getUsers();
    const user = users[username.toLowerCase()];

    if (!user) {
      return false;
    }

    return verifyPasswordHash(password, user.passwordHash);
  } catch (error) {
    console.error('Error verifying user:', error);
    return false;
  }
}

// Check if username exists
export function userExists(username) {
  const users = getUsers();
  return users.hasOwnProperty(username.toLowerCase());
}

// Save user progress data
export function saveUserData(username, data) {
  try {
    const key = STORAGE_KEYS.getUserData(username.toLowerCase());
    const dataWithTimestamp = {
      ...data,
      lastUpdated: new Date().toISOString()
    };
    localStorage.setItem(key, JSON.stringify(dataWithTimestamp));
    return true;
  } catch (error) {
    console.error('Error saving user data to localStorage:', error);
    return false;
  }
}

// Load user progress data
export function loadUserData(username) {
  try {
    const key = STORAGE_KEYS.getUserData(username.toLowerCase());
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error loading user data from localStorage:', error);
    return null;
  }
}

// Initialize user data for new user
export function initializeUserData(username) {
  const initialData = { ...INITIAL_USER_DATA };
  saveUserData(username, initialData);
  return initialData;
}

// Save session
export function saveSession(username) {
  try {
    const session = {
      currentUser: username.toLowerCase(),
      loginTime: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(session));
    return true;
  } catch (error) {
    console.error('Error saving session to localStorage:', error);
    return false;
  }
}

// Get current session
export function getSession() {
  try {
    const session = localStorage.getItem(STORAGE_KEYS.SESSION);
    return session ? JSON.parse(session) : null;
  } catch (error) {
    console.error('Error reading session from localStorage:', error);
    return null;
  }
}

// Clear session
export function clearSession() {
  try {
    localStorage.removeItem(STORAGE_KEYS.SESSION);
    return true;
  } catch (error) {
    console.error('Error clearing session from localStorage:', error);
    return false;
  }
}

// Check if localStorage is available
export function isLocalStorageAvailable() {
  try {
    const test = '__localStorage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (error) {
    return false;
  }
}
