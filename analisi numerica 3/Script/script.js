function numSearch()
{
    var start = 10000;
    var range = 10100;
    let divisibile = 0;
    let cont = 0;
    let numPrimi = [];
    let moltiplicati = [];

    div = document.createElement("div");
    div.setAttribute("id","numeri");
    $("body").append(div);

    for(let i=start; i<range; i++) {
        for(let j=1; j<i + 1; j++) {
            if (i % j == 0) 
                divisibile++; 
        }

        if (divisibile == 2) {   // se il numero è primo    
            numPrimi[cont] = i;

            cont++;

            div = document.createElement("div");
            div.setAttribute("class","dragme");
            div.append(i);
            $("body").append(div);

        }
            
        divisibile = 0;  
    }

    let str = "";
    for (var i=0; i < numPrimi.length - 1; i++) {
        moltiplicati[i] = numPrimi[i] * numPrimi[i+1];
        str += moltiplicati[i] + "; ";
    }

    $("#numeri").append("<br>I numeri primi da " + start + " a " + range + " sono " + cont +": <br>");
    
    $("body").append("<br>I numeri moltiplicati a coppie sono: <br>" + str);
}