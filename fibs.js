const fibs = (i)=>{
    const result=[0,1];
    while(result.length<i)
    {
        result.push(result[result.length -2] + result[result.length - 1]);
    }
    return result;
};
console.log(fibs(8));

const fibsRec =(i,a=[0,1])=>{
    if(a.length >=i) 
    {
        return a;
    }
    return fibsRec(i,[...a,a[a.length -2]+a[a.length -1]]);
};
console.log(fibsRec(8));
