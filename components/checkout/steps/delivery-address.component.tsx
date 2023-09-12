import CustomInput from "../inputs/custom-input.components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

const DeliveryAddress = () => {
    const { control, formState: { errors } } = useFormContext();

    return (
        <>
            <Typography variant="h5" mb={2}>Datos de entrega</Typography>
            <Box mb={2}>
                <CustomInput
                    type="text"
                    name="address"
                    label="Dirección"
                    control={control}
                    defaultValue=""
                    placeholder="Ej: Cerro Nevado"
                />
                <Typography variant="caption" color="red">
                    <ErrorMessage errors={errors} name="address" />
                </Typography>
            </Box>
            <Box mb={2}>
                <CustomInput
                    type="text"
                    name="apartment"
                    label="Departamento / Piso"
                    control={control}
                    defaultValue=""
                    placeholder="Ej: Dto 3, Piso 5"
                />
                <Typography variant="caption" color="red">
                    <ErrorMessage errors={errors} name="apartment" />
                </Typography>
            </Box>
            <Box mb={2}>
                <CustomInput
                    type="text"
                    name="city"
                    label="Ciudad"
                    control={control}
                    defaultValue=""
                    placeholder="Ej: Mendoza"
                />
                <Typography variant="caption" color="red">
                    <ErrorMessage errors={errors} name="city" />
                </Typography>
            </Box>
            <Box mb={2}>
                <CustomInput
                    type="text"
                    name="province"
                    label="Provincia"
                    control={control}
                    defaultValue=""
                    placeholder="Ej: Mendoza"
                />
                <Typography variant="caption" color="red">
                    <ErrorMessage errors={errors} name="province" />
                </Typography>
            </Box>
            <Box mb={2}>
                <CustomInput
                    type="text"
                    name="zipCode"
                    label="Código Postal"
                    control={control}
                    defaultValue=""
                    placeholder="Ej: 5501"
                />
                <Typography variant="caption" color="red">
                    <ErrorMessage errors={errors} name="zipCode" />
                </Typography>
            </Box>
        </>
    );
};

export default DeliveryAddress;