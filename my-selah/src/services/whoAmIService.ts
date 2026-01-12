const characters = [
  {
    name: "Moses",
    clues: [
      "I was hidden in a basket as a baby",
      "I led my people out of slavery",
      "I received the Ten Commandments on a mountain",
      "I parted the Red Sea"
    ],
    description: "Moses led the Israelites out of Egypt and received God's law on Mount Sinai."
  },
  {
    name: "David",
    clues: [
      "I was a shepherd boy",
      "I defeated a giant with a sling",
      "I became king of Israel",
      "I wrote many psalms"
    ],
    description: "David was Israel's greatest king and a man after God's own heart."
  },
  {
    name: "Noah",
    clues: [
      "I built a large vessel",
      "I saved animals from a great flood",
      "I had three sons",
      "I saw a rainbow as God's promise"
    ],
    description: "Noah built an ark to save his family and animals from the great flood."
  },
  {
    name: "Ruth",
    clues: [
      "I was a foreigner who chose to follow God",
      "I told my mother-in-law 'your God will be my God'",
      "I worked in the fields gathering grain",
      "I became an ancestor of King David"
    ],
    description: "Ruth showed loyalty and faith, becoming part of Jesus's lineage."
  },
  {
    name: "Esther",
    clues: [
      "I was an orphan raised by my cousin",
      "I became queen",
      "I risked my life to save my people",
      "I said 'if I perish, I perish'"
    ],
    description: "Queen Esther courageously saved the Jewish people from destruction."
  },
  {
    name: "Peter",
    clues: [
      "I was a fisherman",
      "Jesus gave me a new name",
      "I walked on water briefly",
      "I denied Jesus three times before the rooster crowed"
    ],
    description: "Peter was one of Jesus's closest disciples and a leader of the early church."
  },
  {
    name: "Paul",
    clues: [
      "I persecuted Christians before my conversion",
      "I was blinded by a bright light on the road",
      "I wrote many letters to churches",
      "I was originally called Saul"
    ],
    description: "Paul became Christianity's greatest missionary after encountering Jesus."
  },
  {
    name: "Mary",
    clues: [
      "An angel appeared to me with surprising news",
      "I said 'let it be to me according to your word'",
      "I gave birth in a stable",
      "I am the mother of Jesus"
    ],
    description: "Mary was chosen to be the mother of Jesus, the Son of God."
  },
  {
    name: "Abraham",
    clues: [
      "God asked me to leave my homeland",
      "I was promised descendants as numerous as stars",
      "I was willing to sacrifice my son",
      "I am called the father of faith"
    ],
    description: "Abraham trusted God completely and became the father of many nations."
  },
  {
    name: "Joseph",
    clues: [
      "My brothers sold me into slavery",
      "I interpreted dreams",
      "I became second-in-command in Egypt",
      "I wore a coat of many colors"
    ],
    description: "Joseph forgave his brothers and saved Egypt and his family from famine."
  }
];

export const getRandomWhoAmI = () => {
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
};

export const getTodayWhoAmI = () => {
  return getRandomWhoAmI();
};