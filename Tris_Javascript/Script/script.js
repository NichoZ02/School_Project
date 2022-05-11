function inizio() {

    let i, val;
    for (i = 0; i < 10; i++) {
        if (i % 2 == 0) {
            val = "x";
        }
        else {
            val = "o";
        }
        let nuovo = document.createElement('div');
        nuovo.setAttribute('class', 'box');
        nuovo.setAttribute('id','Q'+i);
        nuovo.setAttribute('value',val)
        nuovo.innerHTML=val;
        const areaGioco = document.getElementById("areaDiGioco");
        $(nuovo).appendTo(areaGioco);
        $(nuovo).draggable();  
    }

    let height = window.innerHeight;
    let width = window.innerWidth;

    console.log(height, width);

    let linea1h = height/3;
    let linea1w = width /3;
    
    ospiti=0;
    val=0;
    for (i = 0; i < 3; i++) {
      ospiti++;
      let nuovo = document.createElement("div");
      nuovo.setAttribute("class", "appoggio");
      nuovo.setAttribute("id", "A" + ospiti);
      nuovo.innerHTML = val;
      const area1 = document.getElementById("riga1");
      $(nuovo).appendTo(area1);
      $(nuovo).droppable({
        drop: function (event, ui) {
          nome = ui.draggable.attr("id");
          valore=ui.draggable.attr("value");
          console.log(valore);
          $(this).attr('value',valore);
          var dropped = ui.draggable;
          var droppedOn = $(this);
          $(dropped).detach().css({ top: 0, left: 0 }).appendTo(droppedOn);
          controllaVincita();
        },
      }); 
    }

     for (i = 0; i < 3; i++) {
        ospiti++;
        let nuovo = document.createElement("div");
        nuovo.setAttribute("class", "appoggio");
        nuovo.setAttribute("id", "A" + ospiti);
        nuovo.innerHTML = val;
        const area2 = document.getElementById("riga2");
        $(nuovo).appendTo(area2);
        $(nuovo).droppable({
        drop: function (event, ui) {
          nome = ui.draggable.attr("id");
          valore=ui.draggable.attr("value");
          console.log(valore);
          $(this).attr('value',valore);
          var dropped = ui.draggable;
          var droppedOn = $(this);
          $(dropped).detach().css({ top: 0, left: 0 }).appendTo(droppedOn);
          controllaVincita();
        },
      });
      
     }


      for (i = 0; i < 3; i++) {
        ospiti++;
        let nuovo = document.createElement("div");
        nuovo.setAttribute("class", "appoggio");
        nuovo.setAttribute("id", "A" + ospiti);
        nuovo.innerHTML = val;
        const area3 = document.getElementById("riga3");
        $(nuovo).appendTo(area3);
        $(nuovo).droppable({
          drop: function (event, ui) {
            nome = ui.draggable.attr("id");
            valore=ui.draggable.attr("value");
            console.log(valore);
            $(this).attr('value',valore);
            // valore = nuovo.getAttribute('value')
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({ top: 0, left: 0 }).appendTo(droppedOn);
            controllaVincita();
          },
        });
        
      }

      function controllaVincita(){
        const A1 = document.getElementById("A1");
        valoreA1=$(A1).attr("value");
        const A2 = document.getElementById("A2");
        valoreA2=$(A2).attr("value");
        const A3 = document.getElementById("A3");
        valoreA3=$(A3).attr("value");
        const A4 = document.getElementById("A4");
        valoreA4=$(A4).attr("value");
        const A5 = document.getElementById("A5");
        valoreA5=$(A5).attr("value");
        const A6 = document.getElementById("A6");
        valoreA6=$(A6).attr("value");
        const A7 = document.getElementById("A7");
        valoreA7=$(A7).attr("value");
        const A8 = document.getElementById("A8");
        valoreA8=$(A8).attr("value");
        const A9 = document.getElementById("A9");
        valoreA9=$(A9).attr("value");

        if ((valoreA1=='o')&&(valoreA2=='o')&&(valoreA3=='o'))
        {
            alert("ha vinto il cerchio");
            location.reload();
        }
    
        if ((valoreA4=='o')&&(valoreA5=='o')&&(valoreA6=='o'))
        {
            alert ("ha vinto il cerchio");
            location.reload();
        }
    
        if ((valoreA7=='o')&&(valoreA8=='o')&&(valoreA9=='o'))
        {
            alert ("ha vinto il cerchio");
            location.reload();
        }
    
        if ((valoreA1=='o')&&(valoreA4=='o')&&(valoreA7=='o'))
        {
            alert ("ha vinto il cerchio");
            location.reload();
        }
    
        if ((valoreA2=='o')&&(valoreA5=='o')&&(valoreA8=='o'))
        {
            alert ("ha vinto il cerchio");
            location.reload();
        }
    
        if ((valoreA3=='o')&&(valoreA6=='o')&&(valoreA9=='o'))
        {
            alert ("ha vinto il cerchio");
            location.reload();
        }
    
        if ((valoreA1=='o')&&(valoreA5=='o')&&(valoreA9=='o'))
        {
            alert ("ha vinto il cerchio");
            location.reload();
        }
    
        if ((valoreA3=='o')&&(valoreA5=='o')&&(valoreA7=='o'))
        {
            alert ("ha vinto il cerchio");
            location.reload();
        }
    
    
    
    
        if ((valoreA1=='x')&&(valoreA2=='x')&&(valoreA3=='x'))
        {
            alert ("ha vinto la croce");
            location.reload();
        }
    
    
        if ((valoreA4=='x')&&(valoreA5=='x')&&(valoreA6=='x'))
        {
            alert ("ha vinto la croce");
            location.reload();
        }
    
    
        if ((valoreA7=='x')&&(valoreA8=='x')&&(valoreA9=='x'))
        {
            alert ("ha vinto la croce");
            location.reload();
        }
    
    
        if ((valoreA1=='x')&&(valoreA4=='x')&&(valoreA7=='x'))
        {
        alert ("ha vinto la croce");
        location.reload();
        }
    
        if ((valoreA2=='x')&&(valoreA5=='x')&&(valoreA8=='x'))
        {
            alert ("ha vinto la croce");
            location.reload();
        }
    
    
        if ((valoreA3=='x')&&(valoreA6=='x')&&(valoreA9=='x'))
        {
            alert ("ha vinto la croce");
            location.reload();
        }
    
    
        if ((valoreA1=='x')&&(valoreA5=='x')&&(valoreA9=='x'))
        {
            alert ("ha vinto la croce");
            location.reload();
        }
    
        if ((valoreA3=='x')&&(valoreA5=='x')&&(valoreA7=='x'))
        {
            alert ("ha vinto la croce");
            location.reload();
        }
 
        
      }
}