# react-native-counters
React native Minus(-) (Number) Plus(+) Component


<p align="center">
  <img src="https://github.com/yasaricli/react-native-counters/blob/master/capture.gif" />
</p>


## Installation

To install a stable release use:

##### yarn
`yarn add react-native-counters`

##### npm
`npm i react-native-counters --save`


## Example
Simple use only uses the Text plus minus component.

```JS
import Counter from "react-native-counters";

class Example Component {
  onChange(number, type) {
    console.log(number, type) // 1, + or -
  }
  
  render() {
    return (
      <Counter start={1} onChange={this.onChange.bind(this)} />
    )
  }
}
```

An example using vector icons.

```JS
import Counter from "react-native-counters";
import Feather from 'react-native-vector-icons/Feather';

const minusIcon = (isMinusDisabled, touchableDisabledColor, touchableColor) => {
  return <Feather name='minus' size={20} color={isMinusDisabled ? touchableDisabledColor : touchableColor} />
};

const plusIcon = (isPlusDisabled, touchableDisabledColor, touchableColor) => {
  return <Feather name='plus' size={20} color={isPlusDisabled ? touchableDisabledColor : touchableColor} />
};

class ExampleVectorIcons Component {
  onChange(number, type) {
    console.log(number, type) // 1, + or -
  }
  
  render() {
    return (
      <Counter start={1} minusIcon={minusIcon} plusIcon={plusIcon} onChange={this.onChange.bind(this)} />
    )
  }
}
```


### Props

Some default props and descriptions.

`PropName`     -              `Default`
- **start**:                   (0)       
- **min**:                     (0)
- **max**:                     (10)
- **onChange**:                (null) 

- **textColor**:              ("#196583"),
- **touchableColor**:         ("#27AAE1"),
- **touchableDisabledColor**: ("#B5E9FF"),

- **minusIcon**:              (null),
- **plusIcon**:               (null)


### Contributing
This project exists thanks to all the people who contribute.
