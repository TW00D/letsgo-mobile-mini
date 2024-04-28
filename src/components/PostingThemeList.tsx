import styled from "styled-components/native";
import { Row } from "../utils/UtilViews";
import { Dimensions, Image, Text, TouchableOpacity } from "react-native";
import { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { CategoryButtonType } from "./CategorySelector";
import { ScrollView } from "react-native-gesture-handler";
import { setCategory } from "../redux/slices/CategorySlice";
import { colors } from "../assets/colors/colors";

type PostingThemeListType = {
    selected: string
    setSelect: Dispatch<React.SetStateAction<string>>
}

interface CategorySelectorProps {
    categoryList : CategoryButtonType[]
}

const PostingThemeList = (props : CategorySelectorProps) => {

    const deviceWidth = Dimensions.get('window').width;
    const imageWidth = deviceWidth * 0.13;
    
    const category = useSelector((state : RootState) => state.categorySlice.category)
    const dispatch = useDispatch();

    return (

        <ScrollView showsHorizontalScrollIndicator={false} style={{marginTop:10}} horizontal>

        { 
            props.categoryList.map((item) => (
                <TouchableOpacity activeOpacity={0.05} key={item.name} onPress={() => {
                    dispatch(setCategory(
                        {name : item.name, id : item.id}
                    ))
                }} style={{alignItems:'center', marginEnd:imageWidth * 0.1 }}>
                    <Image 
                        source={ item.name === category.name ? item.selectedImage : item.image}
                        style={{
                            height:imageWidth,
                            width:imageWidth,
                            marginBottom:imageWidth*0.05
                        }}
                    />

                    <Text style={{fontFamily:'pretendard_medium', fontSize:11, color:item.name === category.name ? colors.text_gray_900 : colors.hint_gray_300}}>{item.name}</Text>
                </TouchableOpacity>    
            ))
        }
        </ScrollView> 
        
    );

// <Row style={{marginTop: 24, marginLeft: 16}}>
        //     <TouchableOpacity onPress={() => { setSelect('패션') }}>
        //         <ThemeIcon source={fashionIcon}/>
        //     </TouchableOpacity>
        //     <TouchableOpacity onPress={() => { setSelect('공부') }}>
        //         <ThemeIcon source={studyIcon}/>
        //     </TouchableOpacity>
        //     <TouchableOpacity onPress={() => { setSelect('덕질') }}>
        //         <ThemeIcon source={musicIcon}/>
        //     </TouchableOpacity>
        //     <TouchableOpacity onPress={() => { setSelect('애니') }}>
        //         <ThemeIcon source={animeIcon}/>
        //     </TouchableOpacity>
        //     <TouchableOpacity onPress={() => { setSelect('게임') }}>
        //         <ThemeIcon source={gameIcon}/>
        //     </TouchableOpacity>
        //     <TouchableOpacity onPress={() => { setSelect('연애') }}>
        //         <ThemeIcon source={loveIcon}/>
        //     </TouchableOpacity>
        //     <TouchableOpacity onPress={() => { setSelect('운동') }}>
        //         <ThemeIcon source={strengthIcon}/>
        //     </TouchableOpacity>
        // </Row>

}

const ThemeIcon = styled.Image`
    width: 40px;
    height: 40px;
    margin-right: 5px;
`

export default PostingThemeList;