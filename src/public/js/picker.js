var picker = $("#picker"),
  pickedImage = [];

picker.on('click', 'div', function(event) {

  var currElem = $(this),
    isVisited = parseInt(currElem.attr('visited')),
    opacity = (!isVisited) ? 0.5 : 1,
    flag = (!isVisited) ? 1 : 0;

  currElem.find('input').css('opacity', opacity);
  currElem.attr('visited', flag);

  _flagPickedImage(this.id);
});

// kani na function is mao ni ang mag record sa mga ID sa image nga imo ge pick...
// if ang image is deselected, e remove sya sa array then immediately stops execution, otherwise, add it...
function _flagPickedImage(id) {

  if (pickedImage.length) {
    for (var i = 0; i < pickedImage.length; i++) {
      if (pickedImage[i] == id) {
        pickedImage.splice(i, 1);
        _test();
        return;
      }
    }
  }

  pickedImage.push(id);
  _test();
}

function _test() {
  // DEBUG: to see if it's working...
  document.getElementById("result").innerHTML = pickedImage;
}

var picker = $("#picker2"),
  pickedImage = [];

picker.on('click', 'div', function(event) {

  var currElem = $(this),
    isVisited = parseInt(currElem.attr('visited')),
    opacity = (!isVisited) ? 0.5 : 1,
    flag = (!isVisited) ? 1 : 0;

  currElem.find('input').css('opacity', opacity);
  currElem.attr('visited', flag);

  _flagPickedImage(this.id);
});

// kani na function is mao ni ang mag record sa mga ID sa image nga imo ge pick...
// if ang image is deselected, e remove sya sa array then immediately stops execution, otherwise, add it...
function _flagPickedImage(id) {

  if (pickedImage.length) {
    for (var i = 0; i < pickedImage.length; i++) {
      if (pickedImage[i] == id) {
        pickedImage.splice(i, 1);
        _test();
        return;
      }
    }
  }

  pickedImage.push(id);
  _test();
}

function _test() {
  // DEBUG: to see if it's working...
  document.getElementById("result").innerHTML = pickedImage;
}

var picker = $("#picker3"),
  pickedImage = [];

picker.on('click', 'div', function(event) {

  var currElem = $(this),
    isVisited = parseInt(currElem.attr('visited')),
    opacity = (!isVisited) ? 0.5 : 1,
    flag = (!isVisited) ? 1 : 0;

  currElem.find('input').css('opacity', opacity);
  currElem.attr('visited', flag);

  _flagPickedImage(this.id);
});

// kani na function is mao ni ang mag record sa mga ID sa image nga imo ge pick...
// if ang image is deselected, e remove sya sa array then immediately stops execution, otherwise, add it...
function _flagPickedImage(id) {

  if (pickedImage.length) {
    for (var i = 0; i < pickedImage.length; i++) {
      if (pickedImage[i] == id) {
        pickedImage.splice(i, 1);
        _test();
        return;
      }
    }
  }

  pickedImage.push(id);
  _test();
}

function _test() {
  // DEBUG: to see if it's working...
  document.getElementById("result").innerHTML = pickedImage;
}
var picker = $("#picker4"),
  pickedImage = [];

picker.on('click', 'div', function(event) {

  var currElem = $(this),
    isVisited = parseInt(currElem.attr('visited')),
    opacity = (!isVisited) ? 0.5 : 1,
    flag = (!isVisited) ? 1 : 0;

  currElem.find('input').css('opacity', opacity);
  currElem.attr('visited', flag);

  _flagPickedImage(this.id);
});

// kani na function is mao ni ang mag record sa mga ID sa image nga imo ge pick...
// if ang image is deselected, e remove sya sa array then immediately stops execution, otherwise, add it...
function _flagPickedImage(id) {

  if (pickedImage.length) {
    for (var i = 0; i < pickedImage.length; i++) {
      if (pickedImage[i] == id) {
        pickedImage.splice(i, 1);
        _test();
        return;
      }
    }
  }

  pickedImage.push(id);
  _test();
}

function _test() {
  // DEBUG: to see if it's working...
  document.getElementById("result").innerHTML = pickedImage;
}
var picker = $("#picker5"),
  pickedImage = [];

picker.on('click', 'div', function(event) {

  var currElem = $(this),
    isVisited = parseInt(currElem.attr('visited')),
    opacity = (!isVisited) ? 0.5 : 1,
    flag = (!isVisited) ? 1 : 0;

  currElem.find('input').css('opacity', opacity);
  currElem.attr('visited', flag);

  _flagPickedImage(this.id);
});

// kani na function is mao ni ang mag record sa mga ID sa image nga imo ge pick...
// if ang image is deselected, e remove sya sa array then immediately stops execution, otherwise, add it...
function _flagPickedImage(id) {

  if (pickedImage.length) {
    for (var i = 0; i < pickedImage.length; i++) {
      if (pickedImage[i] == id) {
        pickedImage.splice(i, 1);
        _test();
        return;
      }
    }
  }

  pickedImage.push(id);
  _test();
}

function _test() {
  // DEBUG: to see if it's working...
  document.getElementById("result").innerHTML = pickedImage;
}
var picker = $("#picker6"),
  pickedImage = [];

picker.on('click', 'div', function(event) {

  var currElem = $(this),
    isVisited = parseInt(currElem.attr('visited')),
    opacity = (!isVisited) ? 0.5 : 1,
    flag = (!isVisited) ? 1 : 0;

  currElem.find('input').css('opacity', opacity);
  currElem.attr('visited', flag);

  _flagPickedImage(this.id);
});

// kani na function is mao ni ang mag record sa mga ID sa image nga imo ge pick...
// if ang image is deselected, e remove sya sa array then immediately stops execution, otherwise, add it...
function _flagPickedImage(id) {

  if (pickedImage.length) {
    for (var i = 0; i < pickedImage.length; i++) {
      if (pickedImage[i] == id) {
        pickedImage.splice(i, 1);
        _test();
        return;
      }
    }
  }

  pickedImage.push(id);
  _test();
}

function _test() {
  // DEBUG: to see if it's working...
  document.getElementById("result").innerHTML = pickedImage;
}
var picker = $("#picker7"),
  pickedImage = [];

picker.on('click', 'div', function(event) {

  var currElem = $(this),
    isVisited = parseInt(currElem.attr('visited')),
    opacity = (!isVisited) ? 0.5 : 1,
    flag = (!isVisited) ? 1 : 0;

  currElem.find('input').css('opacity', opacity);
  currElem.attr('visited', flag);

  _flagPickedImage(this.id);
});

// kani na function is mao ni ang mag record sa mga ID sa image nga imo ge pick...
// if ang image is deselected, e remove sya sa array then immediately stops execution, otherwise, add it...
function _flagPickedImage(id) {

  if (pickedImage.length) {
    for (var i = 0; i < pickedImage.length; i++) {
      if (pickedImage[i] == id) {
        pickedImage.splice(i, 1);
        _test();
        return;
      }
    }
  }

  pickedImage.push(id);
  _test();
}

function _test() {
  // DEBUG: to see if it's working...
  document.getElementById("result").innerHTML = pickedImage;
}
var picker = $("#picker8"),
  pickedImage = [];

picker.on('click', 'div', function(event) {

  var currElem = $(this),
    isVisited = parseInt(currElem.attr('visited')),
    opacity = (!isVisited) ? 0.5 : 1,
    flag = (!isVisited) ? 1 : 0;

  currElem.find('input').css('opacity', opacity);
  currElem.attr('visited', flag);

  _flagPickedImage(this.id);
});

// kani na function is mao ni ang mag record sa mga ID sa image nga imo ge pick...
// if ang image is deselected, e remove sya sa array then immediately stops execution, otherwise, add it...
function _flagPickedImage(id) {

  if (pickedImage.length) {
    for (var i = 0; i < pickedImage.length; i++) {
      if (pickedImage[i] == id) {
        pickedImage.splice(i, 1);
        _test();
        return;
      }
    }
  }

  pickedImage.push(id);
  _test();
}

function _test() {
  // DEBUG: to see if it's working...
  document.getElementById("result").innerHTML = pickedImage;
}
