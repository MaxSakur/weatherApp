import React, {FC} from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import {styles} from './style';

interface IButton {
  onPress: () => void;
  title: string;
  disabled?: boolean;
  style?: ViewStyle;
}

export const Button: FC<IButton> = ({onPress, style, title, disabled}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, disabled && styles.container_disabled, style]}
      onPress={onPress}>
      <Text style={[styles.title, disabled && styles.title_disabled]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
