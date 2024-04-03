import React from 'react';

import RNPickerSelect, {Item} from 'react-native-picker-select';

import {styles} from './styles';

interface CitiesDropdownProps {
  onCityChange: (city: string | null) => void;
  data?: string[];
  currentLocationCity?: string;
  isDarkTheme?: boolean;
}

export const CitiesDropdown: React.FC<CitiesDropdownProps> = ({
  onCityChange,
  data,
  currentLocationCity,
  isDarkTheme,
}) => {
  const items: Item[] | undefined = data?.map(city => ({
    label: city,
    value: city,
  }));

  return (
    <RNPickerSelect
      onValueChange={value => {
        onCityChange(value || null);
      }}
      items={items || []}
      value={currentLocationCity}
      placeholder={{label: 'Select a city', value: null}}
      darkTheme={isDarkTheme}
      style={{
        inputIOS: styles.inputIOS,
        inputAndroid: styles.inputAndroid,
      }}
      useNativeAndroidPickerStyle={false}
    />
  );
};
