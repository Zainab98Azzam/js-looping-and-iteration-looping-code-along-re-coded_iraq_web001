const x =['1','hi','we'];
const y =['2'];

function writeCards ( y){
  let z =[];
  for( let i =0 ; i< y.length;i++){
    z.push(`Thank you, ${(y[i])} ,for the wonderful ${(x)} `);
  }
  return z
}