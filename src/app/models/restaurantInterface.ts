export interface NavigatorInterface {
    content: string,
    link: string
}
export interface SearchInterface {
    content: string,
    link: string
}

export interface MenuCard {
    picture: FoodImage,
    type: string,
    name: string,
    price: string,
    ingredients: string,
    alergies: alergiesImage,
    alergies2: alergiesImage,
    alergies3: alergiesImage,
    alergies4: alergiesImage,
    alergies5: alergiesImage
    stars: StarsImage

}

export interface FoodImage{
    src: string,
    alt: string
}

export interface StarsImage{
    src: string,
    alt: string
}

export interface galleryFood {
    foodcard: MenuCard[]
}
export interface alergiesImage{
    src: string,
    alt: string
}
