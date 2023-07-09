//[NOTE]: while the code may seem cleaner at times
// this is STILL laughable compared to what it could be.
// The Spaghetti is scary with me.

//[NOTE]: console.log will print number arrays like a string array if you concatenate it
// with a string.
// e.g. numArr = [1,2,3]
// console.log("this is an array of numbers: " + numArr)
// result: This is an array of numbers: 1,2,3
// as opposed to:  [1,2,3]

let input = `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`

// Creating a list of the elves
let elf_sums = []

//Splitting the input using the double newline as a key
let elf_strings = input.split("\n\n")

//Verifying results
console.log(elf_strings)

for(elf_string of elf_strings)
{
  //Split again, and convert the string into 
  let calories = elf_string.trim().split("\n").map(line => Number.parseInt(line))
  console.log ("Elf Calories:")
  console.log (calories)
  let calorie_sum = 0
  for(calorie of calories)
  {
    calorie_sum = calorie_sum+calorie
  }
  elf_sums.push(calorie_sum)
}
console.log("Total Calories per elf: " + elf_sums + "\n")

console.log(elf_sums.reduce((max, curr) => Math.max(max, curr), 0))

let top_elves = []

for (let x= 0; x<3;x++){
    top_elves.push(elf_sums.reduce((max, curr) => Math.max(max, curr), 0))
    
    //I know repeating code is a bad habit, but I was tired and wanted to move on ^_^
    elf_sums[elf_sums.indexOf(elf_sums.reduce((max, curr) => Math.max(max, curr), 0))] = 0
}
console.log(top_elves)

let sum_topThree =0
for(elf of top_elves){
        sum_topThree = sum_topThree+elf
}
console.log(sum_topThree)

