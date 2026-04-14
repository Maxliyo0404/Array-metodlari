// 1.   ForEach metodi
// 1-masala
// let sonlar = [1, 2, 3, 5, 9, 8, 4, 10];
// let son = sonlar.forEach(function(element){
//   console.log(element);
// })
// 2-masala
// const fruits = ['apple', 'banana', 'peach', 'stroboriy'];
// const fruit = fruits.forEach(function(element){
//     console.log(element);
    
// })

// 2.  Map metodi
//  1-masala
// let ismlar = ['Malika', 'Dilshoda', 'Gavharoy', 'Odina', 'Sevara'];
// let ism = ismlar.map(element => 
//     element + ("xon") );
//  console.log(ism);
// 2-masala
//  const gullar = ['atir', 'lola', 'binafsha', 'chinni'];
//  const yangigullar  = gullar.map(function ( gul){
//     if (gul === 'atir' || gul === 'chinni') {
//         return  gul + "gul";
//     } else {
//         return gul
//     } 
//  })
//  console.log(yangigullar);

// 3-masala
// let ismlar = ['Xasan', 'Anvar', 'Dilshod', 'Sherzod', 'Ulugbek'];
// let yangismlar = ismlar.map(function(ism){
//     if (ism === 'Xasan' || ism === 'Anvar' || ism === 'Sherzod' ) {
//         return  ism + 'boy';
//     } else {
//         return ism ;
//     }
// })
//  console.log(yangismlar);
 
// 4-masala
let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let son = sonlar.map(function(sum){
    if (sum === 1 || sum === 5 || sum === 9) {
        return sum + 0 ;
    } else {
        return sum;
    }
})