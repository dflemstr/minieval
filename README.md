# minieval

Provides a Node module that supports static evaluation of strings.

The module has also been patched to support `@` as a special identifier.

## Example

```javascript
var minieval = require('minieval')
minieval.evaluate('a + 2', {a: 3}) // → 5
minieval.evaluate('@ + 3', {'@': 6}) // → 9
minieval.createFunction('a + b + c', ['a', 'b'], {c: 3})(2, 3) // → 8
```
