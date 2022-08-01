import { View, Text, Image, TextInput } from 'react-native'

import { COLORS, FONTS, SIZES, assets } from '../constants'

const HomeHeader = ({ onSearch }) => {
  return (
    <View style={{
      backgroundColor: COLORS.primary,
      paddingHorizontal: SIZES.font,
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Image 
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 190, height: 125}}
        />
        <View style={{ width: 45, height: 45}}>
          <Image 
            source={assets.person03}
            resizeMode='contain'
            style={{ width: '100%', height: '100%'}}
          />
          <Image 
            source={assets.badge}
            resizeMode='contain'
            style={{ position: 'absolute', width: 15, height: 15, bottom: 0, right: 0}}
          />
        </View>
      </View>
      <View style={{ 
        marginBottom: SIZES.font
        }}>
        <Text style={{ 
          // fontFamily: FONTS.regular, 
          fontSize: SIZES.small, color: COLORS.white}}>
          Welcome back 👋
        </Text>
        <Text style={{ 
          // fontFamily: FONTS.regular, 
          fontSize: SIZES.large, color: COLORS.white, marginTop: SIZES.base / 2}}>
          Discover the latest NFTs
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
          <View style={{
            width: '100%',
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2
          }}>
            <Image 
              source={assets.search}
              resizeMode='contain'
              style={{ width: 20, height: 20, marginRight: SIZES.base}}
            />
            <TextInput 
            placeholder='Search NFTs'
            placeholderTextColor={'white'}
            style={{ flex: 1}}
            onChangeText={onSearch}
            />
          </View>
      </View>
    </View>
  )
}
export default HomeHeader