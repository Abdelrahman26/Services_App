import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from './Classes/categorie';


@Injectable(
    {
        providedIn: 'root'
    }
)
export class CategoriesService {

    constructor(public http:HttpClient) { }
    
    getAllCategories() {
        return this.http.get<Categorie[]>("https://localhost:7142/api/Category/CategoryNames");
    }

}
