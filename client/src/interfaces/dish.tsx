export interface Dish{
  title: string,
  description: string,
  price: number,
  image: string,
  id: number
};

export interface dishUpdateRequest{
  referanceDish: string,
  title: string,
  description: string,
  price: number,
  image: string,
  id: number
}