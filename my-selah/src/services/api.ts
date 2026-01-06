const BASE_URL = 'http://127.0.0.1:8000/api/v1';

export async function getTodayReading() {
  const res = await fetch(`${BASE_URL}/today`);
  if (!res.ok) throw new Error('Failed to load today reading');
  return res.json();
}

export async function getDayReading(
  day: number,
  start = 1,
  limit = 10
) {
  const res = await fetch(
    `${BASE_URL}/day/${day}?start=${start}&limit=${limit}`
  );
  if (!res.ok) throw new Error('Failed to load day reading');
  return res.json();
}
