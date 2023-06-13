// Массив карточек todo
const todoList = [
  {
    title: "Сделать проектную работу",
  },
  {
    title: "Полить цветы",
  },
  {
    title: "Пройти туториал по Реакту",
  },
  {
    title: "Сделать фронт для своего проекта",
  },
  {
    title: "Погулять с собакой",
  },
  {
    title: "Разобраться в замыканиях",
  },
  {
    title: "Решить задачу на Codewars",
  },
];

// Дом узлы

const todoContainer = document.querySelector(".todo__list");
const form = document.querySelector(".form");
const input = document.querySelector(".form__input");

// Шаблоны

// Генерация карточки

// Обработчики событий

const handleSubmitAddTodoForm = (event) => {
  event.preventDefault();
  renderCard({ title: input.value })
  input.value = '';
};

// Добавление карточки
const renderCard = (dataCard) => {
  todoContainer.insertAdjacentHTML(
    "afterbegin",
    `
  <li class="todo-card todo-card_checked">
  <h3 class="todo-card__title">${dataCard.title}</h3>
  <div class="todo-card__controls">
    <button class="todo-card__button todo-card__button_type_check"></button>
    <button class="todo-card__button todo-card__button_type_delete"></button>
  </div>
  </li>
  `
  );
};

// Рендер всех карточек

form.addEventListener("submit", handleSubmitAddTodoForm);

todoList.forEach((dataCard) => {
  renderCard(dataCard);
});

{
  /* <li class="todo-card todo-card_checked">
<h3 class="todo-card__title">${todoData.title}</h3>
<div class="todo-card__controls">
  <button class="todo-card__button todo-card__button_type_check"></button>
  <button class="todo-card__button todo-card__button_type_delete"></button>
</div>
</li> */
}

// <img src="https://invalid_url" onerror="alert('XSS уязвимость')" >
