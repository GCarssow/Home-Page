function toggleOpen1() {
    document.querySelector(".dropdown-content1").classList.add("show");
}

function toggleClose1() {
    document.querySelector(".dropdown-content1").classList.remove("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn1')) {
    var dropdowns1 = document.getElementsByClassName("dropdown-content1");
    var i;
    for (i = 0; i < dropdowns1.length; i++) {
      var openDropdown1 = dropdowns1[i];
      if (openDropdown1.classList.contains('show')) {
        openDropdown1.classList.remove('show');
      }
    }
  }
};

function toggleOpen2() {
    document.querySelector(".dropdown-content2").classList.add("show");
}

function toggleClose2() {
    document.querySelector(".dropdown-content2").classList.remove("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn2')) {
    var dropdowns2 = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns2.length; i++) {
      var openDropdown2 = dropdowns2[i];
      if (openDropdown2.classList.contains('show')) {
        openDropdown2.classList.remove('show');
      }
    }
  }
};

function toggleOpen3() {
    document.querySelector(".dropdown-content3").classList.add("show");
  }

function toggleClose3() {
    document.querySelector(".dropdown-content3").classList.remove("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn3')) {
    var dropdowns3 = document.getElementsByClassName("dropdown-content3");
    var i;
    for (i = 0; i < dropdowns3.length; i++) {
      var openDropdown3 = dropdowns3[i];
      if (openDropdown3.classList.contains('show')) {
        openDropdown3.classList.remove('show');
      }
    }
  }
};

function toggleOpen4() {
  document.querySelector(".dropdown-content4").classList.add("show");
}

function toggleClose4() {
  document.querySelector(".dropdown-content4").classList.remove("show");
}

window.onclick = function(event) {
if (!event.target.matches('.dropbtn4')) {
  var dropdowns4 = document.getElementsByClassName("dropdown-content4");
  var i;
  for (i = 0; i < dropdowns4.length; i++) {
    var openDropdown4 = dropdowns4[i];
    if (openDropdown4.classList.contains('show')) {
      openDropdown4.classList.remove('show');
    }
  }
}
};

function myMove() {
  var elem = document.getElementbyID("Headline_right"); 
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}
myMove();
// window.onload = function () {

//     var blue = '#2980b9';
//     var l = Snap('#logo');
//     var p = l.select('path');

//     l.append(p);

//     p.attr({
//         fill: blue,
//         stroke: '#0066CC',
//     });

//     setTimeout( function() {
//         // modify this one line below, and see the result !
//         var logoTitle = 'alticreation';
//         var logoRandom = '';
//         var logoTitleContainer = l.text(0, '98%', '');
//         var possible = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";
//         logoTitleContainer.attr({
//             fontSize: 280,
//             fontFamily: 'Dosis',
//             fontWeight: '600'
//         });

//         function generateRandomTitle(i, logoRandom) {
//             setTimeout( function() {
//                 logoTitleContainer.attr({ text: logoRandom });
//             }, i*70 );
//         }

//         for( var i=0; i < logoTitle.length+1; i++ ) {
//             logoRandom = logoTitle.substr(0, i);
//             for( var j=i; j < logoTitle.length; j++ ) { 
//                 logoRandom += possible.charAt(Math.floor(Math.random() * possible.length)); 
//             }
//             generateRandomTitle(i, logoRandom);
//             logoRandom = '';
//         }

//     }, 500 );

// }