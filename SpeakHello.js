(function (window) {
  var helloSpeaker = {}; // Crear objeto

  var speakWord = "Hello";

  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  window.helloSpeaker = helloSpeaker; // Exponer el objeto al ámbito global
})(window);

