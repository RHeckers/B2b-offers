export interface IFormValidation {
    required?: boolean;
    min?: number;
    max?: number;
    requiredTrue?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    email?: boolean;
    password?: boolean;
    MatchWith?: string;
}
