import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ToastrModule } from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRouting } from './app.routing.module';
import { AuthModule } from './auth/auth.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { ComponentsModule } from './components/components.module';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomePageComponent,
 
  ],
  imports: [
    BrowserModule,
    AuthModule,  
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AppRouting,
    FormsModule,
    HttpClientModule,
    ComponentsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
