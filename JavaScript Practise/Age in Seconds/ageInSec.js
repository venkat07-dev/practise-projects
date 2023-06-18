function ageInSec(age){
    return age *(((60*60)*24)*365);
}

//console.log(ageInSec(25));
//let a=[12,31,1,2,6,0];
function findMin(numbers){
    let min = numbers[0];
    for(let i=0;i<numbers.length;i++){
        if (numbers[i] < min){
            min = numbers[i];

        }

    }
    return min;
}

//console.log(findMin(a));


function findMax(numbers){
    let max = numbers[0];
    for(let i=0;i<numbers.length;i++){
        if (numbers[i] > max){
            max = numbers[i];

        }

    }
    return max;
}

//console.log(findMax(a));

//let ab=[12,31,1,2,54,0]; // list declaration
function sortBestFirst(numbers){

    for(let j=0; j<numbers.length-1 ;j++){
        let max_Num = numbers[j];
        let max_Num_Address = j;
        // finding the mx no 
        for( let i=j;i<numbers.length;i++){ 
            if (numbers[i] > max_Num){
                max_Num = numbers[i];
                // knowing the mx location
                max_Num_Address = i;
            }
        }//swapping the variables
        numbers[max_Num_Address] = numbers[j] ;
        numbers[j] = max_Num;
        }
    return numbers;
}
// console.log(sortBestFirst(ab));

//same function as above but in a minimised nd simple way 

let ab=[12,31,1,2,54,0];
function findMaxHelper(numbers,start){
     let maximum = numbers[start];
     let max_location = start;
    for(let i=start; i<numbers.length; i++){
        if( maximum < numbers[i]){
            maximum = numbers[i];
            max_location = i;
        }
    }
    return{Max_number : maximum , Max_index : max_location }

}

function sortBestWithHelper(numbers){

    for(let j=0; j < numbers.length-1; j++){

        //for finding max no. in array
        max = findMaxHelper(numbers,j)
        max_Num = max["Max_number"]
        max_Num_Address = max["Max_index"]

        //swapping the variables
        numbers[max_Num_Address] = numbers[j] ;
        numbers[j] = max_Num;
    }
    return numbers;

}

console.log(sortBestWithHelper(ab));