//  设计稿的宽度（ALLWidth）/元素的宽度（pxWidth） = 手机的宽度（api）/手机中元素的宽度(x)

// x = api*pxWidth/ALLWidth
import {Dimensions} from 'react-native'
// 获取屏幕宽高
const PthoneWidth = Dimensions.get('window').width 
const PthoneHight = Dimensions.get('window').height

export const pxToWidth = (width) => {
    return PthoneWidth*width/350
}