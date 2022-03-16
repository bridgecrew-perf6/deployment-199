const wantBtn = document.getElementById('want')

function wantAlert(event) {
    event.preventDefault()
    alert('apparently this whole website is selling a false product')
}

wantBtn.addEventListener('click', wantAlert)