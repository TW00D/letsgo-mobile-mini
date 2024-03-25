import { View } from "react-native"
import { CommunityItemData } from "../types/CommunityItemData"

export const getSampleList = async (type: string, viewType: string): Promise<CommunityItemData[]> => {

    const delay = (milliseconds: number) => {
        const startTime = Date.now();
        while (Date.now() - startTime < milliseconds) {}
    };

    return new Promise((resolve, reject) => {
        let sampleList = []

        function getViewType() {
            if (viewType === "popularity") return "인기"
            else return "최신"
        }
        
        for (let i = 0; i < 20; i++){

            let commentList = []

            for (let j = 0 ; j < 10; j++){
                commentList.push({
                    author : `사용자 ${j}`,
                    content : `내용 ${j}`,
                    like : j * 12,
                    comments : j * 7,
                    createdDate : '2023-05-12',
                    profileUrl : 'https://img1.yna.co.kr/photo/etc/gt/2023/05/20/PGT20230520246201009_P4.jpg'
                })
            }

            sampleList.push(
                {
                    id : i,
                    title : `${type} ${getViewType()} 게시물 ${i}`,
                    content : `내용 ${i}`,
                    views : i * 10,
                    comments : i * 2,
                    likes : i * 1003,
                    author : `사용자 ${i}`,
                    isLiked : i % 2 === 0 ? true : false,
                    imageUrl : 'https://img1.yna.co.kr/photo/etc/gt/2023/05/20/PGT20230520246201009_P4.jpg',
                    commentList : commentList

                }
            )
        }

        
        console.log("before delay")

        delay(2000)
        
        console.log("after delay")

        resolve(sampleList);
    });
}