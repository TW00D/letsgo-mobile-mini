import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import { CommunityScreen } from './screens/CommunityScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WriteScreen } from './screens/WriteScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './screens/LoginScreen';
import { StartScreen } from './screens/StartScreen';
import { BottomNavigationContainerScreen } from './screens/BottomNavigationContainerScreen';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { createStackNavigator } from '@react-navigation/stack';


const Container = styled.View`
  flex: 1;
`;

const App = () => {
  
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <Container>
        <NavigationContainer>
          <Stack.Navigator 
            screenOptions={{
              headerShown: false
            }}
            initialRouteName="Start">

            <Stack.Screen name="Start" component={StartScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="BottomNavigationContainer" component={BottomNavigationContainerScreen} />

          </Stack.Navigator>
        </NavigationContainer>
      </Container>
    </Provider>

  );
};

export default App;
