
window.onload = function () {document.body.style.opacity = "1";}

var swiper = new Swiper(".mySwiper", {
	direction: "vertical",
	slidesPerView: 1,
	spaceBetween: 0,
	mousewheel: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		},
	});

if (window.innerHeight > window.innerWidth) {

	document.getElementById("cover").style.justifyContent = "center";
	document.getElementById("logo").style.width = "80%";
	document.getElementById("logo").style.height = "200px";
	document.getElementById("logo").style.marginBottom = "20px";

	const social = document.getElementById("social");
	const socialLink = social.getElementsByTagName("a");
	for (var i = 0; i < socialLink.length; i++ )
		{
		socialLink[i].style.width = "60px";
		socialLink[i].style.height = "60px";
		}

	var title = document.getElementsByClassName("project-title");
	for (var i = 0; i < title.length; i++ )
		{
		title[i].style.width = "80%";
		}

	var card = document.getElementsByClassName("project-card");
	for (var i = 0; i < card.length; i++ )
		{
		card[i].style.width = "80%";
		}

	var logo = document.getElementsByClassName("project-logo");
	for (var i = 0; i < logo.length; i++ )
		{
		logo[i].style.width = "150px";
		logo[i].style.height = "150px";
		}

	var link = document.getElementsByClassName("project-link");
	for (var i = 0; i < link.length; i++ )
		{
		link[i].style.width = "80%";
		link[i].style.position = "absolute";
		link[i].style.top = "65%";
		link[i].style.left = "10%";
		link[i].style.margin = "0";
		}

	}