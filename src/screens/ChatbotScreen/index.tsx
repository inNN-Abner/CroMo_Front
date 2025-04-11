import React from 'react'
import { WebView } from 'react-native-webview'
import { View, StyleSheet } from 'react-native'

export const ChatbotScreen = () => {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: 'https://chatbot.hellotars.com/conv/dZresj' }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 33
  }
})
