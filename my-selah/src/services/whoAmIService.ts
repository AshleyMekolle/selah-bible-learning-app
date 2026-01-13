export type CharacterCategory = "Kings" | "Prophets" | "Women" | "Apostles" | "Judges";
export type CharacterSeason = "Faith" | "Leadership" | "Redemption" | "Courage";

export interface Character {
  id: string;
  name: string;
  clues: string[];
  description: string;
  category: CharacterCategory;
  season: CharacterSeason;
}

export const characters: Character[] = [
  {
    id: "1",
    name: "Moses",
    clues: [
      "I was hidden in a basket as a baby",
      "I led my people out of slavery",
      "I received the Ten Commandments on a mountain",
      "I parted the Red Sea"
    ],
    description: "Moses led the Israelites out of Egypt and received God's law on Mount Sinai.",
    category: "Prophets",
    season: "Leadership"
  },
  {
    id: "2",
    name: "David",
    clues: [
      "I was a shepherd boy",
      "I defeated a giant with a sling",
      "I became king of Israel",
      "I wrote many psalms"
    ],
    description: "David was Israel's greatest king and a man after God's own heart.",
    category: "Kings",
    season: "Courage"
  },
  {
    id: "3",
    name: "Noah",
    clues: [
      "I built a large vessel",
      "I saved animals from a great flood",
      "I had three sons",
      "I saw a rainbow as God's promise"
    ],
    description: "Noah built an ark to save his family and animals from the great flood.",
    category: "Prophets",
    season: "Faith"
  },
  {
    id: "4",
    name: "Ruth",
    clues: [
      "I was a foreigner who chose to follow God",
      "I told my mother-in-law 'your God will be my God'",
      "I worked in the fields gathering grain",
      "I became an ancestor of King David"
    ],
    description: "Ruth showed loyalty and faith, becoming part of Jesus's lineage.",
    category: "Women",
    season: "Faith"
  },
  {
    id: "5",
    name: "Esther",
    clues: [
      "I was an orphan raised by my cousin",
      "I became queen",
      "I risked my life to save my people",
      "I said 'if I perish, I perish'"
    ],
    description: "Queen Esther courageously saved the Jewish people from destruction.",
    category: "Women",
    season: "Courage"
  },
  {
    id: "6",
    name: "Peter",
    clues: [
      "I was a fisherman",
      "Jesus gave me a new name",
      "I walked on water briefly",
      "I denied Jesus three times before the rooster crowed"
    ],
    description: "Peter was one of Jesus's closest disciples and a leader of the early church.",
    category: "Apostles",
    season: "Redemption"
  },
  {
    id: "7",
    name: "Paul",
    clues: [
      "I persecuted Christians before my conversion",
      "I was blinded by a bright light on the road",
      "I wrote many letters to churches",
      "I was originally called Saul"
    ],
    description: "Paul became Christianity's greatest missionary after encountering Jesus.",
    category: "Apostles",
    season: "Redemption"
  },
  {
    id: "8",
    name: "Mary",
    clues: [
      "An angel appeared to me with surprising news",
      "I said 'let it be to me according to your word'",
      "I gave birth in a stable",
      "I am the mother of Jesus"
    ],
    description: "Mary was chosen to be the mother of Jesus, the Son of God.",
    category: "Women",
    season: "Faith"
  },
  {
    id: "9",
    name: "Abraham",
    clues: [
      "God asked me to leave my homeland",
      "I was promised descendants as numerous as stars",
      "I was willing to sacrifice my son",
      "I am called the father of faith"
    ],
    description: "Abraham trusted God completely and became the father of many nations.",
    category: "Prophets",
    season: "Faith"
  },
  {
    id: "10",
    name: "Joseph",
    clues: [
      "My brothers sold me into slavery",
      "I interpreted dreams",
      "I became second-in-command in Egypt",
      "I wore a coat of many colors"
    ],
    description: "Joseph forgave his brothers and saved Egypt and his family from famine.",
    category: "Prophets",
    season: "Redemption"
  },
  {
    id: "11",
    name: "Joshua",
    clues: [
      "I was Moses' assistant",
      "I led Israel into the Promised Land",
      "I commanded the sun to stand still",
      "Walls fell when we marched around them"
    ],
    description: "Joshua succeeded Moses and led Israel to conquer Canaan.",
    category: "Prophets",
    season: "Leadership"
  },
  {
    id: "12",
    name: "Samson",
    clues: [
      "My strength was in my hair",
      "I killed a lion with my bare hands",
      "I destroyed a temple with my final act",
      "I was betrayed by Delilah"
    ],
    description: "Samson was a judge with supernatural strength given by God.",
    category: "Judges",
    season: "Courage"
  },
  {
    id: "13",
    name: "Solomon",
    clues: [
      "I built the first temple in Jerusalem",
      "I was known for my wisdom",
      "I wrote many proverbs and songs",
      "I settled a dispute between two mothers"
    ],
    description: "Solomon was the wisest king of Israel who built God's temple.",
    category: "Kings",
    season: "Leadership"
  },
  {
    id: "14",
    name: "Elijah",
    clues: [
      "I challenged prophets of Baal on Mount Carmel",
      "I was fed by ravens in the wilderness",
      "I was taken to heaven in a chariot of fire",
      "I raised a widow's son from the dead"
    ],
    description: "Elijah was a mighty prophet who performed many miracles.",
    category: "Prophets",
    season: "Faith"
  },
  {
    id: "15",
    name: "John the Baptist",
    clues: [
      "I wore camel's hair and ate locusts",
      "I baptized Jesus in the Jordan River",
      "I prepared the way for the Messiah",
      "I was beheaded by Herod"
    ],
    description: "John prepared people for Jesus's coming and baptized Him.",
    category: "Prophets",
    season: "Courage"
  },
  {
    id: "16",
    name: "Job",
    clues: [
      "I lost everything but kept my faith",
      "I was tested by Satan with God's permission",
      "I had boils from head to toe",
      "God restored everything to me twofold"
    ],
    description: "Job remained faithful to God through extreme suffering.",
    category: "Prophets",
    season: "Faith"
  },
  {
    id: "17",
    name: "Jonah",
    clues: [
      "I tried to run from God's call",
      "I was swallowed by a great fish",
      "I preached to Nineveh and they repented",
      "I was angry when God showed mercy"
    ],
    description: "Jonah reluctantly preached to Nineveh and saw God's mercy.",
    category: "Prophets",
    season: "Redemption"
  },
  {
    id: "18",
    name: "Daniel",
    clues: [
      "I interpreted the king's dreams",
      "I was thrown into a lion's den",
      "I prayed three times a day facing Jerusalem",
      "I survived the night with lions"
    ],
    description: "Daniel remained faithful to God in Babylon and was protected.",
    category: "Prophets",
    season: "Courage"
  },
  {
    id: "19",
    name: "Sarah",
    clues: [
      "I laughed when told I'd have a son in old age",
      "My name was changed by God",
      "I became a mother at 90 years old",
      "I was the wife of Abraham"
    ],
    description: "Sarah became the mother of Isaac in her old age, fulfilling God's promise.",
    category: "Women",
    season: "Faith"
  },
  {
    id: "20",
    name: "Deborah",
    clues: [
      "I was both a prophetess and a judge",
      "I led Israel to victory against Canaanites",
      "I settled disputes under a palm tree",
      "I sang a victory song with Barak"
    ],
    description: "Deborah was Israel's only female judge who led them to victory.",
    category: "Judges",
    season: "Leadership"
  }
];

export const getRandomWhoAmI = (category?: CharacterCategory, season?: CharacterSeason): Character => {
  let filtered = characters;
  
  if (category) {
    filtered = filtered.filter(char => char.category === category);
  }
  
  if (season) {
    filtered = filtered.filter(char => char.season === season);
  }
  
  if (filtered.length === 0) {
    filtered = characters;
  }
  
  const randomIndex = Math.floor(Math.random() * filtered.length);
  return filtered[randomIndex];
};

export const getTodayWhoAmI = (): Character => {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  
  const categories: CharacterCategory[] = ["Kings", "Prophets", "Women", "Apostles", "Judges"];
  const seasons: CharacterSeason[] = ["Faith", "Leadership", "Redemption", "Courage"];
  
  const category = categories[dayOfYear % categories.length];
  const season = seasons[dayOfYear % seasons.length];
  
  return getRandomWhoAmI(category, season);
};