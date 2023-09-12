import CustomInput from "../inputs/custom-input.components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

const PersonalData = () => {
    const {control, formState:{errors}} = useFormContext();

    return (
        <>
            <Typography variant="h5" mb={2}>Datos personales</Typography>
            <Box mb={2}>
                <CustomInput
                    type="text"
                    name="name"
                    label="Nombre"
                    control={control}
                    defaultValue=""
                    placeholder="Ej: María"
                />
                <Typography variant="caption" color="red">
                    <ErrorMessage errors={errors} name="name" />
                </Typography>
            </Box>
            <Box mb={2}>
                <CustomInput
                    type="text"
                    name="lastName"
                    label="Apellido"
                    control={control}
                    defaultValue=""
                    placeholder="Ej: Pérez"
                />
                <Typography variant="caption" color="red">
                    <ErrorMessage errors={errors} name="lastName" />
                </Typography>
            </Box>
            <Box mb={2}>
                <CustomInput
                    type="email"
                    name="email"
                    label="Email"
                    control={control}
                    defaultValue=""
                    placeholder="Ej: mail@ejemplo.com"
                />
                <Typography variant="caption" color="red">
                    <ErrorMessage errors={errors} name="email" />
                </Typography>
            </Box>
        </>
    );
};

export default PersonalData;