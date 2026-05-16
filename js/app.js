const meses = [ null, "ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];

    const input = document.getElementById("mes");    

    input.addEventListener('keydown', function(event) {
          if (event.key === 'Enter') {
          result();
        }
    });


function result() {    
    const MES = parseInt(input.value);
    const RESPONDA = document.getElementById("responda");

    if (MES < 1 || MES > 12) {
        RESPONDA.textContent = "Erro, escribe por favor numrero correcto entre 1 y 12";
        RESPONDA.style.color = "#76002e";
    }

    else {
        const nameMes = meses[MES];   
        RESPONDA.innerHTML = `El mes <b><span style="color: #891a21";>${MES}</span></b> se corresponde con <b><span style="color: #891a21";>${nameMes}</span></b>.`
        RESPONDA.style.color = "#c0202f";
    }
    
       input.value = '';
}

