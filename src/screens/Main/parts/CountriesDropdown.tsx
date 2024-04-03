import React from 'react';
import RNPickerSelect, {Item} from 'react-native-picker-select';

import {useCountries} from '../../../store/context/LocationProvider';
import {ICountry} from '../../../shared/models';
import {styles} from './styles';

interface CountriesDropdownProps {
  onCountryChange: (country: ICountry | null) => void;
  currentLocationCountry?: string;
  isDarkTheme?: boolean;
}

export const CountriesDropdown: React.FC<CountriesDropdownProps> = ({
  onCountryChange,
  currentLocationCountry,
  isDarkTheme,
}) => {
  const {countries} = useCountries();
  const items: Item[] = countries.map(country => ({
    label: country.country,
    value: country.country,
    cities: country.cities,
  }));

  return (
    <RNPickerSelect
      onValueChange={value => {
        const selectedCountry = countries.find(
          country => country.country === value,
        );
        onCountryChange(selectedCountry || null);
      }}
      placeholder={{label: 'Select a country', value: null}}
      items={items}
      value={currentLocationCountry}
      style={{inputIOS: styles.inputIOS, inputAndroid: styles.inputAndroid}}
      darkTheme={isDarkTheme}
      useNativeAndroidPickerStyle={false}
    />
  );
};
