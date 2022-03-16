const wantBtn = document.getElementById('want')

function wantAlert(event) {
    event.preventDefault()
    alert('apparently i lied')
}

wantBtn.addEventListener('click', wantAlert)