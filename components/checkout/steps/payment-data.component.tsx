import { FC } from "react";
import { CustomInput } from "../inputs/custom-input.components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { schema } from "../../../components/checkout/rules/payment-data-rules";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from '@hookform/error-message';

interface Props {
    data: any,
    handlePrevStep: () => void,
    submitData: (data:any) => void
}

export const PaymentData: FC<Props> = ({ data, handlePrevStep, submitData }: Props) => {
    type DataForm = yup.InferType<typeof schema>

    const {
        control,
        register,
        formState: { errors },
        handleSubmit,
        getValues,
    } = useForm<DataForm>({ resolver: yupResolver(schema), defaultValues: {} });

    const onSubmit = async (data: any) => {
        const dataValues = getValues();
        submitData(dataValues);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h5" mb={2}>Datos de pago</Typography>
            <Box mb={2}>
                <CustomInput
                    type="number"
                    name="cardNumber"
                    label="Número de tarjeta"
                    control={control}
                    defaultValue={data.cardNumber}
                    placeholder="XXXX XXXX XXXX XXXX"
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
                    defaultValue={data.cardName}
                    placeholder="Ej. MARÍA PÉREZ"
                />
                <Typography variant="caption" color="red">
                    <ErrorMessage errors={errors} name="cardName" />
                </Typography>
            </Box>
            <Box mb={2}>
                <CustomInput
                    type="text"
                    name="expirationDate"
                    label="Fecha de vencimiento"
                    control={control}
                    defaultValue={data.expirationDate}
                    placeholder="MM/AA"
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
                    defaultValue={data.securityCode}
                    placeholder="···"
                />
                <Typography variant="caption" color="red">
                    <ErrorMessage errors={errors} name="securityCode" />
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Button variant="outlined" onClick={handlePrevStep}>Anterior</Button>
                <Button variant="contained" type="submit">Enviar</Button>
            </Box>
        </form>
    );
};