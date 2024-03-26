import styled from "styled-components/native"
import { CommunityTopbar } from "../components/topbar/CommuntyTopBar"
import { Modal, Text, TouchableOpacity, View } from "react-native"
import { colors } from "../assets/colors/colors"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer, useNavigation } from "@react-navigation/native"
import { CommunityListView } from "../components/CommunityListView"
import { CommunityItemData } from "../types/CommunityItemData"
import { StackNavigationProp } from "@react-navigation/stack"
import { NavigationParamList } from "../navigation/NavigationParamList"
import { getSampleList } from "../services/getSamplelist"

export const CommunityScreen = () => {

    const communityType = useSelector((state : RootState ) => state.communityTypeSlice.communityType)
    const viewType = useSelector((state : RootState ) => state.viewTypeSlice.viewType)
    const theme = useSelector((state : RootState ) => state.themeSlice.theme)

    const [listViewState, setListViewState] = useState("Loading");
    const [dataList, setDataList] = useState<CommunityItemData[]>([]) // dataList 상태 추가

    useEffect(() => {
        
        setListViewState(() => "Loading")
        
        getSampleList(getCommunityType(), viewType)
            .then((dataList) => {
                setDataList(dataList);
                setListViewState("Loaded"); 
            })
            .catch((error) => {
                setListViewState("Error"); 
            });

    }, [communityType, viewType, theme]);

    const Background = styled.View`
        background-color: #AAA;
        flex : 1;
        
    `

    const Container = styled.View`
        background-color: #AAA;
        flex : 15;
    `

    function getCommunityType() {

        if (communityType === "Total") return "통합"
        else {
            switch(theme){
                case "fashion" : return "패션"
                case "animation" : return "애니"
                case "game" : return "게임"
                case "relationship" : return "연애"
                case "sports" : return "스포츠" 
                default : return "오류"
            }
        }

    }

    return (
        <Background>
            <CommunityTopbar/>

            <Container>

                { listViewState === "Loading" ? 
                    (<View>
                        <Text>Loading....</Text>
                    </View>) : 
                    (<CommunityListView dataList={dataList} communityType={getCommunityType()}/>)
                }
            </Container>
        </Background> 
        
    )    
}