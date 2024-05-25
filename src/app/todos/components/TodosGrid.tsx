'use client'
import { Todo } from '@prisma/client'
import React from 'react'
import TodoItem from './TodoItem'

import { toggleTodo } from '../actions/todo-actions'

interface Props{
  todos?: Todo[]
}

export function TodosGrid ({ todos = [] }:Props) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
      {
      todos.map(elem => (
        <TodoItem key={elem.id} todo={elem} toggleTodo={toggleTodo} />
      ))
      }
    </div>
  )
}
