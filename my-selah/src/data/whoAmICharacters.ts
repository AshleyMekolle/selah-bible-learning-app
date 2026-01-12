export type WhoAmICharacter ={
    id: string;
    name: string;
    testament: "old" | "new";
    category: string [];
    clues: string[];
}

export const WHO_AM_I_CHARACTERS: WhoAmICharacter[] =[
    {
        id: "david",
        name: "David",
        testament: "old",
        category: ["Easy", "Medium", "Hard"],
        clues: [
            "I was a shepherd",
            "I killed a giant with a sling",
            "I became king of Israel",
            "I committed adultery with Bathsheba"
        ]
    }
]