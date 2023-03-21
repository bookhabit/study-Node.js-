// function a (){
//     console.log('A')
// }

var a = function(){
    console.log('A')
}

function slowFunc(callback){
    console.log('B')
    callback();
    console.log('C')
}

slowFunc(a);
