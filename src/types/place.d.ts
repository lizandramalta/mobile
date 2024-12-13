export declare global {
  interface Place {
    id: string
    name: string
    description: string
    coupons: number
    cover: string
    address: string
    latitude: number
    longitude: number
    phone: string
    rules: {
      id: string
      description: string
    }[]
    categoryId: string
  }
}
