import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import Geolocation from '@react-native-community/geolocation';
import {CountriesApi} from '../../shared/api/countries-api';
import {geolocationSettings} from '../../shared/constants/settings';
import {ICountry} from '../../shared/models';

interface CountriesContextProps {
  countries: ICountry[];
  currentLocationCountry: ICountry | null;
  setCurrentLocationCountry: (country: ICountry) => void;
  homeLocation: ICountry | null; // Теперь homeLocation имеет тип ICountry
  setHomeLocation: (country: ICountry) => void; // Метод для установки homeLocation
}

const defaultCountriesContext: CountriesContextProps = {
  countries: [],
  currentLocationCountry: null,
  setCurrentLocationCountry: () => {},
  homeLocation: null, // Инициализация homeLocation как null
  setHomeLocation: () => {}, // Пустая функция-заглушка для setHomeLocation
};

const CountriesContext = createContext<CountriesContextProps>(
  defaultCountriesContext,
);

export const useCountries = () => useContext(CountriesContext);

export const LocationProvider: FC<{children: ReactNode}> = ({children}) => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [currentLocationCountry, setCurrentLocationCountry] =
    useState<ICountry | null>(null);
  const [homeLocation, setHomeLocation] = useState<ICountry | null>(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        CountriesApi.getMyCity(
          position.coords.latitude,
          position.coords.longitude,
        ).then(res => {
          const countryData: ICountry = {
            cities: [res.address.city || ''],
            country: res.address.country,
            iso2: res.address.country_code.toUpperCase(),
            iso3: '',
          };
          setHomeLocation(countryData);
        });
      },
      error => {
        console.error(error);
      },
      geolocationSettings,
    );

    const fetchCountries = async () => {
      try {
        const res = await CountriesApi.getCountries();
        setCountries(res);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <CountriesContext.Provider
      value={{
        countries,
        currentLocationCountry,
        setCurrentLocationCountry,
        homeLocation,
        setHomeLocation, // Предоставляем метод для установки homeLocation через контекст
      }}>
      {children}
    </CountriesContext.Provider>
  );
};
