/**
 * @returns {string}
 */
const sayGoodbye = () => "goodbye"

/**
 * @typedef  {Object} SayHelloFnReturn
 *
 * @property {string} beep
 * @property {string} boop
 */

/**
 * Function with types infered from docs, 2 birds in hand.
 *
 * @param   {Object}           [props={}]
 * @param   {"lorem"|"dolor"}  [props.foo="lorem"]
 * @param   {string}           [props.bar="ipsum"]
 *
 * @returns {SayHelloFnReturn}
 */
const sayHello = ({ foo = "lorem", bar = "ipsum" } = {}) => ({
  beep: `hello ${foo}`,
  boop: `hello ${bar}`,
})

const robotSays = sayHello({ foo: "dolor" })

export { robotSays, sayHello, sayGoodbye }
