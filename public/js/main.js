/*
Using JavaScript in your browser only, you will listen for the form's submit event; when the form is submitted, you will:

Get the value of the input text element.  
You will take in the text input , convert it to all lowercase and generate some text statistics based on the input.
You will calculate the following statistics based on the text:
Original Input: you will just show the input that the user entered (see below)
Total Letters: total number of letter characters in the text ,
Total Non-Letters: total number of non-letters in the text (including spaces),
Total Vowels: total number of vowels in the text (not counting y),
Total Consonants: total number of consonants in the text (counting y),
Total Words: total number of words in the text; a word is defined as any sequence of letters broken by any not-letter. For example, the phrase to-do is two words; a word does not start until a letter appears,
Unique Words: total number of unique words that appear in the lowercased text,
Long Words: number of words in the text that are 6 or more letters long; this is a total count of individual words, not unique words,
Short Words: number of words in the text that are 3 or less letters long; this is a total count of individual words, not unique words
This lab is easy to over-complicate by attempting to be too clever. I am giving two important pieces of advice:

You will generate the following HTML every time the application processes the text and append it to the results div.  
You will be using a data list element (dl), inside the dl, you will have a data title (dt) that has the title of the stat and then a data description (dd) which has the value. (see expected output below)

*/


const form = document.getElementById('myForm');
const resultsDiv = document.getElementById('results');

form.addEventListener('submit', function(event) {
event.preventDefault();
const textInput = document.getElementById('text-input');


const textInputValue = textInput.value;
const lowerCasedText = textInputValue.toLowerCase();

const textInputValuetrim = textInput.value.trim();

  if (textInputValuetrim.length === 0) {
    resultsDiv.textContent = 'Please enter some text.';
    return;
  }

// total letters
let totalLetters = textInputValue.replace(/[^a-zA-Z]/g, '').length;

//total non letters
const totalNonLetters = lowerCasedText.length - totalLetters;

//total vowels
const totalVowels = (lowerCasedText.match(/[aeiou]/gi) || [])?.length;

//total consonants
const totalConsonants = totalLetters - totalVowels;

//total words
const totalWords = lowerCasedText.split(/[^a-z]+/i).filter(word => word !== '').length;

//unique words
const input = textInputValue;
const lowercaseinput = input.toLowerCase().match(/[a-z]+/g);
const uniqueWord = [];
const count = {};
for (let i = 0; i < lowercaseinput.length; i++) {
  const word = lowercaseinput[i];
  if (!count[word]) {
    uniqueWord.push(word);
  }
  count[word] = (count[word] || 0) + 1;
}
const uniqueWords = uniqueWord.length;




//long words
const text = textInputValue;
const longwords = text.match(/[a-zA-Z'.]+/g);

const longWords = longwords?.filter(word => word.length >= 6)?.length || 0;

//short words

const str = textInputValue;
const words = str.split(/\W+/);

const shortWords = words ? words.filter(word => /^[a-zA-Z']+$/.test(word) && word.length <= 3).length : 0;

// creating an element 
const dl = document.createElement('dl');

const originalInputDt = document.createElement('dt');
originalInputDt.textContent = 'Original Input:';
dl.appendChild(originalInputDt);

const originalInputDd = document.createElement('dd');
originalInputDd.textContent = textInputValue;
dl.appendChild(originalInputDd);

const totalLettersDt = document.createElement('dt');
totalLettersDt.textContent = 'Total Letters';
dl.appendChild(totalLettersDt);

const totalLettersDd = document.createElement('dd');
totalLettersDd.textContent = totalLetters;
dl.appendChild(totalLettersDd);

const totalNonLettersDt = document.createElement('dt');
totalNonLettersDt.textContent = 'Total Non-Letters';
dl.appendChild(totalNonLettersDt);

const totalNonLettersDd = document.createElement('dd');
totalNonLettersDd.textContent = totalNonLetters;
dl.appendChild(totalNonLettersDd);

const totalVowelsDt = document.createElement('dt');
totalVowelsDt.textContent = 'Total Vowels';
dl.appendChild(totalVowelsDt);

const totalVowelsDd = document.createElement('dd');
totalVowelsDd.textContent = totalVowels;
dl.appendChild(totalVowelsDd);

const totalConsonantsDt = document.createElement('dt');
totalConsonantsDt.textContent = 'Total Consonants';
dl.appendChild(totalConsonantsDt);

const totalConsonantsDd = document.createElement('dd');
totalConsonantsDd.textContent = totalConsonants;
dl.appendChild(totalConsonantsDd);

const totalWordsDt = document.createElement('dt');
totalWordsDt.textContent = 'Total Words';
dl.appendChild(totalWordsDt);

const totalWordsDd = document.createElement('dd');
totalWordsDd.textContent = totalWords;
dl.appendChild(totalWordsDd);

const uniqueWordsDt = document.createElement('dt');
uniqueWordsDt.textContent = 'Unique Words';
dl.appendChild(uniqueWordsDt);

const uniqueWordsDd = document.createElement('dd');
uniqueWordsDd.textContent = uniqueWords;
dl.appendChild(uniqueWordsDd);

const longWordsDt = document.createElement('dt');
longWordsDt.textContent = 'Long Words';
dl.appendChild(longWordsDt);

const longWordsDd = document.createElement('dd');
longWordsDd.textContent = longWords;
dl.appendChild(longWordsDd);

const shortWordsDt = document.createElement('dt');
shortWordsDt.textContent = 'Short Words';
dl.appendChild(shortWordsDt);

const shortWordsDd = document.createElement('dd');
shortWordsDd.textContent = shortWords;
dl.appendChild(shortWordsDd);

resultsDiv.innerHTML = '';
resultsDiv.appendChild(dl);
});