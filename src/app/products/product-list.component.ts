import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";


@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']

})
export class ProductListComponent implements OnInit, OnDestroy{
    pageTitle = 'Product List';
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    errorMessage = '';
    sub!: Subscription;
   
    private _listFilter: string = '';
    filteredProducts: IProduct[] | undefined;
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        console.log('In Setter:', value);
        this.filteredProducts = this.performFilter(value);
    }
    
    products: IProduct[] = [];

   constructor(private productService: ProductService){

   } 

performFilter(filterby: string): IProduct[]{
    filterby = filterby.toLowerCase();
    return this.products.filter((product: IProduct) =>
    product.productName.toLowerCase().includes(filterby));
}

toggleImage(): void{
    this.showImage = !this.showImage;
}
ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
        next: products => {
            this.products = products;
            this.filteredProducts = this.products;
        },
        error: err => this.errorMessage = err
    });
    
}

ngOnDestroy() {
    this.sub.unsubscribe();
}

onRatingClicked(message: string): void {
    this.pageTitle = 'Product List:'+message;
}

}