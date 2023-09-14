import { Control } from 'react-hook-form';

export interface CustomInput {
    name: string,
    label: string,
    type: string,
    required?: boolean,
    control: Control<any>,
    placeholder?: string,
    defaultValue?: string,
    error?: boolean,
    errorMessage?: string,
    textFieldProps?: Record<string, any>
}