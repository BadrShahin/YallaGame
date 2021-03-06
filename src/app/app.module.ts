// <reference types="@types/googlemaps" /> 
//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { StarRatingModule } from 'angular-star-rating';
import { AgmCoreModule } from '@agm/core';

//components
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { LocationPageComponent } from './Components/location-page/location-page.component';
import { HomeFiltrationContainerComponent } from './Components/home-filtration-container/home-filtration-container.component';
import { FiltrationComponent } from './Components/filtration/filtration.component';
import { HomeComponent } from './Components/home/home.component';
import { PlaceDetailsComponent } from './Components/place-details/place-details.component';
import { ReviewComponent } from './shared/review/review.component';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';
import { ReviewDetailsComponent } from './shared/review-details/review-details.component';
import { GamesTabComponent } from './Components/games-tab/games-tab.component';
import { ReviewsTabComponent } from './Components/reviews-tab/reviews-tab.component';
import { InfoTabComponent } from './Components/info-tab/info-tab.component';
import { InvitationModalComponent } from './Components/invitation-modal/invitation-modal.component';
import { SmallStarRatingComponent } from './shared/small-star-rating/small-star-rating.component';
import { InvitationComponent } from './Components/invitation/invitation.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { UserInfoComponent } from './Components/user-info/user-info.component';
import { PlaceInfoEditComponent } from './Components/place-info-edit/place-info-edit.component';
import { UserInfoEditComponent } from './Components/user-info-edit/user-info-edit.component';
import { MapComponent } from './Components/map/map.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatStepperModule} from '@angular/material/stepper';


//services 
import { AuthLoginService } from './services/auth-login.service';
import { RegisterMapComponent } from './Components/register-map/register-map.component';
import { ContinuedRegisterComponent } from './Components/continued-register/continued-register.component';
import { WelcomePageComponent } from './Components/welcome-page/welcome-page.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { AddGameComponent } from './Components/add-game/add-game.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    LocationPageComponent,
    HomeFiltrationContainerComponent,
    FiltrationComponent,
    HomeComponent,
    PlaceDetailsComponent,
    ReviewComponent,
    StarRatingComponent,
    ReviewDetailsComponent,
    GamesTabComponent,
    ReviewsTabComponent,
    InfoTabComponent,
    InvitationModalComponent,
    SmallStarRatingComponent,
    InvitationComponent,
    UserProfileComponent,
    UserInfoComponent,
    PlaceInfoEditComponent,
    UserInfoEditComponent,
    MapComponent,
    RegisterMapComponent,
    ContinuedRegisterComponent,
    WelcomePageComponent,
    AboutUsComponent,
    AddGameComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatStepperModule,
    StarRatingModule.forRoot(),
    AgmCoreModule.forRoot({
      // apiKey: 'AIzaSyDNJBXRkn6qZO1hknIesKifkpVBl5aBVJ0',
      apiKey: 'AIzaSyCFEgVmpwz1ALDpXbz9y7yQNRbkqAwVeb8',
      libraries: ['places']
    })

  ],
  providers: [AuthLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
