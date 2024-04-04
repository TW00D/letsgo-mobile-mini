import React, { ReactNode, useState } from "react"
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

interface BaseTouchableOpacityProps extends TouchableOpacityProps{
    onPress: () => void;
}

export const BaseTouchableOpacity : React.FC<BaseTouchableOpacityProps> = ({onPress, children, ...rest}) => {

    const [isDisabled, setDisabled] = useState(false)

    const delay = (ms: number): Promise<void> => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    return (
        <TouchableOpacity
            disabled={isDisabled}
            {...rest}
            onPress={() => {
                console.log("disabled")
                
                setDisabled(true);
                onPress()
                delay(1000).then(() => {
                    setDisabled(false)
                })

            }} // 비동기 처리된 handlePress 함수로 onPress 이벤트 핸들러 설정
        >
            {children}
        </TouchableOpacity>
    );
}