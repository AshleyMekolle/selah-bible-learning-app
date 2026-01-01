import { mockScripture } from "./scripture";

export async function fetchTodayScripture() {
  await new Promise((resolve) => setTimeout(resolve, 500)); 
  return mockScripture;
}
