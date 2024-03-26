import { Dispatch, SetStateAction } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { colors } from "../../assets/colors/colors";

type ContentTextInputType = {
    value: string,
    setValue: Dispatch<SetStateAction<string>>,
    placeholder: string,
}

const ContentTextInput = ({value, setValue, placeholder}: ContentTextInputType) => {

    const onChangeText = (text: string) => {
        setValue(text)
    }

    return (
        <View style={{}}>
            <TextInput
                autoCorrect={false}
                spellCheck={false}
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
`


export default ContentTextInput;