import React from 'react';
import { Text, View, Image, StatusBar, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsDesc, DetailsBid } from '../components';
import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants';

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: '100%', height: 373 }}>
    <Image 
      source={data.image}
      resizeMode='cover'
      style={{ width:'100%', height: '100%'}}
    />

    <CircleButton 
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 20}
    />

    <CircleButton 
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.currentHeight + 20}
    />
  </View>
)

const Details = ({ route, navigation }) => {
  const { data } = route.params

  return (
    <>
    <FocusedStatusBar 
    backgroundColor='transparent' 
    barStyle='dark-content'
    translucent={true}
    />
    
    <View style={{
      width: '100%',
      position: 'absolute',
      bottom: 0,
      paddingVertical: SIZES.font,
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'rgba(255, 255, 255, 0.5)',
      zIndex: 1,
    }}>
      <SafeAreaView >
        <RectButton 
        minWidth={170}
        fontSize={SIZES.large}
        {...SHADOWS.dark}
        />
    </SafeAreaView>

    </View>
    <FlatList 
      data={data.bids}
      renderItem={({ item }) => <DetailsBid bid={item}/> }
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3}}
      ListHeaderComponent={() => (
        <React.Fragment>
          <DetailsHeader data={data} navigation={navigation}/>
          <SubInfo />
          
        </React.Fragment>
      )}
    />

    </>
  )
}
export default Details