import { ProductCard } from '@/app/products'

export default function ProductsPage () {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
      <ProductCard />
    </div>
  )
}
