const BASE_URL = "https://rest.api.bible"

const headers ={
    "api-key": process.env.BIBLE_APIKEY!,
}

export async function fetchChapter(bookId:string,
    chapter: number
) {
    const response = await fetch(
        `${BASE_URL}/bibles/${process.env.BOBLE_ID}/chapters/${bookId}.${chapter}/verses`,
        {headers}
    )

    if(!response.ok){
        throw new Error("Failed to fetch scripture")
    }

    return response.json()
    
}