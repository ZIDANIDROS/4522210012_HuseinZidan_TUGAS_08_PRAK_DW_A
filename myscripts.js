document
  .getElementById('registrationForm')
  .addEventListener('submit', function (event) {
    var studentName = document.getElementById('studentName').value;
    var studentId = document.getElementById('studentId').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var birthDate = document.getElementById('birthDate').value;

    if (!studentName || !studentId || !email || !password || !birthDate) {
      event.preventDefault(); // Mencegah form dari submit otomatis
      alert('Harap isi semua kolom yang diperlukan.');
    }
  });

const resetButton = document.getElementById('resetButton');

const registrationForm = document.getElementById('registrationForm');

const inputs = registrationForm.querySelectorAll('input');

resetButton.addEventListener('click', function () {
  inputs.forEach(function (input) {
    input.value = '';
  });

  resetButton.classList.add('resetting');

  setTimeout(function () {
    resetButton.classList.remove('resetting');
  }, 300);
});
