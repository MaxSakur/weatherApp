import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../shared/theme';

export const styles = StyleSheet.create({
  screen: {
    ...StyleSheet.absoluteFillObject,
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20,
    gap: sizes.xl * 3,
  },
  custom: {
    flex: 1,
    alignItems: 'flex-start',
    gap: sizes.m,
  },
  custom_option_label: {
    fontSize: 18,
    textAlign: 'left',
    color: 'white',
  },
  home: {
    flex: 1,
    alignItems: 'flex-end',
    gap: sizes.m,
  },
  home_country: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
    width: '100%',
    paddingVertical: sizes.l,
    paddingHorizontal: sizes.m,
    borderWidth: 1,
    borderColor: colors.light_grey,
    borderRadius: sizes.s,
  },
  home_city: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
    width: '100%',
    paddingVertical: sizes.l,
    paddingHorizontal: sizes.m,
    borderWidth: 1,
    borderColor: colors.light_grey,
    borderRadius: sizes.s,
  },
  home_option_label: {
    textAlign: 'right',
    fontSize: 18,
    color: 'white',
  },
  home_message: {
    textAlign: 'right',
  },
});
