import { CustomInput as CustomInputType } from 'types/custom-input.types';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

export const CustomInput = ({
    name,
    label,
    type,
    required,
    control,
    placeholder,
    defaultValue,
    error,
    errorMessage,
    textFieldProps
}: CustomInputType) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field }) => (
                <TextField
                    variant="outlined"
                    fullWidth
                    {...field}
                    label={label}
                    type={type}
                    required={required}
                    placeholder={placeholder}
                    error={error}
                    helperText={errorMessage}
                    {...textFieldProps}
                />
            )}
        />
    );
}