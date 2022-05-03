function solution(s) {
    var answer = s.length;
    
    for(let step=1; step<=Math.floor(s.length/2);step++){
        let com = "";
        let prev = s.slice(0,step);
        let count = 1;
        for(let j=step;j<s.length;j+=step){
            if(s.slice(j,j+step)===prev){
                count++;
            }else{
                com += count>=2 ? ""+count+prev : prev;
                prev = s.slice(j,j+step);
                count = 1;
            }
            
        }
        com += count>=2 ? count+prev : prev;
        answer = Math.min(answer,com.length);
    }
    
    return answer;
}
