(function () {
  console.log("script.js se está ejecutando...");

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  console.log("Array de nombres:", names);

  var outputDiv = document.getElementById("output"); // Obtener el div donde se mostrarán los nombres

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    var message;

    if (firstLetter === 'j') {
      message = "Good Bye " + names[i];
      byeSpeaker.speak(names[i]); // Seguir imprimiendo en la consola
    } else {
      message = "Hello " + names[i];
      helloSpeaker.speak(names[i]); // Seguir imprimiendo en la consola
    }

    // Crear un nuevo elemento <p> y agregarlo al div
    var para = document.createElement("p");
    para.textContent = message;
    outputDiv.appendChild(para);
  }
})();
