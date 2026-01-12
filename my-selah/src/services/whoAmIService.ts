import { WHO_AM_I_CHARACTERS } from "../data/whoAmICharacters";

export function getTodayWhoAmI() {
  const todayIndex =
    new Date().getDate() % WHO_AM_I_CHARACTERS.length;

  return WHO_AM_I_CHARACTERS[todayIndex];
}
