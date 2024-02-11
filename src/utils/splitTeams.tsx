export const splitTeams = (teams: any) => {
  const [awayTeam, homeTeam] = teams.split(" at ");
  return [awayTeam, homeTeam];
};
