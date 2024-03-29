import React, { useEffect, useState } from "react"
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native"
import { CommunityItemData } from "../types/CommunityItemData";
import { colors } from "../assets/colors/colors";
import { CommunityCommentList } from "../components/CommuntityCommentlList";
import { ScrollView } from "react-native-gesture-handler";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NavigationParamList } from "../navigation/NavigationParamList";
import { StackNavigationProp } from "@react-navigation/stack";
import { CommentType, PostType, getCommentList } from "../services/CommunityApi";

const deviceWidth = Dimensions.get('window').width;

export const DetailPostScreen = () => {

    const navigation = useNavigation<StackNavigationProp<NavigationParamList>>()

    const route = useRoute<RouteProp<NavigationParamList, "DetailPost">>()

    const data = route.params
    const selectedItem : PostType = data.selectedItem
    const communityType : string = data.communityType

    const [imageWidth, setImageWidth] = useState(0);
    const [imageHeight, setImageHeight] = useState(0);

    const [isLikeState, setLikeState] = useState(selectedItem.isLike);
    const [pageDisabled, setPageDisabled] = useState(false)

    const [commentList, setCommentList] = useState<CommentType[]>([])


    const handlePress = () => {
        if (!pageDisabled) {
          // 버튼이 활성화된 경우에만 동작
        //   console.log("Button pressed");
          
          // 버튼을 비활성화 상태로 설정
          setPageDisabled(true);
    
          // 1초 후에 버튼을 다시 활성화 상태로 설정
          setTimeout(() => {
            setPageDisabled(false);
          }, 1000)}
        };

    Image.getSize(selectedItem.picture, (width, height) => {
        setImageWidth(width)
        setImageHeight(height)
    }) 

    useEffect(() => {
        
        getCommentList(selectedItem.id).then((data : CommentType[]) => {

            // console.log(data)
            setCommentList(data)

        }).catch((error : any) => {
            console.log(error)
        })
    }, [])

    return (

        <View style={{flex:1,flexDirection : 'column'}}>

            <View style={{backgroundColor:colors.white, height:'auto',flexDirection:'row', alignItems:"center", justifyContent:"space-between", paddingHorizontal:'3%', paddingVertical:4}}>
                <TouchableOpacity disabled={pageDisabled} onPress={() => {handlePress(); navigation.pop()}}>   
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

            <ScrollView style={{backgroundColor:colors.line_gray_50}}>

                <View style={{backgroundColor:colors.white, paddingHorizontal:'4%', height:"auto", paddingTop:10}}>
                    <Text style={{fontFamily:"pretendard_medium", fontSize:18, color:colors.text_gray_900}}>{selectedItem.title}</Text>
                    <Text style={{fontFamily:'pretendard_light', fontSize:14, color:colors.hint_gray_300, marginTop:7}}>{`${communityType}  |  ${selectedItem.user}`}</Text>
                    <Text style={{fontFamily:'pretendard_light', fontSize:14, color:colors.hint_gray_300, marginTop:2, marginBottom:20}}>{`조회 ${selectedItem.viewed}  |  댓글 ${selectedItem.commented}  |  좋아요 ${selectedItem.liked}`}</Text>

                    {imageHeight != 0 ? <Image 
                        source={{uri : selectedItem.picture}}
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
                        <TouchableOpacity onPress = {() => {setLikeState(!isLikeState)}} style={{flexDirection:'row', backgroundColor:colors.line_gray_50, paddingHorizontal:16, paddingVertical:9, borderRadius:1000}}>
                            <Image 
                                source={ isLikeState ? require('../assets/images/icon_heart_filled.png') : require('../assets/images/icon_heart.png')}
                                style={{
                                    height:20,
                                    width:20
                                }}
                            />
                            <Text style={{fontFamily:'pretendard_light', fontSize:14, color:colors.text_gray_900, marginStart:8}}>{selectedItem.liked}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity  onPress = {() => {}} style={{marginStart:8, flexDirection:'row', alignItems:'center', backgroundColor:colors.line_gray_50, paddingHorizontal:10.5, paddingVertical:17.5, borderRadius:1000}}>
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

                <CommunityCommentList onLikeClick={() => {}} commentList={commentList}></CommunityCommentList>

            </ScrollView>

        </View>
    )
}