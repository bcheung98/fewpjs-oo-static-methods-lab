class Formatter {
  //add static methods here
  static capitalize(str) {
    let newStr = [];
    let strArr = str.split("");
    newStr.push(strArr[0].toUpperCase());
    for (let i = 1; i < strArr.length; i++) {
      newStr.push(strArr[i]);
    }
    return newStr.join("");
  }

  static sanitize(str) {
    let allowedChars = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-' ";
    let newStr = [];
    let strArr = str.split("");
    for (let i = 0; i < strArr.length; i++) {
      if (allowedChars.includes(strArr[i])) {
        newStr.push(strArr[i]);
      }
    }
    return newStr.join("");
  }

  static titleize(str) {
    let specialWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    let newStr = [];
    let words = str.split(" ");
    newStr.push(this.capitalize(words[0]));
    for (let i = 1; i < words.length; i++) {
      if (!specialWords.includes(words[i])) {
        newStr.push(this.capitalize(words[i]))
      }
      else {
        newStr.push(words[i]);
      }
    }
    return newStr.join(" ");
  }
}