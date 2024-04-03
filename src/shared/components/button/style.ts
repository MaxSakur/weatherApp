import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    padding: sizes.m,
    backgroundColor: colors.accent,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  container_disabled: {
    backgroundColor: colors.light_grey,
  },
  title: {
    color: colors.white,
  },
  title_disabled: {
    color: colors.black,
  },
});
