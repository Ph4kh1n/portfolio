var typed = new Typed('#typedText', {
	strings: ["Web Developer.", "C Programming.", "Photographer"],
	typeSpeed: 30,
	backSpeed: 30,
	loop: true
});

document.querySelector(".contact-text").addEventListener("click", function () {
	document.querySelector(".contact-section").classList.remove("hide");
});

document.querySelector(".contact-close").addEventListener("click", function () {
	document.querySelector(".contact-section").classList.add("hide");
});

document.querySelector(".about-text").addEventListener("click", function () {
	document.querySelector(".about-section").classList.remove("hide");
});

document.querySelector(".about-close").addEventListener("click", function () {
	document.querySelector(".about-section").classList.add("hide");
});

(function($) { "use strict";
		
	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }

	
	//About page
	
	$(".about-text").on('click', function () {
		$("body").addClass("about-on");
	});
	$(".about-close").on('click', function () {
		$("body").removeClass("about-on");
	});

	
	//Contact page
	
	$(".contact-text").on('click', function () {
		$("body").addClass("contact-on");
	});
	$(".contact-close").on('click', function () {
		$("body").removeClass("contact-on");
	});

	
	//Travel portfolio page
	
	$(".gallery").on('click', function () {
		$("body").addClass("gallery-on");
	});
	$(".gallery-close").on('click', function () {
		$("body").removeClass("gallery-on");
	});

	
	//Wildlife portfolio page
	
	$(".projects").on('click', function () {
		$("body").addClass("projects-on");
	});
	$(".projects-close").on('click', function () {
		$("body").removeClass("projects-on");
	});

	
	//Nature portfolio page
	
	$(".nature").on('click', function () {
		$("body").addClass("nature-on");
	});
	$(".nature-close").on('click', function () {
		$("body").removeClass("nature-on");
	});

	
})(jQuery);

window.addEventListener('load', myInit, false);

function myInit()
{
    if (titleElementExists() == true)
        document.getElementsByTagName('title')[0].innerText = constructPageTitleStr();
    else
        addPageTitle();
    /*
        other initialization code here.
    */
}

function titleElementExists()
{
    var titleEl = document.getElementsByTagName('title');
    if (titleEl.length == 0)
        return false;
    return true;
}


function constructPageTitleStr()
{
    var locationStr = window.location.pathname;

    // make sure the below line reflects the actual name of the file
    // sets locationStr = "enhzflep"
    locationStr = locationStr.replace("/index.html", "");

    // get the position of the last / char in the string
    var slashPos = locationStr.lastIndexOf("/");

    // extract the string that remains after it
    locationStr = locationStr.substr(slashPos+1);
    return locationStr;
}

function addPageTitle()
{
    var locationStr = constructPageTitleStr();
    var title = document.createElement('title');
    var titleText = document.createTextNode( 'Page Title = ' + locationStr );
    title.appendChild( titleText );
    document.head.appendChild(title);
}

/*=============== COMPLETE PROJECTS COUNTER ===============*/
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.title');

    const number = projectCards.length;

    document.querySelector('#comText').textContent = `${number}`;
});

/*=============== COMPLETE PROJECTS COUNTER ===============*/
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.c-gallery');

    const number = projectCards.length;

    document.querySelector('#countGall').textContent = `${number}`;
});

/*=============== COMPLETE AGE COUNTER ===============*/
document.addEventListener("DOMContentLoaded", function() {
    let defAge = 17;

    var Months = ["January", "Febuary", "March", "April", "May",
        "June", "July", "August", "September", "October", "November",
        "December"];

    var Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturnday"];

    var myDate = new Date(),
        year = myDate.getFullYear(),
        month = myDate.getMonth(),
        date = myDate.getDate(),
        day = myDate.getDay(),
        hour = myDate.getHours(),
        minutes = myDate.getMinutes(),
        seconds = myDate.getSeconds();

    if(date == 13 && month == 9) {
        defAge++;
        
        console.log("%d %s %s %d %d:%d:%d", date, Days[day],
                Months[month],year, hour, minutes, seconds);
    }
    document.getElementById("ageText").innerText = defAge;
});

/*=============== INCOMPLETE VISITS COUNTER ===============*/

const firebaseConfig = {
    apiKey: "AIzaSyAydceek__AtMumTO2ONQlicWVtBmwT-30",
    authDomain: "visits-counter-1499e.firebaseapp.com",
    projectId: "visits-counter-1499e",
    storageBucket: "visits-counter-1499e.appspot.com",
    messagingSenderId: "209528750470",
    appId: "1:209528750470:web:14f0019b8bc98fb93aec07"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

db.collection('visits').doc('visitCount').get()
.then((doc) => {
    let visitCount;
    if (doc.exists) {
        visitCount = doc.data().count;
    } else {
        visitCount = 1;
    }

    visitCount++;

      // บันทึกค่านับใหม่ลงใน Firestore
    db.collection('visits').doc('visitCount').set({
        count: visitCount
    })
    .then(() => {
        console.log('Document successfully written!');
    })
    .catch((error) => {
        console.error('Error writing document: ', error);
    });

    // แสดงค่านับในหน้าเว็บ
    document.getElementById('visitCount').textContent = visitCount;
  })
  .catch((error) => {
      console.log('Error getting document:', error);
  });