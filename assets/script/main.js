/*
<div class="col-12 col-md-6 col-lg-4">
    <div class="card">
        <img src="./assets/img/cork.png" class="card-img-top" alt="">
            <div class="card-body">
                <h3>title</h3>
                <div>Lorem ipsum dolor sit </div>
            </div>
    </div>
</div>
*/

const endpoint = 'https://lanciweb.github.io/demo/api/pictures/'

const rowEl = document.querySelector('.row')

console.log(endpoint, rowEl);

fetch(endpoint)
    .then(rest => rest.json())
    .then(data => {
        console.log(data);

        data.forEach(element => {
            const { title, date, url } = element
            const markup = `<div class="col-12 col-md-6 col-lg-4">
    <div class="card">
        <img src="${url}" class="card-img-top" alt="">
            <div class="card-body">
                <h3>${title}</h3>
                <div>${date} </div>
            </div>
    </div>
    </div>`
    console.log(markup);
    rowEl.insertAdjacentHTML('beforeend', markup)

    
        })
        
        
    })

    


