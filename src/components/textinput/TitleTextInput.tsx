import { Dispatch, SetStateAction } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { colors } from "../../assets/colors/colors";

type TitleTextInputType = {
    value: string,
    setValue: Dispatch<SetStateAction<string>>,
    placeholder: string
}

const TitleTextInput = ({value, setValue, placeholder}: TitleTextInputType) => {

    const onChangeText = (text: string) => {
        setValue(text)
    }

    return (
        <View>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}/>
            
        </View>
        
        
    );
}

const TextInput = styled.TextInput`
    color: ${colors.text_gray_900};
    font-size: 20px;
    margin-left: 16px;
    margin-top: 24px;
    margin-right: 16px;
`

export default TitleTextInput;