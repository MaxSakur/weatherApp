import {Config} from '../constants/config';
import {WeatherForecast} from './api-models';

enum WeatherResponseType {
  overall = 'weather',
  forecast = 'forecast',
}

export const WeatherApi = {
  getDetailedWeather: async (city: string): Promise<WeatherForecast> => {
    try {
      const response = await fetch(
        `${Config.OPEN_WEATHER_API_BASE_URL}/${WeatherResponseType.forecast}?q=${city}&appid=${Config.OPEN_WEATHER_API_KEY}&units=metric`,
      );
      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error on getting detailed weather: ${error.message}`);
      } else {
        throw new Error(`Unexpected error: ${error}`);
      }
    }
  },
};
