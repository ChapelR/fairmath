# fairmath

An implementation of [ChoiceScript's fairmath system](https://choicescriptdev.fandom.com/wiki/Arithmetic_operators#Fairmath) for the web and node.

## Install

For the browser, you may include the script via the JSDelivr CND:

```html
<script src="https://cdn.jsdelivr.net/gh/chapelr/fairmath@latest/dist/fairmath.min.js" type="text/javascript"></script>
```

Or otherwise include the `fairmath.min.js` or `fairmath.js` script in your project.

The script will expose a single function `Fairmath()`, or create a UMD module, if possible.

For node, install via NPM:

```shell
npm i fairmath
```

Then import or require:

```javascript
const Fairmath = require('fairmath');
```

## Usage

### `Fairmath()`

**Syntax:** `Fairmath(number, change)`

Performs the fairmath operation on `number`, which must be a value between 0 and 100, by fair-adding the `change` value (or fair-subtracting it, if it's negative). The result is returned. The result will always be between 0 and 100, exclusive.

The equivalent ChoiceScript syntax would be: `number %+ change` or `number %- change`.

**Arguments**:

- `number` (*number*): The base number to apply the change to. Must be between 0 and 100.
- `change` (*number*): The amount to fair-add. Negative values will be fair-subtracted instead.

**Examples:**

```javascript
Fairmath(50, 10); // 55 
Fairmath(50, -10); // 45
Fairmath(70, 40); // 82
Fairmath(30, -40); // 18
```

## Other Details

This fairmath implementation is modeled after the observable effects of ChoiceScript's fairmath operations, but contains no ChoiceScript code and is not based on any other existing code. This implementation always rounds fair-adding operations down and fair-subtracting operations up, as this appears to be the way the rounding is implemented in ChoiceScript. This may be contrary to your expectations.