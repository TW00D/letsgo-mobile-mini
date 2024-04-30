import { FlatList, SafeAreaView, Text, View } from "react-native";
import LetsgoTopBar from "../components/topbar/LetsgoTopBar";
import { Background } from "../utils/UtilViews";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavigationParamList } from "../navigation/NavigationParamList";
import styled from "styled-components/native";
import ChartItem from "../components/ChartItem";

const TrandScreen = () => {
    const navigation = useNavigation<StackNavigationProp<NavigationParamList>>(); 

    return (
        <Background>
            <LetsgoTopBar title='' onPress={() => {navigation.goBack()}}/>
            <Title>실시간 트렌드 차트</Title>
            <FlatList
                style={{marginTop: 20}}
                data={TEST_DATA}
                renderItem={(item) => renderItem(item)}
                keyExtractor={item => item.rank}
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

const TEST_DATA = [
    {
        rank: '1',
        keyword: 'test',
        amount: '1000'
    },
    {
        rank: '2',
        keyword: 'test',
        amount: '1000'
    },
    {
        rank: '3',
        keyword: 'test',
        amount: '1000'
    },
    {
        rank: '4',
        keyword: 'test',
        amount: '1000'
    },
    {
        rank: '5',
        keyword: 'test',
        amount: '1000'
    }
]

export default TrandScreen;