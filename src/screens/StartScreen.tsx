import React from "react"
import { SafeAreaView } from "react-native"
import styled from "styled-components/native"
import { LetsgoButton } from "../components/LetsgoButton"

interface StartScreenProps {
    navigation : any
}

export const StartScreen : React.FC<StartScreenProps> = ({navigation}) => {

    return (
        <SafeAreaView>
            <WelcomeText>This is StartScreen Screen</WelcomeText>
            <LetsgoButton title="로그인" onPress={() => {navigation.navigate("Login")}}/>
        </SafeAreaView>
    )    
}

const WelcomeText = styled.Text`
    font-size: 10px;
`