<p align="center">
  <img src="https://github.com/yasaricli/react-native-counters/blob/master/Kapture.gif" />
</p>

<p align="center">
  <b>React native Minus(-) (Number) Plus(+) Component</b>
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

If you want to **customize** `(minusIcon, plusIcon)` the buttons [USE_CUSTOM_ICON](docs/USE_CUSTOM_ICON.md)


### Props

Some default props and descriptions.


| PropName   |      Description      |  type |  Default |
|----------|:-------------:|------:|------:|
| minus |  If you are not using minusIcon, it shows directly. | String | - |
| plus |  If you are not using plusIcon, it shows directly. | String | + |
| start |  The starting number | Number | 0 |
| min |    Minus the minimum selected number.   | Number |   0 |
| max | The most selectable number. | Number  | 10 |
| minusIcon | You can use it to change the minusIcon. | Function | null |
| plusIcon | You can use it to change the plusIcon. | Function | null |
| buttonStyle | You can change the types of all buttons. | Object |    {} |
| buttonTextStyle | Minus or plus styles in the button | Object |   {} |
| countTextStyle | styles of increasing number. | Object | {} |


### Contributing

This project exists thanks to all the people who contribute.
