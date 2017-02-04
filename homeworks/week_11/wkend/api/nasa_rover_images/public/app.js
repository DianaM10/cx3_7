var app = function() {
    var url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-2&api_key=e7YCe0uV5BsQpcwpfNFC0e30zf0gPh5MBCaLv557';
    // var key = '&api_key=e7YCe0uV5BsQpcwpfNFC0e30zf0gPh5MBCaLv557'
    // var url = api + 'earth_date='+date.value + key;
    makeRequest(url, requestComplete);
    // var api = 'https://api.nasa.gov/planetary/apod?api_key=e7YCe0uV5BsQpcwpfNFC0e30zf0gPh5MBCaLv557&hd=false&'
    // var date = '&date=2016-11-02'
    // var date = document.getElementById('date');
    // if(date !== "") {

    // // var url = api + date.value;
    // // makeRequest(url, requestComplete)
    // // buttonClick(date);
    // }
}

// var buttonClick = function(date) {
//     var button = document.getElementById('submit');

//     // var api = 'https://api.nasa.gov/planetary/apod?api_key=e7YCe0uV5BsQpcwpfNFC0e30zf0gPh5MBCaLv557'
//     // var hd = '&hd=false&'
//     // var url = api + '&date='+date + hd;
//     // button.addEventListener("click", makeRequest(url, requestComplete));
//     button.onclick = handleButtonClick;
//     console.log('clicked');
// }

// var handleButtonClick = function(){
//     var api = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?'
//     var key = '&api_key=e7YCe0uV5BsQpcwpfNFC0e30zf0gPh5MBCaLv557'
//     var url = api + 'earth_date='+date.value + key;
//     makeRequest(url, requestComplete);
// }

var makeRequest = function(url, callback) {
var request = new XMLHttpRequest();
request.open("GET", url);
request.onload = callback;
request.send();
}

var requestComplete = function() {
    console.log('success');
    if(this.status !==200) return;
    var jsonString = this.responseText;
    var images = JSON.parse(jsonString);
    populate(images);
    console.log(images);

}

var populate = function(images) {
    // var h3tag = document.getElementById('image-title');
    // h3tag.innerText = images.photos;
    console.log(images);
    var ul = document.getElementById('image-list');
    for(image in images.photos) {
        var li = document.createElement('li');
        li.innerText = image.img_src;
        ul.appendChild(li)
    }

    // var img = document.getElementById('image');
    // img.src = imageOfTheDay.url;
    // image.style.width = '500px';
    // var ptag = document.getElementById('image-description');
    // ptag.innerText = imageOfTheDay.explanation;
}


window.onload = app;



















