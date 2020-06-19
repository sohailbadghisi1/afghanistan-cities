const cities = [];
const input = document.querySelector('#cityInput');
const main = document.querySelector('.main');
const btn = document.querySelector('.btn');


// load data using fetch
fetch('cities.json')
    .then(cities => cities.json())
    .then(data => cities.push(...data));


function search(input, cities) {
    const regex = new RegExp(input, 'gi');
    return cities.filter(data => {
        return data.cityName.match(regex);
    })
}

function displayData() {
    const ourData = search(input.value, cities);
    ourData.map(data => {
        main.innerHTML = `
        <div class="right">
            <div class="name">
                <h4>ولایت ${data.cityName}</h4>
            </div>
            <div class='title'>

                <div class='space'>
                    <span>جمعیت: </span>
                    <b>‎${data.population}</b>
                </div>
           
                <div class='space'>
                    <span>مساحت: </span>
                    <b>${data.area}</b>
                </div>
                <div class='space'>
                    <span>همجوار: </span>
                    <b>${data.nearCities}</b>
                </div>
            
            </div>
            <div class='info'>
             
                <div class='article'>
                    <p>
                        ${data.about}
                    </p>         
                </div>
            </div>
        <div class="bottom">
            <b>ولسوالی ها</b>
            <span>${data.districts}</span>
        </div>

      

    </div>
    


        `
    })
}

btn.addEventListener('click', displayData );













