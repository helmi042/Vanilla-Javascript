const player = document.querySelector('.player');
const komputer = document.querySelector('.komputer');
const pemenang = document.querySelector('.hasil');

const btnGunting = document.querySelector('.btn--gunting');
const btnBatu = document.querySelector('.btn--batu');
const btnKertas = document.querySelector('.btn--kertas');

// Event Click
btnGunting.addEventListener('click', handleChoice);
btnBatu.addEventListener('click', handleChoice);
btnKertas.addEventListener('click', handleChoice);

function handleChoice(e){
	let pilihanPlayer = e.target.textContent.toLowerCase();
	let numberRandom = Math.random();
	let pilihanKomputer = (numberRandom <= 0.33) ? 'gunting'
		: (numberRandom > 0.33 && numberRandom <= 0.66) ? 'batu'
		: (numberRandom > 0.66) ? 'kertas'
		: '';
	let hasil = '';
	if(pilihanPlayer == pilihanKomputer){
		hasil = 'Draw';
	}else if(pilihanPlayer == 'gunting' && pilihanKomputer == 'batu'){
		hasil = 'Komputer Menang';
	}else if(pilihanPlayer == 'gunting' && pilihanKomputer == 'kertas'){
		hasil = 'Player Menang';
	}else if(pilihanPlayer == 'batu' && pilihanKomputer == 'gunting'){
		hasil = 'Player Menang';
	}else if(pilihanPlayer == 'batu' && pilihanKomputer == 'kertas'){
		hasil = 'Komputer Menang';
	}else if(pilihanPlayer == 'kertas' && pilihanKomputer == 'gunting'){
		hasil = 'Komputer Menang';
	}else if(pilihanPlayer == 'kertas' && pilihanKomputer == 'batu'){
		hasil = 'Player Menang';
	}
	player.innerHTML = pilihanPlayer;
	komputer.innerHTML = pilihanKomputer;
	pemenang.innerHTML = hasil;
}