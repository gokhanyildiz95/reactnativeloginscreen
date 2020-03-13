import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class Btn extends Component {
  onPressDetail = () => {
    alert("deneme");
  }
  render() {
    const {text} = this.props;

    return (
      <View>
        <TouchableOpacity style={styles.btnmain} onPress={this.onPressDetail}>
          <Text style={styles.logintxt}>{text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
Btn.PropTypes = {
  text: PropTypes.string,
}
const styles = StyleSheet.create({
  btnmain: {
    height: 40,
    width: 250,
    borderRadius: 50,
    backgroundColor: '#ffe4e1',
    marginTop: 10,
  },
  logintxt: {
    fontSize: 13,
    fontWeight: 'bold',
    padding: 10,
    marginLeft: 5,
    color: '#4a4a4a',
    textAlign: 'center',
  },
});
