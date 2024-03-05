// document se refiere al dom
// getElementById: obtener el elemento por el id
let form = document.getElementById('calculadora')

//form.style.backgroundColor = 'blue';

const CALCULAR = document.getElementById('calcular');

const ERROR = document.getElementById('error');

const FLU = document.getElementById('flu');

const MAN = document.getElementById('man');

const POR1500 = document.getElementById("por1500");
const POR2000 = document.getElementById("por2000");

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    if (DATO > 0){
      ERROR.style.display = "none";
      let flujo = calcFlujo(DATO);
      if (Number(DATO) < 30) {
        let mantenimiento = flujo * 1.5;
        MAN.innerHTML = "m+m/2 " + mantenimiento + " cc/hr";
        FLU.innerHTML = flujo + " cc/hr";
        FLU.style.display = "block";
        MAN.style.display = "block";
        POR1500.style.display = "none";
        POR2000.style.display = "none";
      } else {
        let flujo1500 = Math.floor(flujo * 1500);
        let porHora15 = Math.ceil(flujo1500 / 24);
        let mantenimiento15 = Math.floor(porHora15 * 1.5);
        POR1500.innerHTML = porHora15 + " cc/hr" + " m+m/2 " + mantenimiento15 + " cc/hr";

        let flujo2000 = Math.floor(flujo * 2000);
        let porHora20 = Math.ceil(flujo2000/24);
        let mantenimiento20 = Math.floor(porHora20 * 1.5);
        POR2000.innerHTML = porHora20 + " cc/hr" + " m+m/2 " + mantenimiento20 + " cc/hr";

        POR1500.style.display = "block";
        POR2000.style.display = "block";
        FLU.style.display = 'none';
        MAN.style.display = 'none';
      }
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})

function calcFlujo(peso) {
    let resto = peso;
    let flujo = 0;

    if(Number(peso) > 30){
       flujo = ((Number(peso) * 4)+7)/(Number(peso)+90);
    }else{
        if (resto > 20){
        let aux = resto - 20;
        flujo += aux * 1;
        resto -= aux;
        } 
        if (resto > 10){
            let aux = resto - 10;
            flujo += aux * 2;
            resto -= aux;
        }
        flujo += resto*4;
        return flujo;
    }

    return flujo;
}