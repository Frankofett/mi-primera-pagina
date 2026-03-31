function calcusuma() {

    let x1 = parseFloat(document.getElementById('x1').value) || 0  ;
    let x2 = parseFloat(document.getElementById('x2').value) || 0  ;
    let y1 = parseFloat(document.getElementById('y1').value) || 0  ;
    let y2 = parseFloat(document.getElementById('y2').value) || 0  ;

    let sumax = x1 + x2;
    let sumay = y1 + y2;

    /*let mag = Math.sqrt(Math.pow(sumax, 2)+ Math.pow(sumay, 2));*/

    document.getElementById('sumx').value = sumax.toFixed(2);
    document.getElementById('sumy').value = sumay.toFixed(2);
}

function calcresta() {
    
    let x1 = parseFloat(document.getElementById('x1').value) || 0  ;
    let x2 = parseFloat(document.getElementById('x2').value) || 0  ;
    let y1 = parseFloat(document.getElementById('y1').value) || 0  ;
    let y2 = parseFloat(document.getElementById('y2').value) || 0  ;

    let restax = x1 - x2;
    let restay = y1 - y2;

    /*let mag = Math.sqrt(Math.pow(sumax, 2)+ Math.pow(sumay, 2));*/

    document.getElementById('restax').value = restax.toFixed(2);
    document.getElementById('restay').value = restay.toFixed(2);

}

function calcangle() {
    
    let angulo = parseFloat(document.getElementById('ang').value) || 0  ;
    let magnitud = parseFloat(document.getElementById('mag').value) || 0  ;
    let pi = 3.14159;

    compx = magnitud*Math.cos(angulo*pi/180)
    compy = magnitud*Math.sin(angulo*pi/180)

    document.getElementById('compx').value = compx.toFixed(2);
    document.getElementById('compy').value = compy.toFixed(2);



}