import { useState } from 'react'
import { View, SafeAreaView, FlatList, Text } from 'react-native'

import { COLORS, NFTData } from '../constants';

import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Home = () => {
  return (
    <>
      <FocusedStatusBar 
      backgroundColor={COLORS.primary} 
      barStyle='light-content'
      translucent={true}
      />
        <View style={{flex: 1}}>
          <View style={{ zIndex: 0 }}>
            <FlatList
            data={NFTData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
            />
          </View>
          <View style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1
          }}>
            <View style={{ height: 300, backgroundColor: COLORS.primary}}/>
            <View style={{ flex: 1, backgroundColor: COLORS.white}}/>

          </View>
        </View>
    </>
  )
}
export default Home