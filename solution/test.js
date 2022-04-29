const PriorityQueue = require("./우선순위큐");

let heap = new PriorityQueue();

heap.enqueue(0,1);
heap.enqueue(5,1);
heap.enqueue(2,2);
heap.enqueue(1,3);
heap.enqueue(7,7);

console.log(heap.heap[3].priority)
console.log(Array.from(Array(9),()=>Array()));
let n =5;
console.log(Array.from(Array(n)).map(()=>Array(n).fill(-1)));

let q = [];
q.push([1,2]);
console.log(q.shift());
console.log("4 10 50".split(" ").map((v)=>+v));
console.log(+"5");
console.log("5");
let dp = [];
dp.push("1 2 3 4 5".split(" ").map((v)=>+v));
dp.push(+"1".split(" "));
console.log(dp);
console.log(+"d")
let d = ["a b c d","e g a d"];
console.log(d.shift().split(" ")[0])
console.log(typeof 5);
console.log("A"<"a");
console.log(["A","B","D","a","h","e"].sort());
console.log(["A","B","D","a","h","e"].sort((a,b)=>a>b? 1 : a<b ? -1 :0));
for(let i of [-1,1]){

    console.log(typeof i);
}
let arrr = ["b","c","D","1","5","9"];
console.log(arrr.sort());
console.log(isNaN("a"));

// function solution(food_times, k) {
//     var answer = 0;
//     if(food_times.reduce((a,b)=>a+b)<=k) return -1;
    
//     let heap = new PriorityQueue();
//     food_times.forEach((v,i)=> heap.enqueue(v,+i+1));
//     let q = food_times.map((v,i)=>[v,+i+1]).sort((a,b)=>a[0]-b[0]);
    
//     let sumValue = 0;
//     let previous = 0;
//     let len = food_times.length;
    
//     while(sumValue+(q[0][0]-previous)*len <= k){
//       //  console.log(q);
//         let now = q.shift()[0];
//         sumValue += (now-previous)*len;
//         previous = now;
//         len--;
        
//     }
    
//     //console.log(q,sumValue,len)
    
//     return q.sort((a,b)=>a[1]-b[1])[(k-sumValue)%len][1];
// }

// function solution(food_times, k) {
//     var answer = 0;
//     if(food_times.reduce((a,b)=>a+b)<=k) return -1;
    
//     let heap = new PriorityQueue();
//     food_times.forEach((v,i)=> heap.enqueue(v,+i+1));
//   //  let q = food_times.map((v,i)=>[v,+i+1]).sort((a,b)=>a[0]-b[0]);
    
//     let sumValue = 0;
//     let previous = 0;
//     let len = food_times.length;
    
//     while(sumValue+(heap.heap[0].priority-previous)*len <= k){
//       //  console.log(q);
//         let now = heap.dequeue().priority;
//         sumValue += (now-previous)*len;
//         previous = now;
//         len--;  
//     }
//     console.log(heap.heap.sort((a,b)=>a.value-b.value));
//     //console.log(q,sumValue,len)
//    return heap.heap[(k-sumValue)%len].value;
//   //  return q.sort((a,b)=>a[1]-b[1])[(k-sumValue)%len][1];
    
    
    
// }
