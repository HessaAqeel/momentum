console.log('hello')



axios({

    method: 'get',
    url: 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&lang=ar&appid=394736b61eb2eeeccd3dbddc88b1f8f8',

})


    .then((response) => { // arrow function instead of creatin one up there 
        // console.log(response.data.main.temp);

        const temp = response.data.main.temp;
        $('body').append(`<h1>${temp}</h1>`);
        const desc = response.data.weather[0].description;
        $('body').append(`<h1>${desc}</h1>`);

    })

    .catch((error) => {

        console.log(error);
    });

