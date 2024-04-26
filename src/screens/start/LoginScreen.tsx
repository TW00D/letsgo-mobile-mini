import React, { useState } from "react"
import { Platform, View } from "react-native"
import styled from "styled-components/native"
import { Background, Row, Spacer } from "../../utils/UtilViews"
import LetsgoTopBar from "../../components/topbar/LetsgoTopBar"
import { colors } from "../../assets/colors/colors";
import { LetsgoTextInput } from "../../components/textinput/LetsgoTextInput"
import { LetsgoButton } from "../../components/button/LetsgoButton"
import { login } from "../../services/apis/AuthApi"
import { KeyboardAvoidingView } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { setProfile } from "../../redux/slices/ProfileSlice"
import { getUserId } from "../../services/apis/CommunityApi"

interface LoginScreenProps {
    navigation : any
}

export const LoginScreen : React.FC<LoginScreenProps> = ({navigation}) => {
    const [ isIdFilled, setIsIdFilled ] = useState(false) // 임시
    const [ isPwdFilled, setIsPwdFilled ] = useState(false) // 임시
    const [ id, setId ] = useState('')
    const [ pwd, setPwd ] = useState('')

    

    return (
        <Background>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={{flex: 1}}>
                <LetsgoTopBar title="" onPress={() => {navigation.goBack()}}/>
                <Title>로그인해주세요</Title>
                <LetsgoTextInput 
                    label="아이디" 
                    value={id}
                    setValue={setId} 
                    onChange={text => {
                        if (text.length > 0) setIsIdFilled(true)
                        else setIsIdFilled(false)
                    }}/>
                <View style={{height: 35}}/>
                <LetsgoTextInput 
                    label="비밀번호" 
                    value={pwd} 
                    isNotLogin={false}
                    setValue={setPwd} 
                    isSecure={true}
                    onChange={text => {
                        if (text.length > 0) setIsPwdFilled(true)
                        else setIsPwdFilled(false)
                    }}/>
                <Spacer/>
                <LetsgoButton title="레츠고!" isAbled={isIdFilled && isPwdFilled} onPress={() => {
                    // navigation.navigate('BottomNavigationContainer')
                    login({username: 'jakkikki', password: 'asdfqwer1234'}, navigation)
                    // login({username: id, password: pwd}, navigation)
                    }}/>
            </KeyboardAvoidingView>
        </Background>
    );
}

const Title = styled.Text`
    margin-top: 26px;
    margin-bottom: 40px;
    margin-left: 16px;
    font-size: 26px;
    font-weight: 500;
    font-family: 'Pretendard';
    color: ${colors.text_gray_900};
`
