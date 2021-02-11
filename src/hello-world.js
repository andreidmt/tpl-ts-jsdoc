/**
 * @returns {string}
 */
function sayHello() {
  return "hello"
}

/**
 * Nonsense function that retuns a string
 *
 * @param   {Object}          props
 * @param   {"create"|"read"} [props.test="create"]
 * @param   {string}          [props.name="lorem"]
 *
 * @returns {string}
 */
const sayGoodbye = ({ test = "create", name = "lorem" } = {}) => {
  const bar = `${test} ${name} ipsum`

  return `goodbye ${bar}`
}

const x = sayGoodbye({ test: "create" })

export { x, sayGoodbye, sayHello }
