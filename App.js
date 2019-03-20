/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import GoogleSignIn from 'react-native-google-sign-in';
const FBSDK = require('react-native-fbsdk');
const {
  LoginManager,
} = FBSDK;

type Props = {};
export default class App extends Component<Props> {

  googleSignIn() {
    GoogleSignIn.configure({
      // iOS
      clientID: '607229683481-sc34eh2kpgalosh73c9nd7jh2eq4oddt.apps.googleusercontent.com',
    });

    const user = GoogleSignIn.signInPromise();
  }

  facebookSignIn() {
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      function(result) {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          alert('Login success with permissions: '
            +result.grantedPermissions.toString());
        }
      },
      function(error) {
        alert('Login fail with error: ' + error);
      }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native
        </Text>
        <TouchableHighlight onPress={this.googleSignIn}>
          <View>
            <Text style={styles.instructions}>Google</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.facebookSignIn}>
          <View>
            <Text style={styles.instructions}>Facebook</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
