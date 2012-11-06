/**
Exemplo encontrado em:
http://www.switchonthecode.com/tutorials/flex-javascript-basics-using-externalinterface
*/

var flashvars = {};
flashvars.srcUrl = "/";
var params = {allowFullScreen:"always"};
var attributes = {};
swfobject.embedSWF("F2JS.swf", "F2JS", "482", "280", "9.0.124", "/playerProductInstall.swf", flashvars, params, attributes);

var addPerson = function() {
  var nome = document.getElementById('txtName').value;
  var idade = document.getElementById('txtAge').value;
  var sexo = document.getElementById('selSex').value;
  getFlexApp().addPerson(nome, idade, sexo);
}

// This function returns the appropriate reference, 
// depending on the browser.
var getFlexApp = function() {
  var appName = "F2JS";
  if (navigator.appName.indexOf ("Microsoft") !=-1)
    return window[appName];
  else 
    return document[appName];
}

var displayPerson = function(person) {
  if(person == null) { 
    alert("Please select a person, or maybe I screwed up.");
  } else {
    document.getElementById('nameDisplay').innerHTML = person.nome;
    document.getElementById('ageDisplay').innerHTML = person.idade;
    document.getElementById('sexDisplay').innerHTML = person.sexo;
  }
}
