main();
function main(){
     var pions = document.querySelectorAll('.btn');
     var players = ['O', 'X'];
     var cpt = 0;
     var isFini = false;
     alert("C'est Parti! Joeur " + players[cpt] + " peut jouer");
     for (var i = 0, len = pions.length; i < len; i++){

        /*La méthode addEventListener() d'EventTarget met en place une fonction à appeler chaque fois 
        * que l'événement spécifié est remis à la cible. Les cibles courantes sont un Element, 
        * le Document lui-même et une Window, mais elle peut être tout objet prenant en charge 
        * les évènements (comme XMLHttpRequest).
        */ 
        pions[i].addEventListener("click", function()
         {
              if (isFini)
                  return;

              if (!isEmptyCase(this))
              {
                alert("Case déjà occupée, J " + players[cpt] + " veuillez rejouer");

              }
              else
              {
                play(this, players[cpt]);
                  isFini = rechercherVainqueur(pions, players, cpt);

                  if(isFini)
                  {
                      alert("Le joueur " + players[cpt] + " a gagné !");
                      return;
                  }

                  if (egalite(pions))
                  {
                      alert("Match nul : Personne n'a gagné !");
                      return;
                  }

                  cpt++;
                  cpt = cpt %2;
                  alert("J " + players[cpt] + " c'est à votre tour !");
              }
         });
     }
}

function isEmptyCase(button)
{
    //Vérifier que la case est vide.
     return button.value.length == 0;
}

function play(btn, pion)
{
    //Placer le pion
    btn.value = pion;
}

function rechercherVainqueur(pions, joueurs, tour)
{
    //x1 x2 x3
    if (pions[0].value == joueurs[tour] &&
         pions[1].value == joueurs[tour] &&
         pions[2].value == joueurs[tour])
      {
        
        return true;
      }
      //y1 y2 y3
      if (pions[3].value == joueurs[tour] &&
          pions[4].value == joueurs[tour] &&
          pions[5].value == joueurs[tour])
      {
     
        return true;
      }

      //z1 z2 z3
      if (pions[6].value == joueurs[tour] &&
          pions[7].value == joueurs[tour] &&
          pions[8].value == joueurs[tour])
      {
    
        return true;
      }
      //x1 y1 z1
      if (pions[0].value == joueurs[tour] &&
          pions[3].value == joueurs[tour] &&
          pions[6].value == joueurs[tour])
      {
       
        return true;
      }
      //x2 y2 z2
      if (pions[1].value == joueurs[tour] &&
          pions[4].value == joueurs[tour] &&
          pions[7].value == joueurs[tour])
      {
      
        return true;
      }
      //x3 y3 z3
      if (pions[2].value == joueurs[tour] &&
          pions[5].value == joueurs[tour] &&
          pions[8].value == joueurs[tour])
      {
     
        return true;
      }
      //diagonale vers le bas droit x1 y2 z3
      if (pions[0].value == joueurs[tour] &&
          pions[4].value == joueurs[tour] &&
          pions[8].value == joueurs[tour])
      {
    
        return true;
      }
      //diagonale vers le bas gauche x3 y2 z1
      if (pions[2].value == joueurs[tour] &&
          pions[4].value == joueurs[tour] &&
          pions[6].value == joueurs[tour])
      {
      
        return true;
      }
      //Si personne gange
      return false;
}
function egalite(pions)
{
    taille = pions.length
     for (let i = 0, l; i < taille; i++)
     {
         if (pions[i].value.length == 0)
              return false;
     }

     return true;
}




