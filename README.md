<p align="center">
  <img src="https://github.com/yasaricli/react-native-counters/blob/master/Kapture.gif" />
</p>

<h1 align="center">React Native Counters</h1>

<p align="center">
  <b>A highly customizable, flexible and easy-to-use counter component for React Native</b>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-counters">
    <img src="https://img.shields.io/npm/v/react-native-counters.svg" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/react-native-counters">
    <img src="https://img.shields.io/npm/dm/react-native-counters.svg" alt="npm downloads" />
  </a>
  <a href="https://github.com/yasaricli/react-native-counters/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/react-native-counters.svg" alt="license" />
  </a>
</p>

---

## What is it?

**react-native-counters** is a component that allows you to quickly implement counter operations in your React Native applications. It can be easily used in scenarios such as product quantity selection in e-commerce apps, number of guests in reservation systems, and more.

### Features

- Simple and fast integration
- Fully customizable appearance
- Min/Max value boundaries
- Custom icon support (with react-native-vector-icons)
- Configurable increment step size
- `onChangeBefore` support for async operations
- TypeScript support

---

## Installation

### npm
```bash
npm install react-native-counters --save
```

### yarn
```bash
yarn add react-native-counters
```

---

## Quick Start

### Basic Usage

```jsx
import Counter from "react-native-counters";

function App() {
  const handleChange = (number, type) => {
    // number: current count value
    // type: '+' or '-' (which button was pressed)
    console.log(`New value: ${number}, Action: ${type}`);
  };

  return (
    <Counter
      start={1}
      onChange={handleChange}
    />
  );
}
```

### Usage with Class Components

```jsx
import Counter from "react-native-counters";

class ShoppingCart extends React.Component {
  handleChange(number, type) {
    console.log(number, type); // 1, '+' or '-'
  }

  render() {
    return (
      <Counter
        start={1}
        onChange={this.handleChange.bind(this)}
      />
    );
  }
}
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `start` | `number` | `0` | Initial count value |
| `min` | `number` | `0` | Minimum selectable value |
| `max` | `number` | `10` | Maximum selectable value |
| `increment` | `number` | `1` | Increment/decrement amount per click |
| `minus` | `string` | `'-'` | Minus button text (when icon is not used) |
| `plus` | `string` | `'+'` | Plus button text (when icon is not used) |
| `minusIcon` | `function` | `null` | Custom minus button icon |
| `plusIcon` | `function` | `null` | Custom plus button icon |
| `buttonStyle` | `object` | `{}` | Style object for buttons |
| `buttonTextStyle` | `object` | `{}` | Style object for button text |
| `countTextStyle` | `object` | `{}` | Style object for counter text |
| `formatFn` | `function` | `(count) => \`${count}\`` | Function to format the displayed count |
| `onChange` | `function` | - | Callback function called when value changes |
| `onChangeBefore` | `function` | `null` | Async function called before value changes |

---

## Examples

### 1. Custom Styling

```jsx
<Counter
  start={1}
  min={0}
  max={100}
  buttonStyle={{
    borderColor: '#3498db',
    borderWidth: 2,
    borderRadius: 25,
    width: 50,
    height: 50,
  }}
  buttonTextStyle={{
    color: '#3498db',
    fontSize: 20,
    fontWeight: 'bold',
  }}
  countTextStyle={{
    color: '#2c3e50',
    fontSize: 24,
    fontWeight: 'bold',
  }}
  onChange={(number, type) => console.log(number, type)}
/>
```

### 2. Text Buttons

```jsx
<Counter
  start={1}
  plus="Add"
  minus="Remove"
  buttonStyle={{
    width: 80,
    backgroundColor: '#27ae60',
  }}
  buttonTextStyle={{
    color: '#fff',
  }}
/>
```

### 3. Custom Icons (react-native-vector-icons)

```jsx
import Counter from "react-native-counters";
import Icon from 'react-native-vector-icons/MaterialIcons';

const MinusIcon = (isDisabled) => (
  <Icon
    name="remove-circle-outline"
    size={24}
    color={isDisabled ? '#ccc' : '#e74c3c'}
  />
);

const PlusIcon = (isDisabled) => (
  <Icon
    name="add-circle-outline"
    size={24}
    color={isDisabled ? '#ccc' : '#27ae60'}
  />
);

function ProductCounter() {
  return (
    <Counter
      start={1}
      min={1}
      max={99}
      minusIcon={MinusIcon}
      plusIcon={PlusIcon}
      onChange={(num) => console.log('Selected quantity:', num)}
    />
  );
}
```

### 4. Async Operations (onChangeBefore)

Use `onChangeBefore` for API calls, validation, or other async operations:

```jsx
function AsyncCounter() {
  const handleBeforeChange = (next) => {
    // API call, validation, etc.
    fetch('/api/check-stock')
      .then(() => next()) // Apply change if successful
      .catch(() => alert('Insufficient stock!'));
  };

  return (
    <Counter
      start={1}
      onChangeBefore={handleBeforeChange}
      onChange={(num) => console.log('Updated:', num)}
    />
  );
}
```

### 5. Custom Increment Step

```jsx
// Increment/decrement by 5 on each click
<Counter
  start={0}
  min={0}
  max={100}
  increment={5}
  onChange={(num) => console.log(num)}
/>
```

### 6. Formatted Count Display

Use `formatFn` to customize how the count is displayed:

```jsx
// Display as percentage
<Counter
  start={0}
  max={100}
  formatFn={(count) => `${count}%`}
/>

// Display with currency
<Counter
  start={1}
  min={1}
  formatFn={(count) => `$${count}`}
/>

// Display with units
<Counter
  start={0}
  max={1000}
  formatFn={(count) => `${count} kg`}
/>
```

---

## Documentation

- [All Usage Examples](docs/ALL_USES.md)
- [Custom Icon Usage](docs/USE_CUSTOM_ICON.md)

---

## Contributing

Contributions are welcome! To contribute:

1. Fork this repository
2. Create a new branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Added new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

---

## License

MIT License - see [LICENSE](LICENSE) file for details.

---

## Support

If you find a bug or have suggestions, please report them on the [Issues](https://github.com/yasaricli/react-native-counters/issues) page.
