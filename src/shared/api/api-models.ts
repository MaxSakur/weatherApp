export interface WeatherForecast {
  city: City;
  cnt: number;
  cod: string;
  list: Forecast[];
  message: number;
}

interface City {
  coord: Coord;
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}

interface Coord {
  lat: number;
  lon: number;
}

export interface Forecast {
  clouds: Clouds;
  dt: number;
  dt_txt: string;
  main: Main;
  pop: number;
  sys: Sys;
  visibility: number;
  weather: Weather[];
  wind: Wind;
  rain?: Rain;
}

interface Clouds {
  all: number;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Sys {
  country?: string;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Wind {
  speed: number;
  deg: number;
  gust?: number;
}

interface Rain {
  '1h'?: number;
  '3h'?: number;
}
