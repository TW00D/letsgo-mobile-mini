/**
 * 나중에 쓸 스크린
 */

// import React, { useState } from "react"
// import styled from "styled-components/native"
// import LetsgoTopBar from "../../components/LetsgoTopBar"
// import { colors } from "../../styles/colors"
// import { LetsgoTextInput } from "../../components/LetsgoTextInput"
// import { LetsgoButton } from "../../components/LetsgoButton"
// import { Background } from "../../utils/UtilViews"

// interface SignupVerificationScreenProps {
//     navigation : any
// }

// const SignupVerificationScreen: React.FC<SignupVerificationScreenProps> = ({navigation}) => {
//     const [ isAbled, setAbled ] = useState(true) // 임시
//     const [ verification, setVerification ] = useState('')

//     return (
//         <Background>
//             <LetsgoTopBar title="" onPress={() => {navigation.goBack()}}/>
//             <Title1>문자로 받은</Title1>
//             <Title2>인증번호를 입력해주세요</Title2>
//             <LetsgoTextInput label="6자리 숫자" value={verification}/>
//             <Spacer/>
//             <LetsgoButton title="레츠고!" isAbled={isAbled} onPress={() => {navigation.navigate('')}}/>
//         </Background>
//     );
// }

// const Title1 = styled.Text`
//     margin-top: 26;
//     margin-left: 16;
//     font-size: 26px;
//     font-weight: 500;
//     font-family: 'Pretendard';
//     color: ${colors.text_gray_900};
// `

// const Title2 = styled.Text`
//     margin-top: 10;
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

// export default SignupVerificationScreen;