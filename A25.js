function solution(N, stages) {
    var answer = [];
    let length = stages.length;
    
    for(let i=1; i<=N; i++){
        let count = 0;
        stages.forEach((v)=>{
           if(v===i) count++;            
        });
        let fail = 0;
        if(length===0){
            fail = 0;
        }else{
            fail = count/length;
        }
        length -= count;
        answer.push([i,fail]);
    }
    answer.sort((a,b)=>b[1]-a[1]);
  //  console.log(answer)
    return answer.map((v)=>v[0]);
}