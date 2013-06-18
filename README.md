kryp
====

Simple encode and decode layer for Node.js

```npm install kryp```

```javascript
  var kryp = require('kryp');  // takes options object (optional) 
  
  var some_string = "I need to be encrypted!!";
  
  var encrypted_string = kryp.encode(some_string);
  
  var decoded_string = kryp.decode(encrypted_string);
  
```

license
====
MIT
