(function () {

	//burger menu
	var button = document.querySelector('.btn-menu');
	var menu = document.querySelector('.header-menu__ul');

	button.addEventListener('click', function () {
		menu.classList.toggle('active');
	})

})();