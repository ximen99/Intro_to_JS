class Anagram {
  constructor(word) {
    this.word = word;
  }
  match(wordsArr) {
    return wordsArr.filter(this.isAnagram, this);
  }
  isAnagram(matchWord) {
    matchWord = matchWord.toLowerCase();
    let wordLower = this.word.toLowerCase();
    if (matchWord.length !== wordLower.length || matchWord === wordLower) {
      return false;
    }
    let wordArr = wordLower.split("").sort();
    let matchArr = matchWord.split("").sort();
    for (let i = 0; i < matchArr.length; i++) {
      if (wordArr[i] !== matchArr[i]) {
        return false;
      }
    }
    return true;
  }
}

module.exports = Anagram;
