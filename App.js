import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Image,
  Text,
} from 'react-native';
import Btn from './src/components/Btn';
export default class App extends Component {
  state = {
    text: 'deneme',
  };
  _onChangeText = name => {
    this.setState({
      text: name,
    });
  };
  render() {
    const {text} = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.body}>
        <Image
          style={{width: 100, height: 100, marginBottom: 50}}
          source={{
            uri:
              'https://toppng.com/uploads/preview/joker-face-png-joker-face-11562866770wfzgvuoie9.png',
          }}
        />
        <Text>{text}</Text>
        <TextInput
          onChangeText={this._onChangeText}
          style={styles.lgntxt}
          value={this.state.text}
        />
        <TextInput
          style={styles.lgntxt}
          secureTextEntry={true}
          placeholder="Şifre"
        />
        <View style={styles.lgnbtn}>
          <Btn text="Giriş Yap" />
          <Btn text="Kayıt Ol" />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  lgntxt: {
    paddingLeft: 20,
    backgroundColor: 'white',
    borderRadius: 50,
    marginTop: 5,
    height: 40,
    width: 250,
    // eslint-disable-next-line no-dupe-keys
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  lgnbtn: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});
