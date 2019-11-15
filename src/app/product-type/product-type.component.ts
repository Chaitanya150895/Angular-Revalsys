import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/http.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import *  as  data from 'src/app/data.json';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css']
})
export class ProductTypeComponent implements OnInit {

  ProductType: any;

  // data: Object;

  // products: any = (data as any).default;

  constructor() { }

  ngOnInit() {
    console.log(data);
  }

  selectedBrandName = 0;
  selectedBrandProduct = 0;

  brandProducts = [];
  productTypes = [];


  onSelectBrandName(brandName_id: number) {
    this.selectedBrandName = brandName_id;
    this.selectedBrandProduct = 0;
    this.productTypes = [];
    this.brandProducts = this.getBrandProducts().filter((item) => {
      return item.brandName_id === Number(brandName_id)
    });
  }

  onSelectBrandProduct(brandProduct_id: number) {
    this.selectedBrandProduct = brandProduct_id;
    this.productTypes = this.ProductType().filter((item) => {
      return item.brandProduct_id === Number(brandProduct_id)
    });
  }

  getBrandNames() {
    return [
      { id: 1, name: 'TV' },
      { id: 2, name: 'FRIDGE' },
      { id: 3, name: 'MOBILE' },
    ];
  }

  getBrandProducts() {
    return [
      { id: 1, brandName_id: 1, name: 'LGTV001, LGultraslim1' },
      { id: 2, brandName_id: 1, name: 'LGTV002, LGultraslim2' },
      { id: 3, brandName_id: 1, name: 'SMNG001, SMNGultraslim1' },
      { id: 4, brandName_id: 1, name: 'SMNG002, SMNGultraslim2' },
      { id: 5, brandName_id: 1, name: 'SONY001, SONYultraslim1' },
      { id: 6, brandName_id: 1, name: 'SONY002, SONYultraslim2' },
      { id: 7, brandName_id: 1, name: 'HAIER001, HAIERultraslim1' },
      { id: 8, brandName_id: 1, name: 'HAIER002, HAIERultraslim2' },
      { id: 9, brandName_id: 1, name: 'PANASONICO001, PANASONICultraslim1' },
      { id: 10, brandName_id: 1, name: 'PANASONIC002, PANASONICultraslim2' },
      { id: 11, brandName_id: 1, name: 'TOSHIBAO001, TOSHIBAultraslim1' },
      { id: 12, brandName_id: 1, name: 'TOSHIBA002, TOSHIBAultraslim2' },
      { id: 13, brandName_id: 1, name: 'MIO001, MIultraslim1' },
      { id: 14, brandName_id: 1, name: 'MI002, MIultraslim2' },
      { id: 1, brandName_id: 2, name: 'LGF001, LG1doubledoor1' },
      { id: 2, brandName_id: 2, name: 'LGF002, LGdoubledoor2' },
      { id: 3, brandName_id: 2, name: 'SMNG001, SMNGdoubledoor1' },
      { id: 4, brandName_id: 2, name: 'SMNG002, SMNGdoubledoor2' },
      { id: 5, brandName_id: 2, name: 'SONY001, SONYdoubledoor1' },
      { id: 6, brandName_id: 2, name: 'SONY002, SONYdoubledoor2' },
      { id: 7, brandName_id: 2, name: 'HAIER001, HAIERdoubledoor1' },
      { id: 8, brandName_id: 2, name: 'HAIER002, HAIERdoubledoor2' },
      { id: 9, brandName_id: 2, name: 'HAIER001, HAIERdoubledoor1' },
      { id: 10, brandName_id: 2, name: 'PANASONIC002, PANASONICdoubledoor2' },
      { id: 11, brandName_id: 2, name: 'TOSHIBA001, TOSHIBAdoubledoor1' },
      { id: 12, brandName_id: 2, name: 'TOSHIBA002, TOSHIBAdoubledoor2' },
      { id: 13, brandName_id: 2, name: 'MI001, MIdoubledoor1' },
      { id: 14, brandName_id: 2, name: 'MI002, MIdoubledoor2' },
      { id: 1, brandName_id: 3, name: 'LGM001, LGsmartmobile1' },
      { id: 2, brandName_id: 3, name: 'LGM002, LGsmartmobile2' },
      { id: 3, brandName_id: 3, name: 'SMNG001, SMNGsmartmobile1' },
      { id: 4, brandName_id: 3, name: 'SMNG002, SMNGsmartmobile2' },
      { id: 5, brandName_id: 3, name: 'SONY001, SONYsmartmobile1' },
      { id: 6, brandName_id: 3, name: 'SONY002, SONYsmartmobile2' },
      { id: 7, brandName_id: 3, name: 'HAIER001, HAIERsmartmobile1' },
      { id: 8, brandName_id: 3, name: 'HAIER002, HAIERsmartmobile2' },
      { id: 9, brandName_id: 3, name: 'PANASONIC001, PANASONICsmartmobile1' },
      { id: 10, brandName_id: 3, name: 'PANASONIC002, PANASONICsmartmobile2' },
      { id: 11, brandName_id: 3, name: 'TOSHIBA001, TOSHIBAsmartmobile1' },
      { id: 12, brandName_id: 3, name: 'TOSHIBA002, TOSHIBAsmartmobile2' },
      { id: 13, brandName_id: 3, name: 'MI001, MIsmartmobile1' },
      { id: 14, brandName_id: 3, name: 'MI002, MIsmartmobile2' },
    ]
  }
}
