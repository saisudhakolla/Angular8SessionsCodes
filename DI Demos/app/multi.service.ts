import { Injectable } from '@angular/core';

@Injectable()
export class Hamburger {
     type:string;
     constructor()
     {
         this.type="hamburger";
     }

};

@Injectable()
export class DoubleHamburger extends Hamburger
{
type:string;
     constructor()
     {
      super ();
         this.type="DoubleHamburger";
     }

};


@Injectable()
export class CheeseHamburger extends DoubleHamburger

{
 type:string;
     constructor()
     {
      super ();
         this.type="CheeseHamburger";
     }
};
