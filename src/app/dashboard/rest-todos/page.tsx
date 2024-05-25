import { NewTodo, TodosGrid } from '@/app/todos'
import prisma from '@/lib/prisma'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata = {
  title: 'Listado de Todos',
  description: 'Listado de Todos'
}

export default async function TodosPage () {
  console.log('first')
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })
  return (
    <div className='flex flex-col gap-5'>
      <NewTodo />
      <TodosGrid todos={todos} />
    </div>
  )
}
