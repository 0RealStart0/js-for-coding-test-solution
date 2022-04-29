function solution(key, lock) {
    var answer = true;
    
    let n = lock.length;
    let m = key.length;
    
    let new_lock = Array.from(Array(n*3),()=>Array(n*3).fill(0));
    
    for(let i=0; i<n;i++){
        for(let j=0; j<n;j++){
            new_lock[i+n][j+n] =lock[i][j];
        }
    }
    //console.log(new_lock)
    
    for(let k=0; k<4;k++){
        
        key = rotate90degree(key);
        
        for(let x=0; x<n*2; x++){
            for(let y=0; y<n*2; y++){
                
                for(let i=0;i<m;i++){
                    for(let j=0;j<m;j++){
                        new_lock[x+i][y+j] += key[i][j]
                    }
                }
                
                if(check(new_lock)) return true;
                
                for(let i=0;i<m;i++){
                    for(let j=0;j<m;j++){
                        new_lock[x+i][y+j] -= key[i][j]
                    }
                }
                
                
            }
        }
        
    }
    
    return false;
    
    
    
    
    function rotate90degree(a){
        let n = a.length;
        let m = a[0].length;
        let result = Array.from(Array(n),()=>Array(m).fill(0));
        
        for(let i=0; i<n;i++){
            for(let j=0; j<m;j++){
                result[j][n-1-i] = a[i][j];
            }
        }
        return result;
    }
    
    function check(new_lock){
        let len = new_lock.length/3;
        for(let i=len; i<2*len; i++){
            for(let j=len; j<2*len; j++){
                if(new_lock[i][j]!==1) return false;
            }
        }
        return true;
    }
    
    
    
    
  //  return answer;
}