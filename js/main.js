// codigo acordeon
// $(function() {
//             $(".accordion-titulo").click(function(e) {

//                 e.preventDefault();

//                 var contenido = $(this).next(".accordion-content");

//                 if (contenido.css("display") == "none") { //open		
//                     contenido.slideDown(250);
//                     $(this).addClass("open");
//                 } else { //close		
//                     contenido.slideUp(250);
//                     $(this).removeClass("open");
//                 }

//             });
// });
document.addEventListener('DOMContentLoaded', ()=> {
    // var menu = document.getElementById("menu-flotante");
    $('.menu-movil a').on('click', function(){
        pushbar.close();
    });
    var cont = 1;
    var redes = document.getElementById('wh')
    const totop =   document.getElementById('top');
    const barra =   document.getElementById('barra-menu');
    document.addEventListener('scroll', function() {
            if (window.scrollY > 500 && cont == 1) { 
                // menu.style.display="flex";
                $('.numero:nth-child(1) p span').animateNumber({ number: 125}, 2000);
                $('.numero:nth-child(2) p span').animateNumber({ number: 3000}, 2000);
                $('.numero:nth-child(3) p span').animateNumber({ number: 8}, 2000);
                $('.numero:nth-child(4) p span').animateNumber({ number: 12}, 2000);
                cont = 0;
            }
            if (window.scrollY > 10) { 
                redes.style.display="flex";
                totop.style.display="flex";
                barra.style.position="fixed";
                
            }
            if (window.scrollY < 100) { 
                redes.style.display="none";
                totop.style.position="none";
                barra.style.position="relative";
            }
            //     menu.style.display="none";
            //     cont = 1;
            // }
    })
totop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
});
