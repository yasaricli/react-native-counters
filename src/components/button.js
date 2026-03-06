import React, { memo, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import ScalableText from 'react-native-text';

import Styles from '../styles/button';

const Button = memo(
  ({
    type,
    count,
    min,
    max,
    increment = 1,
    minus = '-',
    plus = '+',
    minusIcon,
    plusIcon,
    buttonStyle = {},
    buttonTextStyle = {},
    disabled,
    onPress,
  }) => {
    const isMinus = type === '-';
    const isDisabled = disabled || (isMinus ? min === count : max === count);

    const handlePress = useCallback(() => {
      const newCount = isMinus ? count - increment : count + increment;
      onPress(newCount, type);
    }, [count, increment, isMinus, onPress, type]);

    const renderIcon = () => {
      const icon = isMinus ? minusIcon : plusIcon;

      if (icon) {
        return icon(isDisabled);
      }

      return (
        <ScalableText style={[Styles.buttonText, buttonTextStyle]}>
          {isMinus ? minus : plus}
        </ScalableText>
      );
    };

    return (
      <TouchableOpacity
        style={[
          Styles.touchable,
          { opacity: isDisabled ? 0.2 : 1, ...buttonStyle },
        ]}
        onPress={handlePress}
        disabled={isDisabled}
      >
        {renderIcon()}
      </TouchableOpacity>
    );
  }
);

Button.displayName = 'Button';

export default Button;
