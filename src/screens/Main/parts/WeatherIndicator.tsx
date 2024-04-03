import React, {FC, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import moment from 'moment-timezone';

import {Forecast, WeatherForecast} from '../../../shared/api/api-models';
import {Button} from '../../../shared/components/button';
import {styles} from './styles';

interface IWeatherIndicator {
  weatherData?: WeatherForecast;
}

export const WeatherIndicator: FC<IWeatherIndicator> = ({weatherData}) => {
  const [filteredData, setFilteredData] = useState<Forecast[]>();

  const todayWeather = weatherData?.list[0];

  const filterData = (days: number) => {
    const filtered = weatherData?.list.filter(item => {
      const itemDate = moment(item.dt_txt);
      const currentDate = moment();
      return (
        itemDate.isBetween(
          currentDate,
          currentDate.clone().add(days, 'days'),
          'days',
          '[]',
        ) && itemDate.format('HH:mm') === '12:00'
      );
    });
    setFilteredData(filtered);
  };

  return (
    <View style={styles.weather}>
      <View style={styles.main}>
        <View style={styles.weatherIcon}>
          <LottieView
            source={require('./../../../assets/lottie/sun.json')}
            style={styles.weatherIconImage}
            autoPlay
            loop
          />
        </View>
        <Text style={styles.main_location}>
          {weatherData?.city?.name || ''}
        </Text>
        <Text style={styles.main_temperature}>
          {todayWeather?.main.temp.toFixed(0)}°
        </Text>
      </View>

      <View style={styles.weather_list}>
        <View style={styles.weather_list_controls}>
          <Button
            style={styles.weather_list_control}
            title="Detailed"
            onPress={() => setFilteredData(weatherData?.list)}
          />
          <Button
            style={styles.weather_list_control}
            title="Next 2 days"
            onPress={() => filterData(2)}
          />
          <Button
            style={styles.weather_list_control}
            title="Next 7 days"
            onPress={() => filterData(7)}
          />
        </View>
      </View>
      <FlatList
        data={filteredData || weatherData?.list}
        horizontal
        contentContainerStyle={styles.weather_list}
        renderItem={({item}: {item: Forecast}) => (
          <View style={styles.weather_list_item}>
            <Text style={styles.weather_list_item_time}>
              {moment(item.dt_txt).format('ddd D')}
            </Text>
            {weatherData?.list.length === filteredData?.length && (
              <Text style={styles.weather_list_item_time}>
                {moment(item.dt_txt).format('HH:mm')}
              </Text>
            )}
            <Text style={styles.weather_list_item_temp}>
              {item.main.temp.toFixed(0)}°C
            </Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
