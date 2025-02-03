(function () {
  console.log("script.js se está ejecutando..."); // Mensaje de depuración

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  console.log("Array de nombres:", names); // Verificar el array

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    console.log("Procesando nombre:", names[i], "- Primera letra:", firstLetter); // Depuración

    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]); // Llamar a byeSpeaker.speak()
    } else {
      helloSpeaker.speak(names[i]); // Llamar a helloSpeaker.speak()
    }
  }
})();
