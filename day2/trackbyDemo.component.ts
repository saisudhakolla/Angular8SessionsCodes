import { Component, OnInit } from '@angular/core'; 
 
 
 @Component({ 
   selector: 'track-by-cmp', 
   templateUrl: './track.component.html', 
    
 }) 
  export class TrackComponent implements OnInit { 
   employees: any[]; 
   ngOnInit(){} 
   constructor() { 

    
               this.employees = [ 
                   { 
                       code: '1', name: 'Tobia', gender: 'Female', 
                       salary:  12345
                   }, 
                   { 
                       code: '2', name: 'Evana', gender: 'Female', 
                       salary:  2342
                   }, 
                   { 
                       code: '3', name: 'Ruby', gender: 'Female', 
                       salary:  54312
                   }, 
                   { 
                       code: '4', name: 'Juri', gender: 'Male', 
                       salary:  23535
                   } 
               ]; 
           } 
            
         

           trackByEmpCode(index: number, employee: any): string 
           { 
                return employee.code; 
            } 
           
           getEmployees(): void { 
               this.employees = [ 
                 { 
                   code: '1', name: 'Tobia', gender: 'Female', 
                   salary: 12345 
               }, 
               { 
                   code: '2', name: 'Evana', gender: 'Female', 
                   salary: 1234 
               }, 
               { 
                   code: '3', name: 'Ruby', gender: 'Female', 
                   salary:  2424
               }, 
               { 
                   code: '4', name: 'Juri', gender: 'Male', 
                   salary:  3342
               }, 
                   { 
                       code: '5', name: 'Paul', gender: 'Male', 
                       salary:  23242
                   } 
               ]; 
           } 
         
         
         } 
        
