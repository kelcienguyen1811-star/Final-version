document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.footer-form, .contact-form').forEach(function(form){
        form.addEventListener('submit', function(e){
            e.preventDefault();
            var email = (form.email && form.email.value) || '';
            var fb = form.querySelector('.footer-feedback');
            fb.textContent = form.dataset.feedback || 'Thanks! This is a demo. Email "' + email + '" was not saved.';
            form.reset();
        });
    });
});

/* Mobile Nav */
function myFunction() {
  var navigation = document.getElementById("myTopnav");
  var toggle = navigation.querySelector(".icon");
  var isOpen = navigation.classList.toggle("responsive");
  toggle.setAttribute("aria-expanded", String(isOpen));
}
