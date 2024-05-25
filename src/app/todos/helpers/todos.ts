import { Todo } from '@prisma/client'

export const updateTodos = async (id: string, complete:boolean):Promise<Todo> => {
  const dbTodo = await fetch(`../api/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ complete }),
    headers: {
      'Content-type': 'application/json'
    }
  }).then(res => res.json())

  return dbTodo
}

export const createTodos = async (description: string):Promise<Todo> => {
  const dbTodo = await fetch('../api/todos', {
    method: 'POST',
    body: JSON.stringify({ description }),
    headers: {
      'Content-type': 'application/json'
    }
  }).then(res => res.json())

  return dbTodo
}

export const deleteCompletedTodos = async () => {
  const response = await fetch('../api/todos', {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    }
  }).then(res => res.json())
  return response
}
