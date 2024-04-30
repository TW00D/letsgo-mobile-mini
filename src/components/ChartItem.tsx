import styled from "styled-components/native";
import { Spacer } from "../utils/UtilViews";
import { colors } from "../assets/colors/colors";

interface CharItemType {
    item: any
}

const ChartItem = ({item}: CharItemType) => {
    return (
        <Frame>
            <RankText>{item.rank}</RankText>
            <Title>{item.keyword}</Title>
            <Spacer/>
            <AmountText>{item.amount}</AmountText>
        </Frame>
    );
}

export default ChartItem;

const Frame = styled.View`
    flex-direction: row;
    margin-left: 16px;
    margin-right: 16px;
    height: 31px;
    align-items: center;
    border-bottom-color: ${colors.line_gray_50};
    border-bottom-width: 1px;
`

const RankText = styled.Text`
    font-size: 16px;
    margin-left: 12px;
`

const Title = styled.Text`
    font-size: 16px;
    margin-left: 33px;
`

const AmountText = styled.Text`
    font-size: 16px;
    margin-right: 12px;
`