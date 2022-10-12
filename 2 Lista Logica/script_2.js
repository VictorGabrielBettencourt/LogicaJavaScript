let brancos = parseInt (prompt("Insira o número de votos brancos"));

let nulos = parseInt (prompt("Insira o número de votos nulos"));

let validos = parseInt (prompt("Insira o número de votos brancos"));

document.write("A porcentagem de votos brancos: "+ brancos+"%"+"</br>");
document.write("A porcentagem de votos nulos: "+ nulos+"%"+"</br>");
document.write("A porcentagem de votos validos: ", validos,"%"+"</br>");
document.write("A quantidade de eleitores totais: ", eleitores,"%"+"</br>");

brancos = brancos/eleitores*100;

nulos = nulos/eleitores*100;

validos = validos/eleitores*100;

eleitores = brancos+nulos+validos;




