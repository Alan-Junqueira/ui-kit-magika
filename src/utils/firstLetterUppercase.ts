export const firstLetterUppercase = (word: string) => {
  let wordSplited = word.split('')
  wordSplited[0] = wordSplited[0].toUpperCase()
  return wordSplited.join('')
}