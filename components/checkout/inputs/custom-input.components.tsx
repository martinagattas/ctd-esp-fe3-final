import TextField from '@mui/material/TextField';
import { Control, Controller } from 'react-hook-form';

interface Props {
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

const CustomInput = ({
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
}: Props) => {
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

export default CustomInput;