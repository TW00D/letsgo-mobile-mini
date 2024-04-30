import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import LetsgoTopBar from "../components/topbar/LetsgoTopBar";
import { Background } from "../utils/UtilViews";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavigationParamList } from "../navigation/NavigationParamList";
import styled from "styled-components/native";
import ChartItem from "../components/ChartItem";
import { getTrands } from "../services/apis/CommunityApi";
import { useEffect, useState } from "react";

const TrandScreen =  () => {
    const navigation = useNavigation<StackNavigationProp<NavigationParamList>>(); 
    const [ list, setList ] = useState([])
    const [ rank, setRank ] = useState(1)

    // PROBLEM : 렌더링이 여러번 되는 탓인지, 함수가 계속 사용됨.

    useEffect(() => {
        async function a() {
            setList(await getTrands())
        }
        a();
    })

    return (
        <Background>
            <LetsgoTopBar title='' onPress={() => {navigation.goBack()}}/>
            <Title>실시간 트렌드 차트</Title>
            <FlatList
                style={{marginTop: 20}}
                data={list}
                renderItem={(item) => renderItem(item)}
            />
        </Background>
    );
}

const Title = styled.Text`
    font-size: 24px;
    margin-left: 16px;
    margin-top: 10px;
`

const renderItem = ({item}: any) => {
    return(
        <ChartItem item={item}/>
    )
}

export default TrandScreen;