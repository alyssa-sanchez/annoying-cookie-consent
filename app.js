//dom
let modal = document.getElementById('modal')
let closeBtn = document.getElementById('close-btn')
let form = document.getElementById('form')
let modalText = document.getElementById('modal-text')
let allModal = document.getElementById('allModal')
let decline = document.getElementById('decline')
let buttonContainer = document.getElementById('button-container')

//modal
setTimeout(function () {
	modal.style.display = 'inline'
}, 3500)

//close btn
closeBtn.addEventListener('click', () => {
	modal.style.display = 'none'
})

//form
form.addEventListener('submit', (e) => {
	e.preventDefault()
	//modal text
	modalText.innerHTML = `
    <div className="modal-loading">
        <img src="images/loading.svg" alt="" class="svg" />
        <p id="uploadText"> Uploading your data to the dark web...</p>
    </div>`

	// making the sale
	setTimeout(function () {
		let uploadText = document.getElementById('uploadText')
		uploadText.innerHTML = `<p>Making the sale...</p>`
	}, 2500)

	//thankss!
	setTimeout(function () {
		allModal.innerHTML = `
        <h3>Thanks <span class="fullName">${fullName}</span>, you suck!</h3>
        <p>We just sold the rights to your eternal soul.</p>
        <img class="pirate" src="https://media.tenor.com/18peQO6upVwAAAAC/pirate-laughing.gif" alt="" />`
		closeBtn.disabled = false
	}, 5000)

	//form
	let formData = new FormData(form)
	let fullName = formData.get('fullName')
})

//decline btn -- row-reverse
decline.addEventListener('mouseenter', () => {
	buttonContainer.classList.toggle('reverse')
})
