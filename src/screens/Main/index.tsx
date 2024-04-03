import React, {useEffect, useState} from 'react';
import {ImageBackground, SafeAreaView, Text, View} from 'react-native';

import {useCountries} from '../../store/context/LocationProvider';
import {WeatherApi} from '../../shared/api/weather-api';

import {CountriesDropdown, CitiesDropdown, WeatherIndicator} from './parts';
import {styles} from './styles';
import {WeatherForecast} from '../../shared/api/api-models';
import {Config} from '../../shared/constants/config';
import {Button} from '../../shared/components/button';

const Main = () => {
  const {
    countries,
    homeLocation,
    setHomeLocation,
    currentLocationCountry,
    setCurrentLocationCountry,
  } = useCountries();
  const [currentLocationCity, setCurrentLocationCity] =
    React.useState<string>();
  const [weatherData, setWeatherData] = React.useState<WeatherForecast>();

  const handleUpdateCurrentCountry = (data: any) => {
    setCurrentLocationCountry(data);
  };

  const handleUpdateCurrentCity = (data: any) => {
    setCurrentLocationCity(data);
  };

  const getCities = () => {
    const matchedCountry = countries.find(
      loc =>
        currentLocationCountry &&
        loc.country === currentLocationCountry.country,
    );

    return matchedCountry?.cities;
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        if (!currentLocationCity) return;
        const res = await WeatherApi.getDetailedWeather(currentLocationCity);
        setWeatherData(res);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchWeatherData();
  }, [currentLocationCity]);

  const [backgroundImage, setBackgroundImage] = useState<string>('');

  const fetchBackgroundImage = async (country: string) => {
    const url = `https://api.unsplash.com/search/photos?query=${country}&client_id=${Config.UNSPLASH_ACCESS_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const imageUrl = data.results[0]?.urls?.regular;

      if (imageUrl) {
        setBackgroundImage(imageUrl);
      }
    } catch (error) {
      console.error('Error fetching image from Unsplash:', error);
    }
  };

  useEffect(() => {
    fetchBackgroundImage(currentLocationCountry?.country || 'Weather');
  }, [currentLocationCountry?.country, currentLocationCity]);

  const handleSaveHomeLocation = () => {
    if (currentLocationCity && currentLocationCountry) {
      setHomeLocation({
        country: currentLocationCountry.country,
        cities: [currentLocationCity],
        iso2: currentLocationCountry.iso2,
        iso3: currentLocationCountry.iso3,
      });
    }
  };

  const useHomeCondition = !!homeLocation?.country && !!homeLocation.cities[0];

  const handleUseHomeLocation = () => {
    homeLocation !== null && setCurrentLocationCountry(homeLocation);
    setCurrentLocationCity(homeLocation?.cities[0]);
  };

  return (
    <ImageBackground source={{uri: backgroundImage}} style={styles.screen}>
      <View style={styles.imageOverlay} />
      <SafeAreaView style={styles.container}>
        <View style={styles.options}>
          <View style={styles.custom}>
            <Text style={styles.custom_option_label}>Custom</Text>
            <CountriesDropdown
              onCountryChange={handleUpdateCurrentCountry}
              currentLocationCountry={currentLocationCountry?.country}
            />
            <CitiesDropdown
              onCityChange={handleUpdateCurrentCity}
              data={getCities()}
              currentLocationCity={currentLocationCity}
            />
            <Button
              disabled={!currentLocationCity}
              title="Save as Home"
              onPress={handleSaveHomeLocation}
            />
          </View>
          <View style={styles.home}>
            <Text style={styles.home_option_label}>Home</Text>
            <Text style={styles.home_country}>{homeLocation?.country}</Text>
            <Text style={styles.home_city}>
              {homeLocation?.cities[0] || 'Not a city'}
            </Text>

            <Button
              disabled={!useHomeCondition}
              title={'Use Home'}
              onPress={handleUseHomeLocation}
            />
          </View>
        </View>

        {currentLocationCity && currentLocationCity?.length > 0 && (
          <WeatherIndicator weatherData={weatherData} />
        )}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Main;
