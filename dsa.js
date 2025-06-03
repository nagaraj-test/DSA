// ➤ Write a function called averageGrid() that:
// - Loops through all the elements
// - Calculates the sum
// - Calculates how many numbers there are
// - Finally prints the average
let grid = [
  [5, 10],
  [15, 20],
  [25, 30,50]
];
function averageGrid(){
  let sum = 0;
  let count = 0;
  for(i = 0; i<grid.length;i++){
    for(j=0;j<grid[i].length;j++){
        sum+=grid[i][j];
        count+=1;
      }
    }
    console.log("sum =",sum)
  console.log("count =",count);
  console.log("average =",(sum/count))
}

averageGrid();


// var grid = [
//   [5, 10],
//   [15, 20],
//   [25, 30]
// ];

// function searching(val){
// let found = false;
// for(let i = 0;i<grid.length;i++){
//       for(let j=0;j<grid[i].length;j++){
//             if(grid[i][j]==val){
//                                 console.log("found at the index",i,j);
//                                 found = true;
//                                 break;
//                               }
                              
                   
//                                       }
//                 // if(found){
//                 //   break
//                 // }
// }
// if(!found){
//   console.log("not found");
// }
// }


// searching(200);

 
// let arr = [4, 8, 15, 16, 23, 42];
// let find = 24;
// let found = false;

// for(let i = 0;i<arr.length;i++){
// if(arr[i]==find){
//   console.log("found at index",i)
//     found = true;
//     break;
    
//   }
     
// }
// if(!found){
//   console.log("not found");
// }



// let grid = [
//   [5, 10,10],
//   [15, 20,20],
//   [25, 30,15]
// ]

// var sum=0;
// for(let i = 0;i<grid.length;i++){
//   for(let j =0;j<grid[i].length;j++){
//     sum +=grid[i][j];
//   }
// }

// console.log(sum);




// grid = [
// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]
// ]

// for(var i = 0;i<grid.length;i++){
  
//   for(var j = 0;j<grid[i].length;j++){
    
//     console.log(grid[i][j]);
//   }
 
// }

// addedd comment at last page.........................


// added one more line

// qwert branch 1234


//adding one more line to csdfdkfg
 