(function() {

	(function carousel() {
		let carouselContainer = document.getElementById("myCarousel");
		let carouselItems = carouselContainer.querySelectorAll(".main-line-inner");

		for (let item of carouselItems) {
			item.querySelector("h1").textContent = "WILDCARD";
			item.querySelector("p").textContent = "WILDCARD";
			let a = item.querySelector("a");
			a ? a.textContent = "WILDCARD" : null;
		}
	})();

	(function navbar() {
		let navbarContainer = document.querySelector('nav.navbar');
		let brand = navbarContainer.querySelector('.navbar-brand');
		let navbarItems = navbarContainer.querySelector('ul.navbar-nav').children;

		brand.textContent = "HQoSoftware";

		for (let item of navbarItems) {
			item.firstElementChild.textContent = "WILDCARD";
		}

	})();

	(function qualityList() {
		let listContainer = document.querySelector('.qual-list');
		let headers = listContainer.firstElementChild.firstElementChild;
		let subheading = headers.nextElementSibling.children[1];
		let contentContainer = headers.nextElementSibling.nextElementSibling;

		headers.textContent = "WILDCARD. WILDCARD. WILDCARD.";

		subheading.textContent = "WILDCARD!";


		for (let item of contentContainer.children) {
			item.children[1].textContent = "FFF";
			item.children[2].textContent = "YYY";
		}
	})();

	(function workExamples() {
		let examplesContainer = document.querySelector('.work-examples');
		let heading = examplesContainer.firstElementChild.firstElementChild;
		let subheading = heading.nextElementSibling;
		let primaryWorkContainer = subheading.nextElementSibling;
		let secondaryWorkContainer = primaryWorkContainer.nextElementSibling;

		heading.textContent = "Custom";
		subheading.textContent = "lorem";

		for (let item of primaryWorkContainer.children) {
			let contentWrapper = item.firstElementChild;

			contentWrapper.children[1].textContent = "YASS";
			contentWrapper.children[2].textContent = "Y_A_S_S";
		}

		for (let item of secondaryWorkContainer.children) {
			let contentWrapper = item.firstElementChild.firstElementChild;

			contentWrapper.children[0].textContent = "YESS";
			contentWrapper.children[1].textContent = "Y_E_S_S";
		}

	})();

	(function workProposal() {
		let proposalContainer = document.querySelector(".work-proposal").firstElementChild;

		proposalContainer.children[0].textContent = "X!";
		proposalContainer.children[2].textContent = "X2";
		proposalContainer.children[3].textContent = "X3";

	})();

	(function footer() {
		let footerContainer = document.querySelector('footer')
			.firstElementChild
			.firstElementChild;
		let firstColumn = footerContainer.firstElementChild;
		let secondColumn = firstColumn.nextElementSibling;
		let thirdColumn = secondColumn.nextElementSibling;
		let fourthColumn = thirdColumn.nextElementSibling;
		let copyrightContainer = footerContainer
			.parentElement
			.nextElementSibling
			.firstElementChild;

		firstColumn.querySelector('h4').textContent = "H1";
		firstColumn.querySelector('p').textContent = "H1";
		firstColumn.querySelector('a').textContent = "H1";

		secondColumn.querySelector('h4').textContent = "H2";

		thirdColumn.querySelector('h4').textContent = "H3";
		thirdColumn.querySelector('p').textContent = "H3";

		for (let item of thirdColumn.querySelector('ul').querySelectorAll('li')) {
			item.querySelector('a').textContent = "FK";
		}

		fourthColumn.querySelector('h4').textContent = "H4";
		fourthColumn.querySelector('p').textContent = "H4";
		fourthColumn.querySelector('form')
			.firstElementChild
			.querySelector('a')
			.textContent = 'H4';

		copyrightContainer.querySelector('p').textContent = "copy";

		for (let item of copyrightContainer.querySelector('ul').querySelectorAll('li')) {
			item.firstElementChild.textContent = "WILDCARD";
		}

	})();

})();
