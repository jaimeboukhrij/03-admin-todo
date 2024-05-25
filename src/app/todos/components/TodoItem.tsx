import { Todo } from '@prisma/client'
import styles from './TodoItem.module.css'
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5'
import { startTransition, useOptimistic } from 'react'

interface Props{
  todo:Todo
  toggleTodo: (id:string, complete:boolean) => Promise<Todo | void>
}
export default function TodoItem ({ todo, toggleTodo }:Props) {
  const [todoOptimistic, setTodoOptimistic] = useOptimistic(todo,
    (state, newCompleteValue:boolean) => ({ ...state, complete: newCompleteValue })
  )

  const onToggleTodo = async () => {
    try {
      startTransition(() => setTodoOptimistic(!todoOptimistic.complete))
      await toggleTodo(todoOptimistic.id, !todoOptimistic.complete)
    } catch (error) {
      startTransition(() => setTodoOptimistic(!todoOptimistic.complete))
    }
  }

  return (
    <div className={todo.complete ? styles.todoDone : styles.todoPending}>
      <div className='flex items-center justify-center gap-3 '>
        <span
          onClick={onToggleTodo}
          className={`cursor-pointer
        ${todoOptimistic.complete ? 'bg-blue-100' : 'bg-red-100'}
        `}
        >
          {
            todoOptimistic.complete
              ? <IoCheckboxOutline size={30} />
              : <IoSquareOutline size={30} />
          }
        </span>
        <span className='text-center sm:text-left'>
          {todoOptimistic.description}
        </span>
      </div>
    </div>
  )
}
