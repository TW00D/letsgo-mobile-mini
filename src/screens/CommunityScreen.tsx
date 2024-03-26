import styled from "styled-components/native"
import { CommunityTopbar } from "../components/topbar/CommuntyTopBar"
import { Modal, Text, TouchableOpacity, View } from "react-native"
import { useEffect, useState } from "react"
import { colors } from "../assets/colors/colors"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import { CommunityListView } from "../components/CommunityListView"
import { getSampleList } from "../services/getSamplelist"
import { CommunityItemData } from "../types/CommunityItemData"

export const CommunityScreen = () => {

    // const Stack = createNativeStackNavigator();

    const communityType = useSelector((state : RootState ) => state.communityTypeSlice.communityType)
    const viewType = useSelector((state : RootState ) => state.viewTypeSlice.viewType)
    const theme = useSelector((state : RootState ) => state.themeSlice.theme)

    const [listViewState, setListViewState] = useState("Loading")
    const [dataList, setDataList] = useState<CommunityItemData[]>([]) // dataList 상태 추가

    useEffect(() => {

        setListViewState("Loading")

        getSampleList(getCommunityType(), viewType)
            .then((dataList) => {
                setDataList(dataList);
                setListViewState("Loaded"); 
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
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