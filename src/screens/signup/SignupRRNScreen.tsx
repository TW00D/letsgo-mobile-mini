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

// interface SignupRRNScreenProps {
//     navigation : any
// }

// const SignupRRNScreen: React.FC<SignupRRNScreenProps> = ({navigation}) => {
//     const [ isAbled, setAbled ] = useState(true) // 임시
//     const [ RRN, setRRN ] = useState('')

//     return (
//         <Background>
//             <LetsgoTopBar title="" onPress={() => {navigation.goBack()}}/>
//             <Title>주민등록번호를 입력해주세요</Title>
//             <LetsgoTextInput label="주민등록번호" value={RRN}/>
//             <Margin35/>
//             <LetsgoTextInput label="통신사" value={"SKT"}/>
//             <Margin35/>
//             <LetsgoTextInput label="이름" value={"내 이름"}/>
//             <Spacer/>
//             <LetsgoButton title="다음" isAbled={isAbled} onPress={() => {navigation.navigate('SignupNumber')}}/>
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

// const Margin35 = styled.View`
//     height: 35;
// `

// export default SignupRRNScreen;