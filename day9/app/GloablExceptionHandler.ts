import {ErrorHandler} from '@angular/core';

export class MyExceptionHandler implements ErrorHandler 
{
     
    handleError(error, stackTrace = null, reason = null) 
    {
      console.log("error successfully handled");
       console.log(error, stackTrace);
       
    }

 }