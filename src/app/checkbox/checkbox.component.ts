import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  formData = [
    { for: "LGultraslim1", control: "input", type: "checkbox", label: "LGultraslim1", placeholder: "Enter name", id: "LGultraslim1", control_name: "LGultraslim1" },
    { for: "LGultraslim2", control: "input", type: "checkbox", label: "LGultraslim2", placeholder: "Enter name", id: "LGultraslim2", control_name: "LGultraslim2" },
    { for: "LG1doubledoor1", control: "input", type: "checkbox", label: "LG1doubledoor1", placeholder: "Enter name", id: "LG1doubledoor1", control_name: "LG1doubledoor1" },
    { for: "LGdoubledoor2", control: "input", type: "checkbox", label: "LGdoubledoor2", placeholder: "Enter name", id: "LGdoubledoor2", control_name: "LGdoubledoor2" },
    { for: "LGsmartmobile1", control: "input", type: "checkbox", label: "LGsmartmobile1", placeholder: "Enter name", id: "LGsmartmobile1", control_name: "LGsmartmobile1" },
    { for: "LGsmartmobile2", control: "input", type: "checkbox", label: "LGsmartmobile2", placeholder: "Enter name", id: "LGsmartmobile2", control_name: "LGsmartmobile2" },
    
    { for: "SMNGultraslim1", control: "input", type: "checkbox", label: "SMNGultraslim1", placeholder: "Enter name", id: "SMNGultraslim1", control_name: "SMNGultraslim1" },
    { for: "SMNGultraslim2", control: "input", type: "checkbox", label: "SMNGultraslim2", placeholder: "Enter name", id: "SMNGultraslim2", control_name: "SMNGultraslim2" },
    { for: "SMNG1doubledoor1", control: "input", type: "checkbox", label: "SMNG1doubledoor1", placeholder: "Enter name", id: "SMNG1doubledoor1", control_name: "SMNG1doubledoor1" },
    { for: "SMNGdoubledoor2", control: "input", type: "checkbox", label: "SMNGdoubledoor2", placeholder: "Enter name", id: "SMNGdoubledoor2", control_name: "SMNGdoubledoor2" },
    { for: "SMNGsmartmobile1", control: "input", type: "checkbox", label: "SMNGsmartmobile1", placeholder: "Enter name", id: "SMNGsmartmobile1", control_name: "SMNGsmartmobile1" },
    { for: "SMNGsmartmobile2", control: "input", type: "checkbox", label: "SMNGsmartmobile2", placeholder: "Enter name", id: "SMNGsmartmobile2", control_name: "SMNGsmartmobile2" },
    
    { for: "SONYultraslim1", control: "input", type: "checkbox", label: "SONYultraslim1", placeholder: "Enter name", id: "SONYultraslim1", control_name: "SONYultraslim1" },
    { for: "SONYultraslim2", control: "input", type: "checkbox", label: "SONYultraslim2", placeholder: "Enter name", id: "SONYultraslim2", control_name: "SONYultraslim2" },
    { for: "SONY1doubledoor1", control: "input", type: "checkbox", label: "SONY1doubledoor1", placeholder: "Enter name", id: "SONY1doubledoor1", control_name: "SONY1doubledoor1" },
    { for: "SONYdoubledoor2", control: "input", type: "checkbox", label: "SONYdoubledoor2", placeholder: "Enter name", id: "SONYdoubledoor2", control_name: "SONYdoubledoor2" },
    { for: "SONYsmartmobile1", control: "input", type: "checkbox", label: "SONYsmartmobile1", placeholder: "Enter name", id: "SONYsmartmobile1", control_name: "SONYsmartmobile1" },
    { for: "SONYsmartmobile2", control: "input", type: "checkbox", label: "SONYsmartmobile2", placeholder: "Enter name", id: "SONYsmartmobile2", control_name: "SONYsmartmobile2" },

    { for: "HAIERultraslim1", control: "input", type: "checkbox", label: "HAIERultraslim1", placeholder: "Enter name", id: "HAIERultraslim1", control_name: "HAIERultraslim1" },
    { for: "HAIERultraslim2", control: "input", type: "checkbox", label: "HAIERultraslim2", placeholder: "Enter name", id: "HAIERultraslim2", control_name: "HAIERultraslim2" },
    { for: "HAIER1doubledoor1", control: "input", type: "checkbox", label: "HAIER1doubledoor1", placeholder: "Enter name", id: "HAIER1doubledoor1", control_name: "HAIER1doubledoor1" },
    { for: "HAIERdoubledoor2", control: "input", type: "checkbox", label: "HAIERdoubledoor2", placeholder: "Enter name", id: "HAIERdoubledoor2", control_name: "HAIERdoubledoor2" },
    { for: "HAIERsmartmobile1", control: "input", type: "checkbox", label: "HAIERsmartmobile1", placeholder: "Enter name", id: "HAIERsmartmobile1", control_name: "HAIERsmartmobile1" },
    { for: "HAIERsmartmobile2", control: "input", type: "checkbox", label: "HAIERsmartmobile2", placeholder: "Enter name", id: "HAIERsmartmobile2", control_name: "HAIERsmartmobile2" },

    { for: "PANASONICultraslim1", control: "input", type: "checkbox", label: "PANASONICultraslim1", placeholder: "Enter name", id: "PANASONICultraslim1", control_name: "PANASONICultraslim1" },
    { for: "PANASONICultraslim2", control: "input", type: "checkbox", label: "PANASONICultraslim2", placeholder: "Enter name", id: "PANASONICultraslim2", control_name: "PANASONICultraslim2" },
    { for: "PANASONIC1doubledoor1", control: "input", type: "checkbox", label: "PANASONIC1doubledoor1", placeholder: "Enter name", id: "PANASONIC1doubledoor1", control_name: "PANASONIC1doubledoor1" },
    { for: "PANASONICdoubledoor2", control: "input", type: "checkbox", label: "PANASONICdoubledoor2", placeholder: "Enter name", id: "PANASONICdoubledoor2", control_name: "PANASONICdoubledoor2" },
    { for: "PANASONICsmartmobile1", control: "input", type: "checkbox", label: "PANASONICsmartmobile1", placeholder: "Enter name", id: "PANASONICsmartmobile1", control_name: "PANASONICsmartmobile1" },
    { for: "PANASONICsmartmobile2", control: "input", type: "checkbox", label: "PANASONICsmartmobile2", placeholder: "Enter name", id: "PANASONICsmartmobile2", control_name: "PANASONICsmartmobile2e" },
    
    { for: "TOSHIBAultraslim1", control: "input", type: "checkbox", label: "TOSHIBAultraslim1", placeholder: "Enter name", id: "TOSHIBAultraslim1", control_name: "TOSHIBAultraslim1" },
    { for: "TOSHIBAultraslim2", control: "input", type: "checkbox", label: "TOSHIBAultraslim2", placeholder: "Enter name", id: "TOSHIBAultraslim2", control_name: "TOSHIBAultraslim2" },
    { for: "TOSHIBA1doubledoor1", control: "input", type: "checkbox", label: "TOSHIBA1doubledoor1", placeholder: "Enter name", id: "TOSHIBA1doubledoor1", control_name: "TOSHIBA1doubledoor1" },
    { for: "TOSHIBAdoubledoor2", control: "input", type: "checkbox", label: "TOSHIBAdoubledoor2", placeholder: "Enter name", id: "TOSHIBAdoubledoor2", control_name: "TOSHIBAdoubledoor2" },
    { for: "TOSHIBAsmartmobile1", control: "input", type: "checkbox", label: "TOSHIBAsmartmobile1", placeholder: "Enter name", id: "TOSHIBAsmartmobile1", control_name: "TOSHIBAsmartmobile1" },
    { for: "TOSHIBAsmartmobile2", control: "input", type: "checkbox", label: "TOSHIBAsmartmobile2", placeholder: "Enter name", id: "TOSHIBAsmartmobile2", control_name: "TOSHIBAsmartmobile2" },

    { for: "MIultraslim1", control: "input", type: "checkbox", label: "MIultraslim1", placeholder: "Enter name", id: "MIultraslim1", control_name: "MIultraslim1" },
    { for: "MIultraslim2", control: "input", type: "checkbox", label: "MIultraslim2", placeholder: "Enter name", id: "MIultraslim2", control_name: "MIultraslim2" },
    { for: "MI1doubledoor1", control: "input", type: "checkbox", label: "MI1doubledoor1", placeholder: "Enter name", id: "MI1doubledoor1", control_name: "MI1doubledoor1" },
    { for: "MIdoubledoor2", control: "input", type: "checkbox", label: "MIdoubledoor2", placeholder: "Enter name", id: "MIdoubledoor2", control_name: "MIdoubledoor2" },
    { for: "MIsmartmobile1", control: "input", type: "checkbox", label: "MIsmartmobile1", placeholder: "Enter name", id: "MIsmartmobile1", control_name: "MIsmartmobile1" },
    { for: "MIsmartmobile2", control: "input", type: "checkbox", label: "MIsmartmobile2", placeholder: "Enter name", id: "MIsmartmobile2", control_name: "MIsmartmobile2" },

  ]

  customForm = this.fb.group({
    LGultraslim1: [''],
    LGultraslim2: [''],
    LG1doubledoor1: [''],
    LGdoubledoor2: [''],
    LGsmartmobile1: [''],
    LGsmartmobile2: [''],

    SMNGultraslim1: [''],
    SMNGultraslim2: [''],
    SMNG1doubledoor1: [''],
    SMNGdoubledoor2: [''],
    SMNGsmartmobile1: [''],
    SMNGsmartmobile2: [''],

    SONYultraslim1: [''],
    SONYultraslim2: [''],
    SONY1doubledoor1: [''],
    SONYdoubledoor2: [''],
    SONYsmartmobile1: [''],
    SONYsmartmobile2: [''],

    HAIERultraslim1: [''],
    HAIERultraslim2: [''],
    HAIER1doubledoor1: [''],
    HAIERdoubledoor2: [''],
    HAIERsmartmobile1: [''],
    HAIERsmartmobile2: [''],

    PANASONICultraslim1: [''],
    PANASONICultraslim2: [''],
    PANASONIC1doubledoor1: [''],
    PANASONICdoubledoor2: [''],
    PANASONICsmartmobile1: [''],
    PANASONICsmartmobile2: [''],

    TOSHIBAultraslim1: [''],    
    TOSHIBAultraslim2: [''],
    TOSHIBA1doubledoor1: [''],
    TOSHIBAdoubledoor2: [''],
    TOSHIBAsmartmobile1: [''],
    TOSHIBAsmartmobile2: [''],

    MIultraslim1: [''],
    MIultraslim2: [''],
    MI1doubledoor1: [''],
    MIdoubledoor2: [''],
    MIsmartmobile1:[''],
    MIsmartmobile2: ['']


  });

  constructor(private fb: FormBuilder, private httpService: HttpService) { }

  ngOnInit() {
  }

}
