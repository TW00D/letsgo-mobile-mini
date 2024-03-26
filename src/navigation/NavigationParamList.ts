import { CommunityItemData } from "../types/CommunityItemData"

export type NavigationParamList = {
    StartScreen: undefined
    Login: undefined
    DetailPost: {selectedItem : CommunityItemData, communityType : string}
    SignupId: undefined
    SignupPassword: undefined
    Community: undefined
    BottomNavigationContainer: undefined
    CommentModal: undefined
}