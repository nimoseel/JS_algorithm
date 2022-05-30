// 2. 연결리스트(linked list)
// 2.1 첫번째 시간
// 연결리스트, 메모리 효율을 위해 사용되는 경우가 많음
// js에서는 그다지 메모리 효율이 좋지 못함
// create, search, insert, remove 사용하기 위해서 사용
// 개념 : https://en.wikipedia.org/wiki/Linked_list
// 알고리즘 시각화 : https://visualgo.net/ko

// 연결리스트의 기본 형태
const list = {
    head: {
        value : 12, 
        next : {
            value : 99,
            next : {
                value : 37,
                next : null
            }
        }
    }
}

const list = {
    head: null
}

let list1 = {value:12, next:null}
let list2 = {value:99, next:null}
let list3 = {value:37, next:null}
let list4 = {value:2, next:null}
list1.next = list2
list2.next = list3
list3.next = list4
list.head = list1

// 문제)
// head -> [90, next] -> [2, next] -> [77, next] -> [35, next] -> [21, next] -> null
// 35를 출력해주세요.

const list = {
    head: {
        value: 90,
        next: {
            value: 2,
            next: {
                value: 77,
                next: {
                    value: 35,
                    next: {
                        value: 21,
                        next: null
                    }
                }
            }
        }
    }
}
list.head.next.next.next.value



// step 1 노드 생성
class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

노드1 = new Node(10)
노드2 = new Node(20)
노드3 = new Node(30)

노드1.data
노드1.next = 노드2
노드2.next = 노드3
노드1.next.next.data
//30


// step 2 자동으로 다음 노드가 연결되는 linked list 구현

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

// head -> ['init', next]
//               ↑ 
//              tail

// head -> ['init', next] -> [90, next]
//                               ↑ 
//                              tail
class LinkedList {
    constructor(){
        let init = new Node('init')
        this.head = init
        this.tail = init
    }
    
    append(data){
        let 새로운노드 = new Node(data)
        // 마지막 값(null)은 새로운 노드가 됨
        this.tail.next = 새로운노드
        // 마지막 노드는 새로운 노드가 됨
        this.tail = 새로운노드
    }
}

l = new LinkedList()
l.append(1)
l.append(2)
l.append(3)
l.append(10)
l.append(20)
l.append(30)

// l.head
// l.head.next.data
// l.head.next.next.data
// l.head.next.next.next.data

/*
// 1번 단계
head -> [init, null]
            ↑ 
            tail
// 2번 단계
head -> [init, next] -> [1, null]
                            ↑ 
                            tail
*/



// step 3 length 구현

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        let init = new Node('init')
        this.head = init
        this.tail = init

        this.데이터수 = 0
    }

    length(){
        return this.데이터수
    }
    
    append(data){
        let 새로운노드 = new Node(data)
        this.tail.next = 새로운노드
        this.tail = 새로운노드

        this.데이터수 += 1
    }
}

l = new LinkedList()
l.append(1)
l.append(2)
l.append(3)
l.append(10)
l.append(20)
l.append(30)
l.length()



// step 4 toString 구현

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        let init = new Node('init')
        this.head = init
        this.tail = init

        this.데이터수 = 0
        this.데이터들 = ''
    }

    length(){
        return this.데이터수
    }

    toString(){
        // return 'hello world'
        // return '[1, 2, 3, 10, 20, 30]'
        
        // 아래와 같이 구현했을 때 삭제가 문제가 됩니다.
        return '[' + this.데이터들.slice(0, -2) + ']'

    }
    
    append(data){
        let 새로운노드 = new Node(data)
        this.tail.next = 새로운노드
        this.tail = 새로운노드

        this.데이터수 += 1
        this.데이터들 += `${data}, `
    }
}

l = new LinkedList()
l.append(1)
l.append(2)
l.append(3)
l.append(10)
l.append(20)
l.append(30)
l.length()



// step 4 toString을 arr로 구현

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        let init = new Node('init')
        this.head = init
        this.tail = init

        this.데이터수 = 0
        this.데이터들 = []
    }

    length(){
        return this.데이터수
    }

    toString(){
        // return 'hello world'
        // return '[1, 2, 3, 10, 20, 30]'
        
        // 아래와 같이 구현했을 때 삭제가 문제가 됩니다.
        return '[' + this.데이터들.toString() + ']'

    }
    
    append(data){
        let 새로운노드 = new Node(data)
        this.tail.next = 새로운노드
        this.tail = 새로운노드

        this.데이터수 += 1
        this.데이터들.push(data)
    }
}

l = new LinkedList()
l.append(1)
l.append(2)
l.append(3)
l.append(10)
l.append(20)
l.append(30)
l.length()
l.toString()




// step 5 (중요) toString을 순회하면서 추가!!

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        let init = new Node('init')
        this.head = init
        this.tail = init

        this.데이터수 = 0
    }

    length(){
        return this.데이터수
    }

    toString(){
        let 순회용현재노드 = this.head
        순회용현재노드 = 순회용현재노드.next

        let 데이터들 = ''
        for (let i = 0; i < this.데이터수; i++) {
            데이터들 += `${순회용현재노드.data}, `
            순회용현재노드 = 순회용현재노드.next
        }

        return '[' + 데이터들.slice(0, -2) + ']'
    }
    
    append(data){
        let 새로운노드 = new Node(data)
        this.tail.next = 새로운노드
        this.tail = 새로운노드

        this.데이터수 += 1
    }
}

l = new LinkedList()
l.append(1)
l.append(2)
l.append(3)
l.append(10)
l.append(20)
l.append(30)
l.length()
l.toString()




// step 6 data를 arr로 만들기

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        let init = new Node('init')
        this.head = init
        this.tail = init

        this.데이터수 = 0
    }

    length(){
        return this.데이터수
    }

    toString(){
        let 순회용현재노드 = this.head
        순회용현재노드 = 순회용현재노드.next

        let 데이터들 = ''
        for (let i = 0; i < this.데이터수; i++) {
            데이터들 += `${순회용현재노드.data}, `
            순회용현재노드 = 순회용현재노드.next
        }

        return '[' + 데이터들.slice(0, -2) + ']'
    }

    // data를 얻기 위한 메서드, data를 넣기 위한 메서드는 getter와 setter를 사용을 권고합니다.
    fullData(){
        return JSON.parse(this.toString())
    }
    
    append(data){
        let 새로운노드 = new Node(data)
        this.tail.next = 새로운노드
        this.tail = 새로운노드

        this.데이터수 += 1
    }
}

l = new LinkedList()
l.append(1)
l.append(2)
l.append(3)
l.append(10)
l.append(20)
l.append(30)
l.length()
l.toString()
l.fullData()



// step 7 node 삽입하기

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        let init = new Node('init')
        this.head = init
        this.tail = init

        this.데이터수 = 0
    }

    length(){
        return this.데이터수
    }

    toString(){
        let 순회용현재노드 = this.head
        순회용현재노드 = 순회용현재노드.next

        let 데이터들 = ''
        for (let i = 0; i < this.데이터수; i++) {
            데이터들 += `${순회용현재노드.data}, `
            순회용현재노드 = 순회용현재노드.next
        }

        return '[' + 데이터들.slice(0, -2) + ']'
    }

    // data를 얻기 위한 메서드, data를 넣기 위한 메서드는 getter와 setter를 사용을 권고합니다.
    fullData(){
        return JSON.parse(this.toString())
    }
    
    append(data){
        let 새로운노드 = new Node(data)
        this.tail.next = 새로운노드
        this.tail = 새로운노드

        this.데이터수 += 1
    }

    insert(index, data){
        let 순회용현재노드 = this.head
        순회용현재노드 = 순회용현재노드.next

        for (let i = 0; i < index - 1; i++) {
            순회용현재노드 = 순회용현재노드.next
        }

        let 새로운노드 = new Node(data)
        새로운노드.next = 순회용현재노드.next
        순회용현재노드.next = 새로운노드

        this.데이터수 += 1
    }
}

l = new LinkedList()
l.append(1)
l.append(2)
l.append(3)
l.append(10)
l.append(20)
l.append(30)
l.length()
l.toString()
console.log(l.fullData())
l.insert(3, 1000)
console.log(l.fullData())





// 더블 링크드 리스트의 기본 형태


const list = {
    head: null
}

let list1 = {value:12, next:null, pre:null}
let list2 = {value:99, next:null, pre:null}
let list3 = {value:37, next:null, pre:null}
let list4 = {value:2, next:null, pre:null}
list1.next = list2
list2.next = list3
list3.next = list4
list1.pre = list.head
list2.pre = list1
list3.pre = list2
list4.pre = list3
list.head = list1

// list4.pre.pre.value

class Node {
    constructor(data){
        this.data = data
        this.pre = null
        this.next = null
    }
}

class DoubleLinkedList {
    // ... 중략 ...
    append(data){
        let 새로운노드 = new Node(data)
        this.tail.next = 새로운노드
        새로운노드.pre = this.tail
        this.tail = 새로운노드
    }
    // ... 중략 ...
}

l = new DoubleLinkedList()
l.append(1)


// class Arr extends Array {
//     attack(){
//         console.log('공격!')
//     }
// }