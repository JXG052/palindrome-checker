//SOLUTION:
                   // turn input string into an array
// let new array = []
//       iterate through array, pushing to newArray
// if (newArray == inputArray) 
// return true
// if not 
// return false

    function palindromeCheck1 (str) {
        // remove any non characters  from input  string and convert to lower case
        let myRegex = /[^a-zA-Z0-9]/ig;
        let noUndsString = str.replace(myRegex, "").toLowerCase()
        console.log(`this is the noUndsString: ${noUndsString}`)
        // turn altered  string into lowercase array
        let inputArray = noUndsString.split("") 
        
        
        console.log(inputArray)
        // copy input array
        let reverseArray = [...inputArray]
        // reverse it
        reverseArray.reverse()
        // make string
        let reverseStr = reverseArray.join("")
        console.log(`this is the reverse string: ${reverseStr}`)
        if (reverseStr == noUndsString ){
            return true
        }
        return false  
        }

console.log(palindromeCheck1("A man, a plan, -a canal. Panama"))

    // Solution .1a 
        //  How do we remove the  underscore at the same point we turn it toLowerCase
        // regex - create a  regex that matches underscores. then do noUnderScoreString = str.match(regex)
        // regex = /_/ignoring
// let testString = "race_car"
// let myRegex = /[\s|_]/ig;
// let noUnderScoreString = testString.replace(myRegex, "")
// console.log(noUnderScoreString)

