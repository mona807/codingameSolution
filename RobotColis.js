function solve(width, height,length, mass) {   
	
	// Write your code here    
	// To debug: console.error('Debug messages...');    
	var volume = width *height * length ; 
	var encombrant = volume >= 1000000 || ( width>=150 || height>=150 || length>= 150);
	
	var lourd= mass >= 20;    
	  
	if(!encombrant && !lourd  ) {      
		return 'STANDARD'     
				   }
	else if ( encombrant && lourd ) {          
		return 'REJECTED';    
		}     
	else if(encombrant  ||  lourd ) {         
		return 'SPECIAL';    
		}  }  
/* Ignore and do not change the code below */ 
// #region main // game loop  
while (true) {      
var inputs = readline().split(' ');  
 
const width = parseInt( inputs [0]);  
 
const height = parseInt(inputs [1]);   

const length = parseInt(  inputs [2]);     
  
const mass = parseInt( inputs[3]);    
  
const oldWrite=  process.stdout. write ;  
process.stdout.write = chunk => console.error(chunk );  

var action = solve(  width, height,length, mass );   
  
process.stdout.write =  oldWrite;  
console.log( action); 
} 

 