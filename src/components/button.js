import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import ScalableText from 'react-native-text';

// Styles
import Styles from '../styles/button';

export default class Button extends Component {
  onPress() {
    const { count, type, increment } = this.props;
    const number = this.isMinus() ? count - increment : count + increment;

    return this.props.onPress(number, type);
  }

  isDisabled() {
    const { min, max, count, disabled } = this.props;

    if (disabled) {
      return true;
    }

    return (this.isMinus() ? min : max) === count;
  }

  isMinus() {
    return this.props.type === '-';
  }

  isPlus() {
    return this.props.type === '+';
  }

  icon() {
    const { minusIcon, plusIcon, buttonTextStyle, minus, plus } = this.props;
    const icon = this.isMinus() ? minusIcon : plusIcon;

    if (icon) {
      return icon(this.isDisabled());
    }

    return (
      <ScalableText style={[Styles.buttonText, buttonTextStyle]}>
        {this.isMinus() ? minus : plus}
      </ScalableText>
    );
  }

  render() {
    const { buttonStyle } = this.props;
    const style = {
      opacity: this.isDisabled() ? 0.2 : 1,
      ...buttonStyle,
    };

    return (
      <TouchableOpacity
        style={[Styles.touchable, style]}
        onPress={this.onPress.bind(this)}
        disabled={this.isDisabled()}
      >
        {this.icon()}
      </TouchableOpacity>
    );
  }
}
