




  


var heur = document.getElementById("heures");
var minu = document.getElementById("minutes");
var seco = document.getElementById("secondes");
  
         function refresh(){
             var t = 1000; // rafraîchissement en millisecondes
             setTimeout('montre()',t)
         }
         
         function montre() {
             var date = new Date()
             var h = date.getHours();
             var m = date.getMinutes();
             var s = date.getSeconds();
             if( h < 10 ){ h = '0' + h; }
             if( m < 10 ){ m = '0' + m; }
             if( s < 10 ){ s = '0' + s; }
             var time = h + ':' + m + ':' + s
            heur.innerHTML=h;
           minu.innerHTML=m;
           seco.innerHTML=s;
             refresh();
             if(h<18){
document.getElementById("salut").innerHTML="Bonjour Sarah !"
             } else{
                document.getElementById("salut").innerHTML="Bonsoir Sarah !"

             }
          }

    
