import { Image, View } from "react-native"

export const LoadingScreen = () => {
    return (
        <View style={{flex : 1, width:'100%', height:'100%', justifyContent:'center', alignContent:"center"}}>
            <Image 
                source={require('../assets/icon_search.png')}
                style={{
                    height:0,
                    width:0
                }}
            />
        </View>
    )
}