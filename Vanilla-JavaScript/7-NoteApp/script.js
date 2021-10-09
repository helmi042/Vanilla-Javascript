// Dekarasi
const inputTitle = document.querySelector('.input--title');
const inputText = document.querySelector('.input--text');
const submit = document.querySelector('.submit--user');
const noteList = document.querySelector('.note--list');

const modalTitle = document.querySelector('.modal-title');
const modalBody = document.querySelector('.modal-body');

// Jalankan Ketika tombol submit di klik
submit.addEventListener('click', function(){

	// Jika inputan title atau text kosong hentikan eksekusi
	if(inputTitle.value == '' || inputText.value == ''){
		return;
	}

	// Jika huruf text lebih dari sama dengan 100 potong menjadi 100 huruf
	let textValue = inputText.value;
	if(textValue.length >= 100){
		textValue = textValue.slice(0, 100) + '...'; 
	}

	// Menambahkan card
	let text = `
		<div class="col-md-5 mx-1 my-2">
	      <div class="card">
	      	<div class="card-body">
		      <h4 class="card-title">${inputTitle.value}</h4>
		      <p class="card-text">${textValue}</p>
		      <button class="card-link btn btn-success btn-sm" data-target="#exampleModal">Detail</button>
	        </div>
	      </div>
	    </div>`;
	noteList.innerHTML += text;

	// Menambahkan text ke Modal
	modalTitle.innerHTML = inputTitle.value;
	modalBody.innerHTML = inputText.value;

	// Menghapus inputan
	inputTitle.value = '';
	inputText.value = '';
})