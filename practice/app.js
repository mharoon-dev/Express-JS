let input  = document.querySelector("#input")
let search  = document.querySelector("#search")

//  api fetching

search.addEventListener('click' , ()=> {
    let api = fetch(`/${input.value}`)
    console.log(api);
})