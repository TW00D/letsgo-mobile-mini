import styled from "styled-components/native"
import { PaddingView } from "../utils/PaddingView";
import React, { Component, useState } from "react";
import { Image, StyleSheet } from "react-native";

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';
import { colors } from "../styles/colors";

type LetsgoTextInputType = {
    label: string,
    value: string,
    setValue: any,
    isSecure: boolean,
    onChange: () => void
}

export const LetsgoTextInput = (props: LetsgoTextInputType) => {
    const [isFocused, setFocused] = useState(false)

    const onChangeText = (inputText: string) => {
        props.setValue(inputText)
    }

    const styles = StyleSheet.create({
        textInput: {
            borderBottomWidth: 2,
            borderBlockColor: isFocused ? colors.primary : colors.line_gray_100,
            padding: 14,
        },
        label: {
            marginBottom: 14,
            color: isFocused ? colors.primary : colors.hint_gray_300
        },
        text: {
            fontSize: 20,
            color: colors.text_gray_900
        }
    })

    return (
        <PaddingView>
            <Sae
                style={styles.textInput}
                label={props.label}
                labelStyle={styles.label}
                inputStyle={styles.text}
                iconClass={FontAwesomeIcon}
                inputPadding={10}
                labelHeight={20}
                value={props.value}
                onChangeText={onChangeText}
                onChange={props.onChange}
                // TextInput props
                autoCapitalize={'none'}
                autoCorrect={false}
                onFocus={() => {setFocused(true)}}
                onBlur={() => {setFocused(false)}}
                secureTextEntry={props.isSecure}
            />
        </PaddingView>
    );
}
