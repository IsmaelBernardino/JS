const pokeImg = document.getElementById('pokeimg')
const pokenumber = document.getElementById('number')
const pokename = document.getElementById('name')
const pokehp = document.getElementById('hp')
const poketype = document.getElementById('type')
const pokeattack = document.getElementById('attack')
const pokedefense = document.getElementById('defense')
const pokespecial_attack = document.getElementById('special_attack')
const pokespecial_defense = document.getElementById('special_defense')
const pokespeed = document.getElementById('speed')
const pokeweight = document.getElementById('weight')
const pokeheight = document.getElementById('height')
const pokemoves = document.getElementById('moves')

const btn = document.getElementById('btn')
const inputName = document.getElementById('pokeName')

const pokemon = (nombre)=>{
    if(nombre != ""){
        const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`
    // le pregunta a la api que consulte la url y resive una promesa
        fetch(url).then((res)=>{
            if (res.status != "200") {
                pokeImage("https://miracomosehace.com/wp-content/uploads/2020/06/error-web.jpg")
            }else{
                return res.json();
            }
        })
        .then((data)=>{
            let img = data.sprites.front_default
            pokeImage(img)
            pokedata(data)
        })
        .catch(error => pokename.innerHTML = "Valor no encontrado");
    }else console.log('campo vacio')
}

const pokedata = (d)=>{
    pokenumber.innerHTML = "# " + d.id
    pokename.innerHTML = d.species.name
    pokehp.innerHTML = d.stats[0].base_stat
    pokeattack.innerHTML = d.stats[1].base_stat
    pokedefense.innerHTML = d.stats[2].base_stat
    pokespecial_attack.innerHTML = d.stats[3].base_stat
    pokespecial_defense.innerHTML = d.stats[4].base_stat
    pokespeed.innerHTML = d.stats[5].base_stat
    pokeweight.innerHTML = d.weight + " kg"
    pokeheight.innerHTML = d.height + " mts"
    d.types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.textContent = type.type.name
        poketype.appendChild(typeTextElement)
    });
    d.moves.forEach(move => {
        const moveTextElement = document.createElement("li");
        moveTextElement.textContent = move.move.name
        pokemoves.appendChild(moveTextElement)
    });
}

const pokeImage = (url)=>{
    pokeImg.src = url
}

btn.addEventListener('click', ()=>{
    pokenumber.innerHTML = ""
    pokename.innerHTML = ""
    pokehp.innerHTML = ""
    poketype.innerHTML = ""
    pokeattack.innerHTML = ""
    pokedefense.innerHTML = ""
    pokespecial_attack.innerHTML = ""
    pokespecial_defense.innerHTML = ""
    pokespeed.innerHTML = ""
    pokeweight.innerHTML = ""
    pokeheight.innerHTML = ""
    pokemoves.innerHTML = ""
    pokemon(inputName.value.toLowerCase())
})