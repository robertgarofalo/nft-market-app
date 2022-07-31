import { StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/core'
import { View } from 'react-native';

import { COLORS } from '../constants/index';
import { SafeAreaView } from 'react-native';

const FocusedStatusBar = ({backgroundColor}) => {
  const isFocused = useIsFocused();

  return isFocused ? (
    <View style={{backgroundColor}}>
      <SafeAreaView>
        <StatusBar translucent animated={true} barStyle='light-content'/> 
      </SafeAreaView>
    </View>
  )
  :
  null
}

export default FocusedStatusBar