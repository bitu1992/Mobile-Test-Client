import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {

  let [flag, setFlag] = useState(false);
  return (
    /*<View style={styles.container}>
      <Text>click below button to continue with cora </Text>
      <Button
        title="connect cora new"
        onPress={() => setFlag(true)}
      />
      <StatusBar style="auto" />
    </View>*/
    <View style={flag ? styles.view : styles.viewLandingpage}>
      {flag &&
        <WebView source={{ uri: 'https://ccmsitwebserver.corastaging.natwest.com/?brand=IOM&jwt=BMWFORDTOYOTAAUDI&channelType=mobile&mode=dark&pageId=webserver' }} />
      }
      {!flag &&
        <Button
          title="connect cora new"
          onPress={() => setFlag(!flag)}
        />}
      {flag &&
        <Button
          title="Disconnect cora new"
          onPress={() => setFlag(!flag)}
        />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    alignSelf: 'stretch',
    flex: 1,
    backgroundColor: '#fff',
  },
  viewLandingpage: {
    alignSelf: 'stretch',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
