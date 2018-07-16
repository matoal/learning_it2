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
