class Stack {
    constructor(){
        this.arr = []
    }

    push(data) {
        this.arr.push(data)
    }

    pop(index) {
        if (index > this.arr.length - 1){
            return this.arr.pop()
        }
        let result = this.arr.splice(index, 1)
        return result
    }
    top (){
        return this.arr[this.arr.length-1]
    }

    bottom(){
        return this.arr[0]
    }

    display(){
        return this.arr
    }
}

let s = new Stack()
s.push(10)
s.push(20)
s.push(30)
s.push(40)
s.push(50)
s.push(60)
s.push(70)
s.pop(2)
console.log(s)