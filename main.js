console.log('hello');

// Image API
function imageSucssess(response) {
    console.log(response);
    // const img = document.createElement('img');
    // img.src = response.data.urls.regular;
    // document.body.appendChild(img);
    $("body").css('background-image', 'url("' + response.data.urls.regular + '")');
}

function imageFail(error) {
    console.log(error);
}

// ********

axios({//axios brings reuest to apis - it's another library like AJAX
    method: 'get',
    url: 'https://api.unsplash.com/photos/random?client_id=a030e76e92f8edd492d7ee7dca7dd5e58939d0f7025b752daddac6807ad43526',

})
    .then(imageSucssess) // .then function to test the image api successfuly run
    .catch(imageFail);   // .catch if it fails to reach api



// Temprature
axios({

    method: 'get',
    url: 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&lang=ar&appid=394736b61eb2eeeccd3dbddc88b1f8f8',

})

    .then((response) => { // arrow function instead of creatin one up there 
        // console.log(response.data.main.temp);

        const temp = response.data.main.temp;
        $('body').append(`<h2>${temp} ℃ </h2>`);
        const desc = response.data.weather[0].description;
        $('body').append(`<h1>${desc}</h1>`);

        // CSS:
        // $('h1').css('font-weight', 'bold');
        $('h1').css('font-size', '50px');
        $('h1').css('color', 'white');
        $('h1').css('text-align', 'center');
        // $('h2').css('color', 'white');
        // $('h2').css('text-align', 'right');
        // $('h2').css('margin-top', '0');
        $('body').css('margin-top', '200px');

    })

    .catch((error) => {

        console.log(error);
    });


// Quote

axios({
    method: 'get',
    url: "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en",
})

    .then((response) => {
        const quote = response.data.quoteText;
        $('body').append(`<p>${quote}</p>`)

    })
    .catch(
        (error) => console.log(error)
    );

// Time

(moment().format('h:mm:ss '));

// moment().format('LT');