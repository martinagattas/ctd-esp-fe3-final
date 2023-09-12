import CustomInput from "../inputs/custom-input.components";
import Typography from "@mui/material/Typography";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

const PaymentData = () => {
    const { control, formState: { errors } } = useFormContext();

    return (
        <>
            <Typography variant="h5">Datos de pago</Typography>
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
            <CustomInput
                type="date"
                name="expirationDate"
                label="Fecha de vencimiento"
                control={control}
                defaultValue=""
                placeholder="DD/MM/AAAA"
            />
            <Typography variant="caption" color="red">
                <ErrorMessage errors={errors} name="expirationDate" />
            </Typography>
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
        </>
    );
};

export default PaymentData;