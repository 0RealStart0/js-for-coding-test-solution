function solution(food_times, k) {
    var answer = 0;
    if(food_times.reduce((a,b)=>a+b)<=k) return -1;
   
   
    let q = food_times.map((v,i)=>[v,+i+1]).sort((a,b)=>a[0]-b[0]);
    
    let sumValue = 0;
    let previous = 0;
    let len = food_times.length;
    
    while(sumValue+(q[0][0]-previous)*len <= k){
      //  console.log(q);
        let now = q.shift()[0];
        sumValue += (now-previous)*len;
        previous = now;
        len--;
        
    }
    
    //console.log(q,sumValue,len)
    
    return q.sort((a,b)=>a[1]-b[1])[(k-sumValue)%len][1];
}