let fecha1 = new Date()

//settimeout 10s


let fecha2=new Date()
setTimeout(function(){
    fecha2=new Date()

    console.log(fecha1)
    console.log(fecha2)

    let diferencia = fecha2.getTime()-fecha1.getTime()
    console.log((diferencia/1000)/60)

},20000)

//restar y obtener la diferencia de fechas en segundos