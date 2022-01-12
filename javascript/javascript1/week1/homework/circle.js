function x(r){
let y=Math.pi*r*r;
console.log((y));
return true;
}
console.log(x(5));

function Fahraniet(c){
    let f=c*1.8+32;
    console.log(f);
    return f;
}
Fahraniet(100);

const global = 'global';
function scopeTest() {
    console.log(global);
    const functionScope = 'functionScope';
    console.log(functionScope);

    function tester() {
        console.log(global);

        const testerVariable = 'testerVariable';
    }
    
    tester();
    console.log(testerVariable);
}

scopeTest();