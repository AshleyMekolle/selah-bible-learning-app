export interface HardcodedReading {
  day: number;
  book: string;
  chapter: number;
  verses: {
    number: number;
    text: string;
  }[];
  reference: string;
}

export const hardcodedReadings: HardcodedReading[] = [
  {
    day: 1,
    book: "Genesis",
    chapter: 1,
    reference: "Genesis 1:1-31",
    verses: [
      { number: 1, text: "In the beginning God created the heavens and the earth." },
      { number: 2, text: "Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters." },
      { number: 3, text: "And God said, 'Let there be light,' and there was light." },
      { number: 4, text: "God saw that the light was good, and he separated the light from the darkness." },
      { number: 5, text: "God called the light 'day,' and the darkness he called 'night.' And there was evening, and there was morning—the first day." },
      { number: 6, text: "And God said, 'Let there be a vault between the waters to separate water from water.'" },
      { number: 7, text: "So God made the vault and separated the water under the vault from the water above it. And it was so." },
      { number: 8, text: "God called the vault 'sky.' And there was evening, and there was morning—the second day." },
    ]
  },
  {
    day: 2,
    book: "Genesis",
    chapter: 2,
    reference: "Genesis 2:1-25",
    verses: [
      { number: 1, text: "Thus the heavens and the earth were completed in all their vast array." },
      { number: 2, text: "By the seventh day God had finished the work he had been doing; so on the seventh day he rested from all his work." },
      { number: 3, text: "Then God blessed the seventh day and made it holy, because on it he rested from all the work of creating that he had done." },
      { number: 4, text: "This is the account of the heavens and the earth when they were created, when the Lord God made the earth and the heavens." },
      { number: 5, text: "Now no shrub had yet appeared on the earth and no plant had yet sprung up, for the Lord God had not sent rain on the earth and there was no one to work the ground." },
      { number: 6, text: "but streams came up from the earth and watered the whole surface of the ground." },
      { number: 7, text: "Then the Lord God formed a man from the dust of the ground and breathed into his nostrils the breath of life, and the man became a living being." },
      { number: 8, text: "Now the Lord God had planted a garden in the east, in Eden; and there he put the man he had formed." },
    ]
  },
  {
    day: 3,
    book: "Psalm",
    chapter: 1,
    reference: "Psalm 1:1-6",
    verses: [
      { number: 1, text: "Blessed is the one who does not walk in step with the wicked or stand in the way that sinners take or sit in the company of mockers." },
      { number: 2, text: "but whose delight is in the law of the Lord, and who meditates on his law day and night." },
      { number: 3, text: "That person is like a tree planted by streams of water, which yields its fruit in season and whose leaf does not wither—whatever they do prospers." },
      { number: 4, text: "Not so the wicked! They are like chaff that the wind blows away." },
      { number: 5, text: "Therefore the wicked will not stand in the judgment, nor sinners in the assembly of the righteous." },
      { number: 6, text: "For the Lord watches over the way of the righteous, but the way of the wicked leads to destruction." },
    ]
  },
  {
    day: 4,
    book: "Matthew",
    chapter: 5,
    reference: "Matthew 5:1-16",
    verses: [
      { number: 1, text: "Now when Jesus saw the crowds, he went up on a mountainside and sat down. His disciples came to him." },
      { number: 2, text: "and he began to teach them. He said:" },
      { number: 3, text: "'Blessed are the poor in spirit, for theirs is the kingdom of heaven.'" },
      { number: 4, text: "'Blessed are those who mourn, for they will be comforted.'" },
      { number: 5, text: "'Blessed are the meek, for they will inherit the earth.'" },
      { number: 6, text: "'Blessed are those who hunger and thirst for righteousness, for they will be filled.'" },
      { number: 7, text: "'Blessed are the merciful, for they will be shown mercy.'" },
      { number: 8, text: "'Blessed are the pure in heart, for they will see God.'" },
    ]
  },
  {
    day: 5,
    book: "John",
    chapter: 3,
    reference: "John 3:1-21",
    verses: [
      { number: 1, text: "Now there was a Pharisee, a man named Nicodemus who was a member of the Jewish ruling council." },
      { number: 2, text: "He came to Jesus at night and said, 'Rabbi, we know that you are a teacher who has come from God. For no one could perform the signs you are doing if God were not with him.'" },
      { number: 3, text: "Jesus replied, 'Very truly I tell you, no one can see the kingdom of God unless they are born again.'" },
      { number: 4, text: "'How can someone be born when they are old?' Nicodemus asked. 'Surely they cannot enter a second time into their mother’s womb to be born!'" },
      { number: 5, text: "Jesus answered, 'Very truly I tell you, no one can enter the kingdom of God unless they are born of water and the Spirit.'" },
      { number: 6, text: "'Flesh gives birth to flesh, but the Spirit gives birth to spirit.'" },
      { number: 7, text: "'You should not be surprised at my saying, You must be born again.'" },
      { number: 8, text: "'The wind blows wherever it pleases. You hear its sound, but you cannot tell where it comes from or where it is going. So it is with everyone born of the Spirit.'" },
    ]
  },
  {
    day: 6,
    book: "Romans",
    chapter: 8,
    reference: "Romans 8:1-17",
    verses: [
      { number: 1, text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
      { number: 2, text: "because through Christ Jesus the law of the Spirit who gives life has set you free from the law of sin and death." },
      { number: 3, text: "For what the law was powerless to do because it was weakened by the flesh, God did by sending his own Son in the likeness of sinful flesh to be a sin offering." },
      { number: 4, text: "And so he condemned sin in the flesh." },
      { number: 5, text: "in order that the righteous requirement of the law might be fully met in us, who do not live according to the flesh but according to the Spirit." },
      { number: 6, text: "The mind governed by the flesh is death, but the mind governed by the Spirit is life and peace." },
      { number: 7, text: "The mind governed by the flesh is hostile to God; it does not submit to God's law, nor can it do so." },
      { number: 8, text: "Those who are in the realm of the flesh cannot please God." },
    ]
  },
  {
    day: 7,
    book: "1 Corinthians",
    chapter: 13,
    reference: "1 Corinthians 13:1-13",
    verses: [
      { number: 1, text: "If I speak in the tongues of men or of angels, but do not have love, I am only a resounding gong or a clanging cymbal." },
      { number: 2, text: "If I have the gift of prophecy and can fathom all mysteries and all knowledge, and if I have a faith that can move mountains, but do not have love, I am nothing." },
      { number: 3, text: "If I give all I possess to the poor and give over my body to hardship that I may boast, but do not have love, I gain nothing." },
      { number: 4, text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud." },
      { number: 5, text: "It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs." },
      { number: 6, text: "Love does not delight in evil but rejoices with the truth." },
      { number: 7, text: "It always protects, always trusts, always hopes, always perseveres." },
      { number: 8, text: "Love never fails. But where there are prophecies, they will cease; where there are tongues, they will be stilled; where there is knowledge, it will pass away." },
    ]
  },
];

export function getHardcodedReading(day: number): HardcodedReading | null {
  const reading = hardcodedReadings.find(r => r.day === day);
  return reading || hardcodedReadings[0]; 
}

export function getTodayReading(): HardcodedReading {
  const dayOfMonth = new Date().getDate();
  const readingDay = (dayOfMonth % hardcodedReadings.length) + 1;
  
  return getHardcodedReading(readingDay) || hardcodedReadings[0];
}