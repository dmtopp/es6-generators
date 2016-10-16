const suspendedExecution = () => {
  function* generator() {
    yield 'hiii, my name is'
    console.log('what?')
    yield 'my name is'
    console.log('who?')
    yield 'my name is'
    console.log('chikaaa chikaa')
    yield 'slim shady'
  }

  let g = generator()

  console.log('\n----------SUSPENDED EXECUTION----------\n')

  // 'for in' gives keys on the generator object, including prototype stuff we
  // don't always want
  for (let val in g) {
    console.log(val)
  }
  console.log('\n')

  // 'for of' gives values, and only the values we have defined
  for (let val of g) {
    console.log(val)
  }
  console.log('\n')

  // b/c this is building an array instead of individiual elements, the generator
  // goes ahead and does all the stuff in between each 'yield' before finally
  // giving us the full array at the end
  let myNewGen = generator()
  console.log([...myNewGen])
  console.log('\n')

  // same with Array.from()
  let myOtherNewGen = generator()
  console.log(Array.from(myOtherNewGen))
  console.log('\n')

  // generators inside generators!  yield* works with anything with Symbol.iterator method,
  // including plain 'ol strings!
  function* inceptionGenerator () {
    let h = generator()
    yield* h
  }
  let incept = inceptionGenerator
  console.log([...incept()])
  console.log('\n')

  function* inceptionInceptionGeneratorGenerator() {
    // assigning these to variables gives a 'new instance' of generator
    // and keeps them from getting 'used up'
    let q = inceptionGenerator()
    yield* q
  }
  console.log([...inceptionInceptionGeneratorGenerator()])
  console.log('\n')

  // example with an "iterator"
  let myIterator = {
    [Symbol.iterator]: () => ({
      items: ['buhh', 'fuhhh', 'guhh', 'luhhh'],
      // no () => b/c 'this' would refer to the wrong thing
      next: function next() {
        return {
          done: this.items.length === 0,
          value: this.items.shift()
        }
      }
    })
  }

  function* generatorWithIterator() {
    yield* myIterator
  }
  console.log([...generatorWithIterator()])
  console.log('\n')

  console.log('\n------------------------------')
}

export default suspendedExecution
