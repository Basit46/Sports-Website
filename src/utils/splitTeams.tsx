export const splitTeams = (teams: string) => {
  const [awayTeam, homeTeam] = teams.split(" at ");
  return [awayTeam, homeTeam];
};
