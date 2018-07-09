
import { Component } from '@angular/core';
import { Http, Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Buscador';
    id = '';
    Precio = '';
    Description = '';

     constructor(private http: Http) {}

     searchIndicator() {
       this.http.get('http://localhost:8080/api/product/' + this.id)
       .subscribe(
           (res: Response) => {
             const valueIndicator = res.json();
             console.log(valueIndicator);
             
             this.Precio = valueIndicator['precio'];
             this.Description = valueIndicator['description'];
           }, err => {
             console.log('UPS!');
             console.log(err);
           }, () => {
             console.log('¡Servicio Finalizado!');
             
           }
       );
     }


}