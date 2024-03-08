import React, { useState } from "react"
import { View } from "react-native"
import styled from "styled-components/native"
import { LetsgoButton } from "../components/LetsgoButton"
import { LetsgoTextInput } from "../components/LetsgoTextInput"
import { colors } from "../styles/colors"
import { PaddingView } from "../utils/PaddingView"
import LetsgoTopBar from "../components/LetsgoTopBar"

interface StartScreenProps {
    navigation : any
}

export const StartScreen : React.FC<StartScreenProps> = ({navigation}) => {
    const [name, setName] = useState('')

    return (
        <Background>
            <LetsgoTopBar title="로그인" onPress={() => {navigation.goBack()}}/>
            <LetsgoButton title="로그인" onPress={() => {navigation.navigate("Login")}}/>
            <View style={{height: 30}}/>
            <LetsgoTextInput></LetsgoTextInput>
        </Background>
    );
}

const Background = styled.SafeAreaView`
    flex: 1;
    background-color: ${colors.white};
`

const WelcomeText = styled.Text`
    font-size: 10px;
`