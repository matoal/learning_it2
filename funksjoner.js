function sammenlignTall(a,b){
  if(a>b){
    return 1;
  } else if (a<b) {
    return -1;
  } else {
    return 0;
  }
}
function sammenlignArrayer(a,b) {
  return a[1]-b[1];
}
function sammenlignLand(a,b){
  if(a.land>b.land){
    return 1;
  } else if (a.land<b.land) {
    return -1;
  } else {
    return 0;
  }
}
function lagTabell(overskrifter, innhold) {
  // vil legge til en tabell i .innpakning. Overskrifter(array)-header i tabellen.
  // innhold(array med objekter). Selve innholdet i tabellen.

  //Lager tabell og legger inn overskrifter
  var innpakningEl = document.querySelector(".innpakning");
  var tabellEl = document.createElement("table");
  var tbodyEl = document.createElement("tbody");
  var overskrift = "<tr>";
  for (var i = 0; i < overskrifter.length; i++) {
    overskrift += "<th>" + overskrifter[i] + "</th>";
  }
  overskrift += "</tr>";
  tbodyEl.innerHTML+=overskrift;
  //Legger inn innhold fra objektet som skal i tabellen
  for (var i = 0; i < innhold.length; i++) {
    var rad = "<tr>";
    for (var egenskap in innhold[i]) {
      rad +="<td>"+innhold[i][egenskap]+"</td>";
    }
    rad +="</tr>";
    tbodyEl.innerHTML+=rad;
    tabellEl.appendChild(tbodyEl);
    innpakningEl.appendChild(tabellEl);
  }

}
