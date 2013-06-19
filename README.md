kryp
====

Simple encode and decode layer for Node.js


installation
====
`npm install kryp`


example
====

```javascript
  var Kryp = require('kryp');  // takes options object (optional) 
  
  var kryp = new Kryp({
		algorithm = 'AES-256-CFB' // Encryption algorithm
	  , key = 'secretKey' // Encryption key
	  , from = 'utf8' // Original encoding
	  ,	to = 'hex' // Conversion encoding
  });
  
  
  var some_string = "I need to be encrypted!!";
  
  var encrypted_string = kryp.encode(some_string);
  
  var decoded_string = kryp.decode(encrypted_string);
  
```

license
====
MIT
