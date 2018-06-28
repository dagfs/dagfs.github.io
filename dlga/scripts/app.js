


(function() {
  'use strict';
  var main = document.getElementsByTagName("main")[0];
  for(var i = 0; i < data.length; i++){
    main.innerHTML += "<details><summary>" + data[i].title+"</summary><p>"+data[i].text+"</p></details>";
  }

  if ('serviceWorker' in navigator) {
    console.log("sadasdasd")
    navigator.serviceWorker
             .register('service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
  }
})();
