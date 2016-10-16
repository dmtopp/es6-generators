function* generator() {
  yield 'buhh'
  yield 'fuhh'
  yield 'guhh'
}

let g = generator()

console.log('\n==========HERE WE GO==========\n')
console.log([...g])
console.log(Array.from(g))
console.log('\n==============================')
