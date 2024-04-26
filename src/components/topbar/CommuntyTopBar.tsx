import React, { useEffect, useState } from "react";
import { Text, View, Dimensions, StyleSheet, TouchableOpacity, Image, Button } from "react-native"
import styled from "styled-components/native"
import { colors } from "../../assets/colors/colors";
import { TopBarButton } from "../button/TopBarButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setCommunityType } from "../../redux/slices/CommunityTypeSlice";
import { CategoryButtonType, CategorySelector } from "../CategorySelector";
import { CategoryType, getCategoryList } from "../../services/apis/CommunityApi";

const TopBar = styled.View`
    flex-direction: column;
    height: auto;
    background-color: #fff;
    padding-left: 4%;
    padding-right: 4%;
    padding-bottom: 4%;
    z-index: 1;
`

interface CommunityTopbarProps {
    categoryList : CategoryButtonType[]
} 

export const CommunityTopbar = (props : CommunityTopbarProps) => {
    const switchIcon = "../../assets/images/switch.svg"

    

    const communityType = useSelector((state : RootState) => state.communityTypeSlice.communityType)
    const dispatch = useDispatch();

    const onPress = () => {
        if (communityType === "Category") dispatch(setCommunityType("Total"))
        else dispatch(setCommunityType("Category"))
    }

    const getText = () => {
        if (communityType === "Category") return "관심사 커뮤니티"
        else return "통합 커뮤니티"
    }

    return (
        <TopBar>
            <View style={{
                flexDirection:"row", 
                justifyContent: "space-between",
                alignItems: 'center',
                marginTop:10
            }}>                
                <TouchableOpacity style={{flexDirection:"row", alignItems:"center"}} onPress={() => {/*onPress()*/}} >
                    <Text style={{fontSize:16, fontFamily:"pretendard_semibold", color:colors.text_gray_900}}>{getText()}</Text>
                    <Image 
                        source={require(switchIcon)}
                        style={{
                            height:12,
                            width:12,
                            marginStart:8
                        }}
                    />
                </TouchableOpacity>
                    
                <Image 
                    source={require('../../assets/icon_search.png')}
                    style={{
                        height:0,
                        width:0
                    }}
                />

            </View>

            {communityType === "Category" ? <CategorySelector categoryList={props.categoryList} /> : <View/>}

            {/* <TopBarButton/>           */}
            

        </TopBar>
    )
    
}