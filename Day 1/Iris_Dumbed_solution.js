//[NOTE]: console.log will print number arrays like a string array if you preface it
// e.g. numArr = [1,2,3]
//console.log("this is an array of numbers: " + numArr)
// result: This is an array of numbers: 1,2,3
// as opposed to:  [1,2,3]

//[NOTE]: the following code:
//arr.sort(function (a, b) {  return a - b;  });
//is inevitable thanks to javascript using UTF-16 for comparison 
//meaning numbers become strings for the comparison and that fucks with things BADLY
//I however don't fully understand why (a - b) fixes the issue. That's for another day


let Advent1_Input = require('./Advent1_Input')
let input = Advent1_Input.input

let elfArr = []
let elves_strings = input.split('\n\n')
console.log(elves_strings)

//despite the name, this for loop iterates based on array index
//not characters in the string
for (let x = 0; x < elves_strings.length; x++)
{
  
  //elf becomes an array thanks to .split("\n")
  let elf = elves_strings[x].
  trim().
  split("\n");
  
  //can be done in the same line as the split() step using the same syntax
  elf = elf.map(item => Number.parseInt(item))
  
  //[DEBUG] console.log(elf)
  
  let accum = 0; 
  
  //since elf is an array, we iterate through its indecies
  //VERY DUMBED DOWN WAY TO GET A SUM (not the cleanest... but it works)
  for(let y = 0; y < elf.length; y++)
  {
    accum = accum + elf[y] //VERY DUMBED DOWN WAY TO GET A SUM
  }
  elfArr.push(accum)
  
}
console.log("Food Total per elf:\n" + elfArr+ "\n")



//I could use a max(), BUT since I'll have to find the top 3 anyways... why not sort?
elfArr = elfArr.sort(function (a, b) {  return a - b;  }); 
console.log(elfArr)
console.log("The highest amount of calories carried:\n"+ elfArr[elfArr.length-1]+ "\n")
let top_3_elves = []
let top_3_Total = 0;

for(let i = elfArr.length-3; i < elfArr.length; i++)
{
    top_3_elves.push(elfArr[i])
    top_3_Total = top_3_Total + elfArr[i] //VERY DUMBED DOWN WAY TO GET A SUM
}
console.log (top_3_elves)
console.log(top_3_Total)

//let fat_elf = elfArr.reduce((a, b) => Math.max(a, b), -Infinity);

//console.log("The highest amount of calories carried:\n"+ fat_elf+ "\n")


