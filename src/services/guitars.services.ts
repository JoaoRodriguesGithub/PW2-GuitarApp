import { Injectable } from "@angular/core";

@Injectable()
export class GuitarServices {

    guitars = [
        {
            image: 'https://i.pinimg.com/564x/c5/0b/61/c50b61650c3f96151d06287b676478bb.jpg',
            brand: 'MotorAve',
            model: '65',
            year: 2000
        },
        {
            image: 'https://i.pinimg.com/564x/35/b7/8a/35b78a4d67c8ac852647326dc81a2a07.jpg',
            brand: 'Fender',
            model: 'Jazzmaster',
            year: 1991
        },
        {
            image: 'https://i.pinimg.com/564x/01/ac/44/01ac44f3e2662d66ceaefcd4a8a4c970.jpg',
            brand: 'Fender',
            model: 'Mustang',
            year: 1994
        },
        {
            image: 'https://i.pinimg.com/564x/7c/24/37/7c243790ac7e500a581f38b42402d9dc.jpg',
            brand: 'Gibson',
            model: 'Les Paul Custom',
            year: 1965
        },
        {
            image: 'https://i.pinimg.com/564x/44/0a/5c/440a5cc177f642a37336bb493bc7a069.jpg',
            brand: 'Gibson',
            model: 'ES-335',
            year: 2001
        },
        {
            image: 'https://i.pinimg.com/564x/74/12/d3/7412d3b8c1ab217f12155ea4130ac781.jpg',
            brand: 'Fender',
            model: 'Stratocaster',
            year: 1965
        }

    ];

    //This method adds all input information from create component to the guitars object array
    serviceAddguitars(newGuitar:{image:string,brand:string,model:string,year:number})
    {
        this.guitars.push(newGuitar);
    }

    //This method removes one guitar from guitars ojbect array
    serviceRemoveGuitars(index:number){
        this.guitars.splice(index,1);
    }
}