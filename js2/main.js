'use strict'

let selectedClient;

const openModal = () => document.getElementById('modal').classList.add('active');
const closeModal = (idModal) => {
    clearFields();
    document.getElementById(idModal).classList.remove('active');
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? [];
const setLocalStorage = (dbClient) =>  localStorage.setItem("db_client", JSON.stringify(dbClient));

const deleteClient = (index) => {
    const dbClient = readClient();
    dbClient.splice(index, 1);
    setLocalStorage(dbClient);
    updateTable();
    closeModal("modalConfirm");
}

const updateClient = (index, client) => {
    const dbClient = readClient();
    dbClient[index] = client;
    setLocalStorage(dbClient);
}

const readClient = () => getLocalStorage();

const createClient = (client) => {
    const dbClient = getLocalStorage();
    dbClient.push(client)
    setLocalStorage(dbClient)
}

const isValidfields = () => {
    return document.getElementById('form').fieldsCount;
}

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "");
    document.getElementById('name').dataset.index = 'new';
}

const saveClient = () => {
    if (isValidfields()) {
        const client = {
        name: document.getElementById('name').value,
        password: document.getElementById('password').value,
        age: document.getElementById('age').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        bankCard: document.getElementById('bankCard').value
    }
    const index = document.getElementById('name').dataset.index ;
    if (index == 'new') {
      createClient(client);
      updateTable();
      closeModal("modal");
    } else {
      updateClient(index, client);
      updateTable();
      closeModal("modal");
    }
  }
}

const createRow = (client, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${client.name}</td>
        <td>${client.password}</td>
        <td>${client.age}</td>
        <td>${client.email}</td>
        <td>${client.phone}</td>
        <td>${client.bankCard}</td>
        <td>
        <button type="button" class="button yellow" id="edit-${index}">Edit</button>
        <button type="button" class="button red" id="delete-${index}">Delete</button>
        </td>
    `
    document.querySelector('#tableClient>tbody').appendChild(newRow);
}

const clearTable = () => {
    const rows = document.querySelectorAll('#tableClient>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row));
}

const updateTable = () => {
    const dbClient = readClient()
    clearTable();
    dbClient.forEach(createRow);
}

const fillFields = (client) => {
    document.getElementById('name').value = client.name;
    document.getElementById('password').value = client.password;
    document.getElementById('age').value = client.age;
    document.getElementById('email').value = client.email;
    document.getElementById('phone').value = client.phone;
    document.getElementById('bankCard').value = client.bankCard;
    document.getElementById('name').dataset.index = client.index;
}

const editClient = (index) => {
    const client = readClient()[index];
    client.index = index;
    fillFields(client);
    openModal();
}

const editDelete = (event) => {
    if (event.target.type == 'button') {
        const [action, index] = event.target.id.split('-');

        if (action == 'edit') {
        editClient(index)
        } else {
        selectedClient = index;
        document.getElementById('modalConfirm').classList.add('active');
        }
    }
}

updateTable()

document.getElementById('registerClients').addEventListener('click', openModal);
document.getElementById('modalClose').addEventListener('click', () => closeModal("modal"));
document.getElementById('modalConfirmClose').addEventListener('click', () => closeModal("modalConfirm"));
document.getElementById('cancel').addEventListener('click', () => closeModal("modal"));
document.getElementById('cancelConfirm').addEventListener('click', () => closeModal("modalConfirm"));
document.getElementById('save').addEventListener('click', saveClient);
document.querySelector('#tableClient>tbody').addEventListener('click', editDelete);
document.getElementById('excludeConfirm').addEventListener('click', () => deleteClient(selectedClient));
