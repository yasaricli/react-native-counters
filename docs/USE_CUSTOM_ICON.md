### Custom Button icons

Buttons can be **customized** if desired and you can change `minus` && `plus` texts.

For this, you can use **minusIcon** and **plusIcon** and use [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons#ios) for the package.

```JS
import Counter from "react-native-counters";
import Feather from 'react-native-vector-icons/Feather';

const minusIcon = (isDisabled) => {
  return <Feather name='minus' size={20} color={'red'} />
};

const plusIcon = (isPlusDisabled) => {
  return <Feather name='plus' size={20} color={'red'} />
};

class ExampleVectorIcons Component {
  onChange(number, type) {
    console.log(number, type) // 1, + or -
  }
  
  render() {
    return (
      <Counter start={1}
        minusIcon={minusIcon} 
        plusIcon={plusIcon} 
        onChange={this.onChange.bind(this)}
      />
    )
  }
}
