export const leagueMatches = (league: string, date?: string): string => {
  return `https://site.api.espn.com/apis/site/v2/sports/soccer/${league}/scoreboard${
    date && `?dates=${date}`
  }`;
};
