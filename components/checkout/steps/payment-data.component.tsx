import CustomInput from "../inputs/custom-input.components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

const PaymentData = () => {
    const { control, formState: { errors } } = useFormContext();

    return (
        <>
            <Typography variant="h5" mb={2}>Datos de pago</Typography>
            <Box mb={2}>
                <CustomInput
                    type="number"
                    name="cardNumber"
                    label="Número de tarjeta"
                    control={control}
                    defaultValue=""
                    placeholder="Ingresa los números que aparecen en el frente de tu tarjeta"
                />
                <Typography variant="caption" color="red">
                    <ErrorMessage errors={errors} name="cardNumber" />
                </Typography>
            </Box>
            <Box mb={2}>
                <CustomInput
                    type="text"
                    name="cardName"
                    label="Nombre del titular"
                    control={control}
                    defaultValue=""
                    placeholder="Ingresa el nombre tal cual aparece en tu tarjeta"
                />
                <Typography variant="caption" color="red">
                    <ErrorMessage errors={errors} name="cardName" />
                </Typography>
            </Box>
            <Box mb={2}>
                <CustomInput
                    type="date"
                    name="expirationDate"
                    label="Fecha de vencimiento"
                    control={control}
                    defaultValue=""
                />
                <Typography variant="caption" color="red">
                    <ErrorMessage errors={errors} name="expirationDate" />
                </Typography>
            </Box>
            <Box mb={2}>
                <CustomInput
                    type="password"
                    name="securityCode"
                    label="Código de seguridad"
                    control={control}
                    defaultValue=""
                    placeholder="···"
                />
                <Typography variant="caption" color="red">
                    <ErrorMessage errors={errors} name="securityCode" />
                </Typography>
            </Box>
        </>
    );
};

export default PaymentData;