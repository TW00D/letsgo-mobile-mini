import { PostType } from "../services/CommunityApi"
import { CommunityItemData } from "../types/CommunityItemData"

export type NavigationParamList = {
    Start: undefined,
    Login: undefined,
    DetailPost: {selectedItem : PostType, communityType : string},
    SignupId: undefined,
    SignupPassword: undefined,
    Community: undefined,
    BottomNavigationContainer: undefined,
    CommentModal: undefined,
}