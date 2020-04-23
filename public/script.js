const info = document.querySelectorAll('.recipe-info')
const visibility = document.querySelectorAll('.visibility')

for(let i = 0; i < visibility.length; i++) {
  visibility[i].addEventListener('click', function(){
    if(info[i].classList.contains('hide')){
      info[i].classList.remove('hide')
      visibility[i].innerHTML = "ESCONDER"
    }
    else {
      info[i].classList.add('hide')
      visibility[i].innerHTML = "MOSTRAR"
    }
  })
}

function addIngredient() {
    const ingredients = document.querySelector("#ingredients");
    const fieldContainer = document.querySelectorAll(".ingredient");

    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;

    // Deixa o valor do input vazio
    newField.children[0].value = "";
    ingredients.appendChild(newField);
}
document
    .querySelector(".add-ingredient")
    .addEventListener("click", addIngredient);

function addPreparation() {
    const preparations = document.querySelector("#preparations")
    const fieldContainer = document.querySelectorAll(".preparation")

    // Realiza um clone do último preparatione adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;

    // Deixa o valor do input vazio
    newField.children[0].value = "";
    preparations.appendChild(newField);
}
document
    .querySelector(".add-preparation")
    .addEventListener("click", addPreparation);
