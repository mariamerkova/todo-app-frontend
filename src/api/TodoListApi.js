import axios from 'axios';

class TodoListApi {
    getSingleTodoList(id) {
        return axios.get(`http://localhost:8080/todo-list/${id}`)
    }

    getAllTodosLists(username) {
        return axios.get(`http://localhost:8080/todo-list/owned-to/${username}`)
    }

    saveTodoList(todoList) {
        return axios.post(`http://localhost:8080/todo-list/`, todoList)
    }

    deleteTodoList(id) {
        return axios.delete(`http://localhost:8080/todo-list/${id}`)
    }

    updateTodoList() {
        return axios.put(`http://localhost:8080/todo-list/`)
    }
}

export default new TodoListApi();