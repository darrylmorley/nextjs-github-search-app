function getRandomWord() {
  const words = ['pizza', 'mario', 'penguin']

  return words[Math.floor(Math.random() * words.length)]
}

export default getRandomWord