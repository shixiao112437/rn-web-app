import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
// TouchableOpacity
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
var styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    width: 300,
    height: 60,
    justifyContent: 'center',
  },
  buttonText: {
    height: '100%',
    fontSize: 18,
    textAlign: 'center',
    color: '#ffffff',
    alignItems: 'center',
    lineHeight: 60,
  },
});
class RNButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.btnEvent}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#dfc026', '#3b5998']}
          style={styles.linearGradient}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{...styles.buttonText, color: this.props.textColor}}>
              {this.props.title}
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}
RNButton.propTypes = {
  btnEvent: PropTypes.func,
  title: PropTypes.string,
  textColor: PropTypes.string,
};
RNButton.defaultProps = {
  btnEvent: () => {
    console.log('点击事件');
  },
  title: '渐变button',
  textColor: 'red',
};
export default RNButton;
