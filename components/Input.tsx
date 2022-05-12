import React, { FC, RefObject } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface Props {
  icon: keyof typeof FontAwesome.glyphMap;
  placeholder: string;
  inputRef?: RefObject<TextInput>;
  showError?: boolean;
  onChangeText: (text: string) => void;
}

const Input: FC<Props> = (props) => {
  return (
    <View style={[styles.container, props.showError && styles.inputError]}>
      <View style={styles.iconContainer}>
        <FontAwesome
          name={props.icon}
          size={22}
          color="#555"
        />
      </View>
      <TextInput 
        placeholderTextColor="#555"
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        style={styles.input}
        ref={props.inputRef}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: '#e0e0e0'
  },
  iconContainer: {
    minWidth: 30,
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    marginLeft: 5,
    paddingLeft: 5,
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 2,
  },
})

export default Input;