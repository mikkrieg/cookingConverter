function cupsToLiters(cups) {
  const result = cups / 4.167;
  return result
}

function litersToGallons(liters) {
  const result = liters / 3.785;
  return result
}

function gramsToOunces(grams) {
  const result = grams / 28.35;
  return result
}

function ouncesToPounds(ounces) {
  const result = ounces / 16;
  return result
}

$(document).ready(function(){
  
  $("form#cupForm").submit(function(e){
    e.preventDefault();
    const input = $("input#cups").val();
    const output = cupsToLiters(input).toFixed(2);
    $("div#liter-output").text(output);
  });
  
  $("form#literForm").submit(function(e){
    e.preventDefault();
    const input = $("input#liters").val();
    const output = litersToGallons(input).toFixed(2);
    $("div#gallon-output").text(output);
  });

  $("form#gramForm").submit(function(e){
    e.preventDefault();
    const input = $("input#grams").val();
    const output = gramsToOunces(input).toFixed(2);
    $("div#ounce-output").text(output);
  });

  $("form#ounceForm").submit(function(e){
    e.preventDefault();
    const input = $("input#ounces").val();
    const output = ouncesToPounds(input).toFixed(2);
    $("div#pound-output").text(output);
  });
});


