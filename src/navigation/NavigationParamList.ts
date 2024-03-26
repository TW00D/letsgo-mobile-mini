import { CommunityItemData } from "../types/CommunityItemData"

export type NavigationParamList = {
    StartScreen : undefined
    LoginScreen : undefined
    DetailPost : {selectedItem : CommunityItemData, communityType : string}
    SignupId : undefined
    SignupPassword : undefined
    Community : undefined
}