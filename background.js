let reg = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
reg.lang = 'ru-RU';

reg.onresult = event => {
  window.location =
    'https://www.google.com/search?q=' + event.results[0][0].transcript;
};

reg.onend = () => {
  reg.start();
};

reg.start();
