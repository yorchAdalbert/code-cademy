// async await POST

const getData = async () => {
    try {
        // sending the request
        const response = await fetch('https://api-to-call.com/endpoint', {
            method: 'POST',
            body: JSON.stringify({ id: 200 })
        })

        // handles response if successful
        if (response.ok) {
            const jsonResponse = await response.json();
            // Code to execute with jsonResponse
        }

        // handles response if unsuccessful
        throw new Error('Request failed!')
    } catch (error) {
        console.log(error)
    }
}