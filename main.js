const API_KEY = "n4tl2OaHUg9CMkvK4BqJFrl1EKzL7PHd";

const form = document.getElementById('form');
const search = document.getElementById('search');
const container = document.getElementById('container')

async function getGIF(query) {
        
        const url = `https://api.giphy.com/v1/gifs/search?&api_key=${API_KEY}&limit=10&q=`;
        const res = await fetch(url+ query);
        const data = await res.json();
        console.log(data);
        for(let i = 0 ; i<=10; i++){

            displayGIF(data.data[i]);
        }     
}


     function displayGIF(data){

            const el = document.createElement('div');
            el.classList.add('image');
            const content = `
                <img src="${data.images.fixed_height.url}" width=210 height=220>
            `
            el.innerHTML = content;
            container.appendChild(el); 
          
    }

form.addEventListener('submit', e => {
    e.preventDefault();
    const q = search.value;
    getGIF(q);
    
})
