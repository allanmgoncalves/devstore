import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import Image from 'next/image'
import Link from 'next/link'

async function GetFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured')

  const products = await response.json()

  return products
}

export default async function Home() {
  const [highLightedProduct, ...othersProducts] = await GetFeaturedProducts()

  return (
    <div className="grid max-h-[calc(100dvh-132px)] grid-cols-9 grid-row-6 gap-6">
      <Link
        href={`/products/${highLightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center"
      >
        <Image
          src={highLightedProduct.image}
          className="group-hover:scale-105 transition-transform duration-500 h-full w-full object-contain"
          width={920}
          height={920}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-28 right-28 gap-2 max-w-[280px] h-12 flex items-center rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">{highLightedProduct.title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {highLightedProduct.price.toLocaleString('CAN', {
              style: 'currency',
              currency: 'CAD',
            })}
          </span>
        </div>
      </Link>

      {othersProducts.map((product) => {
        return (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center"
          >
            <Image
              src={product.image}
              className="group-hover:scale-105 transition-transform duration-500 h-full w-full object-contain"
              width={920}
              height={920}
              quality={100}
              alt=""
            />

            <div className="absolute bottom-10 right-10 gap-2 max-w-[280px] h-12 flex items-center rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="text-sm truncate">{product.title}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {product.price.toLocaleString('CAN', {
                  style: 'currency',
                  currency: 'CAD',
                })}
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
