// import React, { useState } from "react"
// import styled from "styled-components/native"
// import LetsgoTopBar from "../../components/LetsgoTopBar"
// import { colors } from "../../styles/colors"
// import { LetsgoTextInput } from "../../components/LetsgoTextInput"
// import { LetsgoButton } from "../../components/LetsgoButton"

// interface SignupCheckScreenProps {
//     navigation : any
// }

// const SignupCheckScreen: React.FC<SignupCheckScreenProps> = ({navigation}) => {
//     const [ isAbled, setAbled ] = useState(true) // 임시
//     const name = "내이름"

//     return (
//         <Background>
//             <LetsgoTopBar title="" onPress={() => {navigation.goBack()}}/>
//             <Title>{name}님 정보가 맞나요?</Title>
//             <LetsgoTextInput label="휴대폰 번호" value={"01067688772"}/>
//             <Margin35/>
//             <LetsgoTextInput label="주민등록번호" value={"060103 - 3"}/>
//             <Margin35/>
//             <LetsgoTextInput label="통신사" value={"SKT"}/>
//             <Margin35/>
//             <LetsgoTextInput label="이름" value={"내 이름"}/>
//             <Spacer/>
//             <LetsgoButton title="다음" isAbled={isAbled} onPress={() => {navigation.navigate('SignupVerification')}}/>
//         </Background>
//     );
// }

// const Background = styled.SafeAreaView`
//     flex: 1;
//     background-color: ${colors.white};
// `

// const Title = styled.Text`
//     margin-top: 26;
//     margin-bottom: 40;
//     margin-left: 16;
//     font-size: 26;
//     font-weight: 500;
//     font-family: 'Pretendard';
//     color: ${colors.text_gray_900};
// `

// const Spacer = styled.View`
//     flex: 1;
// `

// const Margin35 = styled.View`
//     height: 35;
// `

// export default SignupCheckScreen;