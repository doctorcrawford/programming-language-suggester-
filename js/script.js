function hideResults() {
  document.getElementById('csharp').setAttribute('class', 'hidden');
  document.getElementById('js').setAttribute('class', 'hidden');
  document.getElementById('python').setAttribute('class', 'hidden');
  document.getElementById('swift').setAttribute('class', 'hidden');
}

function showResult(language) {
  document.getElementById(language).removeAttribute('class', 'hidden');
  document.getElementById('answers').removeAttribute('class', 'hidden');
}

function theirName(enter) {
  document.getElementById('name').innerHTML = enter;
}

function runQuiz(event) {
  event.preventDefault();
  console.log(event);
  hideResults();
  const userName = document.getElementById('userName').value;
  const purpose = document.getElementById('purpose').value;
  const identify = document.getElementById('identify').value;

  if (identify === 'steve') {
    showResult("swift");
  } else if (purpose === 'personal' && identify === 'steve') {
    showResult('swift');
  } else if (purpose === 'personal') {
    showResult('js');
  } else if (purpose === 'ai'){
    showResult('python');
  } else if (purpose === 'new' && identify === 'beyonce') {
    showResult('js');
  } else if (purpose === 'new') {
    showResult('csharp');
  }

  theirName(userName);
}

window.addEventListener('load', function() {
  const form = document.getElementById('quiz');
  form.addEventListener('submit', runQuiz);
});