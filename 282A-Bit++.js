var X=0;
var n=parseInt(readline());
var b=[];
for(let i=1;i<=n;i++){
    b[i]= readline();
    if((b[i].includes("++"))){
        X++;
    }else{
        X--;
    }
   
}
console.log(X);