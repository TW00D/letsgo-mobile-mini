import styled from "styled-components/native"
import { CommunityTopbar } from "../components/CommuntyTopBar"
import { Modal, Text, TouchableOpacity, View } from "react-native"
import { useState } from "react"
import { colors } from "../assets/colors"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import { CommunityListView } from "../components/CommunityListView"

export const CommunityScreen = () => {

    // const Stack = createNativeStackNavigator();

    const communityType = useSelector((state : RootState ) => state.communityTypeSlice.communityType)
    const viewType = useSelector((state : RootState ) => state.viewTypeSlice.viewType)
    const theme = useSelector((state : RootState ) => state.themeSlice.theme)
    
    const Background = styled.View`
        background-color: #AAA;
        flex : 1;
        
    `

    const Container = styled.View`
        background-color: #AAA;
        flex : 15;
    `

    return (
        <Background>
            <CommunityTopbar/>

            

            <Container>
                <CommunityListView/>
            </Container>
        </Background> 
        
    )    
}