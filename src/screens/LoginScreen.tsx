import React from "react"
import { View } from "react-native"
import styled from "styled-components/native"

interface LoginScreenProps {
    navigation : any
}

export const LoginScreen : React.FC<LoginScreenProps> = ({navigation}) => {
    
    const WelcomeText = styled.Text`
        font-size: 10px;
    `
    const NextButton = styled.Button`
        width: 70%;
        height: 10%;
    `


    return (
        <View>

            <WelcomeText>This is LoginScreen Screen</WelcomeText>

            <NextButton title="시작하기" onPress={() => {navigation.navigate("BottomNavigationContainer")}}></NextButton>
        </View>
        
    )    
}