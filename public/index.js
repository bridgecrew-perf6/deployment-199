const wantBtn = document.getElementById('want')

function wantAlert(event) {
    event.preventDefault()
    axios
        .get('/api/want')
        .then(res => {
            alert(res.data)
        })
    
}

wantBtn.addEventListener('click', wantAlert)