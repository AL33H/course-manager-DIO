export class Course {
    id: number;
    name: String;
    imageUrl: string;
    price: number;
    code: string;
    duration: number;
    rating: number;
    releaseDate: string; 
    description: string;

    constructor(id: number, name: String, imagaUrl: string, price: number, code: string, duration: number, rating: number, release: string, description: string){
        this.id = id;
        this.name = name;
        this.imageUrl = imagaUrl;
        this.price = price;
        this.code = code;
        this.duration = duration;
        this.rating = rating;
        this.releaseDate = release;
        this.description = description;
    }



}