// This is a fetch example using the post method.
fetch('https://google.com/api', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
        'apikey': 'if you have an apikey place it here'
    },
    body: 'data'
})
    .then(res => {
        if (res.ok) return res.json();

        throw new Error('Request failed!')
    }, networkError => console.log(networkError))
    .then(jsonResponse => { 'Here you can work with your retrieved data' })
