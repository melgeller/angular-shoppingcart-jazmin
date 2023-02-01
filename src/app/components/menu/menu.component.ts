import { Component, OnInit } from '@angular/core';
import { galleryFood } from 'src/app/models/restaurantInterface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public foodInfo: galleryFood;

  constructor() {
    this.foodInfo = {
      foodcard: [
        {
          picture: {
            src: '../../../assets/tallarines.jpg',
            alt: 'comida1',
          },
          name: 'Tallarines',
          type: 'tallarines',
          price: "6,00 €",
          ingredients: "tallarines, cebolla, cebollino, gambas, salsa de soja",
          alergies: {
            src: '../../../assets/huevo.png',
            alt: 'comida1', 
          },
          alergies2: {
            src: '../../../assets/crustaceos.png',
            alt: 'comida1', 
          },
          alergies3: {
            src: '',
            alt: '', 
          },
          alergies4: {
            src: '../../../assets/leche.png',
            alt: 'comida1', 
          },
          alergies5: {
            src: '',
            alt: '', 
          },
          stars: {
            src: '../../../assets/stars.png',
            alt: 'comida1',
          },
        },
        {
          picture: {
            src: '../../../assets/pollo.jpg',
            alt: 'comida1',
          },
          name: 'Cerdo',
          type: 'carnes',
          price: "8,00 €",
          ingredients: "tallarines, cebolla, cebollino, gambas, salsa de soja",
          alergies: {
            src: '',
            alt: '', 
          },
          alergies2: {
            src: '../../../assets/crustaceos.png',
            alt: 'comida1', 
          },
          alergies3: {
            src: '',
            alt: '', 
          },
          alergies4: {
            src: '../../../assets/leche.png',
            alt: 'comida1', 
          },
          alergies5: {
            src: '../../../assets/trigo.png',
            alt: 'comida1', 
          },
          stars: {
            src: '../../../assets/stars.png',
            alt: 'comida1',
          },
        },
        {
          picture: {
            src: '../../../assets/gyozas.jpg',
            alt: 'comida1',
          },
          name: 'Gyozas',
          type: 'entrantes',
          price: "5,00 €",
          ingredients: "tallarines, cebolla, cebollino, gambas, salsa de soja",
          alergies: {
            src: '../../../assets/huevo.png',
            alt: 'comida1', 
          },
          alergies2: {
            src: '../../../assets/crustaceos.png',
            alt: 'comida1', 
          },
          alergies3: {
            src: '../../../assets/frutoseco.png',
            alt: 'comida1', 
          },
          alergies4: {
            src: '../../../assets/leche.png',
            alt: 'comida1', 
          },
          alergies5: {
            src: '',
            alt: '', 
          },
          stars: {
            src: '../../../assets/stars.png',
            alt: 'comida1',
          },
        },
        {
          picture: {
            src: '../../../assets/sopa.jpg',
            alt: 'comida1',
          },
          name: 'Sopa de Verduras',
          type: 'entrantes',
          price: "4,00 €",
          ingredients: "tallarines, cebolla, cebollino, gambas, salsa de soja",
          alergies: {
            src: '../../../assets/huevo.png',
            alt: 'comida1', 
          },
          alergies2: {
            src: '../../../assets/crustaceos.png',
            alt: 'comida1', 
          },
          alergies3: {
            src: '../../../assets/frutoseco.png',
            alt: 'comida1', 
          },
          alergies4: {
            src: '../../../assets/leche.png',
            alt: 'comida1', 
          },
          alergies5: {
            src: '../../../assets/trigo.png',
            alt: 'comida1', 
          },
          stars: {
            src: '../../../assets/stars.png',
            alt: 'comida1',
          },
        },
        {
          picture: {
            src: '../../../assets/arroz.jpg',
            alt: 'comida1',
          },
          name: 'Arroz',
          type: 'arroces',
          price: "2,00 €",
          ingredients: "tallarines, cebolla, cebollino, gambas, salsa de soja",
          alergies: {
            src: '../../../assets/huevo.png',
            alt: 'comida1', 
          },
          alergies2: {
            src: '../../../assets/crustaceos.png',
            alt: 'comida1', 
          },
          alergies3: {
            src: '../../../assets/frutoseco.png',
            alt: 'comida1', 
          },
          alergies4: {
            src: '../../../assets/leche.png',
            alt: 'comida1', 
          },
          alergies5: {
            src: '../../../assets/trigo.png',
            alt: 'comida1', 
          },
          stars: {
            src: '../../../assets/stars.png',
            alt: 'comida1',
          },
        },
        {
          picture: {
            src: '../../../assets/bao.jpg',
            alt: 'comida1',
          },
          name: 'Bao',
          type: 'entrantes',
          price: "2,50 € / ud",
          ingredients: "tallarines, cebolla, cebollino, gambas, salsa de soja",
          alergies: {
            src: '../../../assets/huevo.png',
            alt: 'comida1', 
          },
          alergies2: {
            src: '../../../assets/crustaceos.png',
            alt: 'comida1', 
          },
          alergies3: {
            src: '../../../assets/frutoseco.png',
            alt: 'comida1', 
          },
          alergies4: {
            src: '../../../assets/leche.png',
            alt: 'comida1', 
          },
          alergies5: {
            src: '../../../assets/trigo.png',
            alt: 'comida1', 
          },
          stars: {
            src: '../../../assets/stars.png',
            alt: 'comida1',
          },
        },
        {
          picture: {
            src: '../../../assets/bao.jpg',
            alt: 'comida1',
          },
          name: 'Bao',
          type: 'entrantes',
          price: "2,50 € / ud",
          ingredients: "tallarines, cebolla, cebollino, gambas, salsa de soja",
          alergies: {
            src: '../../../assets/huevo.png',
            alt: 'comida1', 
          },
          alergies2: {
            src: '../../../assets/crustaceos.png',
            alt: 'comida1', 
          },
          alergies3: {
            src: '../../../assets/frutoseco.png',
            alt: 'comida1', 
          },
          alergies4: {
            src: '../../../assets/leche.png',
            alt: 'comida1', 
          },
          alergies5: {
            src: '../../../assets/trigo.png',
            alt: 'comida1', 
          },
          stars: {
            src: '../../../assets/stars.png',
            alt: 'comida1',
          },
        },
        {
          picture: {
            src: '../../../assets/arroz.jpg',
            alt: 'comida1',
          },
          name: 'Arroz',
          price: "2,00 €",
          type: 'arroces',
          ingredients: "tallarines, cebolla, cebollino, gambas, salsa de soja",
          alergies: {
            src: '../../../assets/huevo.png',
            alt: 'comida1', 
          },
          alergies2: {
            src: '../../../assets/crustaceos.png',
            alt: 'comida1', 
          },
          alergies3: {
            src: '../../../assets/frutoseco.png',
            alt: 'comida1', 
          },
          alergies4: {
            src: '../../../assets/leche.png',
            alt: 'comida1', 
          },
          alergies5: {
            src: '../../../assets/trigo.png',
            alt: 'comida1', 
          },
          stars: {
            src: '../../../assets/stars.png',
            alt: 'comida1',
          },
        },
        {
          picture: {
            src: '../../../assets/sopa.jpg',
            alt: 'comida1',
          },
          name: 'Arroz',
          type: 'entrantes',
          ingredients: "tallarines, cebolla, cebollino, gambas, salsa de soja",
          alergies: {
            src: '../../../assets/huevo.png',
            alt: 'comida1', 
          },
          alergies2: {
            src: '../../../assets/crustaceos.png',
            alt: 'comida1', 
          },
          alergies3: {
            src: '../../../assets/frutoseco.png',
            alt: 'comida1', 
          },
          alergies4: {
            src: '../../../assets/leche.png',
            alt: 'comida1', 
          },
          alergies5: {
            src: '../../../assets/trigo.png',
            alt: 'comida1', 
          },
          price: "2,00 €",
          stars: {
            src: '../../../assets/stars.png',
            alt: 'comida1',
          },
        },
        {
          picture: {
            src: '../../../assets/gyozas.jpg',
            alt: 'comida1',
          },
          name: 'Arroz',
          type: 'entrantes',
          price: "2,00 €",
          ingredients: "tallarines, cebolla, cebollino, gambas, salsa de soja",
          alergies: {
            src: '../../../assets/huevo.png',
            alt: 'comida1', 
          },
          alergies2: {
            src: '../../../assets/crustaceos.png',
            alt: 'comida1', 
          },
          alergies3: {
            src: '../../../assets/frutoseco.png',
            alt: 'comida1', 
          },
          alergies4: {
            src: '../../../assets/leche.png',
            alt: 'comida1', 
          },
          alergies5: {
            src: '../../../assets/trigo.png',
            alt: 'comida1', 
          },
          stars: {
            src: '../../../assets/stars.png',
            alt: 'comida1',
          },
        },
        {
          picture: {
            src: '../../../assets/pollo.jpg',
            alt: 'comida1',
          },
          name: 'Arroz',
          type: 'carnes',
          price: "2,00 €",
          ingredients: "tallarines, cebolla, cebollino, gambas, salsa de soja",
          alergies: {
            src: '../../../assets/huevo.png',
            alt: 'comida1', 
          },
          alergies2: {
            src: '../../../assets/crustaceos.png',
            alt: 'comida1', 
          },
          alergies3: {
            src: '../../../assets/frutoseco.png',
            alt: 'comida1', 
          },
          alergies4: {
            src: '../../../assets/leche.png',
            alt: 'comida1', 
          },
          alergies5: {
            src: '../../../assets/trigo.png',
            alt: 'comida1', 
          },
          stars: {
            src: '../../../assets/stars.png',
            alt: 'comida1',
          },
        },
        {
          picture: {
            src: '../../../assets/tallarines.jpg',
            alt: 'comida1',
          },
          name: 'Arroz',
          type: 'tallarines',
          price: "2,00 €",
          ingredients: "tallarines, cebolla, cebollino, gambas, salsa de soja",
          alergies: {
            src: '../../../assets/huevo.png',
            alt: 'comida1', 
          },
          alergies2: {
            src: '../../../assets/crustaceos.png',
            alt: 'comida1', 
          },
          alergies3: {
            src: '../../../assets/frutoseco.png',
            alt: 'comida1', 
          },
          alergies4: {
            src: '../../../assets/leche.png',
            alt: 'comida1', 
          },
          alergies5: {
            src: '../../../assets/trigo.png',
            alt: 'comida1', 
          },
          stars: {
            src: '../../../assets/stars.png',
            alt: 'comida1',
          },
        },
        
      ],
    };
  }

  ngOnInit(): void {}
}
