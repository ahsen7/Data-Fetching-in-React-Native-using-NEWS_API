import { Colors } from '@/constants/Colors';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  type?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
}

const CustomButton: React.FC<Props> = ({ title, onPress, type = 'primary', disabled = false }) => {
  const buttonStyles = [
    styles.button,
    type === 'primary' && styles.primary,
    type === 'secondary' && styles.secondary,
    type === 'danger' && styles.danger,
    disabled && styles.disabled,
  ];

  const textStyles = [
    styles.text,
    disabled && styles.disabledText,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  primary: {
    backgroundColor: Colors.tint,
  },
  secondary: {
    backgroundColor: '#6c757d',
  },
  danger: {
    backgroundColor: '#dc3545',
  },
  disabled: {
    backgroundColor: '#d6d6d6',
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledText: {
    color: '#a1a1a1',
  },
});
