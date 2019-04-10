const mahButton = document.getElementById('da-button');
const mahName = document.getElementById('name');
const mahCity = document.getElementById('city');
const mahState = document.getElementById('state');
const mahEmail = document.getElementById('email');
const mahImage = document.getElementById('da-image');
const mahPhone = document.getElementById('phone');

mahButton.addEventListener('click', ()=>{

    var mahUrl = 'https://randomuser.me/api/';

    fetch(mahUrl)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        mahImage.src = data.results[0].picture.large;
        const imageId = document.getElementById('da-image');
        imageId.classList.add('animated');
        imageId.classList.add('bounceIn');
        console.log(imageId)

        const firstName = data.results[0].name.first + ' ';
        const lastName =  data.results[0].name.last;
        const finalFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
        const finalLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
        mahName.innerText = finalFirstName + ' ' + finalLastName;

        const daCity = data.results[0].location.city;
        const nancySinatra = daCity.charAt(0).toUpperCase() + daCity.slice(1);
        mahCity.innerText = nancySinatra;

        const daState = data.results[0].location.state;
        const capitalState = daState.charAt(0).toUpperCase() + daState.slice(1);
        mahState.innerText = capitalState;

        const daEmail = data.results[0].email;
        mahEmail.innerText = daEmail;

        const phoneNumber = data.results[0].phone;
        mahPhone.innerHTML = phoneNumber;
    })
    

})

// Default...
var mahUrl = 'https://randomuser.me/api/';

fetch(mahUrl)
.then(function(res){
    return res.json();
})
.then(function(data){
    mahImage.src = data.results[0].picture.large;

    const firstName = data.results[0].name.first + ' ';
    const lastName =  data.results[0].name.last;
    const finalFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    const finalLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    mahName.innerText = finalFirstName + ' ' + finalLastName;

    const daCity = data.results[0].location.city;
    const nancySinatra = daCity.charAt(0).toUpperCase() + daCity.slice(1);
    mahCity.innerText = nancySinatra;

    const daState = data.results[0].location.state;
    const capitalState = daState.charAt(0).toUpperCase() + daState.slice(1);
    mahState.innerText = capitalState;

    const daEmail = data.results[0].email;
    mahEmail.innerText = daEmail;

    const phoneNumber = data.results[0].phone;
    mahPhone.innerHTML = phoneNumber;
});
