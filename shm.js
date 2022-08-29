var fs = require('fs');
var text = fs.readFileSync("./second_hands_validation_input.txt", 'utf-8');
var textByLine = text.split('\n')
styles = textByLine;
//styles = [];
/*display = 4 || 6;
fit = styles.length <= display ? "yes" : "no";
console.log(fit);*/
const toFindDuplicates = styles => styles.filter((item, index) => styles.indexOf(item) !== index)
const duplicateElements = toFindDuplicates(styles);
//console.log(duplicateElements);
result = duplicateElements.length >= 3 ? "YES" : "NO";
console.log(result);