var new_game = document.querySelector('.new-game');
var next_card = document.querySelector('.card-field');
var card_inner = document.querySelector('.card-inner');
var card_inner2 = document.querySelectorAll('.card-inner2');
var take_card = document.querySelector('.take-card');

var cards = [
// ♥ червы	0-8 
[1, 'валет', 2], [1, 'дама', 3], [1, 'валет', 4], [1, 6],[1, 7],[1, 8],[1, 9],[1, 10], [1, 'туз', 11],
// ♦ бубны 9-17
[1, 'валет', 2], [1, 'дама', 3], [1, 'валет', 4], [1, 6],[1, 7],[1, 8],[1, 9],[1, 10], [1, 'туз', 11],
// ♣ трефы 18-26
[1, 'валет', 2], [1, 'дама', 3], [1, 'валет', 4], [1, 6],[1, 7],[1, 8],[1, 9],[1, 10], [1, 'туз', 11],
// ♠ пики 27-35
[1, 'валет', 2], [1, 'дама', 3], [1, 'валет', 4], [1, 6],[1, 7],[1, 8],[1, 9],[1, 10], [1, 'туз', 11]
];

var random_card;
var iter = 0;
var flag = false;

function next(bool) {
	if (bool) {	
		card_inner.innerHTML += '<div class="card-inner2 lightgreen"></div>' 
		card_inner2 = document.querySelectorAll('.card-inner2');
		console.log(card_inner2);
	}
	var temp;
	random_card = Math.floor(Math.random()*cards.length);
	if (cards[random_card][0]) {
		if (random_card >= 0 && random_card < 9) { 
			temp = cards[random_card][1] + ' ♥ червы';
			cards[random_card][0] = 0;
		} 
		else if (random_card >= 9 && random_card < 18) { 
			temp = cards[random_card][1] + ' ♦ бубны'; 
			cards[random_card][0] = 0;
		} 
		else if (random_card >= 18 && random_card < 27) { 
			temp = cards[random_card][1] + ' ♣ трефы'; 
			cards[random_card][0] = 0;
		} 
		else { 
			temp = cards[random_card][1] + ' ♠ пики';
			cards[random_card][0] = 0;			 
		}
		console.log(temp);
		card_inner2[iter].innerText = temp;
		iter+=1;
	} else {
		next();
	}
}


take_card.addEventListener('click', function() {
	if (flag) next(true);
}, false);

new_game.addEventListener('click', function() {
	flag = true;
	card_inner2[0].classList.toggle('lightgreen');
	next(false);
	card_inner2[1].classList.toggle('lightgreen');
}, false);


