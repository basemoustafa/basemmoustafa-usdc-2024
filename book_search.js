/**
 * RECOMMENDATION
 *
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 *
 * The Developer Tools in Chrome are available under the "..." menu,
 * futher hidden under the option "More Tools." In Firefox, they are
 * under the hamburger (three horizontal lines), also hidden under "More Tools."
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for.
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */
function findSearchTermInBooks(searchTerm, scannedTextObj) {
  /** You will need to implement your search and
   * return the appropriate object here. */
  var result = {
    SearchTerm: searchTerm,
    Results: [],
  };

  for (const book of scannedTextObj) {
    const { ISBN, Content } = book;
    for (const { Page, Line, Text } of Content) {
      // filter punctuation and parse each word
      const words = Text.replace(/[!,./:;?@]/g, "").split(/\s+/);
      for (let i = 0; i < words.length; i += 1) {
        if (words[i] == searchTerm) {
          result.Results.push({ ISBN, Page, Line });
        }
      }
    }
  }

  return result;
}

/** Example input object. */
const twentyLeaguesIn = [
  {
    Title: "Twenty Thousand Leagues Under the Sea",
    ISBN: "9780000528531",
    Content: [
      {
        Page: 31,
        Line: 8,
        Text: "now simply went on by her own momentum. The dark-ness",
      },
      {
        Page: 31,
        Line: 9,
        Text: "ness was then profound; and however good the Canadian's",
      },
      {
        Page: 31,
        Line: 10,
        Text: "eyes were, I asked myself how he had managed to see, and",
      },
    ],
  },
];

/** Example output object */
const twentyLeaguesOut = {
  SearchTerm: "the",
  Results: [
    {
      ISBN: "9780000528531",
      Page: 31,
      Line: 9,
    },
  ],
};

const multipleBooksIn = [
  {
    Title: "Book 1",
    ISBN: "9780000528531",
    Content: [
      {
        Page: 23,
        Line: 12,
        Text: "This book is very fun and really interesting!",
      },
      {
        Page: 31,
        Line: 3,
        Text: "This books is very fun and really interestin!",
      },
      {
        Page: 42,
        Line: 15,
        Text: "This book is very fun and really interestin!",
      },
    ],
  },
  {
    Title: "Book 2",
    ISBN: "9780000528524",
    Content: [
      {
        Page: 28,
        Line: 15,
        Text: "Hi: hi, my? name; is name Basem?",
      },
      {
        Page: 33,
        Line: 23,
        Text: "my! book is very fun and really interestin!",
      },
      {
        Page: 99,
        Line: 14,
        Text: "my: This book is very fun and really interestin!",
      },
    ],
  },
  {
    Title: "Book 3",
    ISBN: "9780000528533",
    Content: [
      {
        Page: 1,
        Line: 1,
        Text: "This book is very fun and really interesting!",
      },
      {
        Page: 23,
        Line: 39,
        Text: "This book is very fun and really interestin!",
      },
      {
        Page: 100,
        Line: 36,
        Text: "This book is very fun and really interestin!",
      },
    ],
  },
];

const multipleBooksOut1 = {
  SearchTerm: "interesting",
  Results: [
    {
      ISBN: "9780000528531",
      Page: 23,
      Line: 12,
    },
    {
      ISBN: "9780000528533",
      Page: 1,
      Line: 1,
    },
  ],
};

const multipleBooksOut2 = {
  SearchTerm: "really",
  Results: [
    {
      ISBN: "9780000528531",
      Page: 23,
      Line: 12,
    },
    {
      ISBN: "9780000528531",
      Page: 31,
      Line: 3,
    },
    {
      ISBN: "9780000528531",
      Page: 42,
      Line: 15,
    },
    {
      ISBN: "9780000528524",
      Page: 33,
      Line: 23,
    },
    {
      ISBN: "9780000528524",
      Page: 99,
      Line: 14,
    },
    {
      ISBN: "9780000528533",
      Page: 1,
      Line: 1,
    },
    {
      ISBN: "9780000528533",
      Page: 23,
      Line: 39,
    },
    {
      ISBN: "9780000528533",
      Page: 100,
      Line: 36,
    },
  ],
};

const multipleBooksOut3 = {
  SearchTerm: "books",
  Results: [
    {
      ISBN: "9780000528531",
      Page: 31,
      Line: 3,
    },
  ],
};

const multipleBooksOut4 = {
  SearchTerm: "Basem",
  Results: [
    {
      ISBN: "9780000528524",
      Page: 28,
      Line: 15,
    },
  ],
};

const multipleBooksOut5 = {
  SearchTerm: "my",
  Results: [
    {
      ISBN: "9780000528524",
      Page: 28,
      Line: 15,
    },
    {
      ISBN: "9780000528524",
      Page: 33,
      Line: 23,
    },
    {
      ISBN: "9780000528524",
      Page: 99,
      Line: 14,
    },
  ],
};

const multipleBooksOut6 = {
  SearchTerm: "dark-ness",
  Results: [
    {
      ISBN: "9780000528531",
      Page: 31,
      Line: 8,
    },
  ],
};

const multipleBooksOut7 = {
  SearchTerm: "Canadian's",
  Results: [
    {
      ISBN: "9780000528531",
      Page: 31,
      Line: 9,
    },
  ],
};
/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that
 * output to the console. We've provided two tests as examples, and
 * they should pass with a correct implementation of `findSearchTermInBooks`.
 *
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
  console.log("PASS: Test 1");
} else {
  console.log("FAIL: Test 1");
  console.log("Expected:", twentyLeaguesOut);
  console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn);
if (test2result.Results.length == 1) {
  console.log("PASS: Test 2");
} else {
  console.log("FAIL: Test 2");
  console.log("Expected:", twentyLeaguesOut.Results.length);
  console.log("Received:", test2result.Results.length);
}

/**
 * --------------------
 * Negative Case Tests |
 * --------------------
 */

/** Search for a term that does not exist */
const negative1result = findSearchTermInBooks("apple", twentyLeaguesIn);
if (
  negative1result.SearchTerm == "apple" &&
  negative1result.Results.length == 0
) {
  console.log("PASS: Negative Test 1");
} else {
  console.log("FAIL: Negative Test 1");
  console.log("Expected:", 0);
  console.log("Received:", negative1result.Results.length);
}

/** Search for a term that does not exist with multiple books */
const negative2result = findSearchTermInBooks("apple", multipleBooksIn);
if (
  negative2result.SearchTerm == "apple" &&
  negative2result.Results.length == 0
) {
  console.log("PASS: Negative Test 2");
} else {
  console.log("FAIL: Negative Test 2");
  console.log("Expected:", 0);
  console.log("Received:", negative2result.Results.length);
}

/** Search for a term that does not exist with multiple books case sensitive */
const negative3result = findSearchTermInBooks("Really", multipleBooksIn);
if (
  negative3result.SearchTerm == "Really" &&
  negative3result.Results.length == 0
) {
  console.log("PASS: Negative Test 3");
} else {
  console.log("FAIL: Negative Test 3");
  console.log("Expected:", 0);
  console.log("Received:", negative3result.Results.length);
}

/**
 * --------------------
 * Negative Edge Case Tests |
 * --------------------
 */

/** Search for a term with an empty string should return empty results */
const negativeEdge1result = findSearchTermInBooks("", twentyLeaguesIn);
if (
  negativeEdge1result.SearchTerm == "" &&
  negativeEdge1result.Results.length == 0
) {
  console.log("PASS: Negative Edge Test 1");
} else {
  console.log("FAIL: Negative Edge Test 1");
  console.log("Expected:", 0);
  console.log("Received:", negativeEdge1result.Results);
}

/** Search for a term that does not exist (half of the word) */
const negativeEdge2result = findSearchTermInBooks("-ness", twentyLeaguesIn);
if (
  negativeEdge2result.SearchTerm == "-ness" &&
  negativeEdge2result.Results.length == 0
) {
  console.log("PASS: Negative Edge Test 2");
} else {
  console.log("FAIL: Negative Edge Test 2");
  console.log("Expected:", 0);
  console.log("Received:", negativeEdge2result.Results);
}

/** Search for a term that does not exist (half of the word) */
const negativeEdge3result = findSearchTermInBooks("inter", multipleBooksIn);
if (
  negativeEdge3result.SearchTerm == "inter" &&
  negativeEdge3result.Results.length == 0
) {
  console.log("PASS: Negative Edge Test 3");
} else {
  console.log("FAIL: Negative Edge Test 3");
  console.log("Expected:", multipleBooksOut1);
  console.log("Received:", negativeEdge3result.Results);
}

/**
 * --------------------
 * Positive Case Tests |
 * --------------------
 */

/** Search for a term should match and return multiple books */
const positive1result = findSearchTermInBooks("interesting", multipleBooksIn);
if (JSON.stringify(multipleBooksOut1) === JSON.stringify(positive1result)) {
  console.log("PASS: Positive Test 1");
} else {
  console.log("FAIL: Positive Test 1");
  console.log("Expected:", multipleBooksOut1);
  console.log("Received:", positive1result.Results);
}

/** Search for a term should match and return multiple books and multiple lines per book*/
const positive2result = findSearchTermInBooks("really", multipleBooksIn);
if (JSON.stringify(multipleBooksOut2) === JSON.stringify(positive2result)) {
  console.log("PASS: Positive Test 2");
} else {
  console.log("FAIL: Positive Test 2");
  console.log("Expected:", multipleBooksOut2);
  console.log("Received:", positive2result.Results);
}

/** Search for a term should match and return multiple books and multiple lines per book*/
const positive3result = findSearchTermInBooks("books", multipleBooksIn);
if (JSON.stringify(multipleBooksOut3) === JSON.stringify(positive3result)) {
  console.log("PASS: Positive Test 3");
} else {
  console.log("FAIL: Positive Test 3");
  console.log("Expected:", multipleBooksOut3);
  console.log("Received:", positive3result.Results);
}

/**
 * --------------------
 * Positive Edge Case Tests |
 * --------------------
 */

/** Search for a term that does exist with ending punctuation */
const positveEdge1result = findSearchTermInBooks("Basem", multipleBooksIn);
if (JSON.stringify(multipleBooksOut4) === JSON.stringify(positveEdge1result)) {
  console.log("PASS: Positive Edge Test 1");
} else {
  console.log("FAIL: Positve Edge Test 1");
  console.log("Expected:", multipleBooksOut4);
  console.log("Received:", positveEdge1result.Results);
}

/** Search for a term that does exist and contains punctuation, and has multiple matches */
const positveEdge2result = findSearchTermInBooks("my", multipleBooksIn);
if (JSON.stringify(multipleBooksOut5) === JSON.stringify(positveEdge2result)) {
  console.log("PASS: Positive Edge Test 2");
} else {
  console.log("FAIL: Positve Edge Test 2");
  console.log("Expected:", multipleBooksOut5);
  console.log("Received:", positveEdge2result.Results);
}

/** Search for a term that does exist and contains punctuation */
const positveEdge3result = findSearchTermInBooks("dark-ness", twentyLeaguesIn);
if (JSON.stringify(multipleBooksOut6) === JSON.stringify(positveEdge3result)) {
  console.log("PASS: Positive Edge Test 3");
} else {
  console.log("FAIL: Positve Edge Test 3");
  console.log("Expected:", multipleBooksOut6);
  console.log("Received:", positveEdge3result.Results);
}

/** Search for a term that does exist and contains punctuation */
const positveEdge4result = findSearchTermInBooks("Canadian's", twentyLeaguesIn);
if (JSON.stringify(multipleBooksOut7) === JSON.stringify(positveEdge4result)) {
  console.log("PASS: Positive Edge Test 4");
} else {
  console.log("FAIL: Positve Edge Test 4");
  console.log("Expected:", multipleBooksOut7);
  console.log("Received:", positveEdge4result.Results);
}
