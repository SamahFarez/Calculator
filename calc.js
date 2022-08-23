
function insert(num) {
    document.form.textview.value = document.form.textview.value+num;
}
function equal() {
    var ex = document.form.textview.value
    if(ex!=""){
        document.form.textview.value = eval(ex);  
              }
 }
 function Clear(){
    document.form.textview.value = "";
 }
 function back(){
    var ex = document.form.textview.value;
    document.form.textview.value = ex.substring(0,ex.length-1);
 }