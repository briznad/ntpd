var t = null,

	wait = function() {

		t = setTimeout(function () {

			window.location = window.location.href.split("auto" + "focus>")[0] + "auto" + "focus>" + document.getElementById("ntpd").value + "</textarea>";

		}, 750);

	},

	ntpDo = function () {

		clearTimeout(t);

		wait();

	};