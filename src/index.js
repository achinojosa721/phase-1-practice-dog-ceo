console.log('%c HI', 'color: firebrick')

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener('DOMContentLoaded', () => {
    fetch(dogImageUrl)
        .then(resp => resp.json())
        .then(dogImageLinks)
            console.log(dogThings.message)
            
            imageLinks.message.forEach( dogImageUrl => {
                const createNewImage = document.createElement('img')
                createNewImage.src = dogImageUrl
                const imageContainer = document.getElementbyId("dog-image-container")
                imageContainer.append(createNewImage)
            
        })
        fetch(breedUrl)
        .then(resp => resp.json())
        .then(obj => {
            const breeds = Object.keys(obj.message)
            breeds.forEach(breed => addDogBreeds(breed))
        })
})

const breedDropdown = document.querySelector('#breed-dropdown')

breedDropdown.addEventListener('change', e =>  {
    const liNodeList = document.querySelectorAll('li')
    let liArray = liNodeList.values()
    const filterSelection = breedDropdown.options[breedDropdown.selectedIndex].text;
    liNodeList.forEach(item => dropdownFilter(filterSelection, item))
})

function createImage(link) {
    const imageContainer = document.querySelector('#dog-image-container');
    const img = document.createElement('img');
    img.setAttribute('src', `${link}`)
    imageContainer.appendChild(img)
}

function addDogBreeds(breed) {
    const breedList = document.querySelector('#dog-breeds');
    li = document.createElement('li');
    li.innerText = `${breed}`;
    breedList.appendChild(li)

    const newLi = document.querySelector('ul : last-child');
    newLi.addEventListener('click', (e) => e.target.style.color = 'red')
}

function dropdownFilter(filterSelection, liBreedElement) {
    const firstLetterOfBreed = liBreedElement.innerText[0]
    console.log(filterSelection, firstLetterOfBreed) 
    if (filterSelection === firstLetterOfBreed) {   
        liBreedElement.style.display = 'none'
        console.log('hideme')
    }else{
        liBreedElement.style.display = 'block'
        console.log('leave me')
    }
}
