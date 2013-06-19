// (c) Jeff Parrish 2013
// MIT License
// Encryption / Decryption utils

function kryp(options) {
  
	var crypto = require('crypto')
	  
	  // Options
	  , algorithm = options.algorithm || 'AES-256-CFB' // Encryption algorithm
	  ,	key = options.key || '' // Encryption key
	  ,	from = options.from || 'utf8' // Original encoding
	  ,	to = options.to || 'hex' // Conversion encoding

	// Encrypt a string
	function encrypt(str) {
		
		var cipher = crypto.createCipher(algorithm, key)
		  , crypted = cipher.update(str, from, to) + cipher.final(to);
		  
		return crypted;
	}

	// Decrypt an encrypted string
	function decrypt(str) {
		
		var decipher = crypto.createDecipher(algorithm, key)
		  , decrypted = decipher.update(str, to, from);
		decipher.setAutoPadding(auto_padding=true);
		
		decrypted += decipher.final(from);
		  
		return decrypted;
	}
	
	// Expose the methods
	
	this.encode = function(input_str) {
		return encrypt(input_str);
	};
	
	this.decode = function(input_str) {
		return decrypt(input_str);
	};
}

exports.kryp = kryp;
