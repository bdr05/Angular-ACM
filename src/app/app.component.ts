import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" >{{pageTitle}}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li><a class='nav-link' routerLink="/welcome">Home</a></li>
        <li><a class='nav-link' routerLink="/products">Product List</a></li>
        <li><a class='nav-link' routerLink="/questions">Question List</a></li>
      </ul>
      <!-- <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
    </div>
  </div>
</nav>
<div class="container" style="margin-top: 5rem;">
  <router-outlet></router-outlet>
</div>
    <!-- <nav class='navbar navbar-expand navbar-light bg-light'>
      <a class= 'navbar-brand'>{{pageTitle}}</a>
      <ul class='nav nav-pills'>
        <li><a class='nav-link' routerLink="/welcome">Home</a></li>
        <li><a class='nav-link' routerLink="/products">Product List</a></li>
        <li><a class='nav-link' routerLink="/questions">Question List</a></li>
      </ul>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div> -->
    `
})

export class AppComponent {
  pageTitle : string = 'Acme Page Title';
}