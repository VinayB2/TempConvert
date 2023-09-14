F = document.getElementById("F");
C = document.getElementById("C");
F.oninput=function(){
    C.value = ((F.value - 32) * (5/9)).toFixed(2);
}
C.oninput=function(){
    F.value = ((C.value) * (9/5) + 32).toFixed(2);
}