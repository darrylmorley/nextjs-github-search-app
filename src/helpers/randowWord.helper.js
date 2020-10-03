function getRandomWord() {
  const words = [
    'linux',
    'react',
    'vue',
    'windows',
    'nextjs',
    'babel',
    'webpack',
    'mac',
    'javascript',
  ]

  return words[Math.floor(Math.random() * words.length)]
}

export default getRandomWord
