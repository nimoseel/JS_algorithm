// 1번 정답
// 정답
Array(100).fill(1).map((value, index)=>value+index);
Array(100).fill(1).map((value, index)=>value+index)+'';
(Array(100).fill(1).map((value, index)=>value+index)+'').split('8');
'128148123881'.split('8')
(Array(100).fill(1).map((value, index)=>value+index)+'').split('8').length - 1;
(Array(10000).fill(1).map((value, index)=>value+index)+'').split('8').length - 1; // 4000개, 답
'128148123881'.split(/8/g)


// https://codingdojang.com/scode/408?langby=javascript#answer-filter-area
// 1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오. 
//(단 점들의 배열은 모두 정렬되어있다고 가정한다.)

// 예를들어 S={1, 3, 4, 8, 13, 17, 20} 이 주어졌다면, 결과값은 (3, 4)가 될 것이다.



// 2번 정답
let s = [1, 3, 4, 8, 13, 17, 20]
for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
}

for (let i = 0; i < s.length; i++) {
    console.log(s[i+1] - s[i]);
}

//다른 언어, but js에서는 -1안해줘도 error가 안남
for (let i = 0; i < s.length - 1; i++) {
    console.log(s[i+1] - s[i]);
}

// 1번부터 시작해서 마지막까지
for (let i = 1; i < s.length; i++) {
    console.log(s[i] - s[i-1]);
}

let s = [1, 3, 4, 8, 13, 17, 20]
let arr = []
for (let i = 1; i < s.length; i++) {
    arr.push(s[i] - s[i-1]);
}
arr

let index = arr.indexOf(Math.min(...arr))
console.log(s[index], s[index+1])

// const zip = a => a.map((v, i) => [v, i]);

const zip = (a, b) => a.map((value, index)=>[value, b[index]]);
const zip = (a, b) => a.map((v, i)=>[v, b[i]]);
// a의 인덱스 번호까지만 배열을 만드는 게 맞죠 
// ([22, 33, 44], [100,200,300,400])이면 
// 배열은 세개만 만들어지고 반대로 
// ([100,200,300,400],[22, 33, 44])이면 배열은 4개가 만들어지고 마지막 배열 값은 400, undefined 인게 맞죠



zip([100, 200, 300], [10, 20, 30])
zip([100, 200, 300], [10, 20, 30, 40, 50, 60])
zip([100, 200, 300, 400, 500, 600], [10, 20, 30])

zip([100, 200, 300, 400, 500, 600], 'hello')


[1, 3, 4, 8, 13, 17, 20]
[1, 3, 4, 8, 13, 17] // s.slice(0, s.length-1)
[3, 4, 8, 13, 17, 20] // s.slice(1)
let pairs = zip(s.slice(0, s.length-1), s.slice(1))

function 비교(a, b) {
    if (a[1] - a[0] < b[1] - b[0]) {
        return -1
    }
    if (a[1] - a[0] > b[1] - b[0]) {
        return 1
    }
    return 0;
}

pairs.sort(비교)
pairs.sort(비교)[0]



//////// 쉬운 풀이 /////////

let s  = [1, 3, 4, 8, 13, 17, 20];

const zip = (a, b) => a.map((v, i)=>[v, b[i]]);
let pairs = zip(s.slice(0, s.length - 1), s.slice(1))

// 초기값, for문 안에서는 최솟값을 비교하는 용도로 사용
// MAX_SAFE_INTEGER를 주로 사용합니다!
// let init = Number.MAX_SAFE_INTEGER; // 최대로 계산할 수 있는 수에서 가장 큰 값, 넘버에서 계산할 수 있는 가장 큰 수
// let init = Number.MIN_SAFE_INTEGER; // 최대로 계산할 수 있는 수에서 가장 작은 값
let init = pairs[0][1] - pairs[0][0];
// result는 최종 결과값
let result = [];

for (let i of pairs) {
    // console.log(i);
    if (init > i[1] - i[0]) {
        init = i[1] - i[0]
        result = i; // 최솟값의 쌍이 필요하니까
    }
}

//for (let i of pairs) => pairs 각 요소에 들어가있는 두 쌍 배열이 i로 들어감
console.log(result)

// 스택이라는 자료구조는 원래 중간에서 pop이 안되는데, 스택 클래스는 스택을 활용해 중간 값을 꺼낼 수 있게 만든 것. 
