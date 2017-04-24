import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {RequestOptions} from '@angular/http';

@Injectable()
export class BpeditprofileService {

	authToken:any;

  constructor(private http:Http) { }

  editP(password,email,bName,location,phone,info){
 
  let headers = new Headers();
  this.loadToken();
const user = {
  password:password,
  email:email,
  bName:bName,
  location:location,
  phone:phone,
  info:info
}
//console.log(username);
//console.log(this.authToken);
  headers.append('Content-Type','application/json');
   headers.append('Authorization', this.authToken);

   return this.http.post('http://localhost:8080/bproviders/editBprofile',user,{headers: headers})
      .map(res => res.json());

}

loadToken(){
  const token =localStorage.getItem('id_token');
  this.authToken = token; 
}

getCU(){
let headers = new Headers();
 this.loadToken();
     console.log(this.authToken);
     headers.append('Content-Type','application/json');
       headers.append('Authorization', this.authToken);

   const u= this.http.get('http://localhost:8080/bproviders/MyProfile',{headers: headers})
      .map(res => res.json());
console.log(u);
return u;
}

getPP(){

}

Check(){
console.log('dd');
let headers = new Headers();
 this.loadToken();

console.log(this.authToken);
     headers.append('Content-Type','application/json');
       headers.append('Authorization', this.authToken);

return this.http.get('http://localhost:8080/bproviders/checkBP',{headers: headers})
      .map(res => res.json());                                                                                                                                                                                                                            
                                                                                                                                        
}


/*editPP(profilepicture){

console.log(profilepicture.name);
let headers = new Headers();
this.loadToken();

        let formData:FormData = new FormData();
                formData.append('file[]', profilepicture);


            headers.append('Authorization', this.authToken);
//headers.append('enctype', 'multipart/form-data');





return this.http.post('http://localhost:8080/bproviders/editBprofilePicture',formData,{headers:headers})
.map(res => res.json());

}*/

editPP(profilepicture){

console.log(profilepicture.name);
this.loadToken();
 let formData:FormData = new FormData();
        formData.append('uploadFile', profilepicture, profilepicture.name);
        let headers = new Headers();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Authorization', this.authToken);

        let options = new RequestOptions({ headers: headers });
         return this.http.post('http://localhost:8080/bproviders/editBprofilePicture', formData, options)
            .map(res => res.json());

}

 /*makeFileRequest (params: string[], file: File , name:string): Observable<any> {
    return Observable.create(observer => {

        let formData: FormData = new FormData(),
            xhr: XMLHttpRequest = new XMLHttpRequest();

            formData.append("uploads[]", file,name);
        

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    observer.next(JSON.parse(xhr.response));
                    observer.complete();
                } else {
                    observer.error(xhr.response);
                }
            }
        };

        xhr.upload.onprogress = (event) => {
          
        };
console.log('aaaa');
let headers = new Headers();
this.loadToken();
headers.append('Authorization', this.authToken);



        xhr.open('POST','http://localhost:8080/bproviders/editBprofilePicture', true);
        xhr.setRequestHeader("Authorization", this.authToken);
        xhr.send(formData);
        
        //xhr.send(headers);
    });
  }
*/

}
