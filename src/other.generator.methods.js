const otherGeneratorMethods = () => {
  console.log('\n----------WEIRD GENERATOR STUFF AKA THE MAGIC 8 BALL----------\n')
  const answers = [
    `It is certain`, `It is decidedly so`, `Without a doubt`,
    `Yes definitely`, `You may rely on it`, `As I see it, yes`,
    `Most likely`, `Outlook good`, `Yes`, `Signs point to yes`,
    `Reply hazy try again`, `Ask again later`, `Better not tell you now`,
    `Cannot predict now`, `Concentrate and ask again`,
    `Don't count on it`, `My reply is no`, `My sources say no`,
    `Outlook not so good`, `Very doubtful`
  ]
  function answer () {
    return answers[Math.floor(Math.random() * answers.length)]
  }

  function* chat() {
    while (true) {
      // when .next() is called with an arg, it replaces the 'yield' part of the statement
      // with the arg, console.logs the arg on the next line, and then does the next 'crank'
      // of the generator, yielding the next genie answer, which gets console.logged below.
      let question = yield `[GENIE]: ${answer()}`
      console.log(question)
    }
  }

  let g = chat()

  console.log(g.next())
  console.log(g.next(`[ME]: Does this ever end up returning { done: true? }`).value)
  console.log(g.next('[LITERALLY EVERYONE]: this is super cool but how is this going to help me build websites?').value)

  console.log('\n that\'s kind of a gross way to do it though cuz we gotta crank out a .next before we can actually do stuff\n')

  function* invertedChat() {
    yield '[ME]: Genie, would you say that this is a better way to go about things?'
    yield '[ME]: Genie, is it going to rain?'
  }

  let newG = invertedChat()

  while(true) {
    let question = newG.next()
    if (question.done) break
    console.log(question.value)
    console.log('[GENIE]: ' + answer())
  }

  /* Basically the cool part of this is that you can make shit async without changing the interface at all*/

  // an async genie
  function genie (questions) {
    let g = questions()
    pull()

    function pull () {
      let question = g.next()
      if (question.done) {
        return
      }
      ask(question.value, pull)
    }

    function ask (q, next) {
      xhr('https://computer.genie/?q=' + encodeURIComponent(q), got)
      function got (err, res, body) {
        if (err) {
          // todo
        }
        console.log(q)
        console.log('[Genie] ' + body.answer)
        next()
      }
    }
  }

  // same call as sync genie
  genie(function* () {
    yield '[Me] Will ES6 die a painful death?'
    yield '[Me] How youuu doing?'
  })

  function xhr (url, done) {
   setTimeout(function () {
     done(null, null, { answer: 'No' });
    }, 2000)
  }


  console.log('\n------------------------------')
}

export default otherGeneratorMethods
