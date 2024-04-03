export interface ICountry {
  cities: string[];
  country: string;
  iso2: string;
  iso3: string;
}

export interface ICountriesData {
  data: ICountry[];
  error: boolean;
  msg: string;
}

export interface Address {
  'ISO3166-2-lvl4': string;
  city?: string;
  country: string;
  country_code: string;
  district?: string;
  municipality?: string;
  postcode: string;
  railway?: string;
  road: string;
  state: string;
  neighbourhood?: string;
  village?: string;
}

export interface GetMyCityResponse {
  address: Address;
  addresstype: string;
  boundingbox: string[];
  class: string;
  display_name: string;
  importance: number;
  lat: string;
  licence: string;
  lon: string;
  name: string;
  osm_id: number;
  osm_type: string;
  place_id: number;
  place_rank: number;
  type: string;
}
