
const n = 3;
let arr = [10,20,40,50];
// for(let i=1; i<=n;i++){
//     arr.push(+input[i]);
// }

class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    getLength = () => {
      return this.heap.length;
    };
  
    push = (node) => {
      this.heap.push(node);
      let i = this.heap.length - 1;
      let parentI = Math.floor((i - 1) / 2);
      while (i > 0 && this.heap[parentI] > this.heap[i]) {
        this.swap(i, parentI);
        i = parentI;
        parentI = Math.floor((i - 1) / 2);
      }
    };
  
    pop = () => {
      if (this.heap.length === 1) {
        return this.heap.pop();
      }
  
      const result = this.heap[0];
      this.heap[0] = this.heap.pop();
      let i = 0;
      while (true) {
        const leftI = i * 2 + 1,
          rightI = i * 2 + 2;
        if (leftI >= this.heap.size) {
          break;
        }
        let nextI = i;
        if (this.heap[nextI] > this.heap[leftI]) {
          nextI = leftI;
        }
        if (rightI < this.heap.length && this.heap[nextI] > this.heap[rightI]) {
          nextI = rightI;
        }
        if (nextI === i) {
          break;
        }
        this.swap(i, nextI);
        i = nextI;
      }
      return result;
    };
  
    swap = (a, b) => {
      const temp = this.heap[a];
      this.heap[a] = this.heap[b];
      this.heap[b] = temp;
    };
  }

let  minHeap= new MinHeap();
arr.forEach((v)=>minHeap.push(v));
console.log(minHeap);
let result = 0;

while(minHeap.getLength()>1){
    let one = minHeap.pop();
    let two = minHeap.pop();
    let sumValue = one+two;
    result += sumValue;
    minHeap.push(sumValue);
}

console.log(result);



