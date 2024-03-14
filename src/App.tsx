import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import { CommunityScreen } from './screens/CommunityScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WriteScreen } from './screens/WriteScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StartScreen } from './screens/StartScreen';
import { LoginScreen } from './screens/LoginScreen';
import { BottomNavigationContainerScreen } from './screens/BottomNavigationContainerScreen';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { createStackNavigator } from '@react-navigation/stack';
import SignupIdScreen from './screens/signup/SignupIdScreen';
import SignupPasswordScreen from './screens/signup/SignupPasswordScreen';
import SignupNameScreen from './screens/signup/SignupNameScreen';
import SignupMCScreen from './screens/signup/SignupMCScreen';
import SignupRRNScreen from './screens/signup/SignupRRNScreen';
import SignupNumberScreen from './screens/signup/SignupNumberScreen';
import SignupCheckScreen from './screens/signup/SignupCheckScreen';
import SignupVerificationScreen from './screens/signup/SignupVerificationScreen';


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
            <Stack.Screen name="SignupId" component={SignupIdScreen} />
            <Stack.Screen name="SignupPassword" component={SignupPasswordScreen} />
            <Stack.Screen name="SignupName" component={SignupNameScreen} />
            <Stack.Screen name="SignupMC" component={SignupMCScreen} />
            <Stack.Screen name="SignupRRN" component={SignupRRNScreen} />
            <Stack.Screen name="SignupNumber" component={SignupNumberScreen} />
            <Stack.Screen name="SignupCheck" component={SignupCheckScreen} />
            <Stack.Screen name="SignupVerification" component={SignupVerificationScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="BottomNavigationContainer" component={BottomNavigationContainerScreen} />

          </Stack.Navigator>
        </NavigationContainer>
      </Container>
    </Provider>
  );
};

export default App;
