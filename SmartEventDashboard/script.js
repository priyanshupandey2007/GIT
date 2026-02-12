const form=document.querySelector(".form")
const eventCards=document.querySelector(".cards")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(eventTitle.value)
    console.log(eventDate.value)
    console.log(category.value)
    console.log(description.value)

    let title=eventTitle.value
    let date=eventDate.value
    let cat=category.value
    let desc=description.value

    const card=document.createElement("div")
    card.classList.add(`card`)
        card.innerHTML=`
        <h3>${title}</h3>
        <p>${date}</p>
        <button>${cat}</button>
        <p>${desc}</p>
        <div class="dlt">x</div>
        `
    eventCards.appendChild(card)
    const dlt=card.querySelector(".dlt")
    dlt.addEventListener("click",()=>{
        card.remove()
    })
})
// document.addEventListener("keydown",(e)=>{
//      console.log(e.key)
// })

document.querySelector(".clearAll").addEventListener("click",()=>{
    document.querySelectorAll(".card").forEach((card)=>{
        card.remove()
    })
})
