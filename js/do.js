var a = null,

	b = function() {

		a = setTimeout(function () {

			d();

		}, 1000);

	},

	c = function () { // function called by onKeyUp

		clearTimeout(a);

		b();

	},

	d = function () {

		window.location = window.location.href.split('auto' + 'focus>')[0] + 'auto' + 'focus>' + document.getElementById('ntpd').value + '</textarea>';

	};