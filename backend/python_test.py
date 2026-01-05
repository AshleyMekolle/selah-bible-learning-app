import asyncio
import httpx

async def test():
    url = "https://bible-api.com/Genesis%201"
    
    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        print(f"Status: {response.status_code}")
        print(f"Response: {response.json()}")

asyncio.run(test())