function calcualtemortgage(e){

    e.preventDefault();
    
    let cuota = document.forms["fmortgage"]["fcuota"].value;
    let costoTotal = document.forms["fmortgage"]["fvalortotal"].value;
    let TasaInteres = document.forms["fmortgage"]["ftintereses"].value;
    let plazo = document.forms["fmortgage"]["fplazo"].value;

    const mortgage = {
        totalPrestamo: 0,
        totalIntereses: 0,
        cuotaMensual: 0
    };

    mortgage.totalPrestamo = costoTotal - cuota;  
    mortgage.totalIntereses =  mortgage.totalPrestamo * TasaInteres / 100;
    mortgage.cuotaMensual = (mortgage.totalPrestamo + mortgage.totalIntereses) / (plazo * 12);
    salidaCredito(mortgage);
}

function salidaCredito(calculosHipotecarios){
    document.getElementById("omontoprestamo").innerHTML = valueTodoDollar(calculosHipotecarios.totalPrestamo);
    document.getElementById("ocuota").innerHTML = valueTodoDollar(calculosHipotecarios.cuotaMensual);
    }

function resetearformulario(){
    document.forms["fmortgage"].reset();
}  

function valueTodoDollar(value){
    const dollarformatter = new Intl.NumberFormat('en-US',{style:'currency', currency: 'USD', minimumFractionDigits:2});
    return dollarformatter.format(value);
}