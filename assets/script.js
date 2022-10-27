function adicionar(num){
    const display = document.querySelector(".display").value
    document.querySelector(".display").value = display + num
}
function limpar(){
    document.querySelector(".display").value = ""
}
function calculo(){
    const display = document.querySelector(".display").value

    document.querySelector(".display").value = eval(display) 
}
function inverse(){
    const display = document.querySelector(".display").value
    document.querySelector(".display").value = display * - 1
}
document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
    
        var btn = document.querySelector(".igual");
      
      btn.click();
    
    }
  })