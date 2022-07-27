# validate-phone-number-react-native


## Telephone Number Validation Npm

Npm Link : https://www.npmjs.com/package/validate-phone-number-react-native

## Install

```
npm i validate-phone-number-react-native

```

## Example

```
import React, {useContext, useState} from 'react';
import {Button, View, StyleSheet, ToastAndroid, Keyboard} from 'react-native';

import Input from '../components/Input';
import COLORS from '../const/colors';

const App = ({navigation}) => {
  const [inputs, setInputs] = React.useState({
    phone: '',
  });
  const [errors, setErrors] = React.useState({
    phone: '',
  });
  const validate = () => {
    Keyboard.dismiss();
    const validatePhoneNumber = require('validate-phone-number-react-native');

    let phoneNumberIsValidated = validatePhoneNumber(inputs.phone);
    if (phoneNumberIsValidated) {
      ToastAndroid.show('Successful!', ToastAndroid.SHORT);
    } else {
      handleError('Please input valid phone number', 'phone');
    }
  };
  const handleOnChange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (errorMessage, input) => {
    setErrors(prevState => ({...prevState, [input]: errorMessage}));
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Input
          onChangeText={text => handleOnChange(text, 'phone')}
          error={errors.phone}
          onFocus={() => {
            handleError(null, 'phone');
          }}
          keyboardType="numeric"
          label="Phone Number"
          placeholder="Enter your phone number"
        />
        <Button title="Validation" onPress={validate} />
        <View style={{flexDirection: 'row', marginTop: 20}}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  wrapper: {
    width: '80%',
  },
});

export default App;


```
