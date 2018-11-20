var test = document.getElementById("dropdown");
  
  
  // ce gestionnaire sera exécuté une seule fois lorsque le curseur passera au dessus de la liste non ordonnée
  test.addEventListener("mouseenter", function( event ) {   
    // met en surbrillance la cible de mouseenter
    event.target.style.color = "purple";

    // réinitialise la couleur après un court moment
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);
  
  
  // ce gestionnaire sera exécuté à chaque fois que le curseur passe au dessus de chaque élément de la liste
  test.addEventListener("mouseover", function( event ) {   
    // met en surbrillance la cible de mouseover
    event.target.style.color = "orange";

    // réinitialise la couleur après un court moment
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);