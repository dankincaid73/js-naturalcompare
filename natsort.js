// Require File System
const fs = require('fs');
// Require npm  naturalCompare
const naturalCompare = require('string-natural-compare');

// Read from the text file
fs.readFile('units.txt', 'utf8', function(err, contents) {
    // Create an array from the text
    var contents = contents.split("\n").filter(function(e){
      // Remove Empty Lines
      return e.replace(/(\r\n|\n|\r)/gm,"");
    });
    // Use naturalCompare to sort alphanumerics in human format
    contents.sort(naturalCompare);
    // Return the results
    contents.forEach(function(element) {
      console.log(element);
    });
});
