function isPalindrom (str){
    const string = str.split(' ');
    for(let i = 0; i < str.length; i++){
        if(string == string.reverse().join('')){
            return string;
        }
    }
}
console.log(isPalindrom('шалаш'))

function findMinMax(arr){
    
    const max = arr[0]
    const min = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(max < arr[0]){
            max = arr[0]
        }if (min > arr[0]){
            min = arr[0]
        }
    }
    return { max, min}
}
console.log(findMinMax([12,3,4,2,7,3,7,1]))

function findDublicates(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr == arr.length){
            return arr.length[i]
        }
    }
}