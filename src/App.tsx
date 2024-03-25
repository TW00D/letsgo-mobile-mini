import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import { CommunityScreen } from './screens/CommunityScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WriteScreen } from './screens/WriteScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StartScreen } from './screens/start/StartScreen';
import { LoginScreen } from './screens/start/LoginScreen';
import { BottomNavigationContainerScreen } from './screens/BottomNavigationContainerScreen';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { createStackNavigator } from '@react-navigation/stack';
import SignupIdScreen from './screens/signup/SignupIdScreen';
import SignupPasswordScreen from './screens/signup/SignupPasswordScreen';
import PostModal from './screens/PostModal';
import EncryptedStorage from 'react-native-encrypted-storage';


const Container = styled.View`
  flex: 1;
`;

const Stack = createStackNavigator()

const App = () => {
  const accessToken = EncryptedStorage.getItem('accessToken');

  return (
    <Provider store={store}>
      <Container>
        <NavigationContainer>
          <Stack.Navigator 
            screenOptions={{
              headerShown: false
            }}
            initialRouteName={accessToken != null ? "BottomNavigationContainer" : "Start"}>
            <Stack.Screen name="Start" component={StartScreen} />
            <Stack.Screen name="SignupId" component={SignupIdScreen} />
            <Stack.Screen name="SignupPassword" component={SignupPasswordScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="BottomNavigationContainer" component={BottomNavigationContainerScreen} />
            <Stack.Screen name="PostModal" component={PostModal} options={{ presentation: 'modal' }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Container>
    </Provider>
  );
};

export default App;
