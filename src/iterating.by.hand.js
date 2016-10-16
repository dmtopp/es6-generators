const iteratingByHand = () => {
  function* generator() {
    yield 'give meeee'
    console.log('one good')
    yield 'reasoooonnnnn'
    console.log('why weeee')
    yield 'neeed tooooo'
    console.log('bee like theeeemmmmm')
    // ^^ this guy still gets logged b/c the last thing returned by the iterator
    // is { value: undefined, done: true }.  check the output to see the order
  }

  let g = generator()
  while(true) {
    let item = g.next()
    if (item.done) break
    console.log(item.value)
  }

  console.log('\n')

  // if you run out of stuff, the generator just returns { done: true }
  let h = generator()
  let i = 0
  while (i < 6) {
    let item = h.next()
    console.log(item)
    i++
  }
}

export default iteratingByHand
