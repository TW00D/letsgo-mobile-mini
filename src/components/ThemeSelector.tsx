import { ScrollView, Text, View, Image, Dimensions, Touchable, TouchableOpacity } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setTheme } from "../redux/slices/ThemeSlice";
import { colors } from "../assets/colors/colors";

const deviceWidth = Dimensions.get('window').width;
const imageWidth = deviceWidth * 0.13;

const themeList = [
    { value : "fashion", text : "패션", image : require('../assets/images/button_fashion.png'), selected : require('../assets/images/button_fashion_selected.png') },
    { value : "animation", text : "애니", image : require('../assets/images/button_animation.png'), selected : require('../assets/images/button_animation_selected.png')  },
    { value : "game", text : "게임", image : require('../assets/images/button_game.png'), selected : require('../assets/images/button_game_selected.png')  },
    { value : "relationship", text : "연애", image : require('../assets/images/button_relationship.png'), selected : require('../assets/images/button_relationship_selected.png')  },
    { value : "sports", text : "스포츠", image : require('../assets/images/button_sports.png'), selected : require('../assets/images/button_sports_selected.png')  },
]

export const ThemeSelector = () => {
    
    const theme = useSelector((state : RootState) => state.themeSlice.theme)
    const dispatch = useDispatch();

    return (
        <ScrollView style={{marginTop:10}} horizontal>
            {
            themeList.map((item) => (
                <TouchableOpacity key={item.value} onPress={() => {dispatch(setTheme(item.value))}} style={{alignItems:'center', marginEnd:imageWidth * 0.15 }}>
                    <Image 
                        source={ item.value === theme ? item.selected : item.image}
                        style={{
                            height:imageWidth,
                            width:imageWidth,
                            marginBottom:imageWidth*0.05
                        }}
                    />

                    <Text style={{fontFamily:'pretendard_medium', fontSize:11, color:item.value === theme ? colors.text_gray_900 : colors.hint_gray_300}}>{item.text}</Text>
                </TouchableOpacity>    
            ))
            }
        </ScrollView>
            
    )
}