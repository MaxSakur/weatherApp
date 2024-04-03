import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../../shared/theme';

export const styles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
    paddingVertical: sizes.l,
    paddingHorizontal: sizes.m,
    borderWidth: 1,
    borderColor: colors.light_grey,
    borderRadius: sizes.s,
  },
  inputAndroid: {
    fontSize: 16,
    color: colors.black,
    textAlign: 'center',
    paddingVertical: sizes.l,
    paddingHorizontal: sizes.m,
    borderWidth: 0.5,
    borderColor: colors.android_border,
    borderRadius: sizes.m,
  },
  weather: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  main: {
    flex: 5,
    padding: sizes.xl,
  },
  main_location: {
    fontSize: 40,
    color: colors.white,
  },
  main_temperature: {
    fontSize: sizes.input_placeholder,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.white,
    flex: 1,
  },
  weatherIcon: {
    height: sizes.input_placeholder,
    justifyContent: 'center',
    alignItems: 'center',
  },
  weatherIconImage: {
    width: '100%',
    height: '100%',
    aspectRatio: 1,
  },

  weather_list_controls: {
    flexDirection: 'row',
    paddingTop: sizes.l,
    paddingHorizontal: sizes.m,
    width: '100%',
    gap: sizes.m,
    alignItems: 'center',
  },
  weather_list_control: {
    flex: 1,
  },

  weather_list: {
    gap: sizes.m,
    alignSelf: 'flex-end',
  },
  weather_list_item: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: sizes.xl,
    borderRadius: sizes.s,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: sizes.xl,
    height: sizes.input_placeholder,
  },
  weather_list_item_time: {
    color: colors.white,
    fontSize: 14,
  },
  weather_list_item_temp: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: sizes.m,
  },
});
