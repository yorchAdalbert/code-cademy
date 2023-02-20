const getData = async () => {
    try {
        const response = await fetch('https://api-to-call.com/endpoint');

        if (response.ok) {
            const jsonResponse = await response.json();
            // To to execute with the jsonResponse
        }

        throw new Error('Request failed!')
    } catch (error) {
        console.log(error);
    }
}