(function (window) {
  var byeSpeaker = {}; // Crear objeto

  var speakWord = "Good Bye";

  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  window.byeSpeaker = byeSpeaker; // Exponer el objeto al ámbito global
})(window);
