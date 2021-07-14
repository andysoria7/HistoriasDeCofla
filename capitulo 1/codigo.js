dineroCofla = prompt("Cuanto dinero tienes cofla?");
dineroRoberto = prompt("Cuanto dinero tienes roberto?");
dineroPedro = prompt("Cuanto dinero tienes pedro?");

dineroCofla = parseInt(dineroCofla); // Convierte un string a numero.


// COFLA

if(dineroCofla >= 0.6 && dineroCofla < 1)
{
    alert("Cofla, Comprate el helado de agua");
    alert("y te sobran" + (dineroCofla - 0.6));

}

else if(dineroCofla >= 1 && dineroCofla < 1.6)
{
    alert("Cofla, Comprate el helado de crema");
    alert("y te sobran" + (dineroCofla - 1)); 

}

else if(dineroCofla >= 1.6 && dineroCofla < 1.7)
{
    alert("Cofla, Comprate el helado de heladix");
    alert("y te sobran" + (dineroCofla - 1.6));

}

else if(dineroCofla >= 1.7 && dineroCofla < 1.8)
{
    alert("Cofla, Comprate el helado de heladodovix");
    alert("y te sobran" + (dineroCofla - 1.7));

}

else if(dineroCofla >= 1.8 && dineroCofla < 2.9)
{
    alert("Cofla, Comprate el helado de helardo");
    alert("y te sobran" + (dineroCofla - 1.8));

}

else if(dineroCofla >= 2.9){
    alert("Cofla, Helado con confites o el pote de 1/4kg");
    alert("y te sobran" + (dineroCofla - 2.9)); 
    
} else {
    alert("Lo siento  cofla pobre de mierda no te alcanza para ningun helado");
}

// ROBERTO

if(dineroRoberto >= 0.6 && dineroRoberto < 1)
{
    alert("Roberto, Comprate el helado de agua");

}

else if(dineroRoberto >= 1 && dineroRoberto < 1.6)
{
    alert("Roberto, Comprate el helado de crema");

}

else if(dineroRoberto >= 1.6 && dineroRoberto < 1.7)
{
    alert("Roberto, Comprate el helado de heladix");

}

else if(dineroRoberto >= 1.7 && dineroRoberto < 1.8)
{
    alert("Roberto, Comprate el helado de heladodovix");

}

else if(dineroRoberto >= 1.8 && dineroRoberto < 2.9)
{
    alert("Roberto, Comprate el helado de helardo");
    

}

else if(dineroRoberto >= 2.9){
    alert("Roberto, Helado con confites o el pote de 1/4kg");
    
} else {
    alert("Lo siento roberto  pobre de mierda no te alcanza para ningun helado");
}

// PEDRO

if(dineroPedro >= 0.6 && dineroPedro < 1)
{
    alert("Pedro, Comprate el helado de agua");

}

else if(dineroPedro>= 1 && dineroPedro < 1.6)
{
    alert("Pedro, Comprate el helado de crema");

}

else if(dineroPedro >= 1.6 && dineroPedro < 1.7)
{
    alert("Pedro, Comprate el helado de heladix");

}

else if(dineroPedro >= 1.7 && dineroPedro < 1.8)
{
    alert("Pedro, Comprate el helado de heladodovix");

}

else if(dineroPedro >= 1.8 && dineroPedro < 2.9)
{
    alert("Pedro, Comprate el helado de helardo");

}

else if(dineroPedro >= 2.9){
    alert("Pedro, Helado con confites o el pote de 1/4kg");
    
} else {
    alert("Lo siento pedro pobre de mierda no te alcanza para ningun helado");
}


