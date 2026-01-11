export interface Scripture {
  verse: string;
  reference: string;
  category: "encouragement" | "faith" | "love" | "hope" | "peace" | "courage"| "protection" | "joy" | "spiritual growth";
}

export const scriptures: Scripture[] = [
  {
    verse: "For I know the plans I have for you, declares the LORD, plans for welfare and not for evil, to give you a future and a hope.",
    reference: "Jeremiah 29:11",
    category: "hope"
  },
  {
    verse: "I can do all things through him who strengthens me.",
    reference: "Philippians 4:13",
    category: "encouragement"
  },
  {
    verse: "Trust in the LORD with all your heart, and do not lean on your own understanding.",
    reference: "Proverbs 3:5",
    category: "faith"
  },
  {
    verse: "Be strong and courageous. Do not fear or be in dread of them, for it is the LORD your God who goes with you.",
    reference: "Deuteronomy 31:6",
    category: "courage"
  },
  {
    verse: "The LORD is my shepherd; I shall not want.",
    reference: "Psalm 23:1",
    category: "peace"
  },
  {
    verse: "But God shows his love for us in that while we were still sinners, Christ died for us.",
    reference: "Romans 5:8",
    category: "love"
  },
  {
    verse: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.",
    reference: "Philippians 4:6",
    category: "peace"
  },
  {
    verse: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.",
    reference: "John 3:16",
    category: "love"
  },
  {
    verse: "Cast all your anxiety on him because he cares for you.",
    reference: "1 Peter 5:7",
    category: "peace"
  },
  {
    verse: "And we know that for those who love God all things work together for good, for those who are called according to his purpose.",
    reference: "Romans 8:28",
    category: "hope"
  },
  {
    verse: "Jesus said to him, 'I am the way, and the truth, and the life. No one comes to the Father except through me.'",
    reference: "John 14:6",
    category: "faith"
  },
  {
    verse: "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law.",
    reference: "Galatians 5:22-23",
    category: "spiritual growth"
  },
  {
    verse: "The name of the LORD is a strong tower; the righteous man runs into it and is safe.",
    reference: "Proverbs 18:10",
    category: "protection"
  },
  {
    verse: "Let not your hearts be troubled. Believe in God; believe also in me.",
    reference: "John 14:1",
    category: "faith"
  },
  {
    verse: "Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you.",
    reference: "1 Thessalonians 5:16-18",
    category: "joy"
  }
];

export function getRandomScripture(): Scripture {
  const randomIndex = Math.floor(Math.random() * scriptures.length);
  return scriptures[randomIndex];
}

export function getScripturesByCategory(category: string): Scripture[] {
  return scriptures.filter(scripture => scripture.category === category);
}