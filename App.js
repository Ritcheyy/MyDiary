import 'react-native-gesture-handler';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {StatusBar} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import Home from './src/screens/Home/index';
import {setCustomText} from 'react-native-global-props';
import {CustomTextProps} from './src/assets/styles/GlobalStyles';
import {getColorByTheme} from './src/assets/styles/Theme';

setCustomText(CustomTextProps);
EStyleSheet.build();

enableScreens();
const Stack = createNativeStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark',
    };
  }

  async getPrevThemeMode() {
    try {
      const value = await AsyncStorage.getItem('@theme');
      if (value !== null) {
        this.setState({
          theme: value,
        });
      } else {
        this.setState({
          theme: 'dark',
        });
      }
    } catch (e) {
      this.setState({
        theme: 'dark',
      });
    }
  }

  async toggleTheme() {
    const newThemeVal = this.state.theme === 'dark' ? 'light' : 'dark';
    this.setState({
      theme: newThemeVal,
    });
    try {
      await AsyncStorage.setItem('@theme', newThemeVal);
    } catch (e) {
      // saving error
    }
  }

  render() {
    return (
      <NavigationContainer>
        <StatusBar
          backgroundColor={getColorByTheme(this.state.theme)}
          barStyle={getColorByTheme(this.state.theme, 'statusBar')}
        />
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            initialParams={{
              theme: this.state.theme,
              toggleTheme: this.toggleTheme.bind(this),
            }}
            // options={({navigation: {setParams}, route}) => ({
            // toggleTheme: this.toggleTheme.bind(this),
            // if (route.params.theme !== this.state.theme) {
            //   setParams({
            //     theme: this.state.theme,
            //   });
            // }
            //})}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
