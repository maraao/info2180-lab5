window.onload = function() {
  var lookBtn = document.querySelector('#lookup');
  var httpRequest

  lookBtn.addEventListener("click", function(event){
      event.preventDefault();

      httpRequest = new XMLHttpRequest();
      var url = 'http://localhost/info2180-lab5/world.php';
      httpRequest.onreadystatechange = loadCountries;
      httpRequest.open('GET', url);
      httpRequest.send();
    });

  function loadCountries(){
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
          if (httpRequest.status === 200) {
            var response = httpRequest.responseText;
            var result = document.querySelector('#result');
            result.innerHTML = response;
          } else {
            alert('There was a problem with the request.');
          }
      }
  }
};