/**
Exemplo encontrado em:
http://www.switchonthecode.com/tutorials/flex-javascript-basics-using-externalinterface
*/

var displayPerson = function(person) {
  if(person == null) { 
    alert("Please select a person, or maybe I screwed up.");
  } else {
    document.getElementById('nameDisplay').innerHTML = person.Name;
    document.getElementById('ageDisplay').innerHTML = person.Age;
    document.getElementById('sexDisplay').innerHTML = person.Sex;
  }
}