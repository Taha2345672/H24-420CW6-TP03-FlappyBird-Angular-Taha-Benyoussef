import { HttpInterceptorFn } from '@angular/common/http';
import { Injectable } from '@angular/core';

Injectable({
  providedIn: 'root'
})
export const authInterceptor: HttpInterceptorFn = (req, next) => {
 
  const Request = req.clone({
    
    setHeaders: {
      'Content-Type': 'application/json', 
      'Authorization': 'Bearer ' + localStorage.getItem('token') 
    }
  });

 
  return next(Request);
};
