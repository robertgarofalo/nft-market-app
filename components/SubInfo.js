import { Image, View, Text } from 'react-native'
import { SIZES, FONTS, COLORS, SHADOWS, assets } from '../constants'
import { NFTData } from '../constants'

export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize, creator}) => {
    return (
        <View>
          <Text style={{ 
            // fontFamily: FONTS.bold, 
            fontSize: titleSize, 
            color: COLORS.primary}}>{title}</Text>

          <Text style={{ 
            // fontFamily: FONTS.bold, 
            fontSize: subTitleSize, 
            color: COLORS.primary}}>{subTitle}</Text>
        </View>
      )
}

export const EthPrice = ( {price }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
          <Image 
          source={assets.eth}
          resizeMode='contain'
          style={{ width: 20, height: 20, marginRight: 2 }}
          />
          <Text style={{
            // fontFamily: FONTS.medium,
            fontSize: SIZES.font,
            color: COLORS.primary,
          }}>{price}</Text>
        </View>
      )
}

export const ImageCmp = ({ imgUrl, index }) => {
    return (
        <Image 
        source={imgUrl}
        resizeMode="contain"
        style={{
            width: 48,
            height: 48,
            marginLeft: index === 0 ? 0 : -SIZES.font
        }}
        />
      )
}
export const People = ({ item }) => {

  const people = [assets.person01, assets.person02, assets.person04]

    return (
        <View style={{ flexDirection: 'row' }}>
          {/* {[assets.person01, assets.person04, assets.person02].map((imgUrl, index) => (
              <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
          ))} */}
          { people.map((imgUrl, index) => {
            if(index === item.bids.length){
              return
            } else {
              return (
                <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
              )
            }
          })}
        </View>
      )
}

export const EndDate = ({ timeEnding }) => {
    return (
        <View 
        style={{
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.base,
            backgroundColor: COLORS.white,
            justifyContent: 'center',
            alignItems: 'center',
            ...SHADOWS.light,
            elevation: 1,
            maxWidth: '50%'
        }}>
          <Text style={{ 
              // fontFamily: FONTS.regular, 
              fontSize: SIZES.small, 
              color: COLORS.primary}}>
                  Ending in
          </Text>

          <Text style={{ 
              // fontFamily: FONTS.semiBold, 
              fontSize: SIZES.medium, 
              color: COLORS.primary}}>
                  {timeEnding}
          </Text>

        </View>
      )
}
export const SubInfo = ({ timeEnding, item }) => {
    return (
        <View style={{
            width: '100%',
            paddingHorizontal: SIZES.font,
            marginTop: -SIZES.extraLarge,
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
          <People item={item}/>
          <EndDate timeEnding={timeEnding}/>
        </View>
      )
}