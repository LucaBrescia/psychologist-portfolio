const sections = document.querySelectorAll('.section')
const secBtn = document.querySelectorAll('.mycontrol')
const allSection = document.querySelector('.main-content')

// Modal js trigger
document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }
  
    function closeModal($el) {
      $el.classList.remove('is-active');
    }
  
    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }
  
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
  
      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });
  
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');
  
      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });
  
    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      const e = event || window.event;
  
      if (e.keyCode === 27) { // Escape key
        closeAllModals();
      }
    });

    secBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            secBtn.forEach(($el) => {
                const $target = document.getElementById($el.dataset.target);
                if($target != null && $target.classList.contains('is-active')){
                    $target.classList.remove('is-active');
                    $target.classList.add('is-hidden');
                    if($target.id == 'Home'){
                        const $cit = document.getElementById('Cit');
                        $cit.classList.remove('is-active');
                        $cit.classList.add('is-hidden');
                    }
                }
            });
            const $actual = document.getElementById(btn.dataset.target);
            $actual.classList.remove('is-hidden');
            $actual.classList.add('is-active');
            if($actual.id == 'Home'){
                const $cit = document.getElementById('Cit');
                $cit.classList.remove('is-hidden');
                $cit.classList.add('is-active');
            }
            
          
        });
    });


      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });

  });

// ------------------


