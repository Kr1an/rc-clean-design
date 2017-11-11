(function() {
	let main = function(data) {
		mainPage(data);
		navbar(data);
		development(data);
		maintenance(data);
	}

	let mainPage = function(json) {
		let container = document.querySelector('.main-content').querySelector('.content-wrapper');
		let title = container.querySelector('.heading');
		let offerList = container.querySelector('ul');
		let offers = json["Index"]["paragraphs"];

		let listTitle = document.createElement('li');
		listTitle.textContent = json["Index"]["title"];
		offerList.appendChild(listTitle);

		for (let offer of offers) {
			let item = document.createElement('li');
			item.innerHTML = `${offer}`;
			offerList.appendChild(item);
		}
	}

	let navbar = function(json) {
		let navbarContainer = document.querySelector('nav.navbar');
		let brand = navbarContainer.querySelector('.navbar-brand');
		let navbarList = navbarContainer.querySelector('ul.navbar-nav');
		let navbarItems = json["navbar"];

		for (let elem of navbarItems) {
			let item = document.createElement('li');
			item.innerHTML = `<a href='#${elem}'>${elem}</a>`;
			navbarList.appendChild(item);
		}

	}

	let development = function(json) {
		let container = document.querySelector('.software-development').querySelector('.content-wrapper');
		let heading = container.querySelector('.heading');
		let contentContainer = container.querySelector('.content');
		let data = json["Software Development"];
		let title = data["title"];
		let blocks = data["blocks"];
		
		heading.textContent = title;

		for (let item in blocks) {
		
			let html = "";
			let block = document.createElement('div');
			let content = blocks[item];

			block.className = "block";

			html += `<img src=${content['icon']} class='img-responsive'>`;
			html += `<h2>${content['title']}</h2>`;
			html += `<p>${content['paragraph']}</p>`;
			block.innerHTML = html;

			contentContainer.appendChild(block);

		}
	}

	let maintenance = function(json) {
		let container = document.querySelector('.software-maintenance').querySelector('.content-wrapper');
		let heading = container.querySelector('.heading');
		let contentContainer = container.querySelector('.content');
		let data = json["Software Maintenance"];
		let title = data["title"];
		let blocks = data["blocks"];

		heading.textContent = title;

		for (let item in blocks) {
			let html = "";
			let block = document.createElement('div');
			let content = blocks[item];

			block.className = "block";

			html += `<img src=${content['icon']} class='img-responsive'>`;
			html += `<h2>${content['title']}</h2>`;
			html += `<p>${content['paragraph']}</p>`;
			block.innerHTML = html;

			contentContainer.appendChild(block);
		}


	}
	// let workExamples = function() {
	// 	let examplesContainer = document.querySelector('.work-examples');
	// 	let heading = examplesContainer.firstElementChild.firstElementChild;
	// 	let subheading = heading.nextElementSibling;
	// 	let primaryWorkContainer = subheading.nextElementSibling;
	// 	let secondaryWorkContainer = primaryWorkContainer.nextElementSibling;

	// 	heading.textContent = "Custom";
	// 	subheading.textContent = "lorem";

	// 	for (let item of primaryWorkContainer.children) {
	// 		let contentWrapper = item.firstElementChild;

	// 		contentWrapper.children[1].textContent = "YASS";
	// 		contentWrapper.children[2].textContent = "Y_A_S_S";
	// 	}

	// 	for (let item of secondaryWorkContainer.children) {
	// 		let contentWrapper = item.firstElementChild.firstElementChild;

	// 		contentWrapper.children[0].textContent = "YESS";
	// 		contentWrapper.children[1].textContent = "Y_E_S_S";
	// 	}

	// }

	// let workProposal = function() {
	// 	let proposalContainer = document.querySelector(".work-proposal").firstElementChild;

	// 	proposalContainer.children[0].textContent = "X!";
	// 	proposalContainer.children[2].textContent = "X2";
	// 	proposalContainer.children[3].textContent = "X3";

	// }

	// let footer = function() {
	// 	let footerContainer = document.querySelector('footer')
	// 		.firstElementChild
	// 		.firstElementChild;
	// 	let firstColumn = footerContainer.firstElementChild;
	// 	let secondColumn = firstColumn.nextElementSibling;
	// 	let thirdColumn = secondColumn.nextElementSibling;
	// 	let fourthColumn = thirdColumn.nextElementSibling;
	// 	let copyrightContainer = footerContainer
	// 		.parentElement
	// 		.nextElementSibling
	// 		.firstElementChild;

	// 	firstColumn.querySelector('h4').textContent = "H1";
	// 	firstColumn.querySelector('p').textContent = "H1";
	// 	firstColumn.querySelector('a').textContent = "H1";

	// 	secondColumn.querySelector('h4').textContent = "H2";

	// 	thirdColumn.querySelector('h4').textContent = "H3";
	// 	thirdColumn.querySelector('p').textContent = "H3";

	// 	for (let item of thirdColumn.querySelector('ul').querySelectorAll('li')) {
	// 		item.querySelector('a').textContent = "FK";
	// 	}

	// 	fourthColumn.querySelector('h4').textContent = "H4";
	// 	fourthColumn.querySelector('p').textContent = "H4";
	// 	fourthColumn.querySelector('form')
	// 		.firstElementChild
	// 		.querySelector('a')
	// 		.textContent = 'H4';

	// 	copyrightContainer.querySelector('p').textContent = "copy";

	// 	for (let item of copyrightContainer.querySelector('ul').querySelectorAll('li')) {
	// 		item.firstElementChild.textContent = "WILDCARD";
	// 	}

	// }

	let loadJSON = function() {
		let xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function() {
			if (this.readyState == 4  && this.status == 200) {
				let data = JSON.parse(this.responseText);
				main(data);
			}
			
		}

		xhr.open('GET', '../json/data.json', true);
		xhr.setRequestHeader('content-type', 'application/json');

		xhr.send();
	}

	loadJSON();

})();
