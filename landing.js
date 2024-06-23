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

  
//   document.querySelectorAll('.btn-edit').forEach(btn => {
//     btn.addEventListener('click', event => {
//       const htmlSnippet = event.target.closest('.bd-code-snippet').querySelector('.bd-example').innerHTML

      
//       const classes = Array.from(event.target.closest('.bd-code-snippet').querySelector('.bd-example').classList).join(' ')

//       const jsSnippet = event.target.closest('.bd-code-snippet').querySelector('.btn-edit').getAttribute('data-sb-js-snippet')
//       StackBlitzSDK.openBootstrapSnippet(htmlSnippet, jsSnippet, classes)
//     })
//   })

//   StackBlitzSDK.openBootstrapSnippet = (htmlSnippet, jsSnippet, classes) => {
//     const markup = `<!doctype html>
// <html lang="en">
//   <head>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <link href="https:\/\/cdn.jsdelivr.net\/npm\/bootstrap@5.3.3\/dist\/css\/bootstrap.min.css" rel="stylesheet">
//     <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet">
//     <title>Bootstrap Example</title>
//     <${'script'} src="https:\/\/cdn.jsdelivr.net\/npm\/bootstrap@5.3.3\/dist\/js\/bootstrap.bundle.min.js"></${'script'}>
//   </head>
//   <body class="p-3 m-0 border-0 ${classes}">

//     \x3C!-- Example Code -->
// ${htmlSnippet.replace(/^/gm, '    ')}
//     \x3C!-- End Example Code -->
//   </body>
// </html>`

//     const jsSnippetContent = jsSnippet ? '\/\/ NOTICE!!! Initially embedded in our docs this JavaScript\n\/\/ file contains elements that can help you create reproducible\n\/\/ use cases in StackBlitz for instance.\n\/\/ In a real project please adapt this content to your needs.\n\/\/ \u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\n\n\/*!\n * JavaScript for Bootstrap\u0027s docs (https:\/\/getbootstrap.com\/)\n * Copyright 2011-2024 The Bootstrap Authors\n * Licensed under the Creative Commons Attribution 3.0 Unported License.\n * For details, see https:\/\/creativecommons.org\/licenses\/by\/3.0\/.\n *\/\n\n\/* global bootstrap: false *\/\n\n(() =\u003e {\n  \u0027use strict\u0027\n\n  \/\/ --------\n  \/\/ Tooltips\n  \/\/ --------\n  \/\/ Instantiate all tooltips in a docs or StackBlitz\n  document.querySelectorAll(\u0027[data-bs-toggle=\u0022tooltip\u0022]\u0027)\n    .forEach(tooltip =\u003e {\n      new bootstrap.Tooltip(tooltip)\n    })\n\n  \/\/ --------\n  \/\/ Popovers\n  \/\/ --------\n  \/\/ Instantiate all popovers in docs or StackBlitz\n  document.querySelectorAll(\u0027[data-bs-toggle=\u0022popover\u0022]\u0027)\n    .forEach(popover =\u003e {\n      new bootstrap.Popover(popover)\n    })\n\n  \/\/ -------------------------------\n  \/\/ Toasts\n  \/\/ -------------------------------\n  \/\/ Used by \u0027Placement\u0027 example in docs or StackBlitz\n  const toastPlacement = document.getElementById(\u0027toastPlacement\u0027)\n  if (toastPlacement) {\n    document.getElementById(\u0027selectToastPlacement\u0027).addEventListener(\u0027change\u0027, function () {\n      if (!toastPlacement.dataset.originalClass) {\n        toastPlacement.dataset.originalClass = toastPlacement.className\n      }\n\n      toastPlacement.className = \u0060${toastPlacement.dataset.originalClass} ${this.value}\u0060\n    })\n  }\n\n  \/\/ Instantiate all toasts in docs pages only\n  document.querySelectorAll(\u0027.bd-example .toast\u0027)\n    .forEach(toastNode =\u003e {\n      const toast = new bootstrap.Toast(toastNode, {\n        autohide: false\n      })\n\n      toast.show()\n    })\n\n  \/\/ Instantiate all toasts in docs pages only\n  \/\/ js-docs-start live-toast\n  const toastTrigger = document.getElementById(\u0027liveToastBtn\u0027)\n  const toastLiveExample = document.getElementById(\u0027liveToast\u0027)\n\n  if (toastTrigger) {\n    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)\n    toastTrigger.addEventListener(\u0027click\u0027, () =\u003e {\n      toastBootstrap.show()\n    })\n  }\n  \/\/ js-docs-end live-toast\n\n  \/\/ -------------------------------\n  \/\/ Alerts\n  \/\/ -------------------------------\n  \/\/ Used in \u0027Show live alert\u0027 example in docs or StackBlitz\n\n  \/\/ js-docs-start live-alert\n  const alertPlaceholder = document.getElementById(\u0027liveAlertPlaceholder\u0027)\n  const appendAlert = (message, type) =\u003e {\n    const wrapper = document.createElement(\u0027div\u0027)\n    wrapper.innerHTML = [\n      \u0060\u003cdiv class=\u0022alert alert-${type} alert-dismissible\u0022 role=\u0022alert\u0022\u003e\u0060,\n      \u0060   \u003cdiv\u003e${message}\u003c\/div\u003e\u0060,\n      \u0027   \u003cbutton type=\u0022button\u0022 class=\u0022btn-close\u0022 data-bs-dismiss=\u0022alert\u0022 aria-label=\u0022Close\u0022\u003e\u003c\/button\u003e\u0027,\n      \u0027\u003c\/div\u003e\u0027\n    ].join(\u0027\u0027)\n\n    alertPlaceholder.append(wrapper)\n  }\n\n  const alertTrigger = document.getElementById(\u0027liveAlertBtn\u0027)\n  if (alertTrigger) {\n    alertTrigger.addEventListener(\u0027click\u0027, () =\u003e {\n      appendAlert(\u0027Nice, you triggered this alert message!\u0027, \u0027success\u0027)\n    })\n  }\n  \/\/ js-docs-end live-alert\n\n  \/\/ --------\n  \/\/ Carousels\n  \/\/ --------\n  \/\/ Instantiate all non-autoplaying carousels in docs or StackBlitz\n  document.querySelectorAll(\u0027.carousel:not([data-bs-ride=\u0022carousel\u0022])\u0027)\n    .forEach(carousel =\u003e {\n      bootstrap.Carousel.getOrCreateInstance(carousel)\n    })\n\n  \/\/ -------------------------------\n  \/\/ Checks \u0026 Radios\n  \/\/ -------------------------------\n  \/\/ Indeterminate checkbox example in docs and StackBlitz\n  document.querySelectorAll(\u0027.bd-example-indeterminate [type=\u0022checkbox\u0022]\u0027)\n    .forEach(checkbox =\u003e {\n      if (checkbox.id.includes(\u0027Indeterminate\u0027)) {\n        checkbox.indeterminate = true\n      }\n    })\n\n  \/\/ -------------------------------\n  \/\/ Links\n  \/\/ -------------------------------\n  \/\/ Disable empty links in docs examples only\n  document.querySelectorAll(\u0027.bd-content [href=\u0022#\u0022]\u0027)\n    .forEach(link =\u003e {\n      link.addEventListener(\u0027click\u0027, event =\u003e {\n        event.preventDefault()\n      })\n    })\n\n  \/\/ -------------------------------\n  \/\/ Modal\n  \/\/ -------------------------------\n  \/\/ Modal \u0027Varying modal content\u0027 example in docs and StackBlitz\n  \/\/ js-docs-start varying-modal-content\n  const exampleModal = document.getElementById(\u0027exampleModal\u0027)\n  if (exampleModal) {\n    exampleModal.addEventListener(\u0027show.bs.modal\u0027, event =\u003e {\n      \/\/ Button that triggered the modal\n      const button = event.relatedTarget\n      \/\/ Extract info from data-bs-* attributes\n      const recipient = button.getAttribute(\u0027data-bs-whatever\u0027)\n      \/\/ If necessary, you could initiate an Ajax request here\n      \/\/ and then do the updating in a callback.\n\n      \/\/ Update the modal\u0027s content.\n      const modalTitle = exampleModal.querySelector(\u0027.modal-title\u0027)\n      const modalBodyInput = exampleModal.querySelector(\u0027.modal-body input\u0027)\n\n      modalTitle.textContent = \u0060New message to ${recipient}\u0060\n      modalBodyInput.value = recipient\n    })\n  }\n  \/\/ js-docs-end varying-modal-content\n\n  \/\/ -------------------------------\n  \/\/ Offcanvas\n  \/\/ -------------------------------\n  \/\/ \u0027Offcanvas components\u0027 example in docs only\n  const myOffcanvas = document.querySelectorAll(\u0027.bd-example-offcanvas .offcanvas\u0027)\n  if (myOffcanvas) {\n    myOffcanvas.forEach(offcanvas =\u003e {\n      offcanvas.addEventListener(\u0027show.bs.offcanvas\u0027, event =\u003e {\n        event.preventDefault()\n      }, false)\n    })\n  }\n})()\n' : null
//     const project = {
//       files: {
//         'index.html': markup,
//         'index.js': jsSnippetContent
//       },
//       title: 'Bootstrap Example',
//       description: `Official example from ${window.location.href}`,
//       template: jsSnippet ? 'javascript' : 'html',
//       tags: ['bootstrap']
//     }

//     StackBlitzSDK.openProject(project, { openFile: 'landing.html' })
//   }

