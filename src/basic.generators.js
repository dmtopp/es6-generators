const basicGenerators = () => {
  function* generator() {
    yield 'buhh'
    yield 'fuhh'
    yield 'guhh'
  }

  let g = generator()

  console.log('\n----------BASIC GENERATORS----------\n')

  // has an iterator method
  console.log(typeof g[Symbol.iterator])

  // can convert to array w/spread
  console.log([...g])

  // GOTCHA: once you use up your generator, it doesn't restart.
  console.log([...g]) // => []

  let h = generator()
  console.log(Array.from(h))

  let i = generator()
  for (let value of i) {
    console.log(value)
  }

  console.log('\n------------------------------')
}

export default basicGenerators
