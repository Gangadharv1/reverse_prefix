function reversePrefix(word, ch) {
    let index = word.indexOf(ch);
    if (index === -1) return word;
    return word.slice(0, index + 1).split('').reverse().join('') + word.slice(index + 1);
}