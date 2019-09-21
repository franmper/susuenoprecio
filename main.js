var btnVisa = document.getElementById('visa').addEventListener('click', calcularVMA);
var btnNar = document.getElementById('nar').addEventListener('click', calcularN);

function calcularVMA (e) {
    e.preventDefault();
    var precio = document.getElementById('precio').value;
    var cuotas = document.getElementById('cuotas').value;

    document.getElementById('outp').style.display = 'block';
    document.getElementById('info').style.display = 'none';

    if (cuotas == 3) {
        var fin = document.getElementById('fin').innerHTML = precio / 0.8671;
        document.getElementById('ct').innerHTML = cuotas;
        document.getElementById('val').innerHTML = fin / cuotas;
        document.getElementById('posnet').innerHTML = 'Todo Pago, Ahora 3';
    } else if (cuotas == 6) {
        var fin = document.getElementById('fin').innerHTML = precio / 0.8429;
        document.getElementById('ct').innerHTML = cuotas;
        document.getElementById('val').innerHTML = fin / cuotas;
        document.getElementById('posnet').innerHTML = 'Todo Pago, Ahora 6';
    } else if (cuotas == 9) {
        var fin = document.getElementById('fin').innerHTML = precio / 0.6113;
        document.getElementById('ct').innerHTML = cuotas;
        document.getElementById('val').innerHTML = fin / cuotas;
        document.getElementById('posnet').innerHTML = 'Naranja Pos';
    } else if (cuotas == 12) {
        var fin = document.getElementById('fin').innerHTML = precio / 0.5508;
        document.getElementById('ct').innerHTML = cuotas;
        document.getElementById('val').innerHTML = fin / cuotas;
        document.getElementById('posnet').innerHTML = 'Naranja Pos';
    } 
    
};

function calcularN (e) {
    e.preventDefault();
    var precio = document.getElementById('precio').value;
    var cuotas = document.getElementById('cuotas').value;

    document.getElementById('outp').style.display = 'block';
    document.getElementById('info').style.display = 'none';

    if (cuotas == 3) {
        var fin = document.getElementById('fin').innerHTML = precio / 0.8291;
        document.getElementById('ct').innerHTML = cuotas;
        document.getElementById('val').innerHTML = fin / cuotas;
        document.getElementById('posnet').innerHTML = 'Naranja POS';
    } else if (cuotas == 6) {
        var fin = document.getElementById('fin').innerHTML = precio / 0.7323;
        document.getElementById('ct').innerHTML = cuotas;
        document.getElementById('val').innerHTML = fin / cuotas;
        document.getElementById('posnet').innerHTML = 'Naranja Pos';
    } else if (cuotas == 9) {
        var fin = document.getElementById('fin').innerHTML = precio / 0.6113;
        document.getElementById('ct').innerHTML = cuotas;
        document.getElementById('val').innerHTML = fin / cuotas;
        document.getElementById('posnet').innerHTML = 'Naranja Pos';
    } else if (cuotas == 12) {
        var fin = document.getElementById('fin').innerHTML = precio / 0.5508;
        document.getElementById('ct').innerHTML = cuotas;
        document.getElementById('val').innerHTML = fin / cuotas;
        document.getElementById('posnet').innerHTML = 'Naranja Pos';
    } 
    
}