import { Dispatch, SetStateAction } from "react";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";
import { View } from "react-native";

type ContentTextInputType = {
    value: string,
    setValue: Dispatch<SetStateAction<string>>,
    placeholder: string
}

const ContentTextInput = ({value, setValue, placeholder}: ContentTextInputType) => {

    const onChangeText = (text: string) => {
        setValue(text)
    }

    return (
        <View>
            <TextInput
                multiline = {true}  
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}/>
        </View>
        
        
    );
}

const TextInput = styled.TextInput`
    color: ${colors.text_gray_900};
    font-size: 16px;
    margin-left: 16px;
    margin-top: 16px;
    margin-right: 16px;
`

export default ContentTextInput;