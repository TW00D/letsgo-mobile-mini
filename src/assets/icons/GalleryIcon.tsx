import { TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg"

const galleryIconXml = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.37492 22.9167H15.6249C20.8333 22.9167 22.9166 20.8334 22.9166 15.625V9.37504C22.9166 4.16671 20.8333 2.08337 15.6249 2.08337H9.37492C4.16659 2.08337 2.08325 4.16671 2.08325 9.37504V15.625C2.08325 20.8334 4.16659 22.9167 9.37492 22.9167Z" stroke="#9F9FAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.37508 10.4167C10.5257 10.4167 11.4584 9.48393 11.4584 8.33333C11.4584 7.18274 10.5257 6.25 9.37508 6.25C8.22449 6.25 7.29175 7.18274 7.29175 8.33333C7.29175 9.48393 8.22449 10.4167 9.37508 10.4167Z" stroke="#9F9FAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.78125 19.7396L7.91667 16.2917C8.73958 15.7396 9.92708 15.8021 10.6667 16.4375L11.0104 16.7396C11.8229 17.4375 13.1354 17.4375 13.9479 16.7396L18.2812 13.0209C19.0937 12.323 20.4063 12.323 21.2188 13.0209L22.9167 14.4792" stroke="#9F9FAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

interface GalleryIconType {
    onPress: () => void
}

const GalleryIcon = ({onPress}: GalleryIconType) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <SvgXml xml={galleryIconXml} width={25} height={25}/>
        </TouchableOpacity>
    );
}

export default GalleryIcon;