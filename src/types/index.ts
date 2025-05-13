export interface ICategory {
  id: string
  name: string
  description: string
}

export interface IProduct {
  id: string
  name: string
  categoryId: string
  description: string
  price: number
  image: string | null
}

export interface ICartItem extends IProduct {
  quantity: number
}
export interface ICart {
  quantities: number
  items: ICartItem[]
  totalPrice: number
  totalItems: number
}
