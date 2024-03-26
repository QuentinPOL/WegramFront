/* // Obtient la date actuelle
 var today = new Date();

 // Formatte la date pour qu'elle soit compatible avec l'attribut "max" de l'élément input
 var dd = String(today.getDate()).padStart(2, '0');
 var mm = String(today.getMonth() + 1).padStart(2, '0'); // Janvier est 0 !
 var yyyy = today.getFullYear();

 today = yyyy + '-' + mm + '-' + dd;

 // Applique la date maximale au champ de date de naissance
 document.getElementById("date-naissance").setAttribute("max", today);*/