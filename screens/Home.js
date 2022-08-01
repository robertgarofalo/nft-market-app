import { useState } from 'react'
import { View, SafeAreaView, FlatList, Text } from 'react-native'

import { COLORS, NFTData, SIZES } from '../constants';

import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Home = () => {

  const [nftData, setNftData] = useState(NFTData)

  const handleSearch = (value) => {
    if(!value.length) return setNftData(NFTData)

    const filteredData = NFTData.filter((item) => 
    item.name.toLowerCase().includes(value.toLowerCase())
    )

    if(filteredData.length){
      setNftData(filteredData)
    } else {
      setNftData(null)
    }

  }

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
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch}/>}
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
            <View style={{ flex: 1, backgroundColor: COLORS.white}}>
            {!nftData && 
            <Text style={{
              textAlign: 'center',
              paddingTop: 30,
              fontSize: SIZES.large
            }}>Sorry! No NFTs could be found</Text>}
            </View>
            
          </View>
        </View>
    </>
  )
}
export default Home