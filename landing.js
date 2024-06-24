// دانلود و ورود فایل‌های Swiper به پروژه
import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

// ایجاد نمونه Swiper
const swiper = new Swiper('.swiper', {
  // پیکربندی Swiper
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 20,

  // استفاده از کنترل‌های پیمایش
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



// // گرفتن دکمه ورود/ثبت‌نام
// const loginButton = document.getElementById('Login_click');

// // افزودن رویداد کلیک به دکمه
// loginButton.addEventListener('click', () => {
//   // باز کردن مدال ثبت‌نام
//   const registerModal = document.getElementById('registerModal');
//   const modal = new bootstrap.Modal(registerModal);
//   modal.show();
// });
// modal.js
// تابع برای نمایش مودال
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

  

