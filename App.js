/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
  View,
} from 'react-native';
import {LocalNotification} from './src/services/localPushController';

const App = () => {
  const handlePushNotification = () => {
    LocalNotification();
    console.log('click');
  };
  return (
    <SafeAreaView>
      <StatusBar />
      <Text> Test PushNotification </Text>
      <View>
        <Button
          title={'local Push Notification'}
          onPress={handlePushNotification}
        />
      </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic" />
    </SafeAreaView>
  );
};

export default App;
