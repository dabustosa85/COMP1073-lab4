//create a constant to refer to the HTML element that you just created using querySelector().

const EL = document.querySelector('input[type="text"]');
const A = document.getElementById('a');

// loop counts down every second from 10 to 0, using the setTimeout() function.
for (let i = 10; i >= 0; i--) {
		setTimeout(function () {
			//Switch change bg color, yellow (from 8-5), orange (from 4-1) red (at 0) and display the countdown number.
			switch (i) {
				case 8, 7, 6, 5:
					document.body.style.backgroundColor = 'yellow';
					break;
				case 4, 3, 2, 1:
					document.body.style.backgroundColor = 'orange';
					break;
				case 0:
					document.body.style.backgroundColor = 'red';
					break;
			}
      
			//IF i = zero output "Blastoff" to the HTML element you created above, otherwise just output the value of i.
			if (i === 0) {
				EL.value = "Blastoff!";
				// Add some other feature to this page to make it more interactive or interesting!
				// when countdown is finished, change the background color and change the title.
				document.body.style.backgroundColor = 'green';
				A.innerHTML = "End";
			} else {
				EL.value = i;

			}

		}, 10000 - (1000 * i))
};

