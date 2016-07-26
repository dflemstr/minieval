# minieval

Provides a Node module that supports static evaluation of strings.

The module has also been patched to support `@` as a special identifier.

## Example

```javascript
var minieval = require('minieval')
minieval('a + 2', {a: 3}) // → 5
minieval('@ + 3', {'@': 6}) // → 9
```
