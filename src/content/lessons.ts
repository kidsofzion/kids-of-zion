import type { Lesson } from './types'

/**
 * SAMPLE LESSONS — all three are DRAFTS awaiting theological review.
 *
 * Structure reminder:
 *  - `scriptureSays` holds exact quotations only (what the text directly says).
 *  - `interpretation` holds our teaching about the text, clearly labelled.
 *  - Change `status` to 'published' once a lesson has been reviewed.
 */
export const lessons: Lesson[] = [
  // ───────────────────────────────────────────────────────────── 1
  {
    slug: 'im-set-apart-salt-and-light',
    title: "I'm Set Apart! I'm Salt & Light!",
    subtitle: 'Matthew 5:13–16',
    topic: 'walking-in-his-ways',
    ageGroups: ['little-sprouts', 'growing-roots', 'strong-branches'],
    durationMinutes: 30,
    quickVersionMinutes: 10,
    status: 'draft-awaiting-review',
    summary:
      'Children discover what salt and light do, and how Yahuah calls His people to be different so that others see their good works and glorify the Father.',
    keyScripture: {
      reference: 'Matthew 5:14, 16',
      text: 'You are the light of the world. A city located on a hill can’t be hidden. … Even so, let your light shine before men, that they may see your good works and glorify your Father who is in heaven.',
    },
    bigIdea: 'Yahuah set me apart to shine for Him with my good works.',
    explanation: [
      'Have you ever tasted food with no salt? It can taste plain! Just a little salt makes food taste good, and long ago people also used salt to keep food from spoiling.',
      'Now think about a flashlight in a dark room. Even a small light helps everyone see where to go.',
      'Yahusha told His followers, “You are the salt of the earth” and “You are the light of the world.” He was teaching that the way His people live should make a good difference — like salt in food and light in the dark.',
      '“Set apart” means chosen and kept special for Yahuah. When we obey His ways — telling the truth, being kind, sharing, resting on His Sabbath — we are different in a good way. People can see our good works, and that points them to our Father in heaven.',
      'We don’t hide our light under a basket. We let it shine!',
    ],
    objectives: [
      'Retell what Yahusha said about salt and light in their own words.',
      'Explain that “set apart” means chosen and kept special for Yahuah.',
      'Name at least two good works they can do this week.',
      'Say the memory verse (or the Little Sprouts phrase) from memory.',
    ],
    scriptureSays: [
      {
        reference: 'Matthew 5:13',
        text: 'You are the salt of the earth, but if the salt has lost its flavor, with what will it be salted? It is then good for nothing, but to be cast out and trodden under the feet of men.',
      },
      {
        reference: 'Matthew 5:14–15',
        text: 'You are the light of the world. A city located on a hill can’t be hidden. Neither do you light a lamp and put it under a measuring basket, but on a stand; and it shines to all who are in the house.',
      },
      {
        reference: 'Matthew 5:16',
        text: 'Even so, let your light shine before men, that they may see your good works and glorify your Father who is in heaven.',
      },
      {
        reference: 'Leviticus 20:26',
        text: 'You shall be holy to me, for I, Yahuah, am holy, and have set you apart from the peoples, that you should be mine.',
      },
    ],
    interpretation: [
      'Teaching note: Salt in the ancient world was used both to flavor and to preserve food. We teach children that Yahuah’s people are meant to have a good, preserving influence wherever they are. The text itself names the flavor and warns about salt losing its flavor; the “preserving” idea is a common teaching illustration, not a direct statement of the verse.',
      'Teaching note: Matthew 5:16 directly connects shining light with “good works” that lead others to glorify the Father. We connect “good works” with obeying His instructions, which Yahusha addresses in the verses that follow (Matthew 5:17–19).',
      'Teaching note: The phrase “set apart” comes from Leviticus 20:26 and similar passages. Linking it to Matthew 5 is our teaching connection between the two passages.',
    ],
    lessonFlow: [
      { title: 'Welcome & song', minutes: 4, description: 'Sing together (Set Apart – Salt + Light when released, or a favorite praise song). Do big “shine” motions with open hands.' },
      { title: 'Taste & see', minutes: 5, description: 'Do the Salt Taste Test: compare a plain cracker or popcorn with a lightly salted one. Ask, “What did the salt do?”' },
      { title: 'Lights out', minutes: 4, description: 'Darken the room and turn on one small light. Ask, “What happened when the light came on?” Then cover it with a bowl — “Is that helpful?”' },
      { title: 'Read the Word', minutes: 5, description: 'Read Matthew 5:13–16 aloud. Younger children hold up a salt shaker at “salt” and a flashlight at “light.”' },
      { title: 'Talk about it', minutes: 5, description: 'Read the child-friendly explanation, then use the discussion questions for your child’s age.' },
      { title: 'Make & shine', minutes: 5, description: 'Color the Salt & Light page or make the Shine Your Light lamp craft.' },
      { title: 'Pray & practise', minutes: 2, description: 'Pray together and choose one “good work” to do before bedtime.' },
    ],
    quickVersion: [
      'Read Matthew 5:14–16 aloud together (2 min).',
      'Turn on a flashlight in a dark room and ask what light does (2 min).',
      'Say the memory verse three times with motions (2 min).',
      'Each person names one good work they will do today, then pray (4 min).',
    ],
    activities: [
      {
        title: 'Salt Taste Test',
        minutes: 5,
        materials: ['Two small bowls', 'Plain popcorn, crackers or cucumber slices', 'A pinch of salt'],
        steps: [
          'Put the same snack in two bowls. Add a tiny pinch of salt to one.',
          'Let your child taste the plain one first, then the salted one.',
          'Ask: “Which tastes better? What did a little salt do?”',
          'Say: “Yahuah’s people are like salt — a little goodness makes a big difference.”',
        ],
        activitySlug: 'salt-taste-test',
      },
      {
        title: 'Shine Your Light Lamp Craft',
        minutes: 15,
        materials: ['Printed lamp template', 'Crayons or markers', 'Scissors (adult help)', 'Glue stick', 'Yellow tissue paper (optional)'],
        steps: [
          'Print the lamp template and color the lamp and flame.',
          'Cut them out (adults help little ones).',
          'Glue the flame on top of the lamp. Add tissue paper “glow” if you like.',
          'Write or draw one good work on the lamp. Display it on a “stand” — a shelf or the fridge — not under a basket!',
        ],
        activitySlug: 'shine-your-light-lamp-craft',
      },
    ],
    discussionQuestions: {
      'little-sprouts': [
        'Where is the light? Can you point to it?',
        'Can you show me your shining hands?',
        'Who made you special? (Yahuah!)',
      ],
      'growing-roots': [
        'What does salt do to food? What does light do in a dark room?',
        'Why shouldn’t we hide a lamp under a basket?',
        'What is one kind thing you can do today that shows you belong to Yahuah?',
      ],
      'strong-branches': [
        'What do you think it means for salt to “lose its flavor”? How could a person stop shining?',
        'Matthew 5:16 says people should see our good works and glorify the Father. Why the Father, and not us?',
        'Being set apart sometimes means being different from friends. When is that hard? How can we be different in a kind way?',
        'Read Matthew 5:17–19. How do these verses help us understand what “good works” are?',
      ],
    },
    memoryVerse: {
      reference: 'Matthew 5:16',
      text: 'Let your light shine before men, that they may see your good works and glorify your Father who is in heaven.',
      littleSproutsPhrase: 'I let my light shine! (based on Matthew 5:16)',
    },
    realLifeApplication: [
      'Choose a “shine of the day” at breakfast: one good work each person will do.',
      'When your child obeys quickly or is kind without being asked, say, “I saw your light shine!”',
      'Talk about ways your family is set apart — keeping the Sabbath, eating clean, speaking kindly — as joyful differences, not burdens.',
      'Keep the lamp craft on display all week as a reminder.',
    ],
    ageAdaptations: {
      'little-sprouts': 'Keep it to 5–10 minutes. Focus on the flashlight game, shining hand motions and the phrase “I let my light shine!” Let them hold a (safe) flashlight while you read.',
      'growing-roots': 'Use the full flow with the taste test and lamp craft. Practise the memory verse with motions: hands like a lamp, then spread arms wide for “shine.”',
      'strong-branches': 'Have your child read Matthew 5:13–19 aloud. Spend more time on the discussion questions and invite them to plan a secret good work for a neighbor or sibling.',
    },
    prayer:
      'Abba Yahuah, thank You for choosing us and setting us apart to be Yours. Help us to be salt and light. Help us to obey Your ways and do good works, so that people will see and give You glory. In the name of Yahusha, amen.',
    parentNotes: [
      'Children understand “set apart” best through concrete differences they can see in your home. Name them warmly.',
      'Avoid framing being set apart as being “better than” others. Matthew 5:16 points the glory to the Father.',
      'Salt safety: use only a tiny pinch for little ones.',
    ],
    relatedSongSlugs: ['set-apart-salt-and-light'],
    relatedActivitySlugs: ['salt-and-light-coloring-page', 'shine-your-light-lamp-craft', 'salt-taste-test', 'memory-verse-cards'],
    tags: ['salt', 'light', 'set apart', 'holiness', 'good works', 'identity', 'Matthew 5'],
    theme: 'sun',
  },

  // ───────────────────────────────────────────────────────────── 2
  {
    slug: 'who-is-yahuah',
    title: 'Who Is Yahuah?',
    subtitle: 'Introducing children to the Creator',
    topic: 'knowing-yahuah',
    ageGroups: ['little-sprouts', 'growing-roots', 'strong-branches'],
    durationMinutes: 30,
    quickVersionMinutes: 10,
    status: 'draft-awaiting-review',
    summary:
      'Children learn that Yahuah is the Creator of everything, that He has a Name and told it to His people, and that He made them and loves them.',
    keyScripture: {
      reference: 'Psalm 100:3',
      text: 'Know that Yahuah, he is Elohim. It is he who has made us, and we are his. We are his people, and the sheep of his pasture.',
    },
    bigIdea: 'Yahuah is the Creator. He made everything, He made me, and I belong to Him.',
    explanation: [
      'Look around! Who made the sun, the moon and the stars? Who made the trees, the fish, the birds and the puppies? Who made you?',
      'The very first words of the Scriptures say, “In the beginning, Elohim created the heavens and the earth.” Before anything else existed, He was there — and He made it all.',
      'The Creator has a Name. When He spoke to Moses at the burning bush, He told His Name to His people and said, “This is my name forever.” We call Him Yahuah.',
      'Yahuah made you on purpose. The Psalms say we are “fearfully and wonderfully made.” Your eyes, your smile, your hair, your laugh — He made them all.',
      'And best of all, we belong to Him, like sheep belong to a loving shepherd. We can talk to Him, sing to Him, and learn His ways.',
    ],
    objectives: [
      'Say that Yahuah created the heavens and the earth.',
      'Know that the Creator has a Name, and that He told it to His people.',
      'Express that Yahuah made them and that they belong to Him.',
      'Respond with thankfulness in prayer or song.',
    ],
    scriptureSays: [
      { reference: 'Genesis 1:1', text: 'In the beginning, Elohim created the heavens and the earth.' },
      {
        reference: 'Exodus 3:15',
        text: 'Elohim said moreover to Moses, “You shall tell the children of Israel this, ‘Yahuah, the Elohim of your fathers, the Elohim of Abraham, the Elohim of Isaac, and the Elohim of Jacob, has sent me to you.’ This is my name forever, and this is my memorial to all generations.”',
      },
      { reference: 'Deuteronomy 6:4', text: 'Hear, Israel: Yahuah is our Elohim. Yahuah is one.' },
      { reference: 'Psalm 139:14', text: 'I will give thanks to you, for I am fearfully and wonderfully made. Your works are wonderful. My soul knows that very well.' },
      { reference: 'Psalm 147:4', text: 'He counts the number of the stars. He calls them all by their names.' },
    ],
    interpretation: [
      'Teaching note: The Hebrew Name written YHWH appears thousands of times in the Hebrew Scriptures. Our ministry pronounces it “Yahuah.” Families who follow the Way may hear other pronunciations; with young children we focus on the beautiful truth that He has a Name and shared it with His people (Exodus 3:15).',
      'Teaching note: Psalm 147:4 says He names the stars. We use this to help children understand that Yahuah knows and cares for His creation personally — an application of the verse rather than its direct statement about children.',
      'Teaching note: “We belong to Him like sheep belong to a shepherd” comes from Psalm 100:3 (“the sheep of his pasture”).',
    ],
    lessonFlow: [
      { title: 'Wonder walk', minutes: 5, description: 'Go outside or look out a window. Point at things and ask, “Who made that?” Answer together: “Yahuah made it!”' },
      { title: 'Read the Word', minutes: 4, description: 'Read Genesis 1:1 and Exodus 3:15 aloud. Explain that the Creator has a Name.' },
      { title: 'Talk about it', minutes: 5, description: 'Read the child-friendly explanation and use the discussion questions for your child’s age.' },
      { title: 'Creation memory match', minutes: 8, description: 'Play the on-screen Creation Memory Match or print the matching cards.' },
      { title: 'Color & create', minutes: 6, description: 'Color the “Yahuah Made It All” page. Ask your child to tell you about each thing they color.' },
      { title: 'Thank-you prayer', minutes: 2, description: 'Each person thanks Yahuah for one thing He made.' },
    ],
    quickVersion: [
      'Read Psalm 100:3 together (1 min).',
      'Play “Who made it?” — point at five things in the room or outside (3 min).',
      'Practise the memory verse (2 min).',
      'Pray a thank-you prayer, each person naming something Yahuah made (4 min).',
    ],
    activities: [
      {
        title: 'Creation Memory Match',
        minutes: 8,
        materials: ['A phone, tablet or computer — or printed cards'],
        steps: [
          'Open the Creation Memory Match game in Kids Play.',
          'Take turns flipping two cards to find matching pairs.',
          'Each time you find a pair, say, “Yahuah made the ____!”',
        ],
        activitySlug: 'creation-memory-match',
      },
      {
        title: '“Yahuah Made It All” Coloring Page',
        minutes: 10,
        materials: ['Printed coloring page', 'Crayons, markers or watercolors'],
        steps: [
          'Print the coloring page.',
          'As your child colors, ask them to name each part of creation.',
          'Add a drawing of your child in the empty space — Yahuah made them too!',
        ],
        activitySlug: 'yahuah-made-it-all-coloring-page',
      },
    ],
    discussionQuestions: {
      'little-sprouts': [
        'Who made the sun? (Yahuah!)',
        'Who made you? Point to your nose, your toes… Yahuah made them!',
        'Can you say His Name? Yahuah!',
      ],
      'growing-roots': [
        'What is your favorite thing Yahuah made? Why?',
        'The Creator told His people His Name. Why do you think a name is important?',
        'How can we say “thank you” to Yahuah for making us?',
      ],
      'strong-branches': [
        'Genesis 1:1 says Elohim was there “in the beginning.” What does that tell us about Him?',
        'In Exodus 3:15 He says, “This is my name forever.” Why might He want His people to know and remember His Name?',
        'Psalm 139:14 says we are “fearfully and wonderfully made.” How should that change the way we treat ourselves and others?',
        'Deuteronomy 6:4 says, “Yahuah is one.” What questions do you have about that verse?',
      ],
    },
    memoryVerse: {
      reference: 'Psalm 100:3',
      text: 'Know that Yahuah, he is Elohim. It is he who has made us, and we are his.',
      littleSproutsPhrase: 'Yahuah made me! (based on Psalm 100:3)',
    },
    realLifeApplication: [
      'Play “Who made it?” on car rides and walks this week.',
      'Before meals, thank Yahuah by Name for one thing He made.',
      'When your child is discouraged about themselves, remind them: “Yahuah made you wonderfully.”',
      'Look at the night sky together and read Psalm 147:4.',
    ],
    ageAdaptations: {
      'little-sprouts': 'Keep it to the wonder walk, the phrase “Yahuah made me!” and one short song. Toddlers love pointing and naming — follow their lead.',
      'growing-roots': 'Use the full flow. Act out creation: arms wide for the sky, wiggle like fish, flap like birds, then point to yourself — “Yahuah made me!”',
      'strong-branches': 'Read Genesis 1 in full together and let your child list what was made on each day. Discuss the strong-branches questions and look up Exodus 3:13–15 together.',
    },
    prayer:
      'Yahuah, You are the Creator of the heavens and the earth. Thank You for making the sun, the stars, the animals — and for making me. I am Yours. Help me know You more and love You with all my heart. In the name of Yahusha, amen.',
    parentNotes: [
      'Young children learn names by repetition. Use His Name warmly and often in everyday moments.',
      'Big questions (“Who made Yahuah?”) are a gift. It is fine to say, “He has always been. That is part of what makes Him so amazing.”',
    ],
    relatedSongSlugs: ['who-is-yahuah'],
    relatedActivitySlugs: ['yahuah-made-it-all-coloring-page', 'creation-memory-match', 'memory-verse-cards', 'creation-week-chart'],
    tags: ['Creator', 'creation', 'Name', 'Genesis 1', 'Psalm 100', 'identity', 'worship'],
    theme: 'lilac',
  },

  // ───────────────────────────────────────────────────────────── 3
  {
    slug: 'what-is-the-sabbath',
    title: 'What Is the Sabbath?',
    subtitle: 'Introducing biblical rest and worship',
    topic: 'appointed-times',
    ageGroups: ['little-sprouts', 'growing-roots', 'strong-branches'],
    durationMinutes: 35,
    quickVersionMinutes: 10,
    status: 'draft-awaiting-review',
    summary:
      'Children learn that Yahuah worked six days, rested on the seventh, and blessed it — and that the Sabbath is a set-apart day of rest, worship and delight for His family.',
    keyScripture: {
      reference: 'Exodus 20:8',
      text: 'Remember the Sabbath day, to keep it holy.',
    },
    bigIdea: 'The Sabbath is Yahuah’s special seventh day — a day to rest, worship and delight in Him.',
    explanation: [
      'When Yahuah made the world, He worked for six days. He made light, sky, land, plants, the sun and moon, fish, birds, animals — and people!',
      'Then on the seventh day, He rested. The Scriptures say He blessed the seventh day and made it holy. Holy means set apart — special for Him.',
      'Later, Yahuah gave His people the Ten Commandments. One of them says, “Remember the Sabbath day, to keep it holy.” He told His people to work six days and rest on the seventh, just like He did.',
      'On the Sabbath we stop our regular work and chores. We rest our bodies, spend time with family, read His Word, sing, pray and enjoy His creation. The prophet Isaiah even calls the Sabbath “a delight”!',
      'Yahusha kept the Sabbath too. Every week, the Sabbath reminds us that Yahuah is our Creator and that we belong to Him.',
    ],
    objectives: [
      'Tell that Yahuah worked six days and rested on the seventh.',
      'Explain that the Sabbath is a holy (set-apart) day.',
      'Name ways their family rests and worships on the Sabbath.',
      'Help prepare for the Sabbath with a simple task.',
    ],
    scriptureSays: [
      {
        reference: 'Genesis 2:2–3',
        text: 'On the seventh day Elohim finished his work which he had done; and he rested on the seventh day from all his work which he had done. Elohim blessed the seventh day, and made it holy, because he rested in it from all his work of creation which he had done.',
      },
      {
        reference: 'Exodus 20:8–10',
        text: 'Remember the Sabbath day, to keep it holy. You shall labor six days, and do all your work, but the seventh day is a Sabbath to Yahuah your Elohim. You shall not do any work in it, you, nor your son, nor your daughter, your male servant, nor your female servant, nor your livestock, nor your stranger who is within your gates;',
      },
      {
        reference: 'Leviticus 23:3',
        text: 'Six days shall work be done, but on the seventh day is a Sabbath of solemn rest, a holy convocation; you shall do no kind of work. It is a Sabbath to Yahuah in all your dwellings.',
      },
      { reference: 'Mark 2:27', text: 'He said to them, “The Sabbath was made for man, not man for the Sabbath.”' },
      {
        reference: 'Luke 4:16',
        text: 'He came to Nazareth, where he had been brought up. He entered, as was his custom, into the synagogue on the Sabbath day, and stood up to read.',
      },
    ],
    interpretation: [
      'Teaching note: Isaiah 58:13 includes the words “call the Sabbath a delight.” We use this phrase to help children see the Sabbath as a joyful gift.',
      'Teaching note: “Yahusha kept the Sabbath” is drawn from Luke 4:16, which says it was His custom to go to the synagogue on the Sabbath day.',
      'Teaching note: Families differ on how the Sabbath is kept (for example, how meals are prepared or which activities are restful). This lesson focuses on what Scripture directly commands — remembering the day, keeping it holy, and resting from regular work — and leaves specific family practices to parents.',
      'Teaching note: The Sabbath is the seventh day of the week. Many families begin the Sabbath at sunset on the sixth day, based on the biblical pattern of evening and morning (Genesis 1:5; Leviticus 23:32). Please adjust to your family’s understanding.',
    ],
    lessonFlow: [
      { title: 'Count the days', minutes: 5, description: 'Use the Creation Week Chart. Count days 1–6 on your fingers while naming what was made. On day 7, lie down and “rest” together!' },
      { title: 'Read the Word', minutes: 5, description: 'Read Genesis 2:2–3 and Exodus 20:8 aloud.' },
      { title: 'Talk about it', minutes: 7, description: 'Read the child-friendly explanation and use the discussion questions for your child’s age.' },
      { title: 'Sabbath preparation', minutes: 10, description: 'Complete the “My Sabbath Plan” worksheet together and choose a preparation job for your child.' },
      { title: 'Rest practice', minutes: 5, description: 'Light a lamp or candle (with an adult), sit together quietly, and share one thing you are thankful for this week.' },
      { title: 'Blessing & prayer', minutes: 3, description: 'Pray together and, if your family does, speak a blessing over each child.' },
    ],
    quickVersion: [
      'Read Exodus 20:8 together (1 min).',
      'Count the six days of work on your fingers, then “rest” together on day seven (3 min).',
      'Choose one job your child can do to help prepare for the Sabbath (3 min).',
      'Pray and thank Yahuah for the gift of rest (3 min).',
    ],
    activities: [
      {
        title: 'My Sabbath Plan Worksheet',
        minutes: 10,
        materials: ['Printed worksheet', 'Pencil and crayons'],
        steps: [
          'Print the worksheet.',
          'Check off the ways your child can help prepare (tidy, set the table, bathe).',
          'Draw a favorite Sabbath activity in the big box.',
          'Hang it up where everyone can see it on preparation day.',
        ],
        activitySlug: 'my-sabbath-plan-worksheet',
      },
      {
        title: 'Creation Week Chart',
        minutes: 10,
        materials: ['Printed chart', 'Crayons'],
        steps: [
          'Print the Creation Week Chart.',
          'Color each day as you talk about what Yahuah made.',
          'Color the seventh-day box last — it is the day He rested and blessed.',
        ],
        activitySlug: 'creation-week-chart',
      },
    ],
    discussionQuestions: {
      'little-sprouts': [
        'How many days did Yahuah work? Let’s count: 1, 2, 3, 4, 5, 6!',
        'What did Yahuah do on day seven? (He rested!) Can you show me resting?',
        'What do you love doing with our family on Sabbath?',
      ],
      'growing-roots': [
        'What did Yahuah do on the seventh day?',
        'What does “holy” mean? (Set apart, special for Yahuah.)',
        'What is your favorite thing about Sabbath? How can you help us get ready?',
      ],
      'strong-branches': [
        'Genesis 2:3 says He blessed the seventh day and made it holy. What is the difference between a holy day and an ordinary day?',
        'Exodus 20:10 includes children, servants, animals and strangers in the rest. What does that teach us about Yahuah?',
        'Mark 2:27 says “the Sabbath was made for man.” What do you think that means?',
        'What is one thing that makes the Sabbath hard for you to keep? How can our family help each other?',
      ],
    },
    memoryVerse: {
      reference: 'Exodus 20:8',
      text: 'Remember the Sabbath day, to keep it holy.',
      littleSproutsPhrase: 'Sabbath is a rest day! (based on Exodus 20:8)',
    },
    realLifeApplication: [
      'Give your child a real preparation job on the sixth day: setting the table, tidying toys or choosing a Sabbath book.',
      'Begin the Sabbath with a simple family routine — lighting a lamp, singing, praying, or sharing a special meal.',
      'Keep a “Sabbath basket” of restful books, Scripture cards and quiet toys that only come out on the Sabbath.',
      'Talk about the Sabbath with joy during the week: “Only three more days until Sabbath!”',
    ],
    ageAdaptations: {
      'little-sprouts': 'Focus on counting six days and then resting. Sing a gentle song and let them help with one simple task, like putting napkins on the table.',
      'growing-roots': 'Use the full flow. The Creation Week Chart and preparation jobs work beautifully at this age.',
      'strong-branches': 'Read Genesis 2:1–3, Exodus 20:8–11 and Leviticus 23:3 together. Invite your child to help plan part of your Sabbath — a Scripture reading, a nature walk, or a song.',
    },
    prayer:
      'Abba Yahuah, thank You for the gift of the Sabbath. Thank You for creating the world in six days and resting on the seventh. Help us remember Your Sabbath and keep it holy. Help us rest, worship You, and delight in You. In the name of Yahusha, amen.',
    parentNotes: [
      'Children learn to love the Sabbath by experiencing it as a delight. Keep it warm, restful and special rather than a list of don’ts.',
      'Your family’s specific Sabbath practices are yours to teach — this lesson leaves room for them.',
      'Candle safety: if you light candles or lamps, an adult should always do the lighting and supervise.',
    ],
    relatedSongSlugs: [],
    relatedActivitySlugs: ['my-sabbath-plan-worksheet', 'creation-week-chart', 'memory-verse-cards'],
    tags: ['Sabbath', 'rest', 'creation', 'Ten Commandments', 'appointed times', 'worship', 'Exodus 20'],
    theme: 'jordan',
  },
]

export const lessonBySlug = (slug: string) => lessons.find((l) => l.slug === slug)
