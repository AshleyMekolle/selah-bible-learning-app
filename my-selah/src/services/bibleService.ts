import { mockScripture } from "../mocks/scripture";

export async function fetchTodayScripture() {
  await new Promise((resolve) => setTimeout(resolve, 500)); 
  return mockScripture;
}

export async function fetchChapter() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockScripture);
    }, 500);
  });
}
