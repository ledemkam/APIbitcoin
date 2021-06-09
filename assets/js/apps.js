//den Preis eines Bitcoins wiederherstellen!!

const url = 'https://blockchain.info/ticker';

function takeprice(){  
//create resqeuest

let request = new XMLHttpRequest();//create object
request.open('GET' ,url); // first parameter GET/POST,SECOND PARAmeter : url
request.responseType = 'json';//we waiting of JSON
request.send();// send requet

//after reponse,this function is esecute
request.onload = function() {
    if(request.readyState === XMLHttpRequest.DONE){
        if(request.status === 200){
            let reponse = request.response// we save reponse
            let priceInEuros = reponse.EUR.last;
            document.querySelector('#price_label').textContent = priceInEuros;
        }else{
            alert("error,try again")
        }
       
    }
}
console.log('new price');
}
setInterval(takeprice, 1000)

