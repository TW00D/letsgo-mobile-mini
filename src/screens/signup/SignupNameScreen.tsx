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

// interface SignupNameScreenProps {
//     navigation : any
// }

// const SignupNameScreen: React.FC<SignupNameScreenProps> = ({navigation}) => {
//     const [ isAbled, setAbled ] = useState(true) // 임시
//     const [ name, setName ] = useState('')

//     return (
//         <Background>
//             <LetsgoTopBar title="" onPress={() => {navigation.goBack()}}/>
//             <Title>이름을 알려주세요</Title>
//             <LetsgoTextInput label="이름" value={name}/>
//             <Spacer/>
//             <LetsgoButton title="다음" isAbled={isAbled} onPress={() => {navigation.navigate('SignupMC')}}/>
//         </Background>
//     );
// }

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



// export default SignupNameScreen;