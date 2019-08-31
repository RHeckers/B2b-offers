import { IFormValidation } from './IFormValidators';

export interface IFormQuestion {
    label: string;
    bindTo: string;
    questionType: string;
    validators: IFormValidation;
    inputType?: String;
    disabled?: boolean;
    section?: string;
    fineprintCheckbox?: boolean;
    finreprintRoute?: string;
    textForFineprintLink?: string;
    errorMessage?: string;
    labelColSize?: string;
    inputColSize?: string;
    selectOptionsEnum?: any;
}
