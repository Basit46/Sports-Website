import axios from "axios";
import { leagueMatches } from "../endpoints";

export const LeagueCodes = [
  "caf.nations",
  "uefa.champions",
  "uefa.europa",
  "uefa.europa.conf",
  "eng.1",
  "eng.fa",
  "eng.league_cup",
  "esp.1",
  "ita.1",
  "ger.1",
  "fra.1",
]; // Add more league codes as needed

export const fetchDataForLeagues = async (leagueCode: string, date: string) => {
  const url = leagueMatches(leagueCode, date);
  try {
    const response = await axios.get(url);
    return response.data.events;
  } catch (error) {
    console.error(`Error fetching data for league ${leagueCode}:`, error);
    return [];
  }
};
