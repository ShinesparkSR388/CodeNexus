// Función para obtener los usuarios del almacenamiento local
function getUsers() {
    const users = localStorage.getItem('usuarios');
    return users ? JSON.parse(users) : [];
}

// Función para guardar los usuarios en el almacenamiento local
function saveUsers(users) {
    localStorage.setItem('usuarios', JSON.stringify(users));
}

// Función para generar un ID único
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Función para agregar un nuevo usuario
function addUser(id, username, email, password, type, state, about) {
    const users = getUsers();
    const newUser = {
        id: uuid.v4(),
        username: username,
        email: email,
        password: password,
        type: type,
        state: true,
        about: about
    };
    users.push(newUser);
    saveUsers(users);
}

// Función para eliminar un usuario
function deleteUser(id) {
    const users = getUsers();
    const updatedUsers = users.filter(user => user.id !== id);
    saveUsers(updatedUsers);
}

// Función para cargar los usuarios en la tabla
function loadTable() {
    const tableBody = document.querySelector('#userTable tbody');
    tableBody.innerHTML = '';

    const users = getUsers();

    users.forEach(user => {
        const row = document.createElement('tr');

        const idCell = document.createElement('td');
        idCell.textContent = user.id;

        const usernameCell = document.createElement('td');
        usernameCell.textContent = user.username;

        const emailCell = document.createElement('td');
        emailCell.textContent = user.email;

        const passwordCell = document.createElement('td');
        passwordCell.textContent = user.password;

        const typeCell = document.createElement('td');
        typeCell.textContent = user.type;

        const stateCell = document.createElement('td');
        stateCell.textContent = user.state;

        const aboutCell = document.createElement('td');
        aboutCell.textContent = user.about;

        const actionsCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.className = 'delete';
        deleteButton.addEventListener('click', () => {
            deleteUser(user.id);
            loadTable();
        });
        actionsCell.appendChild(deleteButton);

        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.className = 'edit';
        editButton.addEventListener('click', () => {
            loadUserDataForEdit(user.id);
        });
        actionsCell.appendChild(editButton);

        row.appendChild(idCell);
        row.appendChild(usernameCell);
        row.appendChild(emailCell);
        row.appendChild(passwordCell);
        row.appendChild(typeCell);
        row.appendChild(stateCell);
        row.appendChild(aboutCell);
        row.appendChild(actionsCell);

        tableBody.appendChild(row);
    });
}

// Función para cargar los datos de un usuario en el formulario para su edición
function loadUserDataForEdit(id) {
    const users = getUsers();
    const userToEdit = users.find(user => user.id === id);

    if (userToEdit) {
        document.querySelector('#id').value = userToEdit.id;
        document.querySelector('#username').value = userToEdit.username;
        document.querySelector('#email').value = userToEdit.email;
        document.querySelector('#password').value = userToEdit.password;
        document.querySelector('#type').value = userToEdit.type;
        document.querySelector('#state').value = userToEdit.state;
        document.querySelector('#about').value = userToEdit.about;
    }
}
function updateUser(id, newData) {
    const users = getUsers();
    const userToUpdate = users.find(user => user.id === id);

    if (userToUpdate) {
        Object.assign(userToUpdate, newData);
        saveUsers(users);
    }
}

// Evento de envío del formulario (crear o editar usuario)
document.querySelector('#userForm').addEventListener('submit', event => {
    event.preventDefault();

    const idInput = document.querySelector('#id');
    const usernameInput = document.querySelector('#username');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const typeInput = document.querySelector('#type');
    const stateInput = document.querySelector('#state');
    const aboutInput = document.querySelector('#about');

    const id = idInput.value;
    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const type = typeInput.value;
    const state = stateInput.value;
    const about = aboutInput.value;

    if (id && username && email && password && type && state && about) {
        const existingUser = getUsers().find(user => user.id == id);
        if (existingUser) {
            // Actualizar usuario existente
            existingUser.username = username;
            existingUser.email = email;
            existingUser.password = password;
            existingUser.type = type;
            existingUser.state = state;
            existingUser.about = about;
            let new_users = [];
            getUsers().forEach(element => {
                if(element.id == existingUser.id){
                    new_users.push(existingUser);
                }else{
                    new_users.push(element);
                }
            });
            saveUsers(new_users);
            loadTable();
        } else {
            // Crear nuevo usuario
            addUser(id, username, email, password, type, state, about);
        }
        clearForm();
        loadTable();
    }
});

// Función para limpiar el formulario
function clearForm() {
    document.querySelector('#id').value = '';
    document.querySelector('#username').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#password').value = '';
    document.querySelector('#type').value = '';
    document.querySelector('#state').value = '';
    document.querySelector('#about').value = '';
}

// Cargar tabla inicial
loadTable();
