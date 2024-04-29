import React, { useEffect, useState } from "react"
import { Dimensions, Image, Modal, Share, Text, TouchableOpacity, View } from "react-native"
import { CommunityItemData } from "../types/CommunityItemData";
import { colors } from "../assets/colors/colors";
import { CommunityCommentList } from "../components/CommuntityCommentlList";
import { ScrollView } from "react-native-gesture-handler";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NavigationParamList } from "../navigation/NavigationParamList";
import { StackNavigationProp } from "@react-navigation/stack";
import { BottomSheetAndroid, ModalSlideFromBottomIOS } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets";
import { BaseTouchableOpacity } from "../components/button/BaseTouchableOpacity";
import EncryptedStorage from 'react-native-encrypted-storage';
import { useDispatch, useSelector } from "react-redux";
import { setPostList } from "../redux/slices/PostListSlice";
import { CommentType, PostType, deleteLike, getCommentList, getPostList, getUserId, postLike, removePost } from "../services/apis/CommunityApi";
import { RootState } from "../redux/store";
import { SafeAreaView } from "react-native-safe-area-context";

const deviceWidth = Dimensions.get('window').width;

export type ModalOption = {
    id : number,
    text : string,
    img : any,
    action : () => void
}

export const DetailPostScreen = () => {

    // const category = useSelector((state : RootState ) => state.categorySlice.category)

    // const reportOption : ModalOption = { id : 1, text : "신고하기", action : () => {}, img : require('../assets/icon_search.png') }
    const removeOption : ModalOption = { 
        id : 2, text : "삭제하기", action : () => {
            removePost(selectedItem.id).then(() => {
                getPostList(selectedItem.category).then((data) => {
                    dispatch(setPostList(data))
                    navigation.pop()
                })
            })
            
        }, img : require('../assets/icon_search.png') }
    // const shareOption : ModalOption = { id : 3, text : "수정하기", action : () => {}, img : require('../assets/icon_search.png') }
    const shareOption : ModalOption = { id : 4, text : "공유하기", action : () => {onShare()}, img : require('../assets/icon_search.png') }

    const postList = useSelector((state : RootState ) => state.postListSlice.postList)
    const profile = useSelector((state : RootState ) => state.profileSlice.profile)

    const navigation = useNavigation<StackNavigationProp<NavigationParamList>>()

    const route = useRoute<RouteProp<NavigationParamList, "DetailPost">>()

    const data = route.params
    const selectedItem : PostType = data.selectedItem
    const communityType : string = data.communityType

    const [liked, setLiked] = useState(selectedItem.liked)

    const [imageWidth, setImageWidth] = useState(0);
    const [imageHeight, setImageHeight] = useState(0);

    const [isLikeState, setLikeState] = useState(selectedItem.isLike);
    const [pageDisabled, setPageDisabled] = useState(false)

    const [commentList, setCommentList] = useState<CommentType[]>([])

    const [isModalVisible, setModalVisible] = useState(false)

    const [modalOptions, setModalOptions] = useState([shareOption]) 

    const dispatch = useDispatch();

    const onShare = async () => {
        try {
            const result = await Share.share(
                {
                message: '공유에 보이는 메세지 이거를 복붙할 수도 있엉!',
                } 
            );
        } catch (error) {
            console.log(error);
        }
      };

    Image.getSize(selectedItem.picture, (width, height) => {
        setImageWidth(width)
        setImageHeight(height)
    }) 

    const handlePostLike = () => {

        setLiked((value) => isLikeState ? value-1 : value+1)
        setLikeState(!isLikeState)

            
        // const newList = postList.map((post : PostType) => {
        //     if (post.id === id){
        //         return {...post, liked : liked, isLike : isLikeState}
        //     }
        //     else {
        //         return post
        //     }
        // })

        // dispatch(setPostList(newList))

        if(isLikeState) deleteLike(selectedItem.id)
        else postLike(selectedItem.id)
    }

    // const handlePost = () => {

    //     getPostList(category.id).then((data) => {
            
    //         // setDataList(data)
    //         dispatch(setPostList(data))
    //     }).catch((error) => {
            
    //         console.log(error);
            
    //     })
    // }

    useEffect(() => {

        
        if(profile.id == selectedItem.user) {
            setModalOptions([shareOption, removeOption])
        }

        getCommentList(selectedItem.id).then((data : CommentType[]) => {

            // console.log(data)
            setCommentList(data)

        }).catch((error : any) => {
            console.log(error)
        })

    }, [])

    return (
        <SafeAreaView style={{flex:1, flexDirection : 'column', backgroundColor: 'white'}}>
            <View style={{backgroundColor:colors.white, height:'auto',flexDirection:'row', alignItems:"center", justifyContent:"space-between", paddingHorizontal:'3%', paddingVertical:4}}>
                <BaseTouchableOpacity onPress={() => {navigation.pop()}} >
                    <Image 
                        source={require('../assets/icon_arrow_left.png')}
                        style={{
                            height:25,
                            width:25
                        }}
                    />
                </BaseTouchableOpacity>  
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
                        <BaseTouchableOpacity onPress = {() => {handlePostLike()}} style={{flexDirection:'row', backgroundColor:colors.line_gray_50, paddingHorizontal:16, paddingVertical:9, borderRadius:1000}}>
                            <Image 
                                source={ isLikeState ? require('../assets/images/icon_heart_filled.png') : require('../assets/images/icon_heart.png')}
                                style={{
                                    height:20,
                                    width:20
                                }}
                            />
                            <Text style={{fontFamily:'pretendard_light', fontSize:14, color:colors.text_gray_900, marginStart:8}}>{liked}</Text>
                        </BaseTouchableOpacity>

                        <BaseTouchableOpacity onPress = {() => {setModalVisible(!isModalVisible)}} style={{marginStart:8, flexDirection:'row', alignItems:'center', backgroundColor:colors.line_gray_50, paddingHorizontal:10.5, paddingVertical:17.5, borderRadius:1000}}>
                            <Image 
                                source={ require('../assets/icon_three_dot.png') }
                                style={{
                                    height:3,
                                    width:17
                                }}
                            />
                        </BaseTouchableOpacity>
                    </View>
                </View>

                <CommunityCommentList commentList={commentList}></CommunityCommentList>

            </ScrollView>
   
            <Modal transparent visible={isModalVisible} style={{width:'100%', height:'100%'}}>
                <BaseTouchableOpacity onPress={() => {setModalVisible(false)}} style={{ height:'100%', width:'100%', backgroundColor:"rgba(0,0,0,0.5)"}}>
                    <View style={{bottom:0, position:'absolute', backgroundColor:colors.white, width:'100%',paddingVertical:'4%', borderTopLeftRadius:16, borderTopRightRadius:16}}>
                        
                        {
                            modalOptions.map((item : ModalOption) => (
                                <BaseTouchableOpacity style={{flexDirection:'row', alignItems:'center'}} onPress={() => {item.action()}}>
                                    
                                    <Image 
                                        source={item.img}
                                        style={{
                                            height:25,
                                            width:25,
                                            marginHorizontal:'4%',
                                            marginVertical:'4%'
                                        }}
                                    />
                                    
                                    <Text style={{fontFamily:'pretendard_medium', fontSize:16,color:colors.text_gray_900}}>{item.text}</Text>
                                </BaseTouchableOpacity>
                            ))
                        }

                    </View>
                </BaseTouchableOpacity>
            </Modal>

            {/* <CommunityModal 
                isModalVisible = {isModalVisible} 
                setModalVisible={(data : boolean) => {setModalVisible(false)}}
                modalOptions={[reportOption, removeOption, shareOption]}
                >
            </CommunityModal> */}

        </SafeAreaView>
    )
}