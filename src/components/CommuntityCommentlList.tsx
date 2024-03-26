import { Image, ListRenderItem, Text, TouchableOpacity, View } from "react-native"
import { CommentItemData } from "../types/CommentItemData"
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler"
import React, { useState } from "react"
import { colors } from "../assets/colors"
import StyleSheet from "styled-components/dist/sheet/Sheet"
import styled from "styled-components/native"

interface CommunityCommentListProps {
    commentList : CommentItemData[],
    onLikeClick : () => void,
}

export const CommunityCommentList = (props : CommunityCommentListProps) => {

    interface CommentItemProps {
        item : CommentItemData
    }

    const [inputText, setInputText] = useState<string>("")

    const CommentItem : React.FC<CommentItemProps> = ({item}) => {

        const [isLike, setLike] = useState(false)
        
        const data = item

        return <View style={{flex:1,flexDirection:'row', paddingVertical:10}}>
            <Image 
                source={{uri : item.profileUrl}}
                style={{
                    width:37,
                    height:37,
                    borderRadius:100
                }}
            />
            <View style={{flexDirection:'column',flex:1,marginStart:10}}> 
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontFamily:'pretendard_semibold', fontSize:16, color:colors.text_gray_900}}>작성자 </Text>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={{fontFamily:'pretendard_light', fontSize:12, color:colors.gray_300, marginEnd: 10}}>1분</Text>
                        <TouchableOpacity onPress={() => {}}> 
                            <Image 
                                source={ require('../assets/icon_three_dot.png') }
                                style={{
                                    height:3,
                                    width:17,
                                    marginVertical:7.5,
                                    marginEnd:2
                                }}
                            />
                        </TouchableOpacity>   
                    </View>
                </View>
                <Text style={{fontFamily:'pretendard_regular', fontSize:14, color:colors.text_gray_900}}>댓글 내용</Text>
                <TouchableOpacity onPress={() => {
                    setLike(!isLike)
                    props.onLikeClick()
                }} style={{flexDirection:'row', marginTop:14}}>
                    <Image 
                        source={ isLike ? require('../assets/icon_heart_filled.png') : require('../assets/icon_heart.png')}
                        style={{
                            height:20,
                            width:20
                        }}
                    />
                    <Text style={{fontFamily:'pretendard_medium', fontSize:12, color:colors.text_gray_900, marginStart:7}}>20</Text>
                </TouchableOpacity>
            </View>
        </View>
    }   

    const CommentContainer = styled.View`
        background-color: ${colors.gray_50};

    `

    return (

        <View style={{backgroundColor:colors.white, marginVertical:10, alignItems:'center'}}>
            
            <View style={{flexDirection:'row', width:'94%', justifyContent:'space-between', marginTop:16, marginBottom: 20}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style = {{fontFamily:'pretendard_medium', fontSize:16, color:colors.text_gray_900}}>댓글</Text>
                    <Text style = {{fontFamily:'pretendard_medium', fontSize:16, color:colors.primary, marginStart:4}}>20</Text>
                </View>
                
                <TouchableOpacity onPress={() => {}} style={{flexDirection:'row', alignItems:'center'}}>
                    <Image 
                        source={ require('../assets/icon_reset.png') }
                        style={{
                            height:20,
                            width:20,
                            marginEnd:4
                        }}
                    />
                    <Text style = {{fontFamily:'pretendard_medium', fontSize:12, color:colors.gray_300}}>새로고침</Text>
                </TouchableOpacity>

            </View>

            <View style={{flexDirection:'row', width:'94%', marginBottom:16, backgroundColor:colors.gray_50, borderRadius:10, alignItems:'center'}}>
                <Image 
                    source={ require('../assets/icon_comment.png') }
                    style={{
                        height:20,
                        width:20,
                        marginStart:16,
                        marginEnd:4
                    }}
                />
                <TextInput placeholderTextColor={colors.gray_300} style={{width:'94%', fontFamily:'pretendard_regular', fontSize:16, color:colors.text_gray_900}} value={inputText} placeholder="댓글을 입력하세요" onChangeText={(text) => {setInputText(text)}}/>
            </View>
                

            <ScrollView style={{height:"auto",width : '94%'}}>
                {
                    props.commentList.map((item) => (
                        <CommentItem item={item}/>
                    ))
                }
            </ScrollView> 

        </View>
            
        
    )
}