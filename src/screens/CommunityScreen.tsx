import styled from "styled-components/native"
import { CommunityTopbar } from "../components/topbar/CommuntyTopBar"
import { Modal, Text, TouchableOpacity, View } from "react-native"
import { colors } from "../assets/colors/colors"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer, useFocusEffect, useNavigation } from "@react-navigation/native"
import { CommunityListView } from "../components/CommunityListView"
import { CommunityItemData } from "../types/CommunityItemData"
import { StackNavigationProp } from "@react-navigation/stack"
import { NavigationParamList } from "../navigation/NavigationParamList"
import { RootState } from "../redux/store"
import { getSampleList } from "../services/getSampleList"
import { CategoryType, CommentType, PostType, getCategoryList, getPostList, getUserId } from "../services/apis/CommunityApi"
import { CategoryButtonType } from "../components/CategorySelector"
import { setPostList } from "../redux/slices/PostListSlice"
import { setCommunityType } from "../redux/slices/CommunityTypeSlice"
import { setCategory } from "../redux/slices/CategorySlice"
import { setProfile } from "../redux/slices/ProfileSlice"

function getImage(isSelected: boolean, name : string) {
    if (name === "패션") {
        if (isSelected) return require('../assets/images/button_fashion_selected.png')
        else return require('../assets/images/button_fashion.png')
    }
    else if (name === "애니") {
        if (isSelected) return require('../assets/images/button_animation_selected.png')
        else return require('../assets/images/button_animation.png')
    }
    else if (name === "게임") {
        if (isSelected) return require('../assets/images/button_game_selected.png')
        else return require('../assets/images/button_game.png')
    }
    else if (name === "사랑") {
        if (isSelected) return require('../assets/images/button_relationship_selected.png')
        else return require('../assets/images/button_relationship.png')
    }
    else if (name === "운동") {
        if (isSelected) return require('../assets/images/button_sports_selected.png')
        else return require('../assets/images/button_sports.png')
    }
    else{
        if (isSelected) return require('../assets/images/button_sports_selected.png')
        else return require('../assets/images/button_sports.png')
    }
}

export const CommunityScreen = () => {

    const communityType = useSelector((state : RootState ) => state.communityTypeSlice.communityType)
    // const viewType = useSelector((state : RootState ) => state.viewTypeSlice.viewType)
    const category = useSelector((state : RootState ) => state.categorySlice.category)
    const postList = useSelector((state : RootState ) => state.postListSlice.postList)
    const profile = useSelector((state : RootState ) => state.profileSlice.profile)


    const [listViewState, setListViewState] = useState("Loading");
    // const [dataList, setDataList] = useState<PostType[]>([]) // dataList 상태 추가
    
    const dispatch = useDispatch();

    const [categoryButtonList, setCategoryButtonList] = useState<CategoryButtonType[]>([])

    useEffect(() => {
        
        getCategoryList().then((data : CategoryType[]) => {

            // console.log(data)

            let tempList : CategoryButtonType[] = []

            data.map((item) => {
                tempList.push({
                    id : item.id,
                    name : item.name,
                    image : getImage(false,item.name),
                    selectedImage : getImage(true,item.name)
                })
            })

            setCategoryButtonList(tempList)
            dispatch(setCategory({name:tempList[0].name, id :tempList[0].id}))

        }).catch((error : any) => {
            console.log(error)
        })

        
        getUserId().then((profile) => {
            dispatch(setProfile({
                id : profile.id,
                image : profile.image,
                nickname : profile.nickname,
                username : profile.username
            }))
        })


    }, [])



    // useEffect(() => {
        
    //     setListViewState(() => "Loading")
        
    //     getSampleList(getCommunityType(), viewType)
    //         .then((dataList) => {
    //             setDataList(dataList);
    //             setListViewState("Loaded"); 
    //         })
    //         .catch((error) => {
    //             setListViewState("Error"); 
    //         });

    // }, [communityType, viewType, category]);

    useEffect(() => {

        setListViewState(() => "Loading")

        getPostList(category.id).then((data) => {
            setListViewState("Loaded"); 
            // setDataList(data)
            dispatch(setPostList(data))
        }).catch((error) => {
            setListViewState("Error"); 
            console.log(error);
            
        })

    }, [category]);

    useFocusEffect(
        React.useCallback(() => {

            setListViewState(() => "Loading")
    
            getPostList(category.id).then((data) => {
                setListViewState("Loaded"); 
                dispatch(setPostList(data))
            }).catch((error) => {
                setListViewState("Error"); 
                console.log(error);
                
            })
    
        },[])
    )

    const Background = styled.View`
        background-color: ${colors.line_gray_50};
        flex : 1;
        
    `

    const Container = styled.View`
        background-color: ${colors.line_gray_50};
        flex : 15;
    `

    function getCommunityType() {

        if (communityType === "Total") return "통합"
        else {
            return category.name
        }

    }

    return (
        <Background>
            <CommunityTopbar categoryList={categoryButtonList}/>

            <Container>

                { listViewState === "Loading" ? 
                    (
                        <View style={{flex:1,height:'100%', width:'100%', justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontFamily:'pretendard_medium', fontSize:18}}>Loading....</Text>
                        </View>
                    ) : 
                    (<CommunityListView dataList={postList} communityType={getCommunityType()}/>)
                }
            </Container>
        </Background> 
        
    )    
}