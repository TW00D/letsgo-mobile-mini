import React from "react"
import { View } from "react-native"
import styled from "styled-components/native"

interface StartScreenProps {
    navigation : any
}

export const StartScreen : React.FC<StartScreenProps> = ({navigation}) => {
    
    const WelcomeText = styled.Text`
        font-size: 10px;
    `
    const NextButton = styled.Button`
        width: 70%;
        height: 10%;
    `


    return (
        <View>

            <WelcomeText>This is StartScreen Screen</WelcomeText>

            <NextButton title="Login" onPress={() => {navigation.navigate("Login")}}></NextButton>
        </View>
        
    )    
}