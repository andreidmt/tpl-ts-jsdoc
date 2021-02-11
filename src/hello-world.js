/**
 * @returns {string}
 */
function sayGoodbye() {
  return "goodbye"
}

/**
 * Function with types infered from docs, 2 birds in hand.
 *
 * @param   {Object}          [props={}]
 * @param   {"create"|"read"} [props.test="create"]
 * @param   {string}          [props.name="lorem"]
 *
 * @returns {string}
 */
const sayHello = ({ test = "create", name = "lorem" } = {}) => {
  const bar = `${test} ${name} ipsum`

  return `hello ${bar}`
}

const x = sayHello({ test: "create" })

export { x, sayHello, sayGoodbye }
