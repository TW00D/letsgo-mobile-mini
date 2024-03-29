export function getDateDiff( date : string ) {

    const timeTextArray = ["년", "개월", "일","시간","분","초"]
    const timeArray = [1000*60*60*24*365, 1000*60*60*24*31, 1000*60*60*24, 1000*60*60 , 1000*60, 1000]

    const today = new Date()
    const otherDay = new Date(date)
    // otherDay.setHours(otherDay.getHours() + 9)

    const millisecondsTimeDiff = today.valueOf() - otherDay.valueOf()

    let returnValue = "방금 전"

    for (let i=0;i<timeTextArray.length;i++){

        if (millisecondsTimeDiff > timeArray[i]){
            returnValue = `${Math.floor(millisecondsTimeDiff/timeArray[i])}${timeTextArray[i]} 전`
            break
        }
    }

    // timeTextArray.map((data, key) => {

    //     if (millisecondsTimeDiff > timeArray[key]){
    //         returnValue = `${Math.floor(millisecondsTimeDiff/timeArray[key])}${data} 전`
    //     }

    // })

    return returnValue

}