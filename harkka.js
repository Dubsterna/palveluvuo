//document ready
$(document).ready(function() {
    console.log("document ready");
 });   
function aFunction() {          
for ( i = 0; i < (Math.random() * 200); i++ ) {
 var myArraya = ['a'];
 document.write(myArraya + "\n");
    //myArraya.toString();
}
  }

function bFunction() {           
for ( i = 0; i < (Math.random() * 200); i++ ) {
 var myArrayb = ['b'];
 document.write(myArrayb + "\n");
    //myArrayb.toString();
}
 } 
    
function cFunction() {          
for ( i = 0; i < (Math.random() * 200); i++ ) {
 var myArrayc = ['c'];
 document.write(myArrayc + "\n");
//myArrayc.toString();
}
}  
    
    var nappi = document.getElementById("nappi");
            
            nappi.onclick = function() {
                var af = aFunction();
                var bf = bFunction();
                var cf = cFunction();
                var merge = af.concat(bf, cf);
            document.getElementById("s").innerHTML = merge;
               document.write(merge + "\n"); 
                }


