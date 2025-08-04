document.addEventListener('DOMContentLoaded', () => {

    // Get the HTML elements we need to work with
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    const addTask = () => {
        const taskText = taskInput.value.trim(); // Get text and remove whitespace

        // Don't add an empty task
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // 1. Create a new list item (<li>)
        const listItem = document.createElement('li');

        // 2. Create the task text span
        const taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = taskText;

        // 3. Create a delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';

        // Event listener to delete the task when the button is clicked
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevents the li click event from firing
            taskList.removeChild(listItem);
        });

        // Event listener to mark task as completed when the list item is clicked
        listItem.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        // 4. Append the text and button to the list item
        listItem.appendChild(taskTextSpan);
        listItem.appendChild(deleteBtn);

        // 5. Append the new list item to the main list
        taskList.appendChild(listItem);

        // 6. Clear the input field for the next task
        taskInput.value = '';
    };

    // Add task when the button is clicked
    addTaskBtn.addEventListener('click', addTask);

    // Add task when the "Enter" key is pressed in the input field
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});