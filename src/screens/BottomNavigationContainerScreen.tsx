import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CommunityScreen } from './CommunityScreen';
import { WriteScreen } from './WriteScreen';
import { ProfileScreen } from './ProfileScreen';

const Tab = createBottomTabNavigator();

const Container = styled.View`
  flex: 1;
`;  

export const BottomNavigationContainerScreen = () => {
  return (
    <Container>
        <Tab.Navigator 
          screenOptions={{
            headerShown: false
          }}
          initialRouteName="Community">

          <Tab.Screen name="Community" component={CommunityScreen} />
          <Tab.Screen name="Write" component={WriteScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />

        </Tab.Navigator>
    </Container>
  );
};