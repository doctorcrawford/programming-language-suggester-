function hideResults() {
  document.getElementById('csharp').setAttribute('class', 'hidden');
  document.getElementById('js').setAttribute('class', 'hidden');
  document.getElementById('python').setAttribute('class', 'hidden');
  document.getElementById('swift').setAttribute('class', 'hidden');
}

function showResult(language) {
  document.getElementById(language).removeAttribute('class', 'hidden');
}

window.onload = function() {
  function doTheThing(event) {
    let form = document.querySelector("form");
    form.addEventListener('submit', function()) {
      epreventDefault();
      hideResults();
      const userName = document.getElementById('userName').value;
      const purpose = document.getElementById('purpose').value;
      const identify = document.getElementById('identify').value;
      const date = document.getElementById('date').value;
      const color = document.getElementById('color').value;

      function name() {
        document.getElementById('name').innerHTML = 'userName';
      }
    }
  }  
}