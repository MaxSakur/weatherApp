import {Config} from '../constants/config';
import {GetMyCityResponse, ICountriesData, ICountry} from '../models';

export const CountriesApi = {
  getCountries: async (): Promise<ICountry[]> => {
    try {
      const response = await fetch(Config.COUNTRIES_DATA_API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const {data}: ICountriesData = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error on getting countries list: ${error.message}`);
      } else {
        throw new Error(`Unexpected error: ${error}`);
      }
    }
  },

  getMyCity: async (lat: number, lon: number): Promise<GetMyCityResponse> => {
    try {
      const response = await fetch(
        Config.OPEN_STREET_MAP_API_URL + `?format=json&lat=${lat}&lon=${lon}`,
      );
      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error on getting my location: ${error.message}`);
      } else {
        throw new Error(`Unexpected error: ${error}`);
      }
    }
  },
};
