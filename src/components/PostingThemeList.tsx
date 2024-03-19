import styled from "styled-components/native";
import { Row } from "../utils/UtilViews";
import { TouchableOpacity } from "react-native";
import { Dispatch } from "react";

type PostingThemeListType = {
    selected: string
    setSelect: Dispatch<React.SetStateAction<string>>
}

const PostingThemeList = ({selected, setSelect}: PostingThemeListType) => {
    const fashionIcon = selected == '패션' ? require('../assets/images/posting-buttons/img_fashion_clicked.png') : require('../assets/images/posting-buttons/img_fashion.png')
    const studyIcon = selected == '공부' ? require('../assets/images/posting-buttons/img_study_clicked.png') : require('../assets/images/posting-buttons/img_study.png')
    const musicIcon = selected == '음악' ? require('../assets/images/posting-buttons/img_music_clicked.png') : require('../assets/images/posting-buttons/img_music.png')
    const animeIcon = selected == '애니' ? require('../assets/images/posting-buttons/img_anime_clicked.png') : require('../assets/images/posting-buttons/img_anime.png')
    const gameIcon = selected == '게임' ? require('../assets/images/posting-buttons/img_game_clicked.png') : require('../assets/images/posting-buttons/img_game.png')
    const loveIcon = selected == '사랑' ? require('../assets/images/posting-buttons/img_love_clicked.png') : require('../assets/images/posting-buttons/img_love.png')
    const strengthIcon = selected == '운동' ? require('../assets/images/posting-buttons/img_strength_clicked.png') : require('../assets/images/posting-buttons/img_strength.png')

    return (
        <Row style={{marginTop: 24, marginLeft: 16}}>
            <TouchableOpacity onPress={() => { setSelect('패션') }}>
                <ThemeIcon source={fashionIcon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setSelect('공부') }}>
                <ThemeIcon source={studyIcon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setSelect('음악') }}>
                <ThemeIcon source={musicIcon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setSelect('애니') }}>
                <ThemeIcon source={animeIcon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setSelect('게임') }}>
                <ThemeIcon source={gameIcon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setSelect('사랑') }}>
                <ThemeIcon source={loveIcon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setSelect('운동') }}>
                <ThemeIcon source={strengthIcon}/>
            </TouchableOpacity>
        </Row>
    );
}

const ThemeIcon = styled.Image`
    width: 40px;
    height: 40px;
    margin-right: 5px;
`

export default PostingThemeList;