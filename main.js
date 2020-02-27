function get_sexo(){
    var wh_sexo = document.getElementById('sexo');
    for(let i = 0; i < wh_sexo.options.length; i++){
        if(wh_sexo.options[i].selected){
            return wh_sexo.options[i].value;
        }
    }
}

contador_boton = 0;

function get_ejercicio(){
    var wh_ejercicio = document.getElementById('ejercicio');
    for(let i = 0; i < wh_ejercicio.options.length; i++){
        if(wh_ejercicio.options[i].selected){
            return wh_ejercicio.options[i].value;
        }
    }
}


function calcularMB(){
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('estatura').value;
    var edad = document.getElementById('edad').value;
    

    if(get_sexo() == "hombre" || get_sexo() == "otro"){
        let MB = 66.473 + (13.751*peso) + (5.0033*altura) - (6.7550*edad);
        return Math.round(MB);
    }
    else if (get_sexo() == "mujer"){
        let MB = 655.1 + (9.463*peso) + (1.8*altura) - (4.6756*edad);
        return Math.round(MB);
    }
    else {
        alert("Por favor, seleccione todas las opciones");
        return 0;
    }
}

function calcularMantenimiento(){
    if(get_ejercicio() == "sedentario"){
        return Math.round(calcularMB()*1.2);
    }
    else if (get_ejercicio() == "leve"){
        return Math.round(calcularMB()*1.375);
    }
    else if (get_ejercicio() == "moderado"){
        return Math.round(calcularMB()*1.55);
    }   
    else if (get_ejercicio() == "mucho"){
        return Math.round(calcularMB()*1.725);
    }
    else if (get_ejercicio() == "ecto"){
        return Math.round(calcularMB()*1.9);
    }
    else {
        alert("Por favor, seleccione todas las opciones");
        return 0;
    }
}

function inRange(x, min, max) {
    return ((x-min)*(x-max) <= 0);
}

function mostrarValores(){
    var disp = ""
    var dieta = calcularMantenimiento();
    var a = document.createElement('a');
    document.getElementById('valorMB').value = disp.concat(calcularMB().toString(), " kcal");
    document.getElementById('valorMant').value = disp.concat(dieta.toString(), " kcal");
    contador_boton++;

    if (inRange(dieta,0,1999)){
        a.innerHTML = "Click aquí para recibir tu dieta de 1500 kcal";
        a.setAttribute('href',"#");
        if (contador_boton < 2){
            document.getElementById('enlace-dieta').appendChild(a);    
        }
        else{
            document.getElementById('enlace-dieta').replaceChild(a,document.getElementById('enlace-dieta').lastChild);
        }
    }
    else if (inRange(dieta,2000,2499)){
        a.innerHTML = "Click aquí para recibir tu dieta de 2000 kcal";
        a.setAttribute('href',"#");
        if (contador_boton < 2){
            document.getElementById('enlace-dieta').appendChild(a);    
        }
        else{
            document.getElementById('enlace-dieta').replaceChild(a,document.getElementById('enlace-dieta').lastChild);
        }
    }
    else if (inRange(dieta,2500,2999)){
        a.innerHTML = "Click aquí para recibir tu dieta de 2500 kcal";
        a.setAttribute('href',"#");
        if (contador_boton < 2){
            document.getElementById('enlace-dieta').appendChild(a);    
        }
        else{
            document.getElementById('enlace-dieta').replaceChild(a,document.getElementById('enlace-dieta').lastChild);
        }
    }
    else if (inRange(dieta,3000,3499)){
        a.innerHTML = "Click aquí para recibir tu dieta de 3000 kcal";
        a.setAttribute('href',"#");
        if (contador_boton < 2){
            document.getElementById('enlace-dieta').appendChild(a);    
        }
        else{
            document.getElementById('enlace-dieta').replaceChild(a,document.getElementById('enlace-dieta').lastChild);
        }
    }
    else if (dieta > 3500){
        a.innerHTML = "Click aquí para recibir tu dieta de 3500 kcal";
        a.setAttribute('href',"#");
        if (contador_boton < 2){
            document.getElementById('enlace-dieta').appendChild(a);    
        }
        else{
            document.getElementById('enlace-dieta').replaceChild(a,document.getElementById('enlace-dieta').lastChild);
        }
    }
    else{
        a.innerHTML = "Click aquí para recibir tu dieta";
        a.setAttribute('href',"#");
        if (contador_boton < 2){
            document.getElementById('enlace-dieta').appendChild(a);    
        }
        else{
            document.getElementById('enlace-dieta').replaceChild(a,document.getElementById('enlace-dieta').lastChild);
        } 
    }
}



