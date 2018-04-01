//1. Multiply a Number by 2

function multiplyNum(userNumber){
    return (userNumber * 2);
}


// console.log(multiplyNum(3));

//----------------------------------------------------------------------------------------------------------



//2.Multiply Two Numbers
function multiply2Nums(num1, num2){
   return num1 * num2;
}

// console.log(multiply2Nums(13, 13));


//---------------------------------------------------------------------------------------------------------



//3. Multiply / Divide a Number by a Given Second Number

function multDivideNums(num1, num2){

    if(num2 >= num1){
        return num1 * num2;

    }else if(num1 > num2){
        return num1 / num2;
    }

}


// console.log(multDivideNums(144, 12));


//--------------------------------------------------------------------------------------------------------

// 4. Product of 3 Numbers


function positiveOrNegative(num1, num2, num3){
    let signCounter = 0;
    let arrNums = [];
    let positiveOrNegative = '';

    arrNums.push(num1);
    arrNums.push(num2);
    arrNums.push(num3);


    for(let i = 0; i < arrNums.length; i++){

        if(arrNums[i] === 0){
            positiveOrNegative = 'Positive';
            break;
        }

        if(arrNums[i] < 0){
            signCounter++;
        }
    }


    if((signCounter % 2) === 0){
        positiveOrNegative = 'Positive';
    }else{
        positiveOrNegative = 'Negative';
    }


    return positiveOrNegative;

}


// console.log(positiveOrNegative(-3, -4, 5));

//---------------------------------------------------------------------------------------------------------

//5. Print Numbers from 1 to N

function printFrom1toN(numbers){
    let numsToPrint = '';


    for(let i = 1; i <= numbers; i++){
        if(i < numbers){
            numsToPrint +=  i + " ";
        }else if(i === numbers){
            numsToPrint += i;
        }
    }

    return numsToPrint;

}

// console.log(printFrom1toN(5));

//---------------------------------------------------------------------------------------------------------


//6. Print Numbers from N to 1

function printNto1Nums(numbers){
    let numsToPrint = '';


    for(let i = numbers; i >= 1; i--){
        if(i <= numbers){
            numsToPrint +=  i + " ";
        }else if(i == numbers){
            numsToPrint += i;
        }
    }

    return numsToPrint;

}

// console.log(printNto1Nums(5));

//--------------------------------------------------------------------------------------------------------

//7. Print Numbers in Reversed Order

function reverseNumbers(textToSplit) {
    let numString = textToSplit.split(" ");
    let resultStr = '';

    for (let i = numString.length - 1; i >= 0; i--) {
        resultStr += numString[i] + " ";
    }

    return resultStr;
}


// console.log(reverseNumbers("10 15 20"));
// console.log(reverseNumbers("5 5.5 24 -3"));
// console.log(reverseNumbers("20 1 20 1 20"));

//--------------------------------------------------------------------------------------------------------



// Help methods for 8

//initialize array with zeroes
function initializateArray(arr) {
    let resultArr = [];

    for(let i = 0; i < arr.length; i++){
        resultArr[i] = 0;
    }

    return resultArr;
}

//this iterate array wih input strings ( 0 - 5, 0 - 6 ..) for example and then split every input by '-' and then load result array with index and it's value and then return the result array. This is just a helper function.
function fillTheArray(arr, resultArr) {
    for(let i = 0; i < arr.length; i++){
        let line = arr[i].split(' - ');
        let index = parseInt(line[0]);

        resultArr[index] = line[1];
        // resultArr.push([line[0]] = line[1]);
    }

    return resultArr;
}


//fill the result string. This just fill the variable which will return the result string ready for printing

function fillTheResultString(resultArr, n) {
    let result = "";

    for(let a = 0; a < n; a++){
        result += resultArr[a] + "\n";
    }

    return result;
}

//End of helper functions.. now just time to have fun


//8. *Set Values to Indexes in an Array

function setValueToIndexArray(n, arr){
    let resultArr = initializateArray(arr);
    resultArr = fillTheArray(arr, resultArr);

    return fillTheResultString(resultArr, n);
}


console.log(setValueToIndexArray(3,["0 - 5", "1 - 6", "2 - 7"]));
console.log(setValueToIndexArray(2,["0 - 5", "0 - 6", "0 - 7"]));
console.log(setValueToIndexArray(5,["0 - 3", "3 - -1", "4 - 2"]));