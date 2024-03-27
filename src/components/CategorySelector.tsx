import { ScrollView, Text, View, Image, Dimensions, Touchable, TouchableOpacity } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { colors } from "../assets/colors/colors";
import { setCategory } from "../redux/slices/CategorySlice";
import { CategoryType, getCategoryList } from "../services/CommunityApi";
import { useEffect, useState } from "react";

const deviceWidth = Dimensions.get('window').width;
const imageWidth = deviceWidth * 0.13;

export type CategoryButtonType = {
    id : number
    name : string
    image : any
    selectedImage : any
}

interface CategorySelectorProps {
    categoryList : CategoryButtonType[]
}

export const CategorySelector = (props : CategorySelectorProps) => {

    const [isCategoryVisible, setCategoryVisible] = useState(false)
    
    const category = useSelector((state : RootState) => state.categorySlice.category)
    const dispatch = useDispatch();

    console.log("i'm in CategorySelector")

    return (
        <ScrollView showsHorizontalScrollIndicator={false} style={{marginTop:10}} horizontal>

            {/* <Image 
                source= {require('../assets/images/button_relationship_selected.png')}
                style={{
                    height:imageWidth,
                    width:imageWidth,
                    marginBottom:imageWidth*0.05
                }}
            /> */}

            {
                
            props.categoryList.map((item) => (
                <TouchableOpacity key={item.name} onPress={() => {
                    dispatch(setCategory(
                        {name : item.name, id : item.id}
                    ))
                }} style={{alignItems:'center', marginEnd:imageWidth * 0.15 }}>
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
            
    )
}