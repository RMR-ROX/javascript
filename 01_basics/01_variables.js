const accountId = 144553
let accountEmail="riddhi@hotmail.com"
var accountPassword="12345"
accountCity = "Jaipur"
let accountState;// will show value undefined

// accountId=2
accountEmail="rmr@ef.com";
accountPassword="4567"
accountCity="Mumbai"



/*
Prefer not to use var because of issue in block scope and functional scope 
*/
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
