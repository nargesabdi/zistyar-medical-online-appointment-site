
document.getElementById('nextStepButton').addEventListener('click', function() {

    $('#exampleModal').modal('show');
  });
  
  function showModal() {
    $('#exampleModal').modal('show');
}

// وقتی دکمه "ادامه" کلیک می‌شود
$('#exampleModal .btn-primary').click(function() {
    var mobileNumber = $('#mobileNumber').val();
    alert('شماره موبایل وارد شده: ' + mobileNumber);
});

document.addEventListener('DOMContentLoaded', (event) => {
    var exampleModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
      keyboard: false
    });
  
    var modalTrigger = document.getElementById('Login_click');
    modalTrigger.addEventListener('click', function () {
      exampleModal.show();
    });
  });

  

