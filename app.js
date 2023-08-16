// in CONSOLE


// let str1=prompt("enter a word or phrase")
// function vowel_count(str1)
// {
   
   
//   var vowel_list = 'aeiouAEIOU';
//   var vcount = 0;
  
//   for(var x = 0; x < str1.length ; x++)
//   {
//     if (vowel_list.indexOf(str1[x]) !== -1)
//     {
//       vcount += 1;
//     }
  
//   }
//   return vcount;
  
// }
// result=vowel_count(str1);
// console.log(str1);
// console.log(" no of vowels:" +result);

// OR USE INCLUDE() METHOD

// let str=prompt("enter a word or phrase")
// function getCount(str){
//     var vowelsCount=0;
//     const vowels=['a','e','i','o','u','A','E','I','O','U']
//     for(let char of str){
//         if(vowels.includes(char)){
//             vowelsCount++
//         }
//     }
//     return vowelsCount
// }
// result=getCount(str);
// console.log(result)
    


// DOM


document.getElementById('btn').onclick=function(){
    let str=document.getElementById('inp').value

    var vowelsCount=0
    const vowels=['a','e','i','o','u','A','E','I','O','U']
    for(let char of str){
        if(vowels.includes(char)){
            vowelsCount++
        }
    }
    document.getElementById('result').innerHTML="no of vowels:" +vowelsCount
    document.getElementById('inp').value=" "

}

