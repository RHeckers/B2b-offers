import { FormService } from './../../../services/form.service';
import { Component, OnInit } from '@angular/core';
import * as FormValues from '../../../../assets/formValuesArrays/formValues';
import * as FormSections from '../../../../assets/formValuesArrays/formSections';
import { IFormSection } from 'src/app/interfaces/IFormSections';
import { IFormQuestion } from 'src/app/interfaces/IFormQuestion';

@Component({
  selector: 'app-detailed-request',
  templateUrl: './detailed-request.component.html',
  styleUrls: ['./detailed-request.component.scss']
})
export class DetailedRequestComponent implements OnInit {

  private formQuestionsCopy: IFormQuestion[];
  detailedRequest: any;
  requestFormSections: IFormSection[];
  requestForm: IFormQuestion[];

  constructor(private formService: FormService) { }

  ngOnInit() {
    this.detailedRequest = {
      requestCategory: 1,
      requestProductType: 1,
      productName: 'Paper',
      paperSize: 'A4',
      unitDefenition: '10 packages of 500 leaves',
      requestCurrentUnitPrice: 200,
      requestTargetUnitPrice: 160,
      buyingFrequenty: 2,
      yearlyValue: 1920,
      createdOn: '01 - 08 - 2019',
      offersReceivedAmount: 6,
      productDetails: [
        {
          label: 'paper format',
          value: 'A4'
        },
        {
          label: 'paper thikness',
          value: '2mm'
        },
        {
          label: 'Paper color',
          value: 'white'
        }
      ],
      requirements: [
        {
          label: 'Free shipping',
          value: true
        },
        {
          label: 'Pay by bank transfer',
          value: true
        },
        {
          label: 'Payment in 30 days',
          value: true
        }
      ],
      receivedOffers: [
        {
          receivedOn: '15-08-2019',
          unitPrice: 160,
          percentageMatch: 90,
          negotiation: true
        },
        {
          receivedOn: '08-08-2019',
          unitPrice: 150,
          percentageMatch: 75,
          negotiation: false
        },
        {
          receivedOn: '12-08-2019',
          unitPrice: 160,
          percentageMatch: 65,
          negotiation: false
        },
      ]
    };

    this.requestFormSections = FormSections.detailedRequestSections;

    // Make a real copy not a refferance
    this.formQuestionsCopy = JSON.parse(JSON.stringify(FormValues.detailedRequestForm));

    this.addProductDetailsAndRequirements(this.detailedRequest, this.formQuestionsCopy);
    this.formService.addDisabledForDisplayForm(this.formQuestionsCopy);
    this.requestForm = this.formQuestionsCopy;
  }

  addProductDetailsAndRequirements(request, formValues) {
    if (request.productDetails) {
      for (let i = 0; i < request.productDetails.length; i++) {
        const detail = request.productDetails[i];
        !request[detail.label.replace(/\s+/g, '') + i] ? request[detail.label.replace(/\s+/g, '') + i] = detail.value
        : request[detail.label.replace(/\s+/g, '') + i] = request[detail.label.replace(/\s+/g, '') + i];
        formValues.push({
          label: detail.label,
          bindTo: detail.label.replace(/\s+/g, '') + i,
          questionType: 'input',
          inputType: 'text',
          validators: {},
          section: 'Product details',
        });
      }
    }
    if (request.requirements) {
      for (let i = 0; i < request.requirements.length; i++) {
        const requirement = request.requirements[i];
        !request[requirement.label.replace(/\s+/g, '') + i] ? request[requirement.label.replace(/\s+/g, '') + i] = requirement.value
        : request[requirement.label.replace(/\s+/g, '') + i] = request[requirement.label.replace(/\s+/g, '') + i];
        formValues.push({
          label: requirement.label,
          bindTo: requirement.label.replace(/\s+/g, '') + i,
          questionType: 'input',
          inputType: 'checkbox',
          validators: {},
          section: 'Extra requirements',
        });
      }
    }

  }

}
