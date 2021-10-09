// Deklarasi element HTML
const err = document.getElementById('err');
const ul = document.getElementById('ul');
const input = document.getElementById('input');

// Ketika menekan Enter di inputan
input.addEventListener('keyup', function(e){
	if(e.keyCode === 13){
		document.getElementById('btn-add').click();
	}
})

function add(){
	// Jika inputan kosong tampilkan pesan error selain itu tambahkan list item
	if(input.value == ''){
		err.innerHTML = 'Text harus di isi!';
	}else{
		// tambahkan list item
		let li = `
			<li class="list-item">
				<span id="textLi"><input type="checkbox" onclick="toggle(this)">${input.value}</span>
				<span class="btn-delete" onclick="deleteLi(this)">&times;</span>
			</li>`;

		ul.innerHTML += li;
		// ul.insertAdjacentHTML('afterbegin', li);

		// hapus Error
		err.innerHTML = '';
	}

	// Hapus Inputan
	input.value = '';
}

function toggle(el){
	el.parentElement.classList.toggle('true')
}

function deleteLi(el){
	el.parentElement.remove();
}