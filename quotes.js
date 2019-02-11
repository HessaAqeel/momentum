
// function quote(response) {
//     const quote = response.quoteText;
//     $('body').text(`<h2>${quote}</h2>`)
// }



// axios({
//     method: 'get',
//     url: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'

// });

// .then((response) => ({
//     const quote = response.data.quoteText;
//     $('body').text(`<h3>${quote}</h3>`);
// })
axios({
    method: 'get',
    url: "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en",
})
    .then((response) => $("body").append(response.data.quoteText))
    .catch((error) => console.log(error));

// .then((response) => {


// })

//  .then((response) => {

//     const quote = response.quoteText;
//     $('body').text(`<h1>${quote}</h1>`)

// });