/* ------------------------- ОБЩЕЕ (НАЧАЛО) ------------------------- */

window.onload = function () {document.body.style.opacity = "1";}

var swiper = new Swiper(".projects", {
	direction: "vertical",
	slidesPerView: 1,
	spaceBetween: 0,
	mousewheel: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		},
	});

/* ------------------------- ОБЩЕЕ (КОНЕЦ) ------------------------- */

/* ------------------------- МОБИЛЬНАЯ ВЕРСИЯ (НАЧАЛО) ------------------------- */

if (window.innerHeight > window.innerWidth) {

	const title = document.getElementsByClassName("project-title");
	for (var i = 0; i < title.length; i++ )
		{
		title[i].style.width = "calc(80% - 40px)";
		title[i].style.fontSize = "14px";
		title[i].style.borderRadius = "10px";
		}

	const card = document.getElementsByClassName("project-card");
	for (var i = 0; i < card.length; i++ )
		{
		card[i].style.width = "calc(80% - 40px)";
		card[i].style.border = "0";
		card[i].style.padding = "20px 0px 0px 0px";
		card[i].style.backdropFilter = "none";
		}

	const logo = document.getElementsByClassName("project-logo");
	for (var i = 0; i < logo.length; i++ )
		{
		logo[i].style.width = "250px";
		logo[i].style.height = "250px";
		logo[i].style.margin = "0 40px 20px 40px";
		}

	const info = document.getElementsByClassName("project-info");
	for (var i = 0; i < info.length; i++ )
		{
		info[i].style.width = "250px";
		}

	const infoList = document.querySelectorAll(".project-info ul");
	for (var i = 0; i < infoList.length; i++ )
		{
		infoList[i].style.width = "250px";
		infoList[i].style.fontSize = "14px";
		infoList[i].style.paddingInlineStart = "0";
		}

	const links = document.getElementsByClassName("project-links");
	for (var i = 0; i < links.length; i++ )
		{
		links[i].style.marginTop = "0";
		links[i].style.marginLeft = "0";
		links[i].style.gap = "10px";
		}

	}

/* ------------------------- МОБИЛЬНАЯ ВЕРСИЯ (КОНЕЦ) ------------------------- */
