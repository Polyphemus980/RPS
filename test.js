let array=[6,6,6];
const a=array.filter((arr)=>arr % 2 === 0).map((arr)=>arr*3).reduce((total,currentItem)=>{
    return total+currentItem;
},0);
console.log(a);
console.log(2*3+4*3);