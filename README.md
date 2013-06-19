kryp
====

Simple encode and decode layer for Node.js

<<<<<<< HEAD

installation
====
`npm install`


example
====

=======
```npm install kryp```
>>>>>>> 2fa23feebb1983bef684675e66333fe776c5487a

```javascript
  var Kryp = require('kryp');  // takes options object (optional) 
  
  var kryp = new Kryp({
		algorithm = 'AES-256-CFB' // Encryption algorithm
	  , key = 'secretKey' // Encryption key
	  ,	from = 'utf8' // Original encoding
	  ,	to = 'hex' // Conversion encoding
  });
  
  
  var some_string = "I need to be encrypted!!";
  
  var encrypted_string = kryp.encode(some_string);
  
  var decoded_string = kryp.decode(encrypted_string);
  
```

license
====
MIT
