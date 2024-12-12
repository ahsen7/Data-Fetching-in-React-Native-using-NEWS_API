import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Header from '@/components/common/Header'
import SearchBar from '@/components/common/SearchBar'

type Props = {}

const Page = (props: Props) => {

  const handleNotifications = () => { };

  const { top: safeTop } = useSafeAreaInsets();
  console.log('Safe Top Inset:', safeTop);
  return (
    <View style={[styles.container, { paddingTop: safeTop }]}>
      <Header
        title='Welcome'
        description='User'
        onIconPress={() => handleNotifications()}
        profileImage={require('../../assets/images/pp1.jpg')}
        iconLibrary="Ionicons"
        iconName="notifications-outline"
      />

      <SearchBar
        placeholder='Search'
      />
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
})