

// function x()
// {
//     const b=10;
//     function y()
//     {
//         console.log(b)
//     }
//     y()
// }
// x()
// function x()
// {
//     for(var i=1;i<=5;i++)
//     {
//         close(i)
//     }
//     function close(x)
//     {
//         setTimeout(()=>{
//             console.log(x)
    
//         },x*1000)
//     }
// }
// x();

//map,reduce,filter
// const arr=[2,5,6,7,768]

// function double(item,index)
// {
//     console.log(index)
//     return 2*item;
// }

// const ans=arr.map(double)
// console.log(ans)

// const ans2=arr.filter((item)=>item%2===0)
// console.log(ans2)

// const sum=arr.reduce((curr,acc)=>{
//     if(curr>acc)
//     acc=curr

   
//     return acc;
// },0)

// console.log(sum)

//Applying on objects

// const data=[
//     {firstname:'a',lastname:'x',age:20},
//     {firstname:'b',lastname:'y',age:30},
//     {firstname:'c',lastname:'z',age:40},  {firstname:'d',lastname:'m',age:40}
// ]
// //Add create full name
// const ans=data.map((item)=>{
//     return item.firstname+" "+item.lastname

// })
// console.log(ans)

// //[age:number of people of that age]

// const ans2=data.reduce((acc,curr)=>{
//     if(acc[curr.age])
//     {
//         acc[curr.age]++;
//     }
//     else
//     {
//         acc[curr.age]=1
//     }
//     return acc

// },{})

// console.log(ans2)

// const play={firstname:'a',lastname:'x',age:20}


// console.log(play['firstname'],play['age'])
// play['nothing']=4;
// play.kuchto='f'
// console.log(play)

const user={firstname:'a',lastname:'x',age:20}

localStorage.setItem('user-info',JSON.stringify(user))

console.log(JSON.parse(localStorage.getItem('user-info')))

localStorage.setItem('my-info',JSON).stringify({name:'chandrakant'})