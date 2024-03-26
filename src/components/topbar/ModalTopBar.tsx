import styled from "styled-components/native"
import { Spacer } from "../../utils/UtilViews";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../assets/colors/colors";

type ModalTopBarType = {
    title: string
}

const ModalTopBar = ({title}: ModalTopBarType) => {
    const navigation = useNavigation();

    return (
        <View>
            <Background>
                <TouchableOpacity onPress={() => {navigation.goBack()}}>
                    <SubButtonText>취소</SubButtonText>
                </TouchableOpacity>
                <Spacer/>
                <Title>{title}</Title>
                <Spacer/>
                <SubButtonText style={{color: colors.white}}>취소</SubButtonText>
            </Background>
            <Line/>
        </View>
        
    );
}

const Background = styled.View`
    height: 56px;
    margin-left: 16px;
    margin-right: 16px;
    align-items: center;
    flex-direction: row;
    background-color: ${colors.white};
`

const Title = styled.Text`
    font-size: 18px;
`

const SubButtonText = styled.Text`
    font-size: 18px;
`

const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${colors.line_gray_50};
`

export default ModalTopBar;