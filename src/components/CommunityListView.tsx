import { FlatList, Image, ListRenderItem, Text, View } from "react-native"
import { colors } from "../assets/colors";

export const CommunityListView = () => {

    const heartImg = (isSelected : boolean) => isSelected ? require('../assets/icon_heart_filled.png') : require('../assets/icon_heart.png');

    type ItemData = {
        id : number,
        title : string,
        content : string,
        views : number,
        comments : number,
        likes : number,
        author : string,
        isLiked : boolean,
        imageUrl : string
    }

    let sampleList = [];

    for (let i = 0;i<100;i++){
        sampleList.push(
            {
                id : i,
                title : `게시물 ${i}`,
                content : `내용 ${i}`,
                views : i*10,
                comments : i*2,
                likes : i*1003,
                author : `사용자 ${i}`,
                isLiked : i % 2 === 0? true : false,
                imageUrl : 'https://img1.yna.co.kr/photo/etc/gt/2023/05/20/PGT20230520246201009_P4.jpg'
            }
        )
    }

    const Item : ListRenderItem<ItemData> = ({ item }) => (
        <View style = {{
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
                    <Text style={{fontFamily:'pretendard_light', fontSize:12, color:colors.gray_300}}>통합</Text>
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
            
        </View>
    )

    return (
        <FlatList style={{flex : 1}}data={sampleList} renderItem={Item} >

        </FlatList>
    )
}