export const LESSON_DATA = {
  spanish: {
    A1: [
      // Alphabet & Pronunciation (2 lessons)
      {
        type: 'alphabet',
        question: 'Which letter makes the "ah" sound in Spanish?',
        options: ['A', 'E', 'I', 'O'],
        correct: 0,
        explanation: 'The letter A in Spanish always makes the "ah" sound, like in "father".',
        vocabulary: { word: 'A', translation: 'Letter A', example: 'Mamá, papá, casa' }
      },
      {
        type: 'alphabet',
        question: 'Which vowel makes the "eh" sound (like "red")?',
        options: ['A', 'E', 'I', 'U'],
        correct: 1,
        explanation: 'The letter E in Spanish makes the "eh" sound.',
        vocabulary: { word: 'E', translation: 'Letter E', example: 'Leche, café, tres' }
      },
      // Numbers (3 lessons)
      {
        type: 'numbers',
        question: 'What is the number "1" in Spanish?',
        options: ['uno', 'dos', 'tres', 'cero'],
        correct: 0,
        explanation: 'Numbers 0-5: cero, uno, dos, tres, cuatro, cinco',
        vocabulary: { word: 'uno', translation: 'one', example: 'Tengo un libro.' }
      },
      {
        type: 'numbers',
        question: 'How do you say "3" in Spanish?',
        options: ['uno', 'dos', 'tres', 'cuatro'],
        correct: 2,
        explanation: '"Tres" is three in Spanish.',
        vocabulary: { word: 'tres', translation: 'three', example: 'Tres amigos' }
      },
      {
        type: 'numbers',
        question: 'What does "cero" mean?',
        options: ['zero', 'one', 'two', 'ten'],
        correct: 0,
        explanation: '"Cero" means zero.',
        vocabulary: { word: 'cero', translation: 'zero', example: 'Cero problemas' }
      },
      // Vocabulary (5 lessons)
      {
        type: 'vocabulary',
        question: 'How do you say "Hello" in Spanish?',
        options: ['Hola', 'Adiós', 'Sí', 'No'],
        correct: 0,
        explanation: '"Hola" is the basic greeting in Spanish, used any time of day.',
        vocabulary: { word: 'Hola', translation: 'Hello', example: 'Hola, amigo.' }
      },
      {
        type: 'vocabulary',
        question: 'How do you say "Goodbye" in Spanish?',
        options: ['Hola', 'Adiós', 'Gracias', 'Por favor'],
        correct: 1,
        explanation: '"Adiós" means goodbye.',
        vocabulary: { word: 'Adiós', translation: 'Goodbye', example: 'Adiós, hasta mañana.' }
      },
      {
        type: 'vocabulary',
        question: 'How do you say "Yes" in Spanish?',
        options: ['No', 'Sí', 'Hola', 'Adiós'],
        correct: 1,
        explanation: '"Sí" means yes. Notice the accent mark!',
        vocabulary: { word: 'Sí', translation: 'Yes', example: 'Sí, gracias.' }
      },
      {
        type: 'vocabulary',
        question: 'What does "Gracias" mean?',
        options: ['Hello', 'Goodbye', 'Thank you', 'Please'],
        correct: 2,
        explanation: '"Gracias" is how you say thank you in Spanish.',
        vocabulary: { word: 'Gracias', translation: 'Thank you', example: 'Gracias por todo.' }
      },
      {
        type: 'vocabulary',
        question: 'What does "Por favor" mean?',
        options: ['Thank you', 'Please', 'Excuse me', 'Hello'],
        correct: 1,
        explanation: '"Por favor" means please.',
        vocabulary: { word: 'Por favor', translation: 'Please', example: 'Agua, por favor.' }
      },
      // Basic Grammar (2 lessons)
      {
        type: 'grammar',
        question: 'What is "I" in Spanish?',
        options: ['Tú', 'Yo', 'Él', 'Ella'],
        correct: 1,
        explanation: '"Yo" means "I" in Spanish.',
        grammar: 'Subject pronouns: Yo (I), Tú (you), Él/Ella (he/she)'
      },
      {
        type: 'grammar',
        question: 'What is "you" (informal) in Spanish?',
        options: ['Yo', 'Tú', 'Él', 'Nosotros'],
        correct: 1,
        explanation: '"Tú" is informal "you" for friends and family.',
        grammar: 'Use "tú" with friends, "usted" for formal situations'
      }
    ],
    A2: [
      // Greetings & Time (2 lessons)
      {
        type: 'vocabulary',
        question: 'What is "Good morning" in Spanish?',
        options: ['Buenas noches', 'Buenos días', 'Buenas tardes', 'Hola'],
        correct: 1,
        explanation: '"Buenos días" is used to greet someone in the morning.',
        vocabulary: { word: 'Buenos días', translation: 'Good morning', example: 'Buenos días, profesor.' }
      },
      {
        type: 'vocabulary',
        question: 'What is "Good night" in Spanish?',
        options: ['Buenos días', 'Buenas tardes', 'Buenas noches', 'Hasta luego'],
        correct: 2,
        explanation: '"Buenas noches" is used at night for hello or goodbye.',
        vocabulary: { word: 'Buenas noches', translation: 'Good night', example: 'Buenas noches, mamá.' }
      },
      // Numbers (2 lessons)
      {
        type: 'numbers',
        question: 'What is the number "10" in Spanish?',
        options: ['cinco', 'siete', 'nueve', 'diez'],
        correct: 3,
        explanation: 'Numbers 6-10: seis, siete, ocho, nueve, diez',
        vocabulary: { word: 'diez', translation: 'ten', example: 'Tengo diez años.' }
      },
      {
        type: 'numbers',
        question: 'How do you say "seven" in Spanish?',
        options: ['cinco', 'seis', 'siete', 'ocho'],
        correct: 2,
        explanation: '"Siete" is seven.',
        vocabulary: { word: 'siete', translation: 'seven', example: 'Siete días' }
      },
      // Grammar - Ser (3 lessons)
      {
        type: 'grammar',
        question: 'Complete: "Yo ___ estudiante" (I am a student)',
        options: ['soy', 'eres', 'es', 'son'],
        correct: 0,
        explanation: '"Soy" is "I am" - the first person singular of the verb "ser".',
        grammar: 'Verb "ser" (to be): yo soy, tú eres, él/ella es'
      },
      {
        type: 'grammar',
        question: 'Complete: "Tú ___ inteligente" (You are intelligent)',
        options: ['soy', 'eres', 'es', 'son'],
        correct: 1,
        explanation: '"Eres" is "you are" (informal).',
        grammar: 'Ser for characteristics: Yo soy, Tú eres, Él/Ella es'
      },
      {
        type: 'grammar',
        question: 'Complete: "Ella ___ profesora" (She is a teacher)',
        options: ['soy', 'eres', 'es', 'somos'],
        correct: 2,
        explanation: '"Es" is used for he/she/it.',
        grammar: 'Third person: Él es, Ella es, Usted es'
      },
      // Vocabulary - Common words (3 lessons)
      {
        type: 'vocabulary',
        question: 'What does "agua" mean?',
        options: ['food', 'water', 'fire', 'house'],
        correct: 1,
        explanation: '"Agua" means water. Remember: even though it ends in "a", you say "el agua".',
        vocabulary: { word: 'agua', translation: 'water', example: 'Quiero agua, por favor.' }
      },
      {
        type: 'vocabulary',
        question: 'What does "comida" mean?',
        options: ['drink', 'food', 'house', 'friend'],
        correct: 1,
        explanation: '"Comida" means food.',
        vocabulary: { word: 'comida', translation: 'food', example: 'La comida está rica.' }
      },
      {
        type: 'vocabulary',
        question: 'What does "casa" mean?',
        options: ['car', 'house', 'street', 'city'],
        correct: 1,
        explanation: '"Casa" means house or home.',
        vocabulary: { word: 'casa', translation: 'house', example: 'Mi casa es grande.' }
      },
      // Conversation (2 lessons)
      {
        type: 'conversation',
        question: 'How would you ask "What time is it?"',
        options: ['¿Qué hora es?', '¿Cómo estás?', '¿Dónde está?', '¿Cuánto cuesta?'],
        correct: 0,
        explanation: '"¿Qué hora es?" literally means "What hour is it?"',
        vocabulary: { word: '¿Qué hora es?', translation: 'What time is it?', example: '¿Qué hora es? Son las tres.' }
      },
      {
        type: 'conversation',
        question: 'How do you ask "How are you?" (informal)?',
        options: ['¿Qué tal?', '¿Cuánto cuesta?', '¿Dónde está?', '¿Qué hora es?'],
        correct: 0,
        explanation: '"¿Qué tal?" or "¿Cómo estás?" both mean "How are you?"',
        vocabulary: { word: '¿Qué tal?', translation: 'How are you?', example: '¿Qué tal? ¿Bien?' }
      }
    ],
    B1: [
      // Verb "Ir" (2 lessons)
      {
        type: 'grammar',
        question: 'Choose the correct form: "Ellos ___ al parque" (They go to the park)',
        options: ['va', 'voy', 'van', 'vas'],
        correct: 2,
        explanation: '"Van" is the third person plural form of "ir" (to go).',
        grammar: 'Verb "ir" (to go): voy, vas, va, vamos, vais, van'
      },
      {
        type: 'grammar',
        question: 'Complete: "Nosotros ___ a la playa" (We go to the beach)',
        options: ['voy', 'vas', 'van', 'vamos'],
        correct: 3,
        explanation: '"Vamos" is the "we" form of "ir".',
        grammar: 'Ir: yo voy, tú vas, él va, nosotros vamos'
      },
      // Gustar (2 lessons)
      {
        type: 'grammar',
        question: 'Complete: "Me ___ el chocolate" (I like chocolate)',
        options: ['gusto', 'gusta', 'gustan', 'gustas'],
        correct: 1,
        explanation: 'Use "gusta" with singular nouns. "Gustar" means "to be pleasing to".',
        grammar: 'Me gusta + singular, Me gustan + plural'
      },
      {
        type: 'grammar',
        question: 'Complete: "Me ___ las manzanas" (I like apples)',
        options: ['gusto', 'gusta', 'gustan', 'gustas'],
        correct: 2,
        explanation: 'Use "gustan" with plural nouns.',
        grammar: 'Plural nouns use "gustan": Me gustan los libros'
      },
      // Past Tense (2 lessons)
      {
        type: 'grammar',
        question: 'Choose the past tense: "Ayer yo ___ al cine" (Yesterday I went to the cinema)',
        options: ['voy', 'fui', 'iré', 'vaya'],
        correct: 1,
        explanation: '"Fui" is the simple past (preterite) of "ir" for "I went".',
        grammar: 'Preterite of ir: fui, fuiste, fue, fuimos, fuisteis, fueron'
      },
      {
        type: 'grammar',
        question: 'Past tense: "Ayer comí pizza" means...',
        options: ['I eat pizza', 'I ate pizza yesterday', 'I will eat pizza', 'I like pizza'],
        correct: 1,
        explanation: 'The -í ending indicates past tense first person.',
        grammar: 'Regular -er verbs: comí, comiste, comió, comimos'
      },
      // Vocabulary (3 lessons)
      {
        type: 'vocabulary',
        question: 'What does "familia" mean?',
        options: ['friend', 'family', 'food', 'house'],
        correct: 1,
        explanation: '"Familia" is similar to the English word "family".',
        vocabulary: { word: 'familia', translation: 'family', example: 'Mi familia es grande.' }
      },
      {
        type: 'vocabulary',
        question: 'What does "trabajo" mean?',
        options: ['work', 'travel', 'study', 'play'],
        correct: 0,
        explanation: '"Trabajo" means work or job.',
        vocabulary: { word: 'trabajo', translation: 'work', example: 'Voy al trabajo.' }
      },
      {
        type: 'vocabulary',
        question: 'What does "amigo" mean?',
        options: ['enemy', 'friend', 'brother', 'cousin'],
        correct: 1,
        explanation: '"Amigo" means friend (male). "Amiga" is female friend.',
        vocabulary: { word: 'amigo', translation: 'friend', example: 'Mi mejor amigo' }
      },
      // Conversation (3 lessons)
      {
        type: 'conversation',
        question: 'How would you say "Where is the bathroom?"',
        options: ['¿Dónde está el baño?', '¿Qué es esto?', '¿Cómo te llamas?', '¿Cuándo es?'],
        correct: 0,
        explanation: '"¿Dónde está?" means "Where is?" and "el baño" means "the bathroom".',
        vocabulary: { word: 'baño', translation: 'bathroom', example: 'El baño está a la derecha.' }
      },
      {
        type: 'conversation',
        question: 'How do you ask "What is your name?"',
        options: ['¿Cómo estás?', '¿Cómo te llamas?', '¿Dónde vives?', '¿Qué hora es?'],
        correct: 1,
        explanation: '"¿Cómo te llamas?" literally means "How do you call yourself?"',
        vocabulary: { word: '¿Cómo te llamas?', translation: 'What is your name?', example: '¿Cómo te llamas? Me llamo Ana.' }
      },
      {
        type: 'conversation',
        question: 'How would you order food politely?',
        options: ['Quiero pizza', 'Dame pizza', 'Quisiera una pizza, por favor', 'Pizza ahora'],
        correct: 2,
        explanation: '"Quisiera" (I would like) is more polite than "Quiero" (I want).',
        vocabulary: { word: 'Quisiera', translation: 'I would like', example: 'Quisiera café, por favor.' }
      }
    ],
    B2: [
      {
        type: 'grammar',
        question: 'Choose the subjunctive: "Espero que tú ___ bien" (I hope you are well)',
        options: ['estás', 'estés', 'estar', 'estarás'],
        correct: 1,
        explanation: 'After "espero que" (I hope that), use the subjunctive mood: "estés".',
        grammar: 'Subjunctive is used after expressions of hope, doubt, and emotion'
      },
      {
        type: 'grammar',
        question: 'Complete: "Si yo ___ dinero, viajaría" (If I had money, I would travel)',
        options: ['tengo', 'tendría', 'tuviera', 'tuve'],
        correct: 2,
        explanation: '"Tuviera" (imperfect subjunctive) is used for hypothetical situations.',
        grammar: 'If-clause: Si + imperfect subjunctive + conditional'
      },
      {
        type: 'vocabulary',
        question: 'What does "aunque" mean?',
        options: ['because', 'although', 'therefore', 'never'],
        correct: 1,
        explanation: '"Aunque" is a conjunction meaning "although" or "even though".',
        vocabulary: { word: 'aunque', translation: 'although', example: 'Voy aunque llueva.' }
      },
      {
        type: 'idiom',
        question: 'What does "estar en las nubes" mean?',
        options: ['to be very happy', 'to be daydreaming', 'to be angry', 'to be tired'],
        correct: 1,
        explanation: 'Literally "to be in the clouds" - means to be daydreaming or distracted.',
        vocabulary: { word: 'estar en las nubes', translation: 'to daydream', example: '¡Estás en las nubes!' }
      },
      {
        type: 'advanced',
        question: 'Which uses "por" correctly?',
        options: ['Trabajo por mi familia', 'Estudio por ser médico', 'Es por ti', 'All are correct'],
        correct: 3,
        explanation: 'All use "por" correctly: for the sake of, to become, for you.',
        grammar: '"Por" = cause/reason/exchange, "Para" = purpose/destination'
      }
    ],
    C1: [
      {
        type: 'advanced',
        question: 'Choose the most formal register for requesting a meeting:',
        options: [
          'Quiero reunirme contigo',
          'Me gustaría concertar una reunión',
          'Necesito verte',
          '¿Quedamos?'
        ],
        correct: 1,
        explanation: '"Concertar una reunión" is professional and formal.',
        vocabulary: { word: 'concertar', translation: 'to arrange', example: 'Quisiera concertar una cita.' }
      },
      {
        type: 'literature',
        question: 'Complete this García Lorca verse: "Verde que te quiero ___"',
        options: ['azul', 'verde', 'rojo', 'blanco'],
        correct: 1,
        explanation: 'From "Romance Sonámbulo" by Federico García Lorca.',
        vocabulary: { word: 'verso', translation: 'verse', example: 'Este verso es famoso.' }
      },
      {
        type: 'grammar',
        question: 'Identify the mood: "Aunque hubiera sabido, no habría ido"',
        options: ['Indicative', 'Subjunctive', 'Imperative', 'Infinitive'],
        correct: 1,
        explanation: '"Hubiera sabido" is pluperfect subjunctive for past contrary-to-fact.',
        grammar: 'Pluperfect subjunctive: hubiera/hubiese + past participle'
      },
      {
        type: 'idiom',
        question: 'What does "no tener pelos en la lengua" mean?',
        options: [
          'to speak quietly',
          'to speak very frankly',
          'to have difficulty speaking',
          'to lie'
        ],
        correct: 1,
        explanation: 'Literally "not have hairs on the tongue" - to speak very directly.',
        vocabulary: { word: 'no tener pelos en la lengua', translation: 'to be frank', example: 'Él no tiene pelos en la lengua.' }
      },
      {
        type: 'culture',
        question: 'What is "sobremesa"?',
        options: [
          'A dessert',
          'Time spent talking after a meal',
          'A dance',
          'A dinner party'
        ],
        correct: 1,
        explanation: 'The Spanish tradition of lingering at the table after eating to chat.',
        vocabulary: { word: 'sobremesa', translation: 'after-dinner conversation', example: 'La sobremesa duró horas.' }
      }
    ],
    C2: [
      {
        type: 'advanced',
        question: 'Analyze: "Volvió a vivir volando hacia adelante"',
        options: ['Aliteración', 'Metáfora', 'Sinestesia', 'Hipérbole'],
        correct: 0,
        explanation: 'The repetition of the "v" sound creates alliteration.',
        vocabulary: { word: 'aliteración', translation: 'alliteration', example: 'Usa aliteración en poesía.' }
      },
      {
        type: 'literature',
        question: 'Who wrote "Cien años de soledad"?',
        options: ['Pablo Neruda', 'Gabriel García Márquez', 'Jorge Luis Borges', 'Octavio Paz'],
        correct: 1,
        explanation: 'García Márquez\'s masterpiece of magical realism.',
        vocabulary: { word: 'realismo mágico', translation: 'magical realism', example: 'Define la literatura latinoamericana.' }
      },
      {
        type: 'advanced',
        question: 'Find the error: "Entre tú y yo, es una mala idea"',
        options: [
          'Should be "entre ti y yo"',
          'Should be "entre tú y mí"',
          'Should be "entre ti y mí"',
          'No error'
        ],
        correct: 2,
        explanation: 'After prepositions, use "ti" and "mí" (not "tú" and "yo").',
        grammar: 'Prepositional pronouns: mí, ti, él, nosotros, vosotros, ellos'
      },
      {
        type: 'culture',
        question: 'What\'s the difference between "castellano" and "español"?',
        options: [
          'Different languages',
          'Castellano is more formal',
          'Both mean Spanish, castellano emphasizes Castilian origin',
          'Español is only in Spain'
        ],
        correct: 2,
        explanation: 'Both refer to Spanish; "castellano" emphasizes the language\'s Castilian roots.',
        vocabulary: { word: 'castellano', translation: 'Castilian/Spanish', example: 'Hablo castellano.' }
      },
      {
        type: 'professional',
        question: 'Most appropriate for a formal business proposal:',
        options: [
          'Queremos trabajar con ustedes',
          'Nos encantaría asociarnos',
          'Nos complace proponer una colaboración estratégica',
          'Podríamos hacer negocios'
        ],
        correct: 2,
        explanation: 'The third option uses professional, formal business language.',
        vocabulary: { word: 'proponer', translation: 'to propose', example: 'Proponemos una alianza.' }
      }
    ]
  },
  korean: {
    A1: [
      // Hangul Alphabet (3 lessons)
      {
        type: 'alphabet',
        question: 'What sound does the Korean letter "ㄱ" make?',
        options: ['g/k sound', 'n sound', 'm sound', 's sound'],
        correct: 0,
        explanation: 'ㄱ makes a "g" or "k" sound depending on position. This is the first consonant!',
        vocabulary: { word: 'ㄱ', romanization: 'giyeok', translation: 'g/k sound', example: '가, 고, 구' }
      },
      {
        type: 'alphabet',
        question: 'What sound does "ㄴ" make?',
        options: ['g sound', 'n sound', 'm sound', 's sound'],
        correct: 1,
        explanation: 'ㄴ makes an "n" sound.',
        vocabulary: { word: 'ㄴ', romanization: 'nieun', translation: 'n sound', example: '나, 너, 노' }
      },
      {
        type: 'alphabet',
        question: 'Which vowel makes the "ah" sound?',
        options: ['ㅏ (a)', 'ㅓ (eo)', 'ㅗ (o)', 'ㅜ (u)'],
        correct: 0,
        explanation: 'ㅏ makes the "ah" sound like in "father".',
        vocabulary: { word: 'ㅏ', romanization: 'a', translation: 'ah sound', example: '가, 사, 마' }
      },
      // Numbers (3 lessons)
      {
        type: 'numbers',
        question: 'How do you say "1" in Korean (native number)?',
        options: ['하나 (hana)', '둘 (dul)', '일 (il)', '셋 (set)'],
        correct: 0,
        explanation: 'Korean has two number systems. 하나 is native Korean for "one".',
        vocabulary: { word: '하나', romanization: 'hana', translation: 'one', example: '사과 하나' }
      },
      {
        type: 'numbers',
        question: 'How do you say "2" in Korean (native)?',
        options: ['하나 (hana)', '둘 (dul)', '셋 (set)', '넷 (net)'],
        correct: 1,
        explanation: '둘 is native Korean for "two".',
        vocabulary: { word: '둘', romanization: 'dul', translation: 'two', example: '둘이서' }
      },
      {
        type: 'numbers',
        question: 'What is "zero" in Korean?',
        options: ['영 (yeong)', '일 (il)', '하나 (hana)', '공 (gong)'],
        correct: 0,
        explanation: '영 means zero. 공 is also used for zero in phone numbers.',
        vocabulary: { word: '영', romanization: 'yeong', translation: 'zero', example: '영도' }
      },
      // Basic Vocabulary (4 lessons)
      {
        type: 'vocabulary',
        question: 'How do you say "Hello" in Korean?',
        options: ['안녕하세요 (annyeonghaseyo)', '감사합니다 (gamsahamnida)', '네 (ne)', '아니요 (aniyo)'],
        correct: 0,
        explanation: '안녕하세요 is the standard polite greeting.',
        vocabulary: { word: '안녕하세요', romanization: 'annyeonghaseyo', translation: 'Hello', example: '안녕하세요!' }
      },
      {
        type: 'vocabulary',
        question: 'How do you say "Goodbye" (to someone staying)?',
        options: ['안녕히 가세요 (annyeonghi gaseyo)', '안녕히 계세요 (annyeonghi gyeseyo)', '감사합니다 (gamsahamnida)', '네 (ne)'],
        correct: 1,
        explanation: '안녕히 계세요 is said to someone who is staying when you leave.',
        vocabulary: { word: '안녕히 계세요', romanization: 'annyeonghi gyeseyo', translation: 'Goodbye (stay well)', example: '안녕히 계세요!' }
      },
      {
        type: 'vocabulary',
        question: 'What does "네" (ne) mean?',
        options: ['No', 'Yes', 'Hello', 'Goodbye'],
        correct: 1,
        explanation: '"네" means "yes" in Korean.',
        vocabulary: { word: '네', romanization: 'ne', translation: 'Yes', example: '네, 맞아요.' }
      },
      {
        type: 'vocabulary',
        question: 'What does "감사합니다" mean?',
        options: ['Sorry', 'Thank you', 'Goodbye', 'Please'],
        correct: 1,
        explanation: '감사합니다 (gamsahamnida) is the formal way to say "thank you".',
        vocabulary: { word: '감사합니다', romanization: 'gamsahamnida', translation: 'Thank you', example: '도와주셔서 감사합니다.' }
      },
      // Basic Grammar (2 lessons)
      {
        type: 'grammar',
        question: 'What is "I" in Korean?',
        options: ['나 (na)', '너 (neo)', '우리 (uri)', '저 (jeo)'],
        correct: 0,
        explanation: '나 is informal "I". Use 저 in formal situations.',
        grammar: 'Pronouns: 나 (I - informal), 저 (I - formal)'
      },
      {
        type: 'grammar',
        question: 'What is "you" in Korean (informal)?',
        options: ['나 (na)', '너 (neo)', '저 (jeo)', '우리 (uri)'],
        correct: 1,
        explanation: '너 is informal "you" for close friends.',
        grammar: 'Use 너 only with close friends, 당신 is formal'
      }
    ],
    A2: [
      {
        type: 'vocabulary',
        question: 'What is "Good morning" in Korean?',
        options: ['안녕히 가세요', '좋은 아침', '안녕하세요', '잘 자요'],
        correct: 1,
        explanation: '좋은 아침 means "good morning", though 안녕하세요 works any time.',
        vocabulary: { word: '좋은 아침', romanization: 'joeun achim', translation: 'Good morning', example: '좋은 아침이에요!' }
      },
      {
        type: 'grammar',
        question: 'Complete: "저는 학생___" (I am a student)',
        options: ['이에요', '입니다', '예요', '해요'],
        correct: 1,
        explanation: '입니다 is the formal polite ending for "to be" (copula).',
        grammar: 'Copula: noun + 이에요/예요 (polite) or 입니다 (formal)'
      },
      {
        type: 'numbers',
        question: 'How do you say "5" in Korean (native)?',
        options: ['셋 (set)', '넷 (net)', '다섯 (daseot)', '여섯 (yeoseot)'],
        correct: 2,
        explanation: 'Native Korean numbers 1-5: 하나, 둘, 셋, 넷, 다섯',
        vocabulary: { word: '다섯', romanization: 'daseot', translation: 'five', example: '사과 다섯 개' }
      },
      {
        type: 'vocabulary',
        question: 'What does "물" (mul) mean?',
        options: ['food', 'water', 'fire', 'house'],
        correct: 1,
        explanation: '"물" means water in Korean.',
        vocabulary: { word: '물', romanization: 'mul', translation: 'water', example: '물 주세요.' }
      },
      {
        type: 'conversation',
        question: 'How would you ask "What time is it?"',
        options: ['몇 시예요?', '어디예요?', '얼마예요?', '뭐예요?'],
        correct: 0,
        explanation: '"몇 시" means "what time", and "예요" is the polite copula.',
        vocabulary: { word: '몇 시예요?', romanization: 'myeot siyeyo?', translation: 'What time is it?', example: '지금 몇 시예요?' }
      }
    ],
    B1: [
      {
        type: 'grammar',
        question: 'Choose the correct particle: "학교___ 가요" (I go to school)',
        options: ['을/를', '에', '이/가', '은/는'],
        correct: 1,
        explanation: '"에" is the particle for direction/destination.',
        grammar: 'Direction: 에, Location: 에서, Topic: 은/는, Subject: 이/가'
      },
      {
        type: 'vocabulary',
        question: 'What does "가족" mean?',
        options: ['friend', 'family', 'food', 'school'],
        correct: 1,
        explanation: '"가족" (gajok) means family.',
        vocabulary: { word: '가족', romanization: 'gajok', translation: 'family', example: '우리 가족은 네 명이에요.' }
      },
      {
        type: 'grammar',
        question: 'Complete: "저는 한국어___ 공부해요" (I study Korean)',
        options: ['을', '를', '에', '이'],
        correct: 0,
        explanation: '"을" is the object particle after consonant-ending nouns.',
        grammar: 'Object particles: 을 (after consonants), 를 (after vowels)'
      },
      {
        type: 'grammar',
        question: 'Choose past tense: "어제 영화를 ___" (Yesterday I watched a movie)',
        options: ['봐요', '봤어요', '볼 거예요', '봅니다'],
        correct: 1,
        explanation: '"봤어요" is the polite past tense of 보다 (to see/watch).',
        grammar: 'Past tense: verb stem + 았/었 + 어요'
      },
      {
        type: 'conversation',
        question: 'How would you ask "Where is the bathroom?"',
        options: ['화장실이 어디예요?', '이게 뭐예요?', '얼마예요?', '누구예요?'],
        correct: 0,
        explanation: '"어디" means "where", "화장실" means "bathroom".',
        vocabulary: { word: '화장실', romanization: 'hwajangsil', translation: 'bathroom', example: '화장실이 어디예요?' }
      }
    ],
    B2: [
      {
        type: 'grammar',
        question: 'Complete: "내일 비가 ___ 것 같아요" (It seems like it will rain)',
        options: ['오는', '온', '올', '와'],
        correct: 2,
        explanation: '"올 것 같아요" expresses future conjecture or probability.',
        grammar: 'Conjecture: verb stem + ㄹ/을 것 같아요'
      },
      {
        type: 'grammar',
        question: 'Choose the conditional: "돈이 ___, 여행할 텐데" (If I had money, I would travel)',
        options: ['있으면', '있다면', '있었다면', '있을 거예요'],
        correct: 2,
        explanation: '"있었다면" is past conditional for contrary-to-fact situations.',
        grammar: 'Past conditional: verb + 았/었더라면'
      },
      {
        type: 'honorific',
        question: 'Which is the honorific form of "to eat"?',
        options: ['먹다', '드시다', '주다', '받다'],
        correct: 1,
        explanation: '"드시다" is the honorific of 먹다. Use for elders/superiors.',
        grammar: 'Common honorifics: 드시다 (eat), 주무시다 (sleep), 계시다 (exist)'
      },
      {
        type: 'vocabulary',
        question: 'What does "비록...지만" mean?',
        options: ['because', 'although', 'therefore', 'when'],
        correct: 1,
        explanation: '"지만" means "but/although" in Korean.',
        vocabulary: { word: '지만', romanization: 'jiman', translation: 'although/but', example: '바쁘지만 갈게요.' }
      },
      {
        type: 'culture',
        question: 'What is "정" (jeong)?',
        options: [
          'A type of food',
          'A deep emotional bond',
          'A dance',
          'A bow'
        ],
        correct: 1,
        explanation: '"정" is a unique Korean concept of deep affection and connection.',
        vocabulary: { word: '정', romanization: 'jeong', translation: 'affection/bond', example: '우리는 정이 많아요.' }
      }
    ],
    C1: [
      {
        type: 'advanced',
        question: 'Choose the most formal business register:',
        options: [
          '만나고 싶어요',
          '회의를 하고 싶습니다',
          '회의 일정을 잡고자 합니다',
          '만날래요?'
        ],
        correct: 2,
        explanation: '"잡고자 합니다" is the most formal and professional.',
        vocabulary: { word: '잡고자 하다', romanization: 'japgoja hada', translation: 'to intend to arrange', example: '일정을 잡고자 합니다.' }
      },
      {
        type: 'literature',
        question: 'Who wrote "채식주의자" (The Vegetarian)?',
        options: ['한강', '신경숙', '이문열', '박완서'],
        correct: 0,
        explanation: 'Han Kang (한강) won the Man Booker Prize for this novel.',
        vocabulary: { word: '채식주의자', romanization: 'chaesikjuuija', translation: 'The Vegetarian', example: '그녀는 채식주의자예요.' }
      },
      {
        type: 'grammar',
        question: 'Meaning of "기는커녕": "공부하기는커녕 놀기만 해요"',
        options: ['Let alone', 'Because of', 'In order to', 'As soon as'],
        correct: 0,
        explanation: '"기는커녕" means "far from" or "let alone" - strong contrast.',
        grammar: 'V + 기는커녕 = far from doing, let alone'
      },
      {
        type: 'idiom',
        question: 'What does "눈코 뜰 새 없다" mean?',
        options: [
          'To be ugly',
          'To be extremely busy',
          'To be sleepy',
          'To be confused'
        ],
        correct: 1,
        explanation: 'Literally "no time to open eyes and nose" = extremely busy.',
        vocabulary: { word: '눈코 뜰 새 없다', romanization: 'nunko tteul sae eopda', translation: 'extremely busy', example: '요즘 눈코 뜰 새 없이 바빠요.' }
      },
      {
        type: 'advanced',
        question: 'Correct honorific usage:',
        options: [
          '할아버지께서 주무세요',
          '할아버지가 자요',
          '할아버지께서 주무십니다',
          'Both A and C'
        ],
        correct: 3,
        explanation: 'Both A and C use proper honorific particle (께서) and verb (주무시다).',
        grammar: 'Honorific subject particle: 께서, Honorific verbs: special forms'
      }
    ],
    C2: [
      {
        type: 'advanced',
        question: 'Literary device: "달빛이 물결처럼 흘러내렸다"',
        options: ['의성어', '직유', '의인법', '과장법'],
        correct: 1,
        explanation: 'Using "처럼" (like) creates a simile.',
        vocabulary: { word: '직유', romanization: 'jigyu', translation: 'simile', example: '직유법을 사용해요.' }
      },
      {
        type: 'hanja',
        question: 'What is the Hanja origin of "학교" (school)?',
        options: ['學校', '學交', '鶴橋', '鶴校'],
        correct: 0,
        explanation: '學 (learn) + 校 (school) = 학교',
        vocabulary: { word: '學校', romanization: 'hakgyo', translation: 'school (Hanja)', example: '대학교 = 大學校' }
      },
      {
        type: 'advanced',
        question: 'Formal writing error: "이 문제를 해결하기 위해서는 다양한 접근법이 필요하다고 봅니다"',
        options: [
          'Use 위하여 instead',
          'Use 생각됩니다 instead of 봅니다',
          'Remove comma',
          'No error'
        ],
        correct: 1,
        explanation: 'In formal academic writing, use 생각되다/여겨지다 over 보다.',
        grammar: 'Formal Korean uses passive/impersonal constructions'
      },
      {
        type: 'culture',
        question: 'What is "한" (han) in Korean culture?',
        options: [
          'Number one',
          'Traditional clothing',
          'Collective sorrow and resilience',
          'Traditional music'
        ],
        correct: 2,
        explanation: '"한" represents deep collective sorrow mixed with hope and resilience.',
        vocabulary: { word: '한', romanization: 'han', translation: 'collective sorrow', example: '한국인의 한 정서' }
      },
      {
        type: 'professional',
        question: 'Most appropriate for formal business proposal:',
        options: [
          '같이 일하고 싶어요',
          '협력하면 좋겠습니다',
          '전략적 제휴를 제안드리고자 합니다',
          '비즈니스 하실래요?'
        ],
        correct: 2,
        explanation: 'Third option uses professional, formal business language.',
        vocabulary: { word: '제안드리다', romanization: 'jeandeurida', translation: 'to propose (humble)', example: '방안을 제안드립니다.' }
      }
    ]
  }
};

export const GAME_MODES = [
  {
    id: 'story',
    name: 'Story Mode',
    icon: '📖',
    description: 'Complete learning experience - all lesson types',
    color: 'var(--spanish-primary)'
  },
  {
    id: 'vocabulary',
    name: 'Vocabulary Builder',
    icon: '📚',
    description: 'Focus on words, numbers, and alphabet',
    color: 'var(--korean-accent)'
  },
  {
    id: 'conversation',
    name: 'Conversation Practice',
    icon: '💬',
    description: 'Real-world scenarios and practical usage',
    color: 'var(--spanish-accent)'
  },
  {
    id: 'battle',
    name: 'Battle Arena',
    icon: '⚔️',
    description: 'Grammar challenges - test your skills!',
    color: 'var(--korean-primary)'
  }
];

export const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
