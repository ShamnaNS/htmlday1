var a=7;
let b='true';
let c=true;
let d;
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
// javascript object
let person={
    name:'Cera',
    age:22,
    location:'tvm'
}
console.log(person.name);

let arr=['ant',21,'10legs'];
console.log(arr[2]);
console.log(arr.length);

let arr_obj=[{age:20,name:'sita',location:'tvm'},{age:21,name:'rita',location:'kollam'}];
console.log(arr_obj[1].name);

function add(a,b) {

    var sum=a+b;
    return sum;
    
}

let result=add(10,20)
console.log(result);

var m=1;
var n=++m;
console.log(m);
console.log(n);
var p=99;
var q=40;
if (p>q) {
    console.log("p is greater than q"  +p);
    
} else if(p==q){
    console.log("equal");

}
else {
    console.log('q is greater than p and the value is');
    
}
var arr2=[10,20,30,40,50]
// for (let i= 0; i < arr2.length; i++) {
//     console.log(arr2[i]);
// }

for ( const i of arr2) {
    console.log(i)
    
        
    }





