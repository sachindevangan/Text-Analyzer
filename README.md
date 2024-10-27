
---

### Client-Side Text Analyzer

#### Description
This project features a browser-based text analysis tool that computes a variety of statistics based on user-provided input text. An Express server is used only to deliver the HTML interface. Client-side JavaScript performs all text processing, offering real-time feedback on text metrics.

#### Features
- **Express Server**: Serves a single page with input elements for text analysis.
- **Text Statistics**:
  - Original Input: Displays the original user input.
  - Total Letters: Counts all letters.
  - Total Non-Letters: Counts non-letter characters (spaces included).
  - Total Vowels and Consonants: Counts vowels and consonants separately.
  - Total Words: Identifies words based on letter sequences.
  - Unique Words: Counts distinct words.
  - Long and Short Words: Categorizes words by length.

#### Tech Stack
- HTML
- CSS
- JavaScript
- Express.js

#### Installation
1. Clone the repository and navigate to the project directory:
   ```bash
   git clone <repository-url> && cd lab9-text-analyzer
   ```
2. Create and configure `package.json`, with `app.js` as the entry point.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```

#### Usage
Navigate to the server’s root endpoint to access the text analysis page. User input and statistics are processed and displayed directly on the page without page reloads.

#### License
This project is licensed under the MIT License.

--- 
