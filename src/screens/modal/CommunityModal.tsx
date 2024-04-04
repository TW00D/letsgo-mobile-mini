import { Modal, Text, Touchable, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { colors } from "../../assets/colors/colors"

interface CommunityModalProps {
    isModalVisible : boolean,
    setModalVisible : (isModalVisible : boolean) => void,
    modalOptions : ModalOption[]
}

export type ModalOption = {
    id : number,
    text : string,
    img : any,
    action : () => void
}

export const CommunityModal = (props : CommunityModalProps) => {

    return (
        <Modal transparent visible={props.isModalVisible} style={{width:'100%', height:'100%'}}>
            <TouchableOpacity onPress={() => {console.log("Asd")}} style={{ height:'100%', width:'100%', backgroundColor:"rgba(0,0,0,0.5)", elevation:1}}>
                <View style={{bottom:0, position:'absolute', backgroundColor:colors.white, width:'100%', elevation:3}}>
                    {
                        props.modalOptions.map((item : ModalOption) => (
                            <TouchableOpacity onPress={() => {console.log("ASDasdasd")}}>
                                <Text>{item.text}</Text>
                            </TouchableOpacity>
                        ))
                    }

                </View>
            </TouchableOpacity>
        </Modal>
    )
}


