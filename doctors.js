function showModal() {
    $('#myModal').modal('show');
}

// وقتی دکمه "ادامه" کلیک می‌شود
$('#myModal .btn-primary').click(function() {
    var mobileNumber = $('#mobileNumber').val();
    alert('شماره موبایل وارد شده: ' + mobileNumber);
});

document.addEventListener('DOMContentLoaded', (event) => {
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
      keyboard: false
    });
  
    var modalTrigger = document.getElementById('Login_click');
    modalTrigger.addEventListener('click', function () {
      myModal.show();
    });
  });