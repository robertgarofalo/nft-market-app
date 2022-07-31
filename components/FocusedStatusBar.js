import { StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/core'
import { View } from 'react-native';

import { COLORS } from '../constants/index';
import { SafeAreaView } from 'react-native-safe-area-context';

const FocusedStatusBar = ({backgroundColor, barStyle, translucent}) => {
  const isFocused = useIsFocused();

  return isFocused ? (
    // <View >
      <SafeAreaView style={{backgroundColor, paddingTop: 10}} edges={['left', 'right', 'bottom']}>
        <StatusBar translucent={translucent} animated={true} barStyle={barStyle}/> 
      </SafeAreaView>
    // </View>
  )
  :
  null
}

export default FocusedStatusBar