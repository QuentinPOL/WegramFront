function init() {
    // Generate li foreach fieldset
    var count = document.querySelectorAll('form fieldset').length;
    var ul = document.querySelector('ul.items');

    for (var i = 0; i < count; i++) {
      var li = document.createElement("li");
      ul.appendChild(li);
    }
    // Add class active on first li
    ul.firstChild.classList.add('active');
  }

  function next(target) {
    var input = target.previousElementSibling;

    // Check if input is empty
    if (input.value === '') {
      document.body.classList.add('error');
    } else {
      document.body.classList.remove('error');

      var enable = document.querySelector('form fieldset.enable');
      var nextEnable = enable.nextElementSibling;
      enable.classList.remove('enable');
      enable.classList.add('disable');
      if (nextEnable) {
        nextEnable.classList.add('enable');
      }

      // Switch active class on left list
      var active = document.querySelector('ul.items li.active');
      var nextActive = active.nextElementSibling;
      active.classList.remove('active');
      if (nextActive) {
        nextActive.classList.add('active');
      }
    }
  }

  function keyDown(event) {
    var key = event.keyCode;
    var target = document.querySelector('fieldset.enable .button');
    if (key == 13 || key == 9) next(target);
  }

  document.addEventListener("DOMContentLoaded", init);
  document.body.onmouseup = function (event) {
      var target = event.target || event.toElement;
      if (target.classList.contains("button")) next(target);
  };
  document.addEventListener("keydown", keyDown, false);