import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CommunityScreen } from './CommunityScreen';
import { WriteScreen } from './WriteScreen';
import { ProfileScreen } from './ProfileScreen';
import PostModal from './modal/PostModal';


const Container = styled.View`
  flex: 1;
`;  

export const BottomNavigationContainerScreen = () => {
  
const Tab = createBottomTabNavigator();

  return (
    <Container>
        <Tab.Navigator 
          screenOptions={{
            headerShown: false
          }}
          initialRouteName="Community">

          <Tab.Screen name="Community" component={CommunityScreen} />
          <Tab.Screen name="Write" component={WriteScreen} 
            listeners={({ navigation }) => ({
              tabPress: event => {
                event.preventDefault();
                navigation.navigate('PostModal')
              }
            })}/>
          <Tab.Screen name="Profile" component={ProfileScreen} />

        </Tab.Navigator>
    </Container>
  );
};