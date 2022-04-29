const n = 7;
const x = 2;
const arr = [1,1,2,2,2,6,7];

let getFirst = first(arr,x,0,n-1);
let getLast = last(arr,x,0,n-1);

console.log(getFirst,getLast);


function first(arr,target,start,end){
    if(start>end) return -1;
    let mid = Math.floor((start+end)/2);
    if((mid === 0 ||target>arr[mid-1])&& arr[mid]===target) return mid;
    
    if(arr[mid]>=target){
        return first(arr,target,start,mid-1);
    }else{
        return first(arr,target,mid+1,end);
    }

}

function last(arr,target,start,end){
    if(start>end) return -1;
    let mid = Math.floor((start+end)/2);
    if((mid === n-1 ||target<arr[mid+1])&& arr[mid]===target) return mid;
    
    if(arr[mid]>target){
        return last(arr,target,start,mid-1);
    }else{
        return last(arr,target,mid+1,end);
    }

}

////////////////////////////
// const n = 7;
// const x = 2;
// const arr = [1,1,2,2,2,6,7];


function firstIndex(arr,target,start,end){
    if(start>end)return -1
    let mid = Math.floor((start+end)/2);

    if(mid===0 || target>arr[mid-1]&&arr[mid]===target)return mid;

    if(arr[mid]>=target){
        return firstIndex(arr,target,start,mid-1);
    }else{
        return firstIndex(arr,target,mid+1,end);
    }
}


function lastIndex(arr,target,start,end){
    if(start>end)return -1
    let mid = Math.floor((start+end)/2);

    if(mid===end || target<arr[mid+1]&&arr[mid]===target)return mid;

    if(arr[mid]>target){
        return firstIndex(arr,target,start,mid-1);
    }else{
        return firstIndex(arr,target,mid+1,end);
    }

}














