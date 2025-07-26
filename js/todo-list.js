"use strict";

const form = document.querySelector('form');
const NEW_TASK_INPUT_TEXT_NAME = 'new_task_text';
const taskList = document.getElementById('task-list');

const getDataFromFormTarget = (target) => {
   let taskText = null;
   if (target) {
      const formData = new FormData(target);
      const inputTextValue = formData.get(NEW_TASK_INPUT_TEXT_NAME);
      taskText = inputTextValue?.trim();
   }

   if (!taskText) {
      alert('Поле не може бути порожнім');
      return null;
   }

   return taskText;
};

const addItemToTaskList = (taskText) => {
   const listItem = document.createElement('li');
   listItem.textContent = taskText;

   const deleteElementButton = document.createElement('button');
   deleteElementButton.textContent = 'Видалити';
   listItem.append(deleteElementButton);

   taskList.append(listItem);
}

form.addEventListener('submit', (event) => {
   event.preventDefault();

   const data = getDataFromFormTarget(event.target);
   if (data !== null) {
      addItemToTaskList(data);
   }
});

taskList.addEventListener('click', (event) => {
   const { target } = event;
   if (target.nodeName === 'BUTTON') {
      target.closest('li')?.remove();
   }
});
