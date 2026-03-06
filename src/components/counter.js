import React, { useState, useEffect, useCallback } from 'react';
import { View } from 'react-native';
import ScalableText from 'react-native-text';

import Button from './button';
import Styles from '../styles/counter';

const Counter = ({
  start = 0,
  min = 0,
  max = 10,
  increment = 1,
  minus = '-',
  plus = '+',
  minusIcon,
  plusIcon,
  buttonStyle = {},
  buttonTextStyle = {},
  countTextStyle = {},
  formatFn = (count) => `${count}`,
  onChange,
  onChangeBefore,
}) => {
  const [count, setCount] = useState(start);
  const [beforeLoading, setBeforeLoading] = useState(false);

  useEffect(() => {
    setCount(start);
  }, [start]);

  const handleChange = useCallback(
    (newCount, type) => {
      setBeforeLoading(false);
      setCount(newCount);
      onChange?.(newCount, type);
    },
    [onChange]
  );

  const handlePress = useCallback(
    (newCount, type) => {
      if (onChangeBefore) {
        setBeforeLoading(true);
        onChangeBefore(() => handleChange(newCount, type));
        return;
      }
      handleChange(newCount, type);
    },
    [onChangeBefore, handleChange]
  );

  return (
    <View style={Styles.container}>
      <Button
        type="-"
        count={count}
        onPress={handlePress}
        disabled={beforeLoading}
        increment={increment}
        min={min}
        max={max}
        minus={minus}
        plus={plus}
        minusIcon={minusIcon}
        plusIcon={plusIcon}
        buttonStyle={buttonStyle}
        buttonTextStyle={buttonTextStyle}
      />

      <View style={Styles.count}>
        <ScalableText style={[Styles.countText, countTextStyle]}>
          {formatFn(count)}
        </ScalableText>
      </View>

      <Button
        type="+"
        count={count}
        onPress={handlePress}
        disabled={beforeLoading}
        increment={increment}
        min={min}
        max={max}
        minus={minus}
        plus={plus}
        minusIcon={minusIcon}
        plusIcon={plusIcon}
        buttonStyle={buttonStyle}
        buttonTextStyle={buttonTextStyle}
      />
    </View>
  );
};

export default Counter;
