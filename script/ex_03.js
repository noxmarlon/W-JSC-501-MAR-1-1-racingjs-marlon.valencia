var elemento= document.getElementById("elemento");
document.getElementById("elemento").onclick = function() 

{
    do{
    var name = prompt('Quel est votre nom ?');
    
}while(name !==null && name===""){
    name;
}
if(name!==null)
{
    
    var comfe = confirm("Etes vous sûr que "+ name+ " est votre nom ?");
    
}
if(comfe==true)
{
    alerta(name)
    }
    else{
        name;
    }
}

function alerta(name)
    {
        alert('Bonjour ' + name + ' !');
        elemento.innerHTML= name;
    }
