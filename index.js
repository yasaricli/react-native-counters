import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class CounterButton extends Component {
  onPress() {
    const { count, type } = this.props;
    const number = this.isMinus() ? count - 1 : count + 1;

    return this.props.onPress(number, type);
  }

  isDisabled() {
    const { min, max, count } = this.props;

    return (this.isMinus() ? min : max) == count;
  }

  isMinus() {
    return this.props.type == '-';
  }

  isPlus() {
    return this.props.type == '+';
  }

  icon() {
    const { minusIcon, plusIcon, buttonTextStyle, minus, plus } = this.props;
    const icon = this.isMinus() ? minusIcon : plusIcon;

    if (icon) {
      return icon(this.isDisabled());
    }

    return (
      <Text style={[Styles.buttonText, buttonTextStyle]}>
        {this.isMinus() ? minus : plus}
      </Text>
    );
  }

  render() {
    const { buttonStyle } = this.props;
    const style = {
      opacity: this.isDisabled() ? 0.2 : 1,
      ...buttonStyle
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

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.start
    };
  }

  onPress(count, type) {
    const { onChange } = this.props;

    return this.setState({ count }, () => {
      return onChange && onChange(count, type);
    });
  }

  render() {
    const { count } = this.state;
    const { countTextStyle } = this.props;

    return (
      <View style={Styles.container}>
        <CounterButton
          type="-"
          count={this.state.count}
          onPress={this.onPress.bind(this)}
          {...this.props}
        />

        <View style={Styles.count}>
          <Text style={[Styles.countText, countTextStyle]}>{count}</Text>
        </View>

        <CounterButton
          type="+"
          count={this.state.count}
          onPress={this.onPress.bind(this)}
          {...this.props}
        />
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },

  countText: {
    fontSize: 16,
    paddingLeft: 15,
    paddingRight: 15,
    color: '#27AAE1'
  },

  count: {
    minWidth: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },

  touchable: {
    minWidth: 35,
    minHeight: 35,
    borderWidth: 1,
    borderColor: '#27AAE1',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    fontSize: 15,
    color: '#27AAE1'
  }
});

Counter.propTypes = {
  minus: PropTypes.string,
  plus: PropTypes.string,

  start: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,

  minusIcon: PropTypes.func,
  plusIcon: PropTypes.func,

  buttonStyle: PropTypes.object,
  buttonTextStyle: PropTypes.object,
  countTextStyle: PropTypes.object
};

Counter.defaultProps = {
  minus: '-',
  plus: '+',

  start: 0,
  min: 0,
  max: 10,

  minusIcon: null,
  plusIcon: null,

  buttonStyle: {},
  buttonTextStyle: {},
  countTextStyle: {}
};
