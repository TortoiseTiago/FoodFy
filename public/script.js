const info = document.querySelectorAll(".recipe-info");
const visibility = document.querySelectorAll(".visibility");
const currentPage = location.pathname;
const menuItens = document.querySelectorAll("header .links a");
const pagination = document.querySelector(".pagination");

for (let i = 0; i < visibility.length; i++) {
  visibility[i].addEventListener("click", function () {
    if (info[i].classList.contains("hide")) {
      info[i].classList.remove("hide");
      visibility[i].innerHTML = "ESCONDER";
    } else {
      info[i].classList.add("hide");
      visibility[i].innerHTML = "MOSTRAR";
    }
  });
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

function addPreparation() {
  const preparations = document.querySelector("#preparations");
  const fieldContainer = document.querySelectorAll(".preparation");

  // Realiza um clone do último preparatione adicionado
  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

  // Não adiciona um novo input se o último tem um valor vazio
  if (newField.children[0].value == "") return false;

  // Deixa o valor do input vazio
  newField.children[0].value = "";
  preparations.appendChild(newField);
}

if (pagination) {
  createPagination(pagination);
}

function paginate(selectedPage, totalPages) {
  let pages = [],
    oldPage;

  for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
    const FirstAndLastPage = currentPage == 1 || currentPage == totalPages;
    const pagesAfter = currentPage <= selectedPage + 2;
    const pagesBefore = currentPage >= selectedPage - 2;

    if (FirstAndLastPage || (pagesBefore && pagesAfter)) {
      if (oldPage && currentPage - oldPage > 2) {
        pages.push("...");
      }

      if (oldPage && currentPage - oldPage == 2) {
        pages.push(oldPage + 1);
      }

      pages.push(currentPage);
      oldPage = currentPage;
    }
  }
  return pages;
}

function createPagination(pagination) {
  const filter = pagination.dataset.filter;
  const page = +pagination.dataset.page;
  const total = +pagination.dataset.total;
  const pages = paginate(page, total);

  let elements = "";

  for (let page of pages) {
    if (String(page).includes("...")) {
      elements += `<span>${page}</span>`;
    } else {
      if (filter) {
        elements += `<a href="?page=${page}&filter=${filter}">${page}</a>`;
      } else {
        elements += `<a href="?page=${page}">${page}</a>`;
      }
    }
  }
  pagination.innerHTML = elements;
}

document
  .querySelector(".add-preparation")
  .addEventListener("click", addPreparation);

document
  .querySelector(".add-ingredient")
  .addEventListener("click", addIngredient);
