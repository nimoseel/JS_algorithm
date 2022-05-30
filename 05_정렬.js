// 3. 정렬
// 3.1 선택정렬
// step 1
let 전 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 후 = []

// step 2
let 전 = [199, 22, 33, 32, 64, 72, 222, 233];
let 후 = [12]

// step 3
let 전 = [199, 33, 32, 64, 72, 222, 233];
let 후 = [12, 22]

// step 4
let 전 = [199, 33, 64, 72, 222, 233];
let 후 = [12, 22, 32]


let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233]
let 정렬된배열 = []
let 길이 = 입력값.length

// 주의해야 할 사항 : pop을 하면 length가 줄어듭니다!
// for (let i = 0; i < 입력값.length; i++) {
//     console.log(입력값.pop())
//     console.log(i)   
// }

for (let i = 0; i < 길이; i++) {
    let 최솟값 = Math.min(...입력값);
    정렬된배열.push(최솟값)ㄴ
    입력값.splice(입력값.indexOf(최솟값), 1)
}


/////////


let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233]
let 정렬된배열 = []
// let 길이 = 입력값.length -> 생략해도 됨

while (!!입력값.toString()) {
    let 최솟값 = Math.min(...입력값);
    정렬된배열.push(최솟값)
    입력값.splice(입력값.indexOf(최솟값), 1)
}

// 3.1 선택정렬(메서드 최소화) - 다른 풀이
// 제대로 하려면(자리 바꾸는 것까지)

let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233]
let 정렬된배열 = []

function selectionSort(arr){
    for (let i = 0; i < arr.length; i++) {
        let min_index = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min_index] > arr[j]) {
                min_index = j
            }
        }

        let temp = arr[min_index]
        arr[min_index] = arr[i]
        arr[i] = temp
    }
    return arr
}


// 3.2 삽입정렬(자기가 들어갈 위치를 찾아감!, O(n**2))
let 전 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 후 = [];

let 전 = [22, 33, 12, 32, 64, 72, 222, 233];
let 후 = [199];

let 전 = [33, 12, 32, 64, 72, 222, 233];
let 후 = [22, 199];

let 전 = [12, 32, 64, 72, 222, 233];
let 후 = [22, 33, 199];

let 전 = [32, 64, 72, 222, 233];
let 후 = [12, 22, 33, 199];

let 전 = [64, 72, 222, 233];
let 후 = [12, 22, 32, 33, 199];

let 전 = [72, 222, 233];
let 후 = [12, 22, 32, 33, 64, 199];


let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = [];
let 배열의길이 = 입력값.length;

function 삽입값이_들어갈_인덱스(정렬된배열, 삽입값){
    for (const i in 정렬된배열) {
        if (삽입값 < 정렬된배열[i]){
            return i
        }
    }
    return 정렬된배열.length
}

for (let i = 0; i < 배열의길이; i++) {
    let 삽입값 = 입력값.shift()
    let 인덱스 = 삽입값이_들어갈_인덱스(정렬된배열, 삽입값)
    정렬된배열.splice(인덱스, 0, 삽입값)
}

console.log(정렬된배열)


// 설명만 하고 가도록 하겠습니다.
function insertIndex(sorted_arr, value) {
    //삽입될 위치를 찾는 함수
    for(let i in sorted_arr){
        if(value < sorted_arr[i]){
            return i;
        }
    }
    return sorted_arr.length;
}

function insertSort(arr) {
    let sorted_arr = [];

    while (arr.length != 0){
        let value = arr.shift();
        //삽입될 위치를 반환함
        let index = insertIndex(sorted_arr, value);
        //삽입될 위치에 값을 반환
        sorted_arr.splice(index, 0, value);
    }
    return sorted_arr;
}
const arr = [199, 22, 33, 12, 32, 64, 72, 222, 233];
console.log(insertSort(arr));




let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = [];
let 배열의길이 = 입력값.length;

function insertIndex(sorted_arr, value) {
    //삽입될 위치를 찾는 함수
    for(let i in sorted_arr){
        if(value < sorted_arr[i]){
            return i;
        }
    }
    return sorted_arr.length;
}

function insertSort(arr) {
    let sorted_arr = [];

    while (arr.length != 0){
        let [value, ...arr2] = arr;
        arr = arr2
        //삽입될 위치를 반환함
        let index = insertIndex(sorted_arr, value);
        //삽입될 위치에 값을 반환
        sorted_arr.splice(index, 0, value);
    }
    return sorted_arr;
}
const arr = [199, 22, 33, 12, 32, 64, 72, 222, 233];
console.log(insertSort(arr));



// 3.3 병합정렬(Worst와 Best 모두 O(nlogn), 어떤 정렬보다 빠름, 동일 할 수 있음)
// let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];
// let 정렬된배열 = [];
// 분할 정복(Divide and Conquer)


let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];
let 정렬된배열 = [];


// 분할(이해를 돕기 위해 8개로 조정)
[5, 10, 66, 77, 54, 32, 11, 15]
[5, 10, 66, 77], [54, 32, 11, 15]
[5, 10], [66, 77], [54, 32], [11, 15]
[5], [10], [66], [77], [54], [32], [11], [15]

// 정복(0번째끼리 비교!)
[5, 10], [66, 77], [32, 54], [11, 15]
[5, 10], [66, 77], [32, 54], [11, 15]
[5, 10, 66, 77], [11, 15, 32, 54]
[5, 10, 11, 15, 32, 54, 66, 77]


// step 1
let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];

function 병합정렬(입력배열){
    let 입력배열의길이 = 입력배열.length
    if (입력배열의길이 <= 1) {
        return 입력배열
    }
    let 중간값 = parseInt(입력배열의길이 / 2)
    let 그룹하나 = 병합정렬(입력배열.slice(0, 중간값))
    let 그룹둘 = 병합정렬(입력배열.slice(중간값))
    
    return `그룹하나 : ${그룹하나}\n그룹둘 : ${그룹둘}\n\n`
}

console.log(병합정렬(입력값))


// step 2
let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];

function 병합정렬(입력배열){
    let 입력배열의길이 = 입력배열.length
    let 결과값 = []

    if (입력배열의길이 <= 1) {
        return 입력배열
    }

    let 중간값 = parseInt(입력배열의길이 / 2)
    let 그룹하나 = 병합정렬(입력배열.slice(0, 중간값))
    let 그룹둘 = 병합정렬(입력배열.slice(중간값))
    
    while (그룹하나.length != 0 && 그룹둘.length != 0){
        if (그룹하나[0] < 그룹둘[0]){
            결과값.push(그룹하나.shift())
        } else {
            결과값.push(그룹둘.shift())
        }
    }

    while (그룹하나.length != 0){
        결과값.push(그룹하나.shift())
    }

    while (그룹둘.length != 0){
        결과값.push(그룹둘.shift())
    }

    return 결과값

}

console.log(병합정렬(입력값))