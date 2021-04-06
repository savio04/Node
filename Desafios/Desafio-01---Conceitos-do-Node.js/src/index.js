const express = require('express');
const cors = require('cors');

const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
	const {username} = request.headers

	const existingUser = users.find(user => user.username == username)

	if(!existingUser){
		return response.status(404).json({
			error: "Not existing user"
		})
	}
	request.auth = username
 	next()
}

app.post('/users', (request, response) => {
	const {name,username} = request.body


	const user = {
		id: uuidv4(),
                name,
                username,
                todos:[]
	}

	const existingUser = users.find(user => user.username == username)
		
	
	if(existingUser){
		return response.status(400).json({
			error: "Mensagem do erro"
		})
	}

	users.push(user)

	return response.status(201).json(user)
});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  	const username = request.auth

	const user = users.find(user => user.username == username)
	
	return response.json(user.todos)
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  	const username = request.auth
	const {title,deadline} = request.body

	const user = users.find(user => user.username == username)
	const todo = {
		id: uuidv4(),
		title,
		done: false,
		deadline: new Date(deadline),
		created_at: new Date()
	}

	user.todos.push(todo)

	return response.status(201).json(todo)
	
});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  	const username = request.auth
	const {title,deadline} = request.body
	const id = request.params.id
	
	const user = users.find(user => user.username == username)
	const todo = user.todos.find(todo => todo.id == id)

	if(!todo){
		return response.status(404).json({
			error: "not exisitng"
		})
	}

	todo.title = title
	todo.deadline = new Date(deadline)

	return response.status(200).json(todo)
});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  	const username = request.auth
	const id = request.params.id
	
	const user = users.find(user => user.username == username)
        const todo = user.todos.find(todo => todo.id == id)

        if(!todo){
                return response.status(404).json({
                        error: "not exisitng"
                })
        }

	todo.done = true

	return response.status(200).json(todo)

});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  	const username = request.auth
        const id = request.params.id

        const user = users.find(user => user.username == username)
        const todoIndex = user.todos.findIndex(todo => todo.id == id)

	if(!user.todos[todoIndex]){
		return response.status(404).json({
			error: "Not existing"
		})
	}

	user.todos.splice(todoIndex,1)

	return response.status(204).send()
});

module.exports = app;
