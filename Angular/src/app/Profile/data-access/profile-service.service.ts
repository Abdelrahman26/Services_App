import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from './Classes/Profile';
import { UserLogged } from './Classes/UserLogged';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    providerId:string = ''
    customerId:string=''
    
    constructor(public http: HttpClient) { }


    getProfileData(provId:string){
        return this.http.get<Profile>(`https://localhost:7142/api/Provider/SelectProviderById/${provId}`)
    }


    //store customer id
    setCustomerId(CustomerID:string){
        this.customerId =  CustomerID
    }
    getCustomerId(){
        return this.customerId
       }


       //store provider id
    setProviderId(provId:string){
        this.providerId = provId
      }
      getProviderId(){
       return this.providerId
      }




}
