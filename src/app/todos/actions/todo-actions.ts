'use server'
import { PrismaClient, Todo } from '@prisma/client'
import { revalidatePath } from 'next/cache'
const prisma = new PrismaClient()

export const toggleTodo = async (id: string, complete: boolean): Promise<Todo> => {
  const todo = await prisma.todo.findFirst({ where: { id } })

  if (!todo) {
    throw new Error(`Todo con id ${id} no existe`)
  }

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { complete }
  })
  revalidatePath('/dashboard/server-todos')

  return updatedTodo
}

export const addTodo = async (description:string) => {
  try {
    const todo = await prisma.todo.create({ data: { description } })
    revalidatePath('/dashboard/server-todos')
    return todo
  } catch (error) {
    return { message: 'Error en la creaccion del todo' }
  }
}

export const deletecompleted = async () => {
  try {
    await prisma.todo.deleteMany({ where: { complete: true } })
    revalidatePath('/dashboard/server-todos')
    return { message: 'Los todos completados han sido eliminados' }
  } catch (error) {
    return { message: 'Error en la eliminacion del todo' }
  }
}
