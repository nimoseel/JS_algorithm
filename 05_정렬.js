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


// 3.4 퀵정렬(best - O(nlog2n), worst - O(n**2))
// 피봇값(pivot)을 기준으로 정렬(피봇값은 처음값, 중간값, 마지막 값)
// 실무에서는 worst일 경우를 피하기 위해 피봇을 랜덤하게 주는 경우나, 피봇을 2개 사용하는 경우도 있음.

let 입력값 = [66, 77, 54, 32, 10, 5, 11, 15];

// step 1
// 피봇값 : 66
[54, 32, 10, 5, 11, 15] + [66] + [77]

// step 2
// 피봇값 : 54 (66과 77은 값이 한 개이기 때문에 더이상 재귀로 호출되지 않음.)
[32, 10, 5, 11, 15] + [54] + [66] + [77]

// step 3
// 피봇값 : 32
[10, 5, 11, 15] + [32] + [54] + [66] + [77]

// step 4
// 피봇값 : 10
[5] + [10] + [11, 15] + [32] + [54] + [66] + [77]

// step 5
// 피봇값 : 11
[5] + [10] + [11] + [15] + [32] + [54] + [66] + [77]


let 입력값 = [66, 77, 54, 32, 10, 5, 11, 15];
function 퀵정렬(입력배열) {
    let 입력배열의길이 = 입력배열.length

    if (입력배열의길이 <= 1) {
        return 입력배열
    }
    
    const 피벗값 = [입력배열.shift()]
    const 그룹하나 = []
    const 그룹둘 = []

    for (let i in 입력배열) {
        if (입력배열[i] < 피벗값) {
            그룹하나.push(입력배열[i])
        } else {
            그룹둘.push(입력배열[i])
        }
    }

    console.log(`그룹하나 : ${그룹하나}\n그룹둘 : ${그룹둘}\n피벗값 : ${피벗값}\n`);

    return 퀵정렬(그룹하나).concat(피벗값, 퀵정렬(그룹둘))
}

console.log(퀵정렬(입력값))


// 4. 페이지 교체 알고리즘
// https://www.notion.so/paullabworkspace/db83d9c4bbe6410ea208e6dc2daff07e
// 페이지 교체 알고리즘 : 메모리를 효율적으로 사용하기 위해서 어떤 데이터를 메모리에 적재할지 결정하는 알고리즘
// FIFO(오래된 녀석이 가장 빨리 나간다)
// 순서 : 0, 4, 6, 5, 4, 7, 8
[]
[0]
[0, 4]
[0, 4, 6]
[4, 6, 5]
[4, 6, 5] // 4가 hit
[6, 5, 7]
[5, 7, 8]
// LRU(오랫동안 사용되지 않은 녀석이 삭제)
// 순서 : 0, 4, 6, 5, 4, 7, 8
[]
[0]
[0, 4]
[0, 4, 6]
[4, 6, 5]
[6, 5, 4] // 4가 hit
[5, 4, 7]
[4, 7, 8]

// 문제 : https://tech.kakao.com/2017/09/27/kakao-blind-recruitment-round-1/
// 캐시 크기(cacheSize)와 도시이름 배열(cities)
// cacheSize는 정수이며, 범위는 0 ≦ cacheSize ≦ 30
// cities는 도시 이름으로 이뤄진 문자열 배열로, 최대 도시 수는 100,000개이다.
// 각 도시 이름은 공백, 숫자, 특수문자 등이 없는 영문자로 구성되며, 대소문자 구분을 하지 않는다. 도시 이름은 최대 20자로 이루어져 있다.
// LRU(Least Recently Used)를 사용한다.
// hit일 경우 실행시간은 1이다.
// miss일 경우 실행시간은 5이다.

// 캐시크기 3
["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]
["","",""]

["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]
["Jeju","",""] // 5

/////// stop //////




// 캐시크기 3 - 총 27
["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA"]
["Jeju","",""] //5

["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA"]
["Jeju","Pangyo",""] //5

["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA"]
["Jeju","Pangyo","Seoul"] //5

["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA"]
["Pangyo","Seoul","NewYork"] //5

["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA"]
["Seoul","NewYork", "LA"] //5

["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA"]
["NewYork","LA","Seoul"] //1

["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA"]
["NewYork","Seoul","LA"] //1

//LRU
// hit - 1
// miss - 5
["바나나", "체리", "한라봉", "자몽", "수박", "수박", "체리"]
[바나나] // 5
[바나나, 체리] // 5
[바나나, 체리, 한라봉] // 5
[체리, 한라봉, 자몽] // 5
[한라봉, 자몽, 수박] // 5
[한라봉, 자몽, 수박] // 1 - hit
[자몽, 수박, 체리] // 5


// FIFO 알고리즘(캐시:3)
["바나나", "체리", "한라봉", "자몽", "수박", "수박", "체리"]
[바나나] // 5
[바나나, 체리] // 5
[바나나, 체리, 한라봉] // 5
[체리, 한라봉, 자몽] // 5
[한라봉, 자몽, 수박] // 5 
[한라봉, 자몽, 수박] // 1 - hit
[자몽, 수박, 체리]  // 5



// 5. 트리와 그래프
// 5.1 트리
// 트리의 기본형태
// value
// child - left
// child - right

const tree = {
    root : {
        value : 5,
        left : {
            value: 3,
            left: {
                value: 1,
                left: null,
                right: null
            },
            right: {
                value: 4,
                left: null,
                right: null
            },
        },
        right : {
            value: 8,
            left: {
                value: 6,
                left: null,
                right: null
            },
            right: {
                value: 9,
                left: null,
                right: null
            },
        },
    }
}

// 55━70━77━80
// │         └━ 75
// │
// └━30━37
//       │
//       25
//       │
//       21


const tree = {
    root : {
        value : 55,
        left : {
            value: 30,
            left: {
                value: 25,
                left: {
                    value: 21,
                    left: null,
                    right: null,
                },
                right: null
            },
            right: {
                value: 37,
                left: null,
                right: null
            },
        },
        right : {
            value: 70,
            left: {
                value: 75,
                left: null,
                right: null
            },
            right: {
                value: 77,
                left: null,
                right: {
                    value: 80,
                    left: null,
                    right: null,
                }
            },
        },
    }
}

tree.root.value
// 55
tree.root.right.value
// 70
tree.root.right.right.value
// 77


// object나 array(기존 자료형)로 tree나 linked list를 구현할 수 있는데 왜 class로 구현할까요?


// 1. 더 lite한 모델을 만들기 위해
// 2. 확장성
// 3. OOP(Object-Oriented Programming, 객체 지향 프로그래밍)에 철학에 맞기 때문에


const root = {
    value: 55,
    left: null,
    right: null
}

let node1 = {value:99, left:null, right:null}
let node2 = {value:53, left:null, right:null}
let node3 = {value:37, left:null, right:null}
let node4 = {value:54,  left:null, right:null}
root.right = node1
root.left = node2
node2.left = node3
node2.right = node4

root.root
// 55
root.right.value
// 99
root.left.value
// 53
root.left.left.value
// 37


// step 1 노드 생성
class Node {
    constructor(data){
        this.data = data
        // this.child = [] // 2진트리가 아닌 트리가 됩니다. 저는 child를 많이 사용합니다.
        this.left = null
        this.right = null
    }
}

노드1 = new Node(55)
노드2 = new Node(99)
노드3 = new Node(53)
노드4 = new Node(37)
노드5 = new Node(54)

노드1.right = 노드2
노드1.left = 노드3
노드3.right = 노드5
노드3.left = 노드4

노드1.root
// 55
노드1.right.data
// 99
노드1.left.data
// 53
노드1.left.left.data
// 37


// step2
class Node {
    constructor(data){
        this.data = data
        // this.child = [] // 2진트리가 아닌 트리가 됩니다. 저는 child를 많이 사용합니다.
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor(data){
        let init = new Node(data)
        this.root = init
        this.데이터수 = 0
    }

    length(){
        return this.데이터수
    }
    
    insert(data){
        let 새로운노드 = new Node(data)
        let 순회용현재노드 = this.root

        while(순회용현재노드) {
            if (data === 순회용현재노드.data){
                // 값이 같으면 추가시켜주지 않습니다.
                return
            }
            if (data < 순회용현재노드.data){
                // 들어온 데이터가 작은 경우 왼쪽에 붙여야 합니다!
                // 해당 데이터 부분이 비어있으면 데이터를 넣고, 비어있지 않으면 계속 타고 내려가야 합니다.
                if(!순회용현재노드.left){
                    순회용현재노드.left = 새로운노드
                    this.데이터수 += 1
                    return
                }
                순회용현재노드 = 순회용현재노드.left
            }
            if (data > 순회용현재노드.data){
                // 들어온 데이터가 큰 경우 오른쪽에 붙여야 합니다!
                // 해당 데이터 부분이 비어있으면 데이터를 넣고, 비어있지 않으면 계속 타고 내려가야 합니다.
                if(!순회용현재노드.right){
                    순회용현재노드.right = 새로운노드
                    this.데이터수 += 1
                    return
                }
                순회용현재노드 = 순회용현재노드.right
            }
        }
    }
}

let t = new Tree(5)
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(4);
t.insert(6);
t.insert(9);

t.root.data
// 5
t.root.left.data
// 3
t.root.right.right.data
// 9
t.root.right.left.data
// 6





// step3 트리의 순회
class Node {
    constructor(data){
        this.data = data
        // this.child = [] // 2진트리가 아닌 트리가 됩니다. 저는 child를 많이 사용합니다.
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor(data){
        let init = new Node(data)
        this.root = init
        this.데이터수 = 0
    }

    length(){
        return this.데이터수
    }
    
    insert(data){
        let 새로운노드 = new Node(data)
        let 순회용현재노드 = this.root

        while(순회용현재노드) {
            if (data === 순회용현재노드.data){
                // 값이 같으면 추가시켜주지 않습니다.
                return
            }
            if (data < 순회용현재노드.data){
                // 들어온 데이터가 작은 경우 왼쪽에 붙여야 합니다!
                // 해당 데이터 부분이 비어있으면 데이터를 넣고, 비어있지 않으면 계속 타고 내려가야 합니다.
                if(!순회용현재노드.left){
                    순회용현재노드.left = 새로운노드
                    this.데이터수 += 1
                    return
                }
                순회용현재노드 = 순회용현재노드.left
            }
            if (data > 순회용현재노드.data){
                // 들어온 데이터가 큰 경우 오른쪽에 붙여야 합니다!
                // 해당 데이터 부분이 비어있으면 데이터를 넣고, 비어있지 않으면 계속 타고 내려가야 합니다.
                if(!순회용현재노드.right){
                    순회용현재노드.right = 새로운노드
                    this.데이터수 += 1
                    return
                }
                순회용현재노드 = 순회용현재노드.right
            }
        }
    }

    //깊스너큐, 파선아실
    DFS() {
        // 깊이우선탐색, DFS(Depth First Search)
        // Stack 이용!
        let 결과값 = []
        let 스택 = [this.root]

        while (스택.length !== 0){
            let current = 스택.pop()
            if (current.right){
                스택.push(current.right)
            }
            if (current.left){
                스택.push(current.left)
            }
            결과값.push(current.data)
        }
        return 결과값
    }

    BFS() {
        // 너비우선탐색, BFS(Breadth First Search)
        // Queue 이용!
        let 결과값 = []
        let 스택 = [this.root]

        while (스택.length !== 0){
            let current = 스택.shift()
            if (current.left){
                스택.push(current.left)
            }
            if (current.right){
                스택.push(current.right)
            }
            결과값.push(current.data)
        }
        return 결과값
    }
}

let t = new Tree(5)
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(4);
t.insert(6);
t.insert(9);

t.root.data
// 5
t.root.left.data
// 3
t.root.right.right.data
// 9
t.root.right.left.data
// 6


// 목차(실전 코딩테스트 풀이)
// 1. 18년도
// https://programmers.co.kr/learn/courses/30/lessons/17681?language=javascript
// 주제 : 2진법, 진법 연산, replace, or 연산


// 0. 암호를 해독
// 1. 지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 "공백"(" ") 또는 "벽"("#") 두 종류로 이루어져 있다.
// 2. 전체 지도는 두 장의 지도를 겹쳐서
// 2.1 하나라도 벽인 부분은 전체 지도에서도 벽
// 2.2 두 공백인 부분은 전체 지도에서도 공백
// -> or 연산입니다.
// 3. 정수 배열로 암호화
// 4. 벽 부분을 1, 공백 부분을 0으로 부호화
// 매개변수	값
// n	5
// arr1	[9, 20, 28, 18, 11]
// arr2	[30, 1, 21, 17, 28]
// 출력	["#####","# # #", "### #", "# ##", "#####"]

// 01001       10100
// 11110       00001
// -----       -----
// 11111       10101
// #####       # # #

let x = 9
x.toString()
x.toString(2)
x.toString(8)
x.toString(16)

parseInt(1010, 2)
// 10
parseInt(1001, 2)
// 9
parseInt(9, 2)


let x = 9
x.toString(2)
x.toString(2).replace(/1/g, '#')
x.toString(2).replace(/1/g, '#').replace(/0/g, ' ')


(9 | 30).toString(2).replace(/1/g, '#').replace(/0/g, ' ')
(20 | 1).toString(2).replace(/1/g, '#').replace(/0/g, ' ')


// step 1
n = 5
arr1 = [9, 20, 28, 18, 11]
arr2 = [30, 1, 21, 17, 28]

function solution(n, arr1, arr2) {
    result = []
    for (let i = 0; i < n; i++) {
        result.push((arr1[i] | arr2[i])
            .toString(2)
            .replace(/1/g, '#')
            .replace(/0/g, ' '))    
    }
    return result
}

console.log(solution(n, arr1, arr2))


// step 2
// 유틸리티 코드 //

const zip = (a, b) => a.map((value, index) => [value, b[index]])

const fillZero = (n, s) => {
    return '0'.repeat(n - s.length) + s
}

const fillSpace = (n, s) => {
    return ' '.repeat(n - s.length) + s
}

//fillZero(5, '111')

n = 5
arr1 = [9, 20, 28, 18, 11]
arr2 = [30, 1, 21, 17, 28]

function solution(n, arr1, arr2) {
    result = []
    for (let i = 0; i < n; i++) {
        result.push(fillSpace(n, (arr1[i] | arr2[i])
            .toString(2)
            .replace(/1/g, '#')
            .replace(/0/g, ' ')))
    }
    return result
}

console.log(solution(n, arr1, arr2))


// step 3

n = 5
arr1 = [9, 20, 28, 18, 11]
arr2 = [30, 1, 21, 17, 28]

function solution(n, arr1, arr2) {
    const fillSpace = (n, s) => {
        return ' '.repeat(n - s.length) + s
    }
    result = []
    for (let i = 0; i < n; i++) {
        result.push(fillSpace(n, (arr1[i] | arr2[i])
            .toString(2)
            .replace(/1/g, '#')
            .replace(/0/g, ' ')))
    }
    return result
}

console.log(solution(n, arr1, arr2))


// step 4 zip 사용
n = 5
arr1 = [9, 20, 28, 18, 11]
arr2 = [30, 1, 21, 17, 28]

function solution(n, arr1, arr2) {
    const fillSpace = (n, s) => {
        return ' '.repeat(n - s.length) + s
    }
    const zip = (a, b) => a.map((value, index) => [value, b[index]])

    result = []
    for (const [i, j] of zip(arr1, arr2)) {
        result.push(fillSpace(n, (i | j)
            .toString(2)
            .replace(/1/g, '#')
            .replace(/0/g, ' ')))
    }
    return result
}

console.log(solution(n, arr1, arr2))

////
// 다트 게임
// https://tech.kakao.com/2017/09/27/kakao-blind-recruitment-round-1/
// 문자열 파싱(Parsing)
// 3번의 기회
// 0점에서 10점
// 보너스 - Single(S), Double(D), Triple(T) - 1제곱, 2제곱, 3제곱 (점수^1 , 점수^2 , 점수^3 )으로 계산
// 옵션 - 스타상(*, 2배) , 아차상(#, 마이너스)
// 1S - 2
// 2D - 8
// *3T - 27

// 1D - 1
// 2S# - -2
// 10S - 10

// step 1
testcase = [
    '1S2D*3T', // 37
    '1D2S#10S', // 9
    '1D2S0T' // 3
]

for (const i of testcase) {
    //console.log(i)
    console.log(solution(i))
}

function solution(dartResult){
    let answer = []
    let result = 0
    let temp = 0

    for (let i = 0; i < dartResult.length; i++) {
        if (dartResult[i] >= 0 && dartResult[i] <= 9){
            temp = parseInt(dartResult[i])
        } else if(dartResult[i] == 'S'){
            answer.push(temp)
        } else if(dartResult[i] == 'D'){
            answer.push(temp**2)
        } else if(dartResult[i] == 'T'){
            answer.push(temp**3)
        }
    }

    return answer
}




// step 2, 예외처리 + 나머지 코드
testcase = [
    '1S2D*3T', // 37
    '1D2S#10S', // 9
    '1D2S0T' // 3
]

for (const i of testcase) {
    //console.log(i)
    console.log(solution(i))
}

function solution(dartResult){
    let answer = []
    let result = 0
    let temp = 0

    for (let i = 0; i < dartResult.length; i++) {
        if (dartResult[i] >= 0 && dartResult[i] <= 9){
            if(dartResult[i] == 1 && dartResult[i+1] == 0){
                temp = 10
                // continue
                i++
            } else {
                temp = parseInt(dartResult[i])
            }
        } else if(dartResult[i] == 'S'){
            answer.push(temp)
        } else if(dartResult[i] == 'D'){
            answer.push(temp**2)
        } else if(dartResult[i] == 'T'){
            answer.push(temp**3)
        } else if(dartResult[i] == '*'){
            answer[answer.length-1] *= 2
            answer[answer.length-2] *= 2
        } else if(dartResult[i] == '#'){
            answer[answer.length-1] *= -1
        }
    }
    for (const value of answer) {
        result += value
    }
    return result
}


// '1S2D*3T'.match(/([0-9]|10)([SDT])([\*\#]?)/g)



//////////
// https://tech.kakao.com/2017/09/27/kakao-blind-recruitment-round-1/
// 캐시문제
// 키워드 : LRU 알고리즘, 페이지 교체 알고리즘
// 3	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]	50
// 3	["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]	21
// 2	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]	60

testcase = [
    [3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]],
    [3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]],
    [2, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]]
];

for (const [cacheSize, cities] of testcase) {
    console.log(solution(cacheSize, cities))
}

function solution(cacheSize, cities){
    let time = 0
    let cache = []
    for (let i = 0; i < cities.length; i++) {
        let city = cities[i].toLowerCase()
        let index = cache.indexOf(city)
        if(index !== -1){
            //hit
            cache.splice(index, 1)
            cache.push(city)
            time += 1
        } else {
            //miss
            cache.push(city)
            time += 5
            if(cacheSize < cache.length){
                cache.shift()
            }
        }
    }
    return time
}


// 2. 19년도
// 링크 : https://tech.kakao.com/2018/09/21/kakao-blind-recruitment-for2019-round-1/
// 1번 오픈채팅방 문제

// 관리자창
// 닉네임 변경
// 채팅방을 나간 후, 새로운 닉네임으로 다시 들어간다.
// 채팅방에서 닉네임을 변경한다.
[
    "Enter uid1234 Muzi", 
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan"
]


//    '*'
//   '***'
//  '*****'
// '********'
//    '*'
//    '*'
//    '*'

// console.log('    *')

let test = [
    'A 10 !',
    'B 20 !',
    'A 22 @',
    'B 20 @',
    'A 21 @'
]

test.forEach(s =>
    console.log(s.split(' '))
)

test.forEach(s => {
    let [하나, 둘, 셋] = s.split(' ')
    console.log(하나, 둘, 셋)
})



// step 1
let record = [
    "Enter uid1234 Muzi", 
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan"
]

function solution(record){
    let answer = []
    let user = {}

    for (const i of record) {
        const [상태, 아이디, 닉네임] = i.split(' ')
        answer.push([상태, 아이디, 닉네임])
    }
    return answer
}


// step 2
let record = [
    "Enter uid1234 Muzi", 
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan"
]

function solution(record){
    let answer = []
    let result = []
    let 유저정보 = {}

    for (const i of record) {
        const [상태, 아이디, 닉네임] = i.split(' ')
        if(상태 === 'Enter'){
            유저정보[아이디] = 닉네임
            result.push([아이디, '님이 들어왔습니다.'])
        } else if (상태 === 'Leave') {
            result.push([아이디, '님이 나갔습니다.'])
        } else if (상태 === 'Change') {
            유저정보[아이디] = 닉네임
        }
    }

    for (const [아이디, 메시지] of result) {
        answer.push(유저정보[아이디] + 메시지)
    }
    // ['uid1234', '님이 들어왔습니다.'].join('')
    return answer
}

solution(record)


// 2번 실패율
// https://tech.kakao.com/2018/09/21/kakao-blind-recruitment-for2019-round-1/


// 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수

// 실패율 === 아직 클리어 못한 플레이어의 수 / 도달한 플레이어 수
// 전체 스테이지의 개수 N
// 스테이지의 번호가 담긴 배열 stages가 매개변수

// 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수
// 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다. (오름차순)

// N	stages                  	result
// 5	[2, 1, 2, 6, 2, 4, 3, 3]	[3, 4, 2, 1, 5]
// 4	[4, 4, 4, 4, 4]	            [4, 1, 2, 3]

// 스테이지에 도달한 사람의 수
// 1stage === 1
// 2stage === 3
// 3stage === 2
// 4stage === 1
// 5stage === 0


// 실패율
// 1stage === 1/8
// 2stage === 3/7 === 3/(8-1)
// 3stage === 2/4 === 2/(7-3)
// 4stage === 1/2 === 1/(4-2)
// 5stage === 0/1 === 0/(2-1)

// [2, 1, 2, 6, 2, 4, 3, 3].filter((user) => user === 3);
// (2) [3, 3]

// step 1
function solution(스테이지수, stages){
    let 실패율 = []
    let 유저수 = stages.length

    for (let i = 1; i < 스테이지수; i++) {
        let 도달한사람수 = stages.filter((user) => user === i)
        실패율.push(도달한사람수)
    }
    
    return 실패율
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3])


// step 2
function solution(스테이지수, stages){
    let 실패율 = []
    let 유저수 = stages.length

    for (let i = 1; i < 스테이지수; i++) {
        let 도달한사람수 = stages.filter((user) => user === i).length
        let 확률 = 도달한사람수/유저수
        유저수 -= 도달한사람수
        실패율.push(확률)
    }
    
    return 실패율
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3])



// step 3
function solution(스테이지수, stages){
    let 실패율 = []
    let 유저수 = stages.length

    for (let i = 1; i < 스테이지수+1; i++) {
        let 도달한사람수 = stages.filter((user) => user === i).length
        let 확률 = 도달한사람수/유저수
        유저수 -= 도달한사람수
        실패율.push({
            stage:i,
            확률:확률
        })
    }

    실패율.sort((a, b) =>{
        if(a.확률 === b.확률){
            return a.stage - b.stage
        } else {
            return b.확률 - a.확률
        }
    })
    
    return 실패율.map(object => object.stage)
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3])


// 3. 20년도
// 링크 : https://tech.kakao.com/2019/10/02/kakao-blind-recruitment-2020-round1/
// aabbaccc -> a, a, b, b, a, c, c, c -> 2a2ba3c
// aabbaccc -> aa, bb, ac, cc -> aabbaccc
// aabbaccc -> aab, bac, cc -> aabbaccc
// aabbaccc -> aabb, accc -> aabbaccc

// 'aabbaccc'.match(/[a-z]{1}/g);
// 'aabbaccc'.match(/[a-z]{2}/g);

// step 1
function solution(s) {
    let answer = s.length;
    let len = s.length;

    for (let i = 1; i < len/2 + 1; i++) {
        const re = new RegExp(`[a-z]{${i}}`, 'g');
        console.log(re);
        let 잘린문자열 = s.match(re);
        console.log(잘린문자열);
    }
    return answer;
}

solution('aabbaccc');


// step 2
function solution(s) {
    var answer = s.length;
    let len = s.length;

    if (len === 1) return 1;
    
    for(let i = 1; i <= len/2 + 1; i++){ //자르는 크기
        const re = new RegExp(`[a-z]{${i}}`, 'g');
        console.log(re)
        let 잘린문자열 = s.match(re);
        console.log(잘린문자열)
        압축문자열 = ''
        let count = 1 //2a2b3c 여기서 앞에 나오는 숫자
        for (j = 0 ; j < 잘린문자열.length; j++) {
            if (잘린문자열[j] === 잘린문자열[j+1]) {
                //aa -> 2a // 뒤에 값을 봐서 같은지!
                count += 1;
            } else if (count === 1) {
                압축문자열 += `${잘린문자열[j]}`;
            } else if (count > 1) {
                // 왜 1보다 크냐면 aa가 1a1a가 아니기 때문!
                압축문자열 += `${count}${잘린문자열[j]}`;
                // 앞 문자열과 뒤 문자열이 다른 경우는
                count = 1;
            }
            console.log(압축문자열);
        }
        console.log(압축문자열);
    }
    return answer;
}

solution("aabbaccc")
solution("aabbaabbaccc") // accc를 추가하지 못하는 문제 발생


// step 3
function solution(s) {
    var answer = s.length;
    let len = s.length;

    if (len === 1) return 1;
    
    for(let i = 1; i <= len/2 + 1; i++){ //자르는 크기
        const re = new RegExp(`[a-z]{${i}}`, 'g');
        // console.log(re)
        let 잘린문자열 = s.match(re);
        // console.log(잘린문자열)
        압축문자열 = ''
        let count = 1 //2a2b3c 여기서 앞에 나오는 숫자
        for (j = 0 ; j < 잘린문자열.length; j++) {
            if (잘린문자열[j] === 잘린문자열[j+1]) {
                //aa -> 2a // 뒤에 값을 봐서 같은지!
                count += 1;
            } else if (count === 1) {
                압축문자열 += `${잘린문자열[j]}`;
            } else if (count > 1) {
                // 왜 1보다 크냐면 aa가 1a1a가 아니기 때문!
                압축문자열 += `${count}${잘린문자열[j]}`;
                // 앞 문자열과 뒤 문자열이 다른 경우는
                count = 1;
            }
            // console.log(압축문자열);
        }
        if (len % i !== 0){
            압축문자열 += s.slice(-len % i)
        }
        // console.log(압축문자열);
        answer = Math.min(answer, 압축문자열.length)
    }
    return answer;
}

solution("aabbaccc")
solution("aabbaabbaccc") // accc를 추가하지 못하는 문제 발생


// 번외
// 입력 예시: aaabbcccccca
// 출력 예시: a3b2c6a1

let s = 'aaabbcccccca';
let 압축 = '';
let count = 1

for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]){
                count += 1
    } else if (count >= 1) {
        압축 += `${s[i]}${count}`;
        count = 1;
    }
}

console.log(압축);



for (const index in 'hello') {
    console.log(index);
    console.log(typeof index);
}

s = 'hello worldAaa'
s['1']
s['1' + 1]



// 추가 유틸리티 코드
// 무한 이터러블을 생성하는 제너레이터 함수
// const zip = (a, b) => a.map((v, i)=>[v, b[i]]);
const infi = (function* () {
    let x = 0

    while (true) {
        x += 1
        yield x;
    }
}());

const zip = (a, b) => a.map((v, i)=>[v, b.next().value]);

// zip([10, 20, 30], [100, 200, 300])
zip([10, 20, 30], infi)

// for (const i of infi) {
//     if (i > 10){
//         break;
//     }
//     console.log(i);
// }