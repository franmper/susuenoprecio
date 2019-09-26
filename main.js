var btnVisa = document.getElementById('visa').addEventListener('click', calcularVMA);
var btnNar = document.getElementById('nar').addEventListener('click', calcularN);

function calcularVMA (e) {
    e.preventDefault();
    var precio = document.getElementById('precio').value;
    var cuotas = document.getElementById('cuotas').value;

    document.getElementById('outp').style.display = 'block';
    document.getElementById('info').style.display = 'none';

    if (cuotas == 3) {
        var fin = document.getElementById('fin').innerHTML = precio / 0.8670;
        document.getElementById('ct').innerHTML = cuotas;
        document.getElementById('val').innerHTML = fin / cuotas;
        document.getElementById('posnet').innerHTML = 'Todo Pago, Ahora 3';
    } else if (cuotas == 6) {
        var fin = document.getElementById('fin').innerHTML = precio / 0.8428;
        document.getElementById('ct').innerHTML = cuotas;
        document.getElementById('val').innerHTML = fin / cuotas;
        document.getElementById('posnet').innerHTML = 'Todo Pago, Ahora 6';
    } else if (cuotas == 12) {
        var fin = document.getElementById('fin').innerHTML = precio / 0.7702;
        document.getElementById('ct').innerHTML = cuotas;
        document.getElementById('val').innerHTML = fin / cuotas;
        document.getElementById('posnet').innerHTML = 'Todo Pago, Ahora 12';
    } else if (cuotas == 18) {
        var fin = document.getElementById('fin').innerHTML = precio / 0.7218;
        document.getElementById('ct').innerHTML = cuotas;
        document.getElementById('val').innerHTML = fin / cuotas;
        document.getElementById('posnet').innerHTML = 'Todo Pago, Ahora 18';
    } 
    
};

function calcularN (e) {
    e.preventDefault();
    var precio = document.getElementById('precio').value;
    var cuotas = document.getElementById('cuotas').value;

    document.getElementById('outp').style.display = 'block';
    document.getElementById('info').style.display = 'none';

    if (cuotas == 3) {
        var fin = document.getElementById('fin').innerHTML = precio / 0.8186;
        document.getElementById('ct').innerHTML = cuotas;
        document.getElementById('val').innerHTML = fin / cuotas;
        document.getElementById('posnet').innerHTML = 'Naranja POS';
    } else if (cuotas == 6) {
        var fin = document.getElementById('fin').innerHTML = precio / 0.7218;
        document.getElementById('ct').innerHTML = cuotas;
        document.getElementById('val').innerHTML = fin / cuotas;
        document.getElementById('posnet').innerHTML = 'Naranja Pos';
    } else if (cuotas == 9) {
        var fin = document.getElementById('fin').innerHTML = precio / 0.6008;
        document.getElementById('ct').innerHTML = cuotas;
        document.getElementById('val').innerHTML = fin / cuotas;
        document.getElementById('posnet').innerHTML = 'Naranja Pos';
    } else if (cuotas == 12) {
        var fin = document.getElementById('fin').innerHTML = precio / 0.5403;
        document.getElementById('ct').innerHTML = cuotas;
        document.getElementById('val').innerHTML = fin / cuotas;
        document.getElementById('posnet').innerHTML = 'Naranja Pos';
    } else if (cuotas == 11) {
        var fin = document.getElementById('fin').innerHTML = precio / 0.8670;
        document.getElementById('titCt').style.display = 'none';
        document.getElementById('valCt').style.display = 'none';
        document.getElementById('posnet').innerHTML = 'Naranja Pos, Zeta (Hasta 3 cuotas sin interés en el resumen)';
    } 
    
}
