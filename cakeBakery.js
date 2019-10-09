function cakes(recipe, available) {
  var leftOvers = {};
  var canMakeCake = false;
  var keys = Object.keys(recipe);

    for(i=0; i < keys.length; i++){ if(available.hasOwnProperty(keys[i])){ 
      if ((available[keys[i]] - recipe[keys[i]]) >= 0) {
        canMakeCake = true;
        leftOvers[keys[i]] = available[keys[i]] - recipe[keys[i]];
      } else {
        canMakeCake = false;
        break;
      }
      } else {
      canMakeCake = false;
      break;
      }
    }
  if (canMakeCake) {
    if (available.hasOwnProperty('noOfCakes') ) {
    leftOvers['noOfCakes'] = available['noOfCakes'] + 1;
    } else {
    leftOvers['noOfCakes'] = 1;
    }
    return cakes(recipe, leftOvers);
  }
  if (available.hasOwnProperty('noOfCakes')) {
    return available['noOfCakes'];
    } else {
    return 0;
    } 
  }



console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 3000, sugar: 1200, eggs: 6, milk: 200}));

