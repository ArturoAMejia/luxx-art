export interface IProduct {
  id: string;
  name?: string;
  imageSrc: string;
  imageAlt: string;
  price: number
  dimensions?: string;
  style?: string;
  colection?:string;
  description?: string;
}