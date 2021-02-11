import { describe } from "riteway"

import { sayHello, sayGoodbye } from "./hello-world"

describe("sayHello", async assert => {
  assert({
    given: "no arguments",
    should: 'return "hello" string',
    actual: sayHello(),
    expected: "hello",
  })
})

describe("sayGoodbye", async assert => {
  assert({
    given: "no arguments",
    should: "return nonsense goodbye string",
    actual: sayGoodbye(),
    expected: "goodbye create lorem ipsum",
  })
})
