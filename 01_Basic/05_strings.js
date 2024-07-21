// Basic String Operations

const userName = "Ankit Chauhan";
const repoCount = 42;

// String concatenation using template literals
console.log(`Hello, my name is ${userName} and my repo count is ${repoCount}`);
// Output: Hello, my name is Ankit Chauhan and my repo count is 42

// Creating a String object
const websiteName = new String("ankit-chauhan-website");
console.log(websiteName); // String {'ankit-chauhan-website'}

// Accessing characters in a string
console.log(websiteName[0]); // 'a'

// String length
console.log(websiteName.length); // 20

// Converting to uppercase
console.log(websiteName.toUpperCase()); // 'ANKIT-CHAUHAN-WEBSITE'

// Character at a specific index
console.log(websiteName.charAt(2)); // 'k'

// Index of a character
console.log(websiteName.indexOf("c")); // 6

// Extracting Substrings
// Substring method (start, end)
const substringExample = websiteName.substring(0, 5);
console.log(substringExample); // 'ankit'

// Slice method (start, end)
const sliceExample = websiteName.slice(6, 13);
console.log(sliceExample); // 'chauhan'

// Explanation:
// substring(0, 5) extracts characters from index 0 to 4 (5 is excluded).
// slice(6, 13) extracts characters from index 6 to 12 (13 is excluded).

// Trimming and Replacing
const stringWithSpaces = "   Ankit Chauhan   ";

// Trim whitespace from both sides
console.log(stringWithSpaces.trim()); // 'Ankit Chauhan'

// Replacing substrings
const url = "https://ankitchauhan.com/ankit%20chauhan";
console.log(url.replace("%20", "-")); // 'https://ankitchauhan.com/ankit-chauhan'

// Checking for Substrings
// Checking if a substring exists
console.log(url.includes("ankitchauhan")); // true
console.log(url.includes("sunnyleone")); // false

// Splitting Strings
// Splitting a string into an array
console.log(websiteName.split("-")); // ['ankit', 'chauhan', 'website']

// Explanation:
// split('-') divides the string at each '-' character, returning an array of substrings.

// Additional String Methods
const sentence = "The quick brown fox jumps over the lazy dog.";

// Starts with a specific substring
console.log(sentence.startsWith("The")); // true

// Ends with a specific substring
console.log(sentence.endsWith("dog.")); // true

// Repeating a string
const repeatedString = "abc".repeat(3);
console.log(repeatedString); // 'abcabcabc'

// Searching for a substring
console.log(sentence.search("fox")); // 16 (index of 'fox')

// Converting to lowercase
console.log(websiteName.toLowerCase()); // 'ankit-chauhan-website'

// Concatenation
const firstName = "Ankit";
const lastName = "Chauhan";
const fullName = firstName.concat(" ", lastName);
console.log(fullName); // 'Ankit Chauhan'

// String includes
console.log(sentence.includes("quick")); // true

// Substr method (start, length)
const substrExample = sentence.substr(4, 5);
console.log(substrExample); // 'quick'

// Padding strings
const paddedString = "5".padStart(3, "0");
console.log(paddedString); // '005'
const paddedStringEnd = "5".padEnd(3, "0");
console.log(paddedStringEnd); // '500'

// Raw string
const rawString = String.raw`Hello\nWorld`;
console.log(rawString); // 'Hello\nWorld'

// String Template Literals
const greetingUser = "Ankit";
const personalizedGreeting = `Hello, ${greetingUser}! Welcome to our site.`;
console.log(personalizedGreeting); // 'Hello, Ankit! Welcome to our site.'

// Multi-line strings using template literals
const multiLineText = `This is line one.
This is line two.
This is line three.`;
console.log(multiLineText);

// Summary of Important String Methods
// - String Length: `.length`
// - Character Access: `[]`, `.charAt()`
// - Case Conversion: `.toUpperCase()`, `.toLowerCase()`
// - Substring Extraction: `.substring()`, `.slice()`, `.substr()`
// - Trimming: `.trim()`
// - Replacing Substrings: `.replace()`
// - Checking Substrings: `.includes()`, `.startsWith()`, `.endsWith()`
// - Splitting Strings: `.split()`
// - Repeating Strings: `.repeat()`
// - Searching Strings: `.search()`
// - Padding Strings: `.padStart()`, `.padEnd()`
// - Raw Strings: `String.raw`
