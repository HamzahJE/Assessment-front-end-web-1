
function handleSubmit(evt) {
	evt.preventDefault();
	alert(`Form Submitted Sucessfully`)
	// console.log('form submit');
}

const alertMessage =(evt)=> {
	evt.preventDefault()
	alert(`You are a great Person`)

}

let form = document.querySelector('#contact');

let picture = document.querySelector('#picture');





form.addEventListener('submit', handleSubmit);

picture.addEventListener('mouseover',alertMessage);

