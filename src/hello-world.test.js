import { describe } from "riteway"

import { sayHello, sayGoodbye } from "./hello-world"

describe("sayHello", async assert => {
  assert({
    given: "no arguments",
    should: "return hello string",
    actual: sayHello(),
    expected: { beep: "hello lorem", boop: "hello ipsum" },
  })
})

describe("sayGoodbye", async assert => {
  assert({
    given: "no arguments",
    should: "return goodbye string",
    actual: sayGoodbye(),
    expected: "goodbye",
  })
})
