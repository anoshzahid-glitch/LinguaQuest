export const LESSON_DATA = {
  spanish: {
    A1: [
      {
        type: 'vocabulary',
        question: '¿Cómo se dice "Hello" en español?',
        options: ['Hola', 'Adiós', 'Gracias', 'Por favor'],
        correct: 0,
        explanation: '"Hola" is the most common way to say hello in Spanish.',
        vocabulary: { word: 'Hola', translation: 'Hello', example: 'Hola, ¿cómo estás?' }
      },
      {
        type: 'vocabulary',
        question: 'What does "Gracias" mean?',
        options: ['Please', 'Thank you', 'Sorry', 'Goodbye'],
        correct: 1,
        explanation: '"Gracias" means "Thank you" in Spanish.',
        vocabulary: { word: 'Gracias', translation: 'Thank you', example: 'Gracias por tu ayuda.' }
      },
      {
        type: 'grammar',
        question: 'Complete: "Yo ___ estudiante" (I am a student)',
        options: ['soy', 'eres', 'es', 'somos'],
        correct: 0,
        explanation: '"Soy" is the first person singular form of "ser" (to be).',
        grammar: 'The verb "ser" is used for permanent characteristics and identity.'
      },
      {
        type: 'vocabulary',
        question: 'What is "Good morning" in Spanish?',
        options: ['Buenas noches', 'Buenos días', 'Buenas tardes', 'Hasta luego'],
        correct: 1,
        explanation: '"Buenos días" is used to greet someone in the morning.',
        vocabulary: { word: 'Buenos días', translation: 'Good morning', example: 'Buenos días, profesor.' }
      },
      {
        type: 'numbers',
        question: 'How do you say the number "5" in Spanish?',
        options: ['cuatro', 'cinco', 'seis', 'siete'],
        correct: 1,
        explanation: 'Numbers in Spanish: 1-uno, 2-dos, 3-tres, 4-cuatro, 5-cinco',
        vocabulary: { word: 'cinco', translation: '5', example: 'Tengo cinco años.' }
      }
    ],
    A2: [
      {
        type: 'grammar',
        question: 'Choose the correct form: "Ellos ___ al cine" (They go to the cinema)',
        options: ['va', 'voy', 'van', 'vamos'],
        correct: 2,
        explanation: '"Van" is the third person plural form of "ir" (to go).',
        grammar: 'Present tense conjugation of "ir": voy, vas, va, vamos, vais, van'
      },
      {
        type: 'vocabulary',
        question: 'What does "¿Dónde está el baño?" mean?',
        options: ['What time is it?', 'Where is the bathroom?', 'How much does it cost?', 'What is your name?'],
        correct: 1,
        explanation: 'This is a common question when asking for directions to the bathroom.',
        vocabulary: { word: 'baño', translation: 'bathroom', example: 'El baño está a la derecha.' }
      },
      {
        type: 'grammar',
        question: 'Complete: "Me ___ la música" (I like music)',
        options: ['gusto', 'gusta', 'gustan', 'gustas'],
        correct: 1,
        explanation: '"Gusta" is used with singular nouns. "Gustar" works differently than "to like" in English.',
        grammar: 'Use "gusta" with singular nouns and "gustan" with plural nouns.'
      },
      {
        type: 'conversation',
        question: 'How would you ask "What time is it?" in Spanish?',
        options: ['¿Qué hora es?', '¿Cuánto cuesta?', '¿Dónde está?', '¿Cómo estás?'],
        correct: 0,
        explanation: '"¿Qué hora es?" is the standard way to ask for the time.',
        vocabulary: { word: '¿Qué hora es?', translation: 'What time is it?', example: '¿Qué hora es? Son las tres.' }
      },
      {
        type: 'vocabulary',
        question: 'What does "familia" mean?',
        options: ['friend', 'family', 'food', 'house'],
        correct: 1,
        explanation: '"Familia" is a cognate with English "family".',
        vocabulary: { word: 'familia', translation: 'family', example: 'Mi familia es grande.' }
      }
    ],
    B1: [
      {
        type: 'grammar',
        question: 'Choose the correct preterite form: "Ayer yo ___ al mercado" (Yesterday I went to the market)',
        options: ['fui', 'fue', 'iba', 'voy'],
        correct: 0,
        explanation: '"Fui" is the preterite (simple past) form of "ir" for first person singular.',
        grammar: 'Preterite is used for completed actions in the past.'
      },
      {
        type: 'vocabulary',
        question: 'What does "aunque" mean?',
        options: ['because', 'although', 'therefore', 'when'],
        correct: 1,
        explanation: '"Aunque" is a conjunction meaning "although" or "even though".',
        vocabulary: { word: 'aunque', translation: 'although', example: 'Voy aunque llueva.' }
      },
      {
        type: 'grammar',
        question: 'Complete with subjunctive: "Espero que tú ___ bien" (I hope you are well)',
        options: ['estás', 'estés', 'estar', 'estarás'],
        correct: 1,
        explanation: 'The subjunctive "estés" is used after expressions of hope and desire.',
        grammar: 'The subjunctive mood expresses wishes, doubts, and hypothetical situations.'
      },
      {
        type: 'conversation',
        question: 'How would you say "I would like to make a reservation"?',
        options: ['Quiero hacer una reserva', 'Me gustaría hacer una reserva', 'Necesito una reserva', 'Tengo una reserva'],
        correct: 1,
        explanation: '"Me gustaría" (I would like) is more polite than "quiero" (I want).',
        vocabulary: { word: 'reserva', translation: 'reservation', example: 'Hice una reserva para dos.' }
      },
      {
        type: 'idiom',
        question: 'What does the expression "estar en las nubes" mean?',
        options: ['to be very happy', 'to be daydreaming', 'to be very tall', 'to be angry'],
        correct: 1,
        explanation: 'Literally "to be in the clouds", it means to be daydreaming or not paying attention.',
        vocabulary: { word: 'estar en las nubes', translation: 'to be daydreaming', example: 'Estás en las nubes, ¡concéntrate!' }
      }
    ],
    B2: [
      {
        type: 'grammar',
        question: 'Choose the correct form: "Si yo ___ dinero, viajaría" (If I had money, I would travel)',
        options: ['tengo', 'tendría', 'tuviera', 'tuve'],
        correct: 2,
        explanation: '"Tuviera" (imperfect subjunctive) is used in contrary-to-fact conditional sentences.',
        grammar: 'Imperfect subjunctive + conditional is used for hypothetical situations.'
      },
      {
        type: 'vocabulary',
        question: 'What does "desarrollar" mean?',
        options: ['to destroy', 'to develop', 'to decide', 'to describe'],
        correct: 1,
        explanation: '"Desarrollar" means to develop or to unfold.',
        vocabulary: { word: 'desarrollar', translation: 'to develop', example: 'Necesitamos desarrollar nuevas estrategias.' }
      },
      {
        type: 'grammar',
        question: 'Complete: "El informe ___ por el equipo ayer" (The report was written by the team yesterday)',
        options: ['escribió', 'fue escrito', 'había escrito', 'escribió'],
        correct: 1,
        explanation: '"Fue escrito" is the passive voice (preterite) of "escribir".',
        grammar: 'Passive voice: ser + past participle'
      },
      {
        type: 'advanced',
        question: 'Which sentence correctly uses "por" vs "para"?',
        options: [
          'Trabajo por mi familia',
          'Este regalo es por ti',
          'Estudia para ser médico',
          'All are correct'
        ],
        correct: 3,
        explanation: 'All sentences use por/para correctly with different meanings.',
        grammar: '"Por" indicates cause/exchange, "para" indicates purpose/destination.'
      },
      {
        type: 'culture',
        question: 'What is "sobremesa"?',
        options: [
          'A type of Spanish dessert',
          'The time spent talking after a meal',
          'A traditional Spanish dance',
          'A formal dinner party'
        ],
        correct: 1,
        explanation: '"Sobremesa" is the Spanish tradition of lingering at the table after a meal to talk.',
        vocabulary: { word: 'sobremesa', translation: 'after-dinner conversation', example: 'La sobremesa duró dos horas.' }
      }
    ],
    C1: [
      {
        type: 'advanced',
        question: 'Choose the most appropriate register: Requesting a formal meeting',
        options: [
          'Quiero reunirme contigo',
          'Me gustaría concertar una reunión',
          'Necesito verte',
          '¿Quedamos?'
        ],
        correct: 1,
        explanation: '"Concertar una reunión" is the most formal and professional way to request a meeting.',
        vocabulary: { word: 'concertar', translation: 'to arrange/schedule', example: 'Quisiera concertar una cita.' }
      },
      {
        type: 'literature',
        question: 'Complete this famous García Lorca verse: "Verde que te quiero ___"',
        options: ['azul', 'verde', 'rojo', 'negro'],
        correct: 1,
        explanation: 'This is from "Romance Sonámbulo" by Federico García Lorca.',
        vocabulary: { word: 'verso', translation: 'verse', example: 'Este verso es muy conocido.' }
      },
      {
        type: 'grammar',
        question: 'Identify the mood: "Aunque hubiera sabido, no habría ido"',
        options: ['Indicative', 'Subjunctive', 'Imperative', 'Conditional'],
        correct: 1,
        explanation: '"Hubiera sabido" is pluperfect subjunctive, used in past contrary-to-fact conditions.',
        grammar: 'Pluperfect subjunctive: hubiera/hubiese + past participle'
      },
      {
        type: 'idiom',
        question: 'What does "no tener pelos en la lengua" mean?',
        options: [
          'to speak very quietly',
          'to speak frankly without holding back',
          'to have difficulty speaking',
          'to be multilingual'
        ],
        correct: 1,
        explanation: 'Literally "to not have hairs on the tongue", it means to speak very directly.',
        vocabulary: { word: 'no tener pelos en la lengua', translation: 'to be very frank', example: 'María no tiene pelos en la lengua.' }
      },
      {
        type: 'advanced',
        question: 'Choose the sentence with correct use of "haber" vs "estar":',
        options: [
          'Hay muchas personas en la sala',
          'Están muchas personas en la sala',
          'Habemos muchas personas en la sala',
          'Both A and B are correct'
        ],
        correct: 0,
        explanation: '"Hay" (impersonal form of haber) is used for existence in a location.',
        grammar: 'Use "hay" for existence, "estar" for specific location of known entities.'
      }
    ],
    C2: [
      {
        type: 'advanced',
        question: 'Analyze the stylistic device: "Volvió a vivir volando hacia adelante"',
        options: ['Aliteración', 'Metáfora', 'Sinestesia', 'Hipérbole'],
        correct: 0,
        explanation: 'The repetition of the "v" sound is alliteration (aliteración).',
        vocabulary: { word: 'aliteración', translation: 'alliteration', example: 'La aliteración crea ritmo en el poema.' }
      },
      {
        type: 'literature',
        question: 'Which author wrote "Cien años de soledad"?',
        options: ['Pablo Neruda', 'Gabriel García Márquez', 'Jorge Luis Borges', 'Octavio Paz'],
        correct: 1,
        explanation: 'Gabriel García Márquez\'s masterpiece is a cornerstone of magical realism.',
        vocabulary: { word: 'realismo mágico', translation: 'magical realism', example: 'El realismo mágico caracteriza la literatura latinoamericana.' }
      },
      {
        type: 'advanced',
        question: 'Identify the error: "Entre tú y yo, creo que es una mala idea"',
        options: [
          'Should be "entre ti y yo"',
          'Should be "entre tú y mí"',
          'Should be "entre ti y mí"',
          'No error'
        ],
        correct: 2,
        explanation: 'After prepositions, use "ti" and "mí" (not "tú" and "yo").',
        grammar: 'Prepositional pronouns: mí, ti, él/ella, nosotros, vosotros, ellos/ellas'
      },
      {
        type: 'culture',
        question: 'What is the difference between "castellano" and "español"?',
        options: [
          'They are completely different languages',
          'Castellano is more formal than español',
          'They refer to the same language, but castellano emphasizes the Castilian origin',
          'Español is only used in Spain'
        ],
        correct: 2,
        explanation: 'Both terms refer to Spanish, but "castellano" emphasizes its origin in Castile.',
        vocabulary: { word: 'castellano', translation: 'Castilian/Spanish', example: 'Hablo castellano y catalán.' }
      },
      {
        type: 'professional',
        question: 'Which phrase is most appropriate for a formal business proposal?',
        options: [
          'Queremos trabajar con ustedes',
          'Nos encantaría asociarnos',
          'Nos complace proponer una colaboración estratégica',
          'Podríamos hacer negocios juntos'
        ],
        correct: 2,
        explanation: 'The third option uses the most professional and formal language.',
        vocabulary: { word: 'proponer', translation: 'to propose', example: 'Proponemos una alianza mutuamente beneficiosa.' }
      }
    ]
  },
  korean: {
    A1: [
      {
        type: 'vocabulary',
        question: 'How do you say "Hello" in Korean?',
        options: ['안녕하세요 (annyeonghaseyo)', '감사합니다 (gamsahamnida)', '네 (ne)', '아니요 (aniyo)'],
        correct: 0,
        explanation: '안녕하세요 is the standard polite greeting in Korean.',
        vocabulary: { word: '안녕하세요', romanization: 'annyeonghaseyo', translation: 'Hello', example: '안녕하세요, 만나서 반갑습니다.' }
      },
      {
        type: 'vocabulary',
        question: 'What does "감사합니다" (gamsahamnida) mean?',
        options: ['Sorry', 'Thank you', 'Goodbye', 'Please'],
        correct: 1,
        explanation: '감사합니다 is the formal way to say thank you.',
        vocabulary: { word: '감사합니다', romanization: 'gamsahamnida', translation: 'Thank you', example: '도와주셔서 감사합니다.' }
      },
      {
        type: 'grammar',
        question: 'Complete: "저는 학생___" (I am a student)',
        options: ['이에요', '입니다', '해요', '가요'],
        correct: 1,
        explanation: '입니다 is the formal copula (to be) ending.',
        grammar: 'Copula: noun + 이에요/예요 (informal) or 입니다 (formal)'
      },
      {
        type: 'numbers',
        question: 'How do you say the number "3" in Korean (native Korean numbers)?',
        options: ['하나 (hana)', '둘 (dul)', '셋 (set)', '넷 (net)'],
        correct: 2,
        explanation: 'Korean has two number systems. 셋 (set) is native Korean for 3.',
        vocabulary: { word: '셋', romanization: 'set', translation: '3 (native)', example: '사과 세 개' }
      },
      {
        type: 'vocabulary',
        question: 'What is "Good morning" in Korean?',
        options: ['안녕하세요', '좋은 아침', '잘 자요', '안녕히 가세요'],
        correct: 1,
        explanation: '좋은 아침 means good morning, though 안녕하세요 is used any time of day.',
        vocabulary: { word: '좋은 아침', romanization: 'joeun achim', translation: 'Good morning', example: '좋은 아침입니다!' }
      }
    ],
    A2: [
      {
        type: 'grammar',
        question: 'Choose the correct particle: "학교___ 갑니다" (I go to school)',
        options: ['을/를', '에', '이/가', '은/는'],
        correct: 1,
        explanation: '에 is the particle indicating direction or destination.',
        grammar: 'Location particles: 에 (to/at), 에서 (at/from), 로 (toward/by means of)'
      },
      {
        type: 'vocabulary',
        question: 'What does "몇 시예요?" mean?',
        options: ['How are you?', 'What time is it?', 'Where is it?', 'How much is it?'],
        correct: 1,
        explanation: '몇 시 means "what time", 예요 is the polite copula.',
        vocabulary: { word: '몇 시예요?', romanization: 'myeot siyeyo?', translation: 'What time is it?', example: '지금 몇 시예요?' }
      },
      {
        type: 'grammar',
        question: 'Complete: "저는 한국어___ 공부해요" (I study Korean)',
        options: ['을', '를', '에', '로'],
        correct: 0,
        explanation: '을 is the object particle used after consonant-ending nouns.',
        grammar: 'Object particles: 을 (after consonants), 를 (after vowels)'
      },
      {
        type: 'conversation',
        question: 'How would you ask "Where is the bathroom?"',
        options: ['화장실이 어디예요?', '이게 뭐예요?', '얼마예요?', '괜찮아요?'],
        correct: 0,
        explanation: '어디 means "where", 화장실 means "bathroom".',
        vocabulary: { word: '화장실', romanization: 'hwajangsil', translation: 'bathroom', example: '화장실이 저기 있어요.' }
      },
      {
        type: 'vocabulary',
        question: 'What does "가족" (gajok) mean?',
        options: ['friend', 'family', 'food', 'house'],
        correct: 1,
        explanation: '가족 means family.',
        vocabulary: { word: '가족', romanization: 'gajok', translation: 'family', example: '우리 가족은 네 명입니다.' }
      }
    ],
    B1: [
      {
        type: 'grammar',
        question: 'Choose the correct past tense: "어제 영화를 ___" (Yesterday I watched a movie)',
        options: ['봐요', '봤어요', '볼 거예요', '보고 있어요'],
        correct: 1,
        explanation: '봤어요 is the past tense of 보다 (to see/watch).',
        grammar: 'Past tense: verb stem + 았/었/했 + 어요'
      },
      {
        type: 'vocabulary',
        question: 'What does "비록... 지만" mean?',
        options: ['because', 'although', 'therefore', 'when'],
        correct: 1,
        explanation: '비록...지만 is a conjunction meaning "although" or "even though".',
        vocabulary: { word: '지만', romanization: 'jiman', translation: 'although/but', example: '바쁘지만 갈게요.' }
      },
      {
        type: 'grammar',
        question: 'Complete: "내일 비가 ___ 것 같아요" (It seems like it will rain tomorrow)',
        options: ['오는', '온', '올', '와'],
        correct: 2,
        explanation: '올 것 같아요 expresses future conjecture.',
        grammar: 'Future conjecture: verb stem + ㄹ/을 것 같아요'
      },
      {
        type: 'honorific',
        question: 'Which is the honorific form of "to eat"?',
        options: ['먹다', '드시다', '주다', '받다'],
        correct: 1,
        explanation: '드시다 is the honorific form of 먹다 (to eat).',
        grammar: 'Use honorifics when referring to actions of elders or superiors.'
      },
      {
        type: 'idiom',
        question: 'What does "바람을 쐬다" literally mean?',
        options: ['to get some wind', 'to be windy', 'to blow wind', 'to catch a cold'],
        correct: 0,
        explanation: 'Literally "to get some wind", it means to get some fresh air.',
        vocabulary: { word: '바람을 쐬다', romanization: 'barameul ssoeda', translation: 'to get fresh air', example: '공원에서 바람을 쐬었어요.' }
      }
    ],
    B2: [
      {
        type: 'grammar',
        question: 'Choose the correct conditional: "돈이 ___, 여행할 텐데" (If I had money, I would travel)',
        options: ['있으면', '있다면', '있었다면', '있을 텐데'],
        correct: 2,
        explanation: '있었다면 expresses a contrary-to-fact past conditional.',
        grammar: 'Past conditional: past tense + 다면 or 았/었더라면'
      },
      {
        type: 'vocabulary',
        question: 'What does "개발하다" mean?',
        options: ['to destroy', 'to develop', 'to decide', 'to describe'],
        correct: 1,
        explanation: '개발하다 means to develop.',
        vocabulary: { word: '개발하다', romanization: 'gaebalhada', translation: 'to develop', example: '새로운 앱을 개발했어요.' }
      },
      {
        type: 'grammar',
        question: 'Complete the passive: "보고서가 팀에 의해 ___" (The report was written by the team)',
        options: ['쓰였어요', '써요', '쓸 거예요', '쓰고 있어요'],
        correct: 0,
        explanation: '쓰였어요 is the passive past tense of 쓰다 (to write).',
        grammar: 'Passive: verb stem + 이/히/리/기 + 다'
      },
      {
        type: 'advanced',
        question: 'Which sentence correctly uses indirect speech?',
        options: [
          '그가 간다고 했어요',
          '그가 가요 했어요',
          '그가 갈 거예요 했어요',
          '그가 가세요 했어요'
        ],
        correct: 0,
        explanation: 'Indirect speech uses 다고/라고 after statements.',
        grammar: 'Indirect speech: verb + 다고/라고/냐고/자고 + 하다'
      },
      {
        type: 'culture',
        question: 'What is "정" (jeong)?',
        options: [
          'A type of Korean food',
          'A deep emotional bond and affection',
          'A traditional dance',
          'A formal bow'
        ],
        correct: 1,
        explanation: '정 is a uniquely Korean concept of deep emotional connection and loyalty.',
        vocabulary: { word: '정', romanization: 'jeong', translation: 'affection/bond', example: '우리는 정이 많아요.' }
      }
    ],
    C1: [
      {
        type: 'advanced',
        question: 'Choose the most appropriate formal register: Requesting a business meeting',
        options: [
          '만나고 싶어요',
          '회의를 하고 싶습니다',
          '회의 일정을 잡고자 합니다',
          '만날래요?'
        ],
        correct: 2,
        explanation: '잡고자 합니다 is the most formal and appropriate for business.',
        vocabulary: { word: '잡고자 하다', romanization: 'japgoja hada', translation: 'to intend to arrange', example: '미팅 일정을 잡고자 합니다.' }
      },
      {
        type: 'literature',
        question: 'Who wrote "The Vegetarian" (채식주의자)?',
        options: ['한강 (Han Kang)', '신경숙 (Shin Kyung-sook)', '이문열 (Yi Mun-yol)', '박완서 (Park Wan-suh)'],
        correct: 0,
        explanation: 'Han Kang won the Man Booker International Prize for this novel.',
        vocabulary: { word: '채식주의자', romanization: 'chaesikjuuija', translation: 'The Vegetarian', example: '그녀는 채식주의자입니다.' }
      },
      {
        type: 'grammar',
        question: 'Identify the grammar: "공부를 열심히 하기는커녕 놀기만 해요"',
        options: ['Emphasis', 'Contrast/Reversal', 'Causation', 'Condition'],
        correct: 1,
        explanation: '기는커녕 means "far from" or "let alone", expressing strong contrast.',
        grammar: 'V + 기는커녕 expresses that something is far from happening'
      },
      {
        type: 'idiom',
        question: 'What does "눈코 뜰 새 없다" mean?',
        options: [
          'to be very ugly',
          'to be extremely busy',
          'to be very sleepy',
          'to be confused'
        ],
        correct: 1,
        explanation: 'Literally "no time to open eyes and nose", means extremely busy.',
        vocabulary: { word: '눈코 뜰 새 없다', romanization: 'nunko tteul sae eopda', translation: 'to be swamped', example: '요즘 눈코 뜰 새 없이 바빠요.' }
      },
      {
        type: 'advanced',
        question: 'Choose the sentence with correct honorific usage:',
        options: [
          '할아버지께서 주무세요',
          '할아버지가 자요',
          '할아버지께서 주무십니다',
          'Both A and C are correct'
        ],
        correct: 3,
        explanation: 'Both use proper honorific subject particle (께서) and verb (주무시다).',
        grammar: 'Honorific subject: 께서, Honorific verbs have special forms'
      }
    ],
    C2: [
      {
        type: 'advanced',
        question: 'Analyze the literary device: "달빛이 물결처럼 흘러내렸다"',
        options: ['의성어 (onomatopoeia)', '직유 (simile)', '의인법 (personification)', '과장법 (hyperbole)'],
        correct: 1,
        explanation: 'Using "처럼" (like) creates a simile comparing moonlight to waves.',
        vocabulary: { word: '직유', romanization: 'jigyu', translation: 'simile', example: '이 시는 직유법을 사용합니다.' }
      },
      {
        type: 'hanja',
        question: 'What is the Hanja (Chinese character) origin of "학교" (school)?',
        options: ['學校', '學交', '鶴橋', '鶴校'],
        correct: 0,
        explanation: '學 (learn) + 校 (school) = 학교',
        vocabulary: { word: '學校', romanization: 'hakgyo', translation: 'school', example: '대학교에 다녀요.' }
      },
      {
        type: 'advanced',
        question: 'Identify the error in formal writing: "이 문제를 해결하기 위해서는, 다양한 접근법이 필요하다고 봅니다"',
        options: [
          'Should use 위하여 instead of 위해서',
          'Should end with 필요하다고 생각됩니다',
          'The comma is unnecessary',
          'No significant error'
        ],
        correct: 1,
        explanation: 'In formal academic writing, 생각되다/여겨지다 is preferred over 보다.',
        grammar: 'Formal academic Korean uses passive and impersonal constructions'
      },
      {
        type: 'culture',
        question: 'What is the significance of "한" (han) in Korean culture?',
        options: [
          'It means the number one',
          'It refers to Korean traditional clothing',
          'It represents a collective feeling of sorrow and resilience',
          'It is a type of traditional music'
        ],
        correct: 2,
        explanation: '한 is a uniquely Korean concept representing deep sorrow mixed with hope.',
        vocabulary: { word: '한', romanization: 'han', translation: 'collective sorrow/resilience', example: '한국인의 한 정서' }
      },
      {
        type: 'professional',
        question: 'Which phrase is most appropriate for a formal business proposal?',
        options: [
          '같이 일하고 싶어요',
          '협력하면 좋겠습니다',
          '전략적 제휴를 제안드리고자 합니다',
          '비즈니스 하실래요?'
        ],
        correct: 2,
        explanation: 'The third option uses the most professional and formal language.',
        vocabulary: { word: '제안드리다', romanization: 'jeandeurida', translation: 'to propose (humble)', example: '새로운 방안을 제안드립니다.' }
      }
    ]
  }
};

export const GAME_MODES = [
  {
    id: 'story',
    name: 'Story Mode',
    icon: '📖',
    description: 'Learn through interactive stories',
    color: 'var(--spanish-primary)'
  },
  {
    id: 'battle',
    name: 'Battle Arena',
    icon: '⚔️',
    description: 'Timed challenges and competitions',
    color: 'var(--korean-primary)'
  },
  {
    id: 'conversation',
    name: 'Conversation',
    icon: '💬',
    description: 'Practice real-world scenarios',
    color: 'var(--spanish-accent)'
  },
  {
    id: 'vocabulary',
    name: 'Vocabulary',
    icon: '📚',
    description: 'Build your word bank',
    color: 'var(--korean-accent)'
  }
];

export const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
