function cadastrar(){
    var nome = document.getElementById('idnome').value;
    var peso = document.getElementById('idpeso').value;
    var altura = document.getElementById('idaltura').value;
    var genero = document.getElementById('idgenero').value;
    var data = document.getElementById('iddata').value;
    let objeto = {
        'nome':nome,
        'peso':peso,
        'altura':altura,
        'genero':genero,
        'data':data
    }
    localStorage.setItem(key="nome", objeto);
}




// pra recuperar os dados salvos na storage
function objetoDaStorage(dado)
{
    
    dados = splitString(dado);
    alert(dados);
    return dados;
} 
function splitString(stringToSplit) {
    stringToSplit = stringToSplit.replace('{','');
    stringToSplit = stringToSplit.replace('}','');
//{"nome":"rafael siqueira de freitas","peso":"12321","altura":"312312","genero":"Masculino","data":"1000-10-10"}
    var arrayOfStrings = stringToSplit.split(':',',');
    alert(arrayOfStrings);
    return arrayOfStrings;
  }