module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;


  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // Returns the letters in the content.
  this.letters = function letters() {
    const letterRegEx = /[a-z]/i;
    return Array.from(this.content).filter(c => c.match(letterRegEx)).join("");

    // let theLetters = [];
    // const letterRegEx = /[a-z]/i;
    // Array.from(this.content).forEach(function(character) {
    //   if (character.match(letterRegEx)) {
    //     theLetters.push(character);
    //   }
    // });
    // return theLetters.join("");
  }

  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    if (this.letters()) {
      return this.processedContent() === this.processedContent().reverse();
    } else {
        return false;
    }
  }
}
