const n = 5;
let arr = [-15,-6,1,3,7];

function binarySearch(arr,start,end){
    if(start>end) return -1;
    let mid = Math.floor((start+end)/2);

    if(arr[mid]===mid) return mid;
    if(arr[mid]>mid){
        return binarySearch(arr,start,mid-1);
    }else{
        return binarySearch(arr,mid+1,end);
    }
}

console.log(binarySearch(arr,0,n-1));

///////////////////////////////////
// const n = 5;
// let arr = [-15,-6,1,3,7];

function find(arr,target,start,end){
    if(start>end) return -1;

    let mid = Math.floor((start+end)/2);

    if(arr[mid]===mid) return mid;
    if(arr[mid]>=mid) {
        return find(arr,target,start,mid-1);
    }else{
        return find(arr,target,mid+1,end);
    }

}
console.log(find(arr,n,0,arr.length-1));