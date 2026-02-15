import {
  saveUser,
  verifyUser,
  userExists,
  saveSession,
  getSession,
  clearSession,
  loadUserData,
  initializeUserData
} from './storage';

// Error messages
export const ERROR_MESSAGES = {
  USERNAME_EXISTS: 'Username already taken',
  INVALID_CREDENTIALS: 'Invalid username or password',
  USERNAME_TOO_SHORT: 'Username must be at least 3 characters',
  USERNAME_TOO_LONG: 'Username must be 20 characters or less',
  PASSWORD_TOO_SHORT: 'Password must be at least 6 characters',
  INVALID_USERNAME_CHARS: 'Username can only contain letters, numbers, and underscores',
  STORAGE_ERROR: 'Unable to save data. Please enable localStorage',
  USERNAME_REQUIRED: 'Username is required',
  PASSWORD_REQUIRED: 'Password is required'
};

// Validate username format
function validateUsername(username) {
  if (!username || username.trim() === '') {
    return { valid: false, error: ERROR_MESSAGES.USERNAME_REQUIRED };
  }

  const trimmedUsername = username.trim();

  if (trimmedUsername.length < 3) {
    return { valid: false, error: ERROR_MESSAGES.USERNAME_TOO_SHORT };
  }

  if (trimmedUsername.length > 20) {
    return { valid: false, error: ERROR_MESSAGES.USERNAME_TOO_LONG };
  }

  // Allow only alphanumeric and underscore
  const usernameRegex = /^[a-zA-Z0-9_]+$/;
  if (!usernameRegex.test(trimmedUsername)) {
    return { valid: false, error: ERROR_MESSAGES.INVALID_USERNAME_CHARS };
  }

  return { valid: true };
}

// Validate password
function validatePassword(password) {
  if (!password || password.trim() === '') {
    return { valid: false, error: ERROR_MESSAGES.PASSWORD_REQUIRED };
  }

  if (password.length < 6) {
    return { valid: false, error: ERROR_MESSAGES.PASSWORD_TOO_SHORT };
  }

  return { valid: true };
}

// Register new user
export function register(username, password) {
  // Validate username
  const usernameValidation = validateUsername(username);
  if (!usernameValidation.valid) {
    return { success: false, error: usernameValidation.error };
  }

  // Validate password
  const passwordValidation = validatePassword(password);
  if (!passwordValidation.valid) {
    return { success: false, error: passwordValidation.error };
  }

  const trimmedUsername = username.trim();

  // Check if username already exists
  if (userExists(trimmedUsername)) {
    return { success: false, error: ERROR_MESSAGES.USERNAME_EXISTS };
  }

  // Save user credentials
  const userSaved = saveUser(trimmedUsername, password);
  if (!userSaved) {
    return { success: false, error: ERROR_MESSAGES.STORAGE_ERROR };
  }

  // Initialize empty user data
  const userData = initializeUserData(trimmedUsername);

  // Create session
  const sessionSaved = saveSession(trimmedUsername);
  if (!sessionSaved) {
    return { success: false, error: ERROR_MESSAGES.STORAGE_ERROR };
  }

  return {
    success: true,
    username: trimmedUsername,
    userData: userData
  };
}

// Login existing user
export function login(username, password) {
  // Validate username
  const usernameValidation = validateUsername(username);
  if (!usernameValidation.valid) {
    return { success: false, error: usernameValidation.error };
  }

  // Validate password
  const passwordValidation = validatePassword(password);
  if (!passwordValidation.valid) {
    return { success: false, error: passwordValidation.error };
  }

  const trimmedUsername = username.trim();

  // Verify credentials
  const isValid = verifyUser(trimmedUsername, password);
  if (!isValid) {
    return { success: false, error: ERROR_MESSAGES.INVALID_CREDENTIALS };
  }

  // Load user data
  const userData = loadUserData(trimmedUsername);

  // Create session
  const sessionSaved = saveSession(trimmedUsername);
  if (!sessionSaved) {
    return { success: false, error: ERROR_MESSAGES.STORAGE_ERROR };
  }

  return {
    success: true,
    username: trimmedUsername,
    userData: userData
  };
}

// Logout current user
export function logout() {
  clearSession();
  return { success: true };
}

// Get current authenticated user
export function getCurrentUser() {
  const session = getSession();
  return session ? session.currentUser : null;
}

// Check if user is authenticated
export function isAuthenticated() {
  const session = getSession();
  return session !== null && session.currentUser !== null;
}
