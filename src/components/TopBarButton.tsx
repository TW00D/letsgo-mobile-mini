import { Text, TouchableOpacity, View } from "react-native"
import { colors } from "../assets/colors"
import styled from "styled-components/native"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { setViewType } from "../redux/slices/ViewTypeSlice"

interface SelectButtonProps {
    type : string
}

export const TopBarButton = () => {

    const viewType = useSelector((state : RootState ) => state.viewTypeSlice.viewType)
    const dispatch = useDispatch();

    const SelectButton = styled.TouchableOpacity<SelectButtonProps>`
        background-color: ${props => props.type === viewType ? colors.violet : colors.gray_50};
        flex:14;
        height: auto;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        margin-bottom: 10px;
    `

    const SelectText = styled.Text<SelectButtonProps>`
        font-size: 14px;
        color:${props => props.type === viewType ? colors.white : colors.text_gray_900};
        font-family: "pretendard_semibold";
        padding-top: 9px;
        padding-bottom: 9px;
    `

    return (
        <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:12}}>
            <SelectButton type={"popularity"} onPress={() => {dispatch(setViewType("popularity"))}}>
                <SelectText type={"popularity"}>인기</SelectText>
            </SelectButton>
                    
            <View style={{flex:1}}></View>

            <SelectButton type={"recent"} onPress={() => {dispatch(setViewType("recent"))}}>
                <SelectText type={"recent"}>최신</SelectText>
            </SelectButton>
        </View>     
    )
    
}