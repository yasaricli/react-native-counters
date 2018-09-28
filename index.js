import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from 'prop-types';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: this.props.start
    };

    // bind functions..
    this.onPressMinus = this.onPressMinus.bind(this);
    this.onPressPlus = this.onPressPlus.bind(this);
  }

  onPressMinus() {
    const { number } = this.state;
    const minusNumber = (number - 1);

    if (number == this.props.min) {
      return
    }

    return this.setState({ number: minusNumber }, () => this.props.onChange(minusNumber, '-'))
  }

  onPressPlus() {
    const { number } = this.state;
    const plusNumber = (number + 1);

    if (number == this.props.max) {
      return
    }

    return this.setState({ number: plusNumber }, () => this.props.onChange(plusNumber, '+'))
  }

  renderMinusButton() {
    const { min, touchableDisabledColor, touchableColor, minusIcon } = this.props;
    const isMinusDisabled = min == this.state.number;
    const buttonStyle = {
      borderColor: isMinusDisabled ? touchableDisabledColor : touchableColor
    };

    return (
      <TouchableOpacity style={[Styles.touchable, buttonStyle ]} onPress={this.onPressMinus} activeOpacity={isMinusDisabled ? 0.9 : 0.2}>
        {this.props.minusIcon ? this.props.minusIcon(isMinusDisabled, touchableDisabledColor, touchableColor) :
          <Text style={[Styles.iconText, { color: isMinusDisabled ? touchableDisabledColor : touchableColor }]}>-</Text>
        }
      </TouchableOpacity>
    )
  }

  renderPlusButton() {
    const { max, touchableDisabledColor, touchableColor, plusIcon } = this.props;
    const isPlusDisabled = max == this.state.number;
    const buttonStyle = {
      borderColor: isPlusDisabled ? touchableDisabledColor : touchableColor
    };

    return (
      <TouchableOpacity style={[Styles.touchable, buttonStyle ]} onPress={this.onPressPlus} activeOpacity={isPlusDisabled ? 0.9 : 0.2}>
        {this.props.plusIcon ? this.props.plusIcon(isPlusDisabled, touchableDisabledColor, touchableColor) :
          <Text style={[Styles.iconText, { color: isPlusDisabled ? touchableDisabledColor : touchableColor }]}>+</Text>
        }
      </TouchableOpacity>
    )
  }

  render() {
    const { number } = this.state;

    return (
      <View style={Styles.container}>
        <View>
          {this.renderMinusButton()}
        </View>
        <View style={Styles.number}>
          <Text style={[Styles.text, { color: this.props.textColor }]}>
            {number}
          </Text>
        </View>
        <View>
          {this.renderPlusButton()}
        </View>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  text: {
    fontSize: 16,
    paddingLeft: 15,
    paddingRight: 15,
  },

  iconText: {
    fontSize: 22,
    marginTop: -3
  },

  number: {
    minWidth: 40,
    alignItems: "center",
    justifyContent: "center"
  },

  touchable: {
    width: 35,
    height: 26,
    borderWidth: 1,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  }
});

Counter.propTypes = {
  start: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,

  textColor: PropTypes.string,
  touchableColor: PropTypes.string,
  touchableDisabledColor: PropTypes.string,

  minusIcon: PropTypes.func,
  plusIcon: PropTypes.func
};

Counter.defaultProps = {
  start: 0,
  min: 0,
  max: 10,
  onChange(number, type) {
    // Number, - or +
  },

  textColor: '#196583',
  touchableColor: '#27AAE1',
  touchableDisabledColor: '#B5E9FF',

  minusIcon: null,
  plusIcon: null
};
