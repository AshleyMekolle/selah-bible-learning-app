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
  {
    day: 8,
    book: "Exodus",
    chapter: 20,
    reference: "Exodus 20:1-17",
    verses: [
      { number: 1, text: "And God spoke all these words:" },
      { number: 2, text: "I am the LORD your God, who brought you out of Egypt, out of the land of slavery." },
      { number: 3, text: "You shall have no other gods before me." },
      { number: 4, text: "You shall not make for yourself an image in the form of anything in heaven above or on the earth beneath or in the waters below." },
      { number: 5, text: "You shall not bow down to them or worship them; for I, the LORD your God, am a jealous God, punishing the children for the sin of the parents to the third and fourth generation of those who hate me." },
      { number: 6, text: "but showing love to a thousand generations of those who love me and keep my commandments." },
      { number: 7, text: "You shall not misuse the name of the LORD your God, for the LORD will not hold anyone guiltless who misuses his name." },
      { number: 8, text: "Remember the Sabbath day by keeping it holy." },
    ]
  },
  {
    day: 9,
    book: "Isaiah",
    chapter: 53,
    reference: "Isaiah 53:1-12",
    verses: [
      { number: 1, text: "Who has believed our message and to whom has the arm of the LORD been revealed?" },
      { number: 2, text: "He grew up before him like a tender shoot, and like a root out of dry ground." },
      { number: 3, text: "He was despised and rejected by mankind, a man of suffering, and familiar with pain." },
      { number: 4, text: "Surely he took up our pain and bore our suffering, yet we considered him punished by God, stricken by him, and afflicted." },
      { number: 5, text: "But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed." },
      { number: 6, text: "We all, like sheep, have gone astray, each of us has turned to our own way; and the LORD has laid on him the iniquity of us all." },
      { number: 7, text: "He was oppressed and afflicted, yet he did not open his mouth; he was led like a lamb to the slaughter, and as a sheep before its shearers is silent, so he did not open his mouth." },
      { number: 8, text: "By oppression and judgment he was taken away. Yet who of his generation protested? For he was cut off from the land of the living; for the transgression of my people he was punished." },
    ]
  },
  {
    day: 10,
    book: "Psalm",
    chapter: 23,
    reference: "Psalm 23:1-6",
    verses: [
      { number: 1, text: "The LORD is my shepherd, I lack nothing." },
      { number: 2, text: "He makes me lie down in green pastures, he leads me beside quiet waters." },
      { number: 3, text: "he refreshes my soul. He guides me along the right paths for his name's sake." },
      { number: 4, text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me." },
      { number: 5, text: "You prepare a table before me in the presence of my enemies. You anoint my head with oil; my cup overflows." },
      { number: 6, text: "Surely your goodness and love will follow me all the days of my life, and I will dwell in the house of the LORD forever." },
    ]
  },
  {
    day: 11,
    book: "Ephesians",
    chapter: 6,
    reference: "Ephesians 6:10-18",
    verses: [
      { number: 10, text: "Finally, be strong in the Lord and in his mighty power." },
      { number: 11, text: "Put on the full armor of God, so that you can take your stand against the devil's schemes." },
      { number: 12, text: "For our struggle is not against flesh and blood, but against the rulers, against the authorities, against the powers of this dark world and against the spiritual forces of evil in the heavenly realms." },
      { number: 13, text: "Therefore put on the full armor of God, so that when the day of evil comes, you may be able to stand your ground, and after you have done everything, to stand." },
      { number: 14, text: "Stand firm then, with the belt of truth buckled around your waist, with the breastplate of righteousness in place." },
      { number: 15, text: "and with your feet fitted with the readiness that comes from the gospel of peace." },
      { number: 16, text: "In addition to all this, take up the shield of faith, with which you can extinguish all the flaming arrows of the evil one." },
      { number: 17, text: "Take the helmet of salvation and the sword of the Spirit, which is the word of God." },
      { number: 18, text: "And pray in the Spirit on all occasions with all kinds of prayers and requests. With this in mind, be alert and always keep on praying for all the Lord's people." },
    ]
  },
  {
    day: 12,
    book: "Philippians",
    chapter: 4,
    reference: "Philippians 4:4-13",
    verses: [
      { number: 4, text: "Rejoice in the Lord always. I will say it again: Rejoice!" },
      { number: 5, text: "Let your gentleness be evident to all. The Lord is near." },
      { number: 6, text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God." },
      { number: 7, text: "And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus." },
      { number: 8, text: "Finally, brothers and sisters, whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable—if anything is excellent or praiseworthy—think about such things." },
      { number: 9, text: "Whatever you have learned or received or heard from me, or seen in me—put it into practice. And the God of peace will be with you." },
      { number: 10, text: "I rejoiced greatly in the Lord that at last you renewed your concern for me. Indeed, you were concerned, but you had no opportunity to show it." },
      { number: 11, text: "I am not saying this because I am in need, for I have learned to be content whatever the circumstances." },
    ]
  },
  {
    day: 13,
    book: "John",
    chapter: 1,
    reference: "John 1:1-14",
    verses: [
      { number: 1, text: "In the beginning was the Word, and the Word was with God, and the Word was God." },
      { number: 2, text: "He was with God in the beginning." },
      { number: 3, text: "Through him all things were made; without him nothing was made that has been made." },
      { number: 4, text: "In him was life, and that life was the light of all mankind." },
      { number: 5, text: "The light shines in the darkness, and the darkness has not overcome it." },
      { number: 6, text: "There was a man sent from God whose name was John." },
      { number: 7, text: "He came as a witness to testify concerning that light, so that through him all might believe." },
      { number: 8, text: "He himself was not the light; he came only as a witness to the light." },
    ]
  },
  {
    day: 14,
    book: "Proverbs",
    chapter: 3,
    reference: "Proverbs 3:1-12",
    verses: [
      { number: 1, text: "My son, do not forget my teaching, but keep my commands in your heart." },
      { number: 2, text: "for they will prolong your life many years and bring you peace and prosperity." },
      { number: 3, text: "Let love and faithfulness never leave you; bind them around your neck, write them on the tablet of your heart." },
      { number: 4, text: "Then you will win favor and a good name in the sight of God and man." },
      { number: 5, text: "Trust in the LORD with all your heart and lean not on your own understanding." },
      { number: 6, text: "in all your ways submit to him, and he will make your paths straight." },
      { number: 7, text: "Do not be wise in your own eyes; fear the LORD and shun evil." },
      { number: 8, text: "This will bring health to your body and nourishment to your bones." },
    ]
  },
  {
    day: 15,
    book: "Hebrews",
    chapter: 11,
    reference: "Hebrews 11:1-10",
    verses: [
      { number: 1, text: "Now faith is confidence in what we hope for and assurance about what we do not see." },
      { number: 2, text: "This is what the ancients were commended for." },
      { number: 3, text: "By faith we understand that the universe was formed at God's command, so that what is seen was not made out of what was visible." },
      { number: 4, text: "By faith Abel brought God a better offering than Cain did. By faith he was commended as righteous, when God spoke well of his offerings. And by faith Abel still speaks, even though he is dead." },
      { number: 5, text: "By faith Enoch was taken from this life, so that he did not experience death: 'He could not be found, because God had taken him away.' For before he was taken, he was commended as one who pleased God." },
      { number: 6, text: "And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him." },
      { number: 7, text: "By faith Noah, when warned about things not yet seen, in holy fear built an ark to save his family. By his faith he condemned the world and became heir of the righteousness that is in keeping with faith." },
      { number: 8, text: "By faith Abraham, when called to go to a place he would later receive as his inheritance, obeyed and went, even though he did not know where he was going." },
    ]
  },
  {
    day: 16,
    book: "James",
    chapter: 1,
    reference: "James 1:1-12",
    verses: [
      { number: 1, text: "James, a servant of God and of the Lord Jesus Christ, To the twelve tribes scattered among the nations: Greetings." },
      { number: 2, text: "Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds." },
      { number: 3, text: "because you know that the testing of your faith produces perseverance." },
      { number: 4, text: "Let perseverance finish its work so that you may be mature and complete, not lacking anything." },
      { number: 5, text: "If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you." },
      { number: 6, text: "But when you ask, you must believe and not doubt, because the one who doubts is like a wave of the sea, blown and tossed by the wind." },
      { number: 7, text: "That person should not expect to receive anything from the Lord." },
      { number: 8, text: "Such a person is double-minded and unstable in all they do." },
    ]
  },
  {
    day: 17,
    book: "Revelation",
    chapter: 21,
    reference: "Revelation 21:1-7",
    verses: [
      { number: 1, text: "Then I saw 'a new heaven and a new earth,' for the first heaven and the first earth had passed away, and there was no longer any sea." },
      { number: 2, text: "I saw the Holy City, the new Jerusalem, coming down out of heaven from God, prepared as a bride beautifully dressed for her husband." },
      { number: 3, text: "And I heard a loud voice from the throne saying, 'Look! God's dwelling place is now among the people, and he will dwell with them. They will be his people, and God himself will be with them and be their God.'" },
      { number: 4, text: "'He will wipe every tear from their eyes. There will be no more death' or mourning or crying or pain, for the old order of things has passed away.'" },
      { number: 5, text: "He who was seated on the throne said, 'I am making everything new!' Then he said, 'Write this down, for these words are trustworthy and true.'" },
      { number: 6, text: "He said to me: 'It is done. I am the Alpha and the Omega, the Beginning and the End. To the thirsty I will give water without cost from the spring of the water of life.'" },
      { number: 7, text: "Those who are victorious will inherit all this, and I will be their God and they will be my children." },
    ]
  },
  {
    day: 18,
    book: "Galatians",
    chapter: 5,
    reference: "Galatians 5:16-26",
    verses: [
      { number: 16, text: "So I say, walk by the Spirit, and you will not gratify the desires of the flesh." },
      { number: 17, text: "For the flesh desires what is contrary to the Spirit, and the Spirit what is contrary to the flesh. They are in conflict with each other, so that you are not to do whatever you want." },
      { number: 18, text: "But if you are led by the Spirit, you are not under the law." },
      { number: 19, text: "The acts of the flesh are obvious: sexual immorality, impurity and debauchery." },
      { number: 20, text: "idolatry and witchcraft; hatred, discord, jealousy, fits of rage, selfish ambition, dissensions, factions." },
      { number: 21, text: "and envy; drunkenness, orgies, and the like. I warn you, as I did before, that those who live like this will not inherit the kingdom of God." },
      { number: 22, text: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness." },
      { number: 23, text: "gentleness and self-control. Against such things there is no law." },
    ]
  },
  {
    day: 19,
    book: "Colossians",
    chapter: 3,
    reference: "Colossians 3:1-17",
    verses: [
      { number: 1, text: "Since, then, you have been raised with Christ, set your hearts on things above, where Christ is, seated at the right hand of God." },
      { number: 2, text: "Set your minds on things above, not on earthly things." },
      { number: 3, text: "For you died, and your life is now hidden with Christ in God." },
      { number: 4, text: "When Christ, who is your life, appears, then you also will appear with him in glory." },
      { number: 5, text: "Put to death, therefore, whatever belongs to your earthly nature: sexual immorality, impurity, lust, evil desires and greed, which is idolatry." },
      { number: 6, text: "Because of these, the wrath of God is coming." },
      { number: 7, text: "You used to walk in these ways, in the life you once lived." },
      { number: 8, text: "But now you must also rid yourselves of all such things as these: anger, rage, malice, slander, and filthy language from your lips." },
    ]
  },
  {
    day: 20,
    book: "2 Timothy",
    chapter: 1,
    reference: "2 Timothy 1:1-12",
    verses: [
      { number: 1, text: "Paul, an apostle of Christ Jesus by the will of God, in keeping with the promise of life that is in Christ Jesus." },
      { number: 2, text: "To Timothy, my dear son: Grace, mercy and peace from God the Father and Christ Jesus our Lord." },
      { number: 3, text: "I thank God, whom I serve, as my ancestors did, with a clear conscience, as night and day I constantly remember you in my prayers." },
      { number: 4, text: "Recalling your tears, I long to see you, so that I may be filled with joy." },
      { number: 5, text: "I am reminded of your sincere faith, which first lived in your grandmother Lois and in your mother Eunice and, I am persuaded, now lives in you also." },
      { number: 6, text: "For this reason I remind you to fan into flame the gift of God, which is in you through the laying on of my hands." },
      { number: 7, text: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline." },
      { number: 8, text: "So do not be ashamed of the testimony about our Lord or of me his prisoner. Rather, join with me in suffering for the gospel, by the power of God." },
    ]
  },
  {
    day: 21,
    book: "1 John",
    chapter: 4,
    reference: "1 John 4:7-21",
    verses: [
      { number: 7, text: "Dear friends, let us love one another, for love comes from God. Everyone who loves has been born of God and knows God." },
      { number: 8, text: "Whoever does not love does not know God, because God is love." },
      { number: 9, text: "This is how God showed his love among us: He sent his one and only Son into the world that we might live through him." },
      { number: 10, text: "This is love: not that we loved God, but that he loved us and sent his Son as an atoning sacrifice for our sins." },
      { number: 11, text: "Dear friends, since God so loved us, we also ought to love one another." },
      { number: 12, text: "No one has ever seen God; but if we love one another, God lives in us and his love is made complete in us." },
      { number: 13, text: "This is how we know that we live in him and he in us: He has given us of his Spirit." },
      { number: 14, text: "And we have seen and testify that the Father has sent his Son to be the Savior of the world." },
    ]
  },
  {
    day: 22,
    book: "Psalm",
    chapter: 139,
    reference: "Psalm 139:1-18",
    verses: [
      { number: 1, text: "You have searched me, LORD, and you know me." },
      { number: 2, text: "You know when I sit and when I rise; you perceive my thoughts from afar." },
      { number: 3, text: "You discern my going out and my lying down; you are familiar with all my ways." },
      { number: 4, text: "Before a word is on my tongue you, LORD, know it completely." },
      { number: 5, text: "You hem me in behind and before, and you lay your hand upon me." },
      { number: 6, text: "Such knowledge is too wonderful for me, too lofty for me to attain." },
      { number: 7, text: "Where can I go from your Spirit? Where can I flee from your presence?" },
      { number: 8, text: "If I go up to the heavens, you are there; if I make my bed in the depths, you are there." },
    ]
  },
  {
    day: 23,
    book: "Matthew",
    chapter: 6,
    reference: "Matthew 6:25-34",
    verses: [
      { number: 25, text: "Therefore I tell you, do not worry about your life, what you will eat or drink; or about your body, what you will wear. Is not life more than food, and the body more than clothes?" },
      { number: 26, text: "Look at the birds of the air; they do not sow or reap or store away in barns, and yet your heavenly Father feeds them. Are you not much more valuable than they?" },
      { number: 27, text: "Can any one of you by worrying add a single hour to your life?" },
      { number: 28, text: "And why do you worry about clothes? See how the flowers of the field grow. They do not labor or spin." },
      { number: 29, text: "Yet I tell you that not even Solomon in all his splendor was dressed like one of these." },
      { number: 30, text: "If that is how God clothes the grass of the field, which is here today and tomorrow is thrown into the fire, will he not much more clothe you—you of little faith?" },
      { number: 31, text: "So do not worry, saying, 'What shall we eat?' or 'What shall we drink?' or 'What shall we wear?'" },
      { number: 32, text: "For the pagans run after all these things, and your heavenly Father knows that you need them." },
    ]
  },
  {
    day: 24,
    book: "Acts",
    chapter: 2,
    reference: "Acts 2:1-21",
    verses: [
      { number: 1, text: "When the day of Pentecost came, they were all together in one place." },
      { number: 2, text: "Suddenly a sound like the blowing of a violent wind came from heaven and filled the whole house where they were sitting." },
      { number: 3, text: "They saw what seemed to be tongues of fire that separated and came to rest on each of them." },
      { number: 4, text: "All of them were filled with the Holy Spirit and began to speak in other tongues as the Spirit enabled them." },
      { number: 5, text: "Now there were staying in Jerusalem God-fearing Jews from every nation under heaven." },
      { number: 6, text: "When they heard this sound, a crowd came together in bewilderment, because each one heard their own language being spoken." },
      { number: 7, text: "Utterly amazed, they asked: 'Aren't all these who are speaking Galileans?" },
      { number: 8, text: "Then how is it that each of us hears them in our native language?" },
    ]
  },
  {
    day: 25,
    book: "Luke",
    chapter: 15,
    reference: "Luke 15:1-10",
    verses: [
      { number: 1, text: "Now the tax collectors and sinners were all gathering around to hear Jesus." },
      { number: 2, text: "But the Pharisees and the teachers of the law muttered, 'This man welcomes sinners and eats with them.'" },
      { number: 3, text: "Then Jesus told them this parable:" },
      { number: 4, text: "Suppose one of you has a hundred sheep and loses one of them. Doesn't he leave the ninety-nine in the open country and go after the lost sheep until he finds it?" },
      { number: 5, text: "And when he finds it, he joyfully puts it on his shoulders." },
      { number: 6, text: "and goes home. Then he calls his friends and neighbors together and says, 'Rejoice with me; I have found my lost sheep.'" },
      { number: 7, text: "I tell you that in the same way there will be more rejoicing in heaven over one sinner who repents than over ninety-nine righteous persons who do not need to repent." },
      { number: 8, text: "Or suppose a woman has ten silver coins and loses one. Doesn't she light a lamp, sweep the house and search carefully until she finds it?" },
    ]
  },
  {
    day: 26,
    book: "Joshua",
    chapter: 1,
    reference: "Joshua 1:1-9",
    verses: [
      { number: 1, text: "After the death of Moses the servant of the LORD, the LORD said to Joshua son of Nun, Moses' aide:" },
      { number: 2, text: "Moses my servant is dead. Now then, you and all these people, get ready to cross the Jordan River into the land I am about to give to them—to the Israelites." },
      { number: 3, text: "I will give you every place where you set your foot, as I promised Moses." },
      { number: 4, text: "Your territory will extend from the desert to Lebanon, and from the great river, the Euphrates—all the Hittite country—to the Mediterranean Sea in the west." },
      { number: 5, text: "No one will be able to stand against you all the days of your life. As I was with Moses, so I will be with you; I will never leave you nor forsake you." },
      { number: 6, text: "Be strong and courageous, because you will lead these people to inherit the land I swore to their ancestors to give them." },
      { number: 7, text: "Be strong and very courageous. Be careful to obey all the law my servant Moses gave you; do not turn from it to the right or to the left, that you may be successful wherever you go." },
      { number: 8, text: "Keep this Book of the Law always on your lips; meditate on it day and night, so that you may be careful to do everything written in it. Then you will be prosperous and successful." },
    ]
  },
  {
    day: 27,
    book: "Micah",
    chapter: 6,
    reference: "Micah 6:6-8",
    verses: [
      { number: 6, text: "With what shall I come before the LORD and bow down before the exalted God? Shall I come before him with burnt offerings, with calves a year old?" },
      { number: 7, text: "Will the LORD be pleased with thousands of rams, with ten thousand rivers of olive oil? Shall I offer my firstborn for my transgression, the fruit of my body for the sin of my soul?" },
      { number: 8, text: "He has shown you, O mortal, what is good. And what does the LORD require of you? To act justly and to love mercy and to walk humbly with your God." },
    ]
  },
  {
    day: 28,
    book: "1 Peter",
    chapter: 5,
    reference: "1 Peter 5:1-11",
    verses: [
      { number: 1, text: "To the elders among you, I appeal as a fellow elder and a witness of Christ's sufferings who also will share in the glory to be revealed." },
      { number: 2, text: "Be shepherds of God's flock that is under your care, watching over them—not because you must, but because you are willing, as God wants you to be; not pursuing dishonest gain, but eager to serve." },
      { number: 3, text: "not lording it over those entrusted to you, but being examples to the flock." },
      { number: 4, text: "And when the Chief Shepherd appears, you will receive the crown of glory that will never fade away." },
      { number: 5, text: "In the same way, you who are younger, submit yourselves to your elders. All of you, clothe yourselves with humility toward one another, because, 'God opposes the proud but shows favor to the humble.'" },
      { number: 6, text: "Humble yourselves, therefore, under God's mighty hand, that he may lift you up in due time." },
      { number: 7, text: "Cast all your anxiety on him because he cares for you." },
      { number: 8, text: "Be alert and of sober mind. Your enemy the devil prowls around like a roaring lion looking for someone to devour." },
    ]
  },
  {
    day: 29,
    book: "John",
    chapter: 14,
    reference: "John 14:1-14",
    verses: [
      { number: 1, text: "Do not let your hearts be troubled. You believe in God; believe also in me." },
      { number: 2, text: "My Father's house has many rooms; if that were not so, would I have told you that I am going there to prepare a place for you?" },
      { number: 3, text: "And if I go and prepare a place for you, I will come back and take you to be with me that you also may be where I am." },
      { number: 4, text: "You know the way to the place where I am going." },
      { number: 5, text: "Thomas said to him, 'Lord, we don't know where you are going, so how can we know the way?'" },
      { number: 6, text: "Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'" },
      { number: 7, text: "If you really know me, you will know my Father as well. From now on, you do know him and have seen him." },
      { number: 8, text: "Philip said, 'Lord, show us the Father and that will be enough for us.'" },
    ]
  },
  {
    day: 30,
    book: "Jeremiah",
    chapter: 29,
    reference: "Jeremiah 29:11-14",
    verses: [
      { number: 11, text: "For I know the plans I have for you," },
      { number: 12, text: "Then you will call on me and come and pray to me, and I will listen to you." },
      { number: 13, text: "You will seek me and find me when you seek me with all your heart." },
      { number: 14, text: "I will be found by you," },
    ]
  },
];

export function getHardcodedReading(day: number): HardcodedReading | null {
  const reading = hardcodedReadings.find(r => r.day === day);
  return reading || hardcodedReadings[0]; 
}

export function getTodayReading(): HardcodedReading {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  
  const readingDay = (dayOfYear % hardcodedReadings.length) + 1;
  
  return getHardcodedReading(readingDay) || hardcodedReadings[0];
}