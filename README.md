# react-native-counters
React native Minus(-) (Number) Plus(+) Component

## Installation

To install a stable release use:

##### yarn
`yarn add react-native-counters`

##### npm
`npm i react-native-counters --save`


## Example


```JS
import Counter from "react-native-counters";

class Example Component {
  render() {
    return (
      <Counter start={1} />
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
