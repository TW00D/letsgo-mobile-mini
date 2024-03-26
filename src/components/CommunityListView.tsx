import { FlatList, Image, ListRenderItem, Text, View } from "react-native"
import { colors } from "../assets/colors";
import { CommunityItemData } from "../types/CommunityItemData";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavigationParamList } from "../navigation/NavigationParamList";

interface CommunityListViewProps {
    dataList : Array<CommunityItemData>,
    communityType : string
}

export const CommunityListView = (props : CommunityListViewProps) => {

    const navigation = useNavigation<StackNavigationProp<NavigationParamList>>();

    const heartImg = (isSelected : boolean) => isSelected ? require('../assets/icon_heart_filled.png') : require('../assets/icon_heart.png');

    const Item : ListRenderItem<CommunityItemData> = ({ item }) => (

        <TouchableOpacity 
            onPress={() => { navigation.navigate("DetailPost", {selectedItem : item, communityType : props.communityType}) }}
            style = {{
                justifyContent:'space-between',
                alignContent : "center", 
                backgroundColor:"#fff", 
                height:"auto", width:'100%',
                paddingVertical : 10,
                flexDirection:"row",
                paddingHorizontal : '4%'
            }}>

            <View style={{
                flexDirection:"column" , 
                alignItems:'center', 
                justifyContent:'center', 
                width:34
            }}>
                <Image 
                    source={ heartImg(item.isLiked) }
                    style={{
                        height:20,
                        width:20,
                        marginTop:3,
                        marginBottom : 4
                    }}
                />
                <Text style={{color:colors.text_gray_900, fontFamily:'pretendard_light', fontSize:12}}>{item.likes}</Text>
            </View>

            <View style={{flexDirection:"column", justifyContent:'center', flex : 1, paddingStart:20, paddingEnd:10}}>
                <View style={{flexDirection:'row',}}> 
                    <Text style={{fontFamily:'pretendard_medium', fontSize:14,color:colors.text_gray_900}}>{item.title}</Text>
                    <Text style={{fontFamily:'pretendard_medium', fontSize:14, marginStart:2, color:colors.primary}}>[{item.comments}]</Text>
                </View>
                <View style={{flexDirection:'row', marginTop:1 }}>
                    <Text style={{fontFamily:'pretendard_light', fontSize:12, color:colors.gray_300}}>{props.communityType}</Text>
                    <Text style={{fontFamily:'pretendard_light', fontSize:12, color:colors.gray_300}}>  |  </Text>
                    <Text style={{fontFamily:'pretendard_light', fontSize:12, color:colors.gray_300}}>{item.author}</Text>
                </View>
            </View>
            <Image 
                source={{uri : item.imageUrl}}
                style={{
                    height:50,
                    width:50,
                    marginBottom:4,
                    borderRadius:5
                }}
            />
            
        </TouchableOpacity>
    )

    return (
        <FlatList style={{flex : 1}}data={props.dataList} renderItem={Item} >

        </FlatList>
    )
}