'use strict';
var aeles = document.getElementsByClassName('linker');
var ifr = document.getElementsByTagName('iframe')[0];

for (var i = 0, len = aeles.length; i < len; i++) {
    (function(i) {
        aeles[i].addEventListener('click', function() {
            ifr.src = 'res/ipage' + i + '.html';

        })

    })(i);

}
var upele = document.getElementById('up');
var downele = document.getElementById('down');

upele.addEventListener('click', function() {
    var pathname = ifr.src.match(/ipage\d+/)[0];
    var ui = pathname.match(/\d+/);

    if (parseInt(ui[0]) > 0) {
        ifr.src = 'res/ipage' + (parseInt(ui[0]) - 1) + '.html'; //此处计算的部分需要圆括号扩起,否则出错!
    } else {
        alert('已经是第一页了!')
    }
});
downele.addEventListener('click', function() {
    var pathname = ifr.src.match(/ipage\d+/)[0];
    var ui = pathname.match(/\d+/);

    if (parseInt(ui[0]) < aeles.length - 1) {
        ifr.src = 'res/ipage' + (parseInt(ui[0]) + 1) + '.html';
    } else {
        alert('已经是最后一页啦!')
    }
});
var dtele = document.getElementsByTagName('dt');
var ddele = document.getElementsByTagName('dd');
for (var i = 0, len = dtele.length; i < len; i++) {
    (function(i) {
        dtele[i].addEventListener('click', function() {

            ddele[i].classList.toggle('hide');
            var eles = document.querySelectorAll('dd');
            for (var j = 0, len = eles.length; j < len; j++) {
                if (j == i) {
                    continue;
                } else {
                	eles[j].classList.add('hide');
                }
            }

        });
    })(i);

}
// 手机端使用这段代码
var chgnavele = document.getElementById('chgnav');
var headerele = document.getElementsByTagName('header')[0];
var clickele = document.getElementById('hnav');
var linkereles=document.getElementsByClassName('linker');
var tip;
clickele.addEventListener('click', function() {
    if (tip) {
        chgnavele.classList.toggle('hide')
    } else {
        headerele.appendChild(chgnavele);
        for(var i=0,len=linkereles.length;i<len;i++){
        	(function(i){
        		linkereles[i].addEventListener('click',function(){
        			chgnavele.classList.add('hide');
        			// this.parentElement.parentElement.parentElement.classList.add('hide');
        		});

        	})(i);
        }
        tip = true;
        // document.getElementsByTagName('aside')[0].classList.add('hide');

    }

});

var upele = document.getElementById('uper');
var downele = document.getElementById('downer');

upele.addEventListener('click', function() {
    var pathname = ifr.src.match(/ipage\d+/)[0];
    var ui = pathname.match(/\d+/);

    if (parseInt(ui[0]) > 0) {
        ifr.src = 'res/ipage' + (parseInt(ui[0]) - 1) + '.html'; //此处计算的部分需要圆括号扩起,否则出错!
    } else {
        alert('已经是第一页了!')
    }
});
downele.addEventListener('click', function() {
    var pathname = ifr.src.match(/ipage\d+/)[0];
    var ui = pathname.match(/\d+/);

    if (parseInt(ui[0]) < aeles.length - 1) {
        ifr.src = 'res/ipage' + (parseInt(ui[0]) + 1) + '.html';
    } else {
        alert('已经是最后一页啦!')
    }
});
