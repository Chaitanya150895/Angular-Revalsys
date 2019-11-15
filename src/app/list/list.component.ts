import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/http.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import *  as  data from 'src/app/data.json';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
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
      { id: 1, name: 'LG' },
      { id: 2, name: 'SAMSUNG' },
      { id: 3, name: 'SONY' },
      { id: 4, name: 'HAIER' },
      { id: 5, name: 'PANASONIC' },
      { id: 6, name: 'TOSHIBA' },
      { id: 7, name: 'MI' }
    ];
  }

  getBrandProducts() {
    return [
      { id: 1, brandName_id: 1, name: 'LGultraslim1' },
      { id: 2, brandName_id: 1, name: 'LGultraslim2' },
      { id: 3, brandName_id: 1, name: 'LG1doubledoor1' },
      { id: 4, brandName_id: 1, name: 'LGdoubledoor2' },
      { id: 5, brandName_id: 1, name: 'LGsmartmobile1' },
      { id: 6, brandName_id: 1, name: 'LGsmartmobile2' },

      { id: 7, brandName_id: 2, name: 'SMNGultraslim1' },
      { id: 8, brandName_id: 2, name: 'SMNGultraslim2' },
      { id: 9, brandName_id: 2, name: 'SMNGdoubledoor1' },
      { id: 10, brandName_id: 2, name: 'SMNGdoubledoor2' },
      { id: 11, brandName_id: 2, name: 'SMNGsmartmobile1' },
      { id: 12, brandName_id: 2, name: 'SMNGsmartmobile2' },

      { id: 13, brandName_id: 3, name: 'SONYultraslim1' },
      { id: 14, brandName_id: 3, name: 'SONYultraslim2' },
      { id: 15, brandName_id: 3, name: 'SONYdoubledoor1' },
      { id: 16, brandName_id: 3, name: 'SONYdoubledoor2' },
      { id: 17, brandName_id: 3, name: 'SONYsmartmobile1' },
      { id: 18, brandName_id: 3, name: 'SONYsmartmobile2' },

      { id: 19, brandName_id: 4, name: 'HAIERultraslim1' },
      { id: 20, brandName_id: 4, name: 'HAIERultraslim2' },
      { id: 21, brandName_id: 4, name: 'HAIERdoubledoor1' },
      { id: 22, brandName_id: 4, name: 'HAIERdoubledoor2' },
      { id: 23, brandName_id: 4, name: 'HAIERsmartmobile1' },
      { id: 24, brandName_id: 4, name: 'HAIERsmartmobile2' },

      { id: 25, brandName_id: 5, name: 'PANASONICultraslim1' },
      { id: 26, brandName_id: 5, name: 'PANASONICultraslim2' },
      { id: 27, brandName_id: 5, name: 'PANASONICdoubledoor1' },
      { id: 28, brandName_id: 5, name: 'PANASONICdoubledoor2' },
      { id: 29, brandName_id: 5, name: 'PANASONICsmartmobile1' },
      { id: 30, brandName_id: 5, name: 'PANASONICsmartmobile2' },

      { id: 31, brandName_id: 6, name: 'TOSHIBAultraslim1' },
      { id: 32, brandName_id: 6, name: 'TOSHIBAultraslim2' },
      { id: 33, brandName_id: 6, name: 'TOSHIBAdoubledoor1' },
      { id: 34, brandName_id: 6, name: 'TOSHIBAdoubledoor2' },
      { id: 35, brandName_id: 6, name: 'TOSHIBAsmartmobile1' },
      { id: 36, brandName_id: 6, name: 'TOSHIBAsmartmobile2' },

      { id: 37, brandName_id: 7, name: 'MIultraslim1' },
      { id: 38, brandName_id: 7, name: 'MIultraslim2' },
      { id: 39, brandName_id: 7, name: 'MIdoubledoor1' },
      { id: 40, brandName_id: 7, name: 'MIdoubledoor2' },
      { id: 41, brandName_id: 7, name: 'MIsmartmobile1' },
      { id: 42, brandName_id: 7, name: 'MIsmartmobile2' }
    ]
  }
}
