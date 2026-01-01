import { mockScripture } from "../mocks/scripture";

export async function fetchTodayScripture() {
  await new Promise((resolve) => setTimeout(resolve, 500)); 
  return mockScripture;
}
