

/*Описание калькулятора*/
var keys = document.getElementsByClassName('keys');
var operators = document.getElementsByClassName('operatory-calc');
var i;
document.querySelector('.calc-clr').onclick = function(){
    var t = document.getElementById('output-calc').value;
    document.getElementById('output-calc').value = t.slice(0,length-1) ;    
};
//определение цифр
keys[0].onclick = function(){
    a = 0;
    document.getElementById('output-calc').value = document.getElementById('output-calc').value + "1" ;};
keys[1].onclick = function(){
    a = 0;
    document.getElementById('output-calc').value = document.getElementById('output-calc').value + "2" ;};
keys[2].onclick = function(){
    a = 0;
    document.getElementById('output-calc').value = document.getElementById('output-calc').value + "3" ;};
keys[3].onclick = function(){
    a = 0;
    document.getElementById('output-calc').value = document.getElementById('output-calc').value + "4" ;};
keys[4].onclick = function(){
    a = 0;
    document.getElementById('output-calc').value = document.getElementById('output-calc').value + "5" ;};
keys[5].onclick = function(){
    a = 0;
    document.getElementById('output-calc').value = document.getElementById('output-calc').value + "6" ;};
keys[6].onclick = function(){
    a = 0;
    document.getElementById('output-calc').value = document.getElementById('output-calc').value + "7" ;};
keys[7].onclick = function(){
    a = 0;
    document.getElementById('output-calc').value = document.getElementById('output-calc').value + "8" ;};
keys[8].onclick = function(){
    a = 0;
    document.getElementById('output-calc').value = document.getElementById('output-calc').value + "9" ;};
keys[10].onclick = function(){
    a = 0;
    document.getElementById('output-calc').value = document.getElementById('output-calc').value + "0" ;};
keys[9].onclick = function(){
    if (a != 2)    {
        a = 2;
    document.getElementById('output-calc').value = document.getElementById('output-calc').value + "." ;}};
// определение цифр
var a ;
operators[0].onclick = function(){
    if (a == 0){
    document.getElementById('output-calc').value = document.getElementById('output-calc').value + "+" ;
    a = 1;}};
operators[1].onclick = function(){
    if (a == 0){
    document.getElementById('output-calc').value = document.getElementById('output-calc').value + " - " ;
    a = 1;}};
operators[2].onclick = function(){
    if (a == 0){
    document.getElementById('output-calc').value = document.getElementById('output-calc').value + " * " ;
    a = 1;}};
operators[3].onclick = function(){
    if (a == 0){
    document.getElementById('output-calc').value = document.getElementById('output-calc').value + " / " ;
    a = 1;}};
operators[4].onclick = function(){
    if (a == 0){
    var ask = document.getElementById('output-calc').value;
    var n = 0;
    var b = 0;
    for (let v = 1; v < ask.length; v++){
        if (ask[v] == "+"){
            var c = ask.slice(n,v);
            var p = ask.slice(v+1, ask.length);
            b = (+c) + (+p) ;
            n = v;
        }
        if (ask[v] == "*"){
            var c = ask.slice(n,v);
            var p = ask.slice(v+1, ask.length);
            b = +c * +p ;
            n = v;
        }
        if (ask[v] == "/"){
            var c = ask.slice(n,v);
            var p = ask.slice(v+1, ask.length);
            b = +c / +p ;
            n = v;
        }
        if (ask[v] == "-"){
            var c = ask.slice(n,v);
            var p = ask.slice(v+1, ask.length);
            b = +c - +p ;
            n = v;
        }
    }
    
    document.getElementById('output-calc').value = b;
    
    }};


//конец калькулятора

//начало описания определения бюджета


    
    var kapitalCalc = document.querySelector('#kapital-calc');
    kapitalCalc.onclick = function(){
        var d = 0 ;
        var a = document.querySelector('.kapital-month').value,
        b = document.querySelector('.kapital-outlay').value,
        c = document.querySelector('.kapital-day').value;
        if (a == "" || b == "" || c == "" ){
            document.querySelector('.output-window').innerHTML = " ВВедите данные";   
            document.querySelector('.output-window').style.display = "block"; 
        
        }else{
            d = ((+a)-(+b)) / (+c);
            document.querySelector('.output-window').innerHTML = d + " Рублей";
            document.querySelector('.output-window').style.display = "block";
            document.querySelector('.output-text').style.display = "block"; 
        }

    }


// конец описания расчёта бюджета

//начало описания podolista

var list = document.querySelector(".input-todo"),
    btnList = document.querySelector(".btn-todolist"),
    tasks = document.querySelector(".tasks"),
    counter = 0;
    
function insertTask(a,b){
        if (a != "" && counter <= 9 ){
            let task = document.createElement("li"),
                check = document.createElement("input");
            check.className = "checkList";
            check.type = "checkbox";
            check.name = "one";
            task.className = "task";
            task.innerHTML = a;
            b.append(task,check);
            counter++;
        } 
            
        if (counter == 10){
            alert("Всего можно добавить 10 задач. Выполните данные и сотрите их")
        }
    }

    function removeTask(){

            document.getElementsByClassName('task')[0].remove();
                document.getElementsByClassName('checkList')[0].remove();
                counter--;
    }


 btnList.onclick = function() {
     insertTask(list.value,tasks)
};
 var btnrem = document.querySelector(".btn-rem");
      /*  var div = document.querySelector('.TodoList'),
            s = document.querySelector('.conteiner'),
            r = document.querySelector('.TodoList-pole'),
            g = document.querySelector('.wind-todo');*/

btnrem.onclick = removeTask;

/*завершение описания TodoList*/

/*Описание Табов*/

var tab;
var tabContent;
window.onload = function(){
    tabContent = document.getElementsByClassName('tabContent');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);
}

function hideTabsContent(a){
    for (var i = a; i<tabContent.length; i++){
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}

document.getElementById('tabs').onclick = function (event) {
     var target = event.target;
     if(target.className == 'tab'){
         for(var i = 0; i<tab.length;i++){
             if(target == tab[i]){
                 showTabsContent(i);
                 break;
             }
         }
     }
}

function showTabsContent(b) {
    if(tabContent[b].classList.contains('hide')){
        hideTabsContent(0);
    tab[b].classList.add('whiteborder');
    tabContent[b].classList.remove('hide');
    tabContent[b].classList.add('show');
};
    
}
/*Завершение описания табов*/

/*Описание галереи */
var slideIndex = 0;
showSlides(slideIndex );

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    
    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i< dots.length ; i++){
        dots[i].className = dots[i].className.replace("active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
}