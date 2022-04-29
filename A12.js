function solution(n, build_frame) {
    var answer = [];
    
    for(let [x,y,stuff,operate] of build_frame){
        if(operate===0){
            let idx = answer.findIndex((v)=>v[0]===x && v[1]===y && v[2]===stuff);
            answer.splice(idx,1);
            if(!possible(answer)) answer.push([x,y,stuff]);
        }
        
        if(operate===1){
            answer.push([x,y,stuff]);
            if(!possible(answer)){
            let idx = answer.findIndex((v)=>v[0]===x && v[1]===y && v[2]===stuff);
            answer.splice(idx,1);
            }
        }
    }
    answer.sort((a,b)=>{
        if(a[0]!==b[0]) return a[0]-b[0];
        if(a[1]!==b[1]) return a[1]-b[1];
        return a[2]-b[2]
    });
    return answer;
}
    
function possible(answer){
    for(let [x,y,stuff] of answer){
        if(stuff===0){
            if(y===0||inArr(answer,x,y-1,0)||inArr(answer,x-1,y,1)||inArr(answer,x,y,1))continue;
            return false;
        }
        
        if(stuff===1){
            if(inArr(answer,x,y-1,0)||inArr(answer,x+1,y-1,0)||(inArr(answer,x-1,y,1)&&inArr(answer,x+1,y,1)))continue;
            return false;
        }
    
    }
    return true;
}
    
function inArr(answer,x,y,stuff){
    return answer.some((v)=>v[0]===x&&v[1]===y&&v[2]===stuff);
}