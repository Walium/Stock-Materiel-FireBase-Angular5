import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppareilService} from './services/appareil.service';
import {Observable, Subscribable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  seconde:number;
  counterSubscription : Subscription;

constructor(){}

ngOnInit(){
  const counter = Observable.interval(1000);
  this.counterSubscription=counter.subscribe(
    (value:number)=>{
      this.seconde=value;
    }
  );
}

ngOnDestroy(){
  this.counterSubscription.unsubscribe();
}

}
