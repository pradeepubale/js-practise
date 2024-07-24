"use strict";   // treat all js code as newer version

// alert(3 + 3) // not possible we are using nodejs not browser

const accountId = 13048
let accountEmail = "abc@xyz.com"
var accPassword = "8881212"
// accountCity = "Chh.Sambhajinagar"  // ReferenceError: accountCity is not defined
let accountCity = "Chh.Sambhajinagar"
let accountState;

// accountId = 2    // Not Allowed bcause of const

/**
 * Prefer not to use var
 * because of issue in block scope and functional scope
 */

console.table([accountId, accountEmail, accPassword, accountCity, accountState])
