import React, { useState } from "react"
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native"
import { CommunityItemData } from "../types/CommunityItemData";
import { colors } from "../assets/colors";
import { CommunityCommentList } from "../components/CommuntityCommentlList";
import { ScrollView } from "react-native-gesture-handler";

interface DetailPostScreenProps {
    navigation : any,
    route : any
}

const deviceWidth = Dimensions.get('window').width;

export const DetailPostScreen : React.FC<DetailPostScreenProps> = ({route, navigation}) => {

    const data = route.params
    const selectedItem : CommunityItemData = data.selectedItem
    const communityType : string = data.communityType

    const [imageWidth, setImageWidth] = useState(0);
    const [imageHeight, setImageHeight] = useState(0);

    const [isLikeState, setLikeState] = useState(false);

    Image.getSize(selectedItem.imageUrl, (width, height) => {
        setImageWidth(width)
        setImageHeight(height)
        console.log(imageWidth)
        console.log(imageHeight)
    }) 

    return (

        <View style={{flex:1,flexDirection : 'column'}}>

            <View style={{backgroundColor:colors.white, height:'auto',flexDirection:'row', alignItems:"center", justifyContent:"space-between", paddingHorizontal:'3%', paddingVertical:4}}>
                <TouchableOpacity onPress={() => {navigation.pop()}}>   
                    <Image 
                        source={require('../assets/icon_arrow_left.png')}
                        style={{
                            height:25,
                            width:25
                        }}
                    />
                </TouchableOpacity>  
                <Text style={{paddingVertical:10, fontFamily:"pretendard_medium", fontSize:16, color:colors.text_gray_900}}>{communityType}</Text>
                <Text style={{width:25}}></Text>
            </View>

            <ScrollView style={{backgroundColor:colors.gray_50}}>

                <View style={{backgroundColor:colors.white, paddingHorizontal:'4%', height:"auto", paddingTop:10}}>
                    <Text style={{fontFamily:"pretendard_medium", fontSize:18, color:colors.text_gray_900}}>{selectedItem.title}</Text>
                    <Text style={{fontFamily:'pretendard_light', fontSize:14, color:colors.gray_300, marginTop:7}}>{`${communityType}  |  ${selectedItem.author}`}</Text>
                    <Text style={{fontFamily:'pretendard_light', fontSize:14, color:colors.gray_300, marginTop:2, marginBottom:20}}>{`조회 ${selectedItem.views}  |  댓글 ${selectedItem.comments}  |  좋아요 ${selectedItem.likes}`}</Text>

                    {imageHeight != 0 ? <Image 
                        source={{uri : selectedItem.imageUrl}}
                        style={{
                            width:deviceWidth * 92/100,
                            height:imageHeight * (deviceWidth/imageWidth) * 92/100,
                            borderRadius:5,
                            marginBottom:10
                        }}
                    /> : 
                    <View style={{height:20}}/>
                    }
                    <Text style={{fontFamily:"pretendard_regular", fontSize:16, color:colors.text_gray_900}}>{selectedItem.content}</Text>

                    <View style={{flexDirection:'row', justifyContent:'flex-end', marginVertical:10}}>
                        <TouchableOpacity onPress = {() => {setLikeState(!isLikeState)}} style={{flexDirection:'row', backgroundColor:colors.gray_50, paddingHorizontal:16, paddingVertical:9, borderRadius:1000}}>
                            <Image 
                                source={ isLikeState ? require('../assets/icon_heart_filled.png') : require('../assets/icon_heart.png')}
                                style={{
                                    height:20,
                                    width:20
                                }}
                            />
                            <Text style={{fontFamily:'pretendard_light', fontSize:14, color:colors.text_gray_900, marginStart:8}}>{selectedItem.likes}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity  onPress = {() => {}} style={{marginStart:8, flexDirection:'row', alignItems:'center', backgroundColor:colors.gray_50, paddingHorizontal:10.5, paddingVertical:17.5, borderRadius:1000}}>
                            <Image 
                                source={ require('../assets/icon_three_dot.png') }
                                style={{
                                    height:3,
                                    width:17
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <CommunityCommentList onLikeClick={() => {}} commentList={selectedItem.commentList}></CommunityCommentList>

            </ScrollView>

        </View>
    )
}