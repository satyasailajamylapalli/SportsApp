import axios from "axios";
import create from "zustand";

const url_leaguesOfCountry =
  "https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?c=";
const League = create((set) => ({ 
    leaguesOfCountries: [],
    fetchLeaguesOfCountry: (country) => {
      axios.get(url_leaguesOfCountry + country).then((response) => {
        set((state) => ({
          leaguesOfCountries: [
            ...state.leaguesOfCountries,
            response.data.countries.sort((a, b) =>
              a.strLeague.localeCompare(b.strLeague)
            ),
          ],
        }));
      });
    },
  }));
  

export default League;
