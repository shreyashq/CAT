async function getData(){
    try{

        fetch('https://api.thecatapi.com/v1/images/search', {

            method: 'GET',
            headers: {
                'x-api-key' : 'live_lMZ1oJtpUCiXvKcWHzSHrXxaT3tlnHAyjfHZsCARtVRZKIJkbfhOsqiC2eZ366zO'
            }
        })

        .then(response => response.json())
        .then(data => {
            console.log(data);

            const image = document.getElementById('image-element');

            image.src = data[0].url;
            image.style.display = "block";
        });
    }

    catch(error){
        console.error(error);
    }
}

