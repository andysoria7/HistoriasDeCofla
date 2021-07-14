class App{
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }

    // Metodos

    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("App instalada correctamente");
        }
    }

    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert("App desinstalada correctamente");
        }
    }

    abrir(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("App iniciada");
        }    
    }

    cerrar(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("App cerrada");
        }    
    }

    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b></br>
        Puntuacion: <b>${this.puntuacion}</b></br>
        Peso: <b>${this.peso}</b></br>
        `
    }

}

app = new App("16.000", "5 Estrellas", "900MB");
app2 = new App("1.000", "4 Estrellas", "400MB");
app3 = new App("6.000", "4.5 Estrellas", "100MB");
app4 = new App("23.000", "4.8 Estrellas", "1GB");
app5 = new App("900", "5 Estrellas", "250MB");
app6 = new App("17", "3.7 Estrellas", "522MB");
app7 = new App("42.981", "2.9 Estrellas", "723MB");


document.write(`
   ${app.appInfo()} <br>
   ${app2.appInfo()} <br>
   ${app3.appInfo()} <br>
   ${app4.appInfo()} <br>
   ${app5.appInfo()} <br>
   ${app6.appInfo()} <br>
   ${app7.appInfo()} <br>
`);








