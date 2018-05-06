const obj = {
  name: 'hector',
  getName () {
    return this.name
  }
}

/**
 * the following will work...
 */
console.log(obj.getName()) // hector

/**
 * ...but if we create a variable that references `obj.getName`...
 */
let getName = obj.getName

/**
 * ...the context gets lost, as JS functions' `this` is undefined
 * - by default...
 */
console.log(getName())
// Uncaught TypeError: Cannot read property 'name' of undefined

/**
 * ...but we can get the proper context via the `bind` method...
 */
getName = obj.getName.bind(obj)

/**
 * ...and now it works again:
 */
console.log(getName()) // hector
