class Celular {
    constructor(color,peso,tamaño,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.rdc = rdc;
        this.ram = ram;
        this.encendido = false;

    }
    //Metodos
    presionarBotonEncendido(){
        if(this.encendido == false){
            alert("Celular prendiendo");
            this.encendido = true;
        } else {
            alert("El celular esta apagado");
            this.encendido = false;
        }
    }

    reiniciar(){
        if(this.encendido == true){
            alert("Reiniciando celular");
        } else {
            alert("El celular esta apagado")

        }
    }

    tomarFoto(){
        alert(`Foto tomada en una resolucion de: ${this.rdc} `)
    }

    grabarVideo(){
        alert(`Grabando video en: ${this.rdc}`)

    }

    mobileInfo(){
        return `
        Color: <b>${this.color}</b></br>
        Peso:  <b>${this.peso}</b></br>
        Tamaño:  <b>${this.tamaño}</b></br>
        Resolucion de Video : <b>${this.rdc}</b></br>
        Memoria Ram: <b>${this.ram}</b></br>
        `;
    }

}

celular1 = new Celular("rojo", "150gr", "5", "HD", "1GB");
celular2 = new Celular("negro", "155gr", "5.4", "Full HD", "2GB");
celular3 = new Celular("blanco", "154gr", "5.9", "Full HD", "2GB");

// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();

document.write(`
   ${celular1.mobileInfo()} <br>
   ${celular2.mobileInfo()} <br>
   ${celular3.mobileInfo()} <br>`);


