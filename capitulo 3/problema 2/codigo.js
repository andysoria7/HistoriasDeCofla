
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
        Memoria Ram: <b>${this.ram}</b></br>
        Resolucion de Video : <b>${this.rdc}</b></br>
        `;
    }

}

class CelularAltaGama extends Celular{
    constructor(color,peso,tamaño,rdc,ram,rdce){
        super(color,peso,tamaño,rdc,ram)
        this.resolucionDeCamaraExtra = rdce;
    }

    // Metodos

    grabarVideoLento(){
        alert("Estas grabando en camara lenta");
    }

    reconocimientoFacial(){
        alert("Vamos a iniciar un reconocimiento facial");
    }

    infoAltaGama(){
        return this.mobileInfo() + `Resolucion de camara extra: ${this.resolucionDeCamaraExtra}`

    }


}

// celular1 = new Celular("rojo", "150gr", "5", "HD", "1GB");
// celular2 = new Celular("negro", "155gr", "5.4", "Full HD", "2GB");
// celular3 = new Celular("blanco", "154gr", "5.9", "Full HD", "2GB");


// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();

celular1 = new CelularAltaGama("rojo", "130gr", "5.2", "4K", "3GB", "FULL HD");
celular2 = new CelularAltaGama("negro", "142gr", "6", "4K", "4GB", "HD");

document.write(`
   ${celular1.infoAltaGama()} <br> <br>
   ${celular2.infoAltaGama()} <br>`);