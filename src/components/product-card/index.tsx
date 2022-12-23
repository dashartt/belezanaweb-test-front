import { formatPrice } from '../../helpers'
import { Product } from 'types/Product'

type Props = {
  product: Product
}

function ProductCard({ product }: Props) {
  const {
    name,
    imageObjects,
    priceSpecification: { originalPrice }
  } = product

  const thumbnail = imageObjects[0].extraLarge

  return (
    <section className="flex space-x-4 border p-4">
      <img className="h-20 w-20 self-center" src={thumbnail} alt={name} />

      <section className="flex w-full flex-col ">
        <span className="">{name}</span>
        <span className="self-end font-bold">{formatPrice(originalPrice)}</span>
      </section>
    </section>
  )
}

export default ProductCard
