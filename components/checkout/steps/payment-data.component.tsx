import { NextPage } from "next";
import CustomInput from "../inputs/custom-input.components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { schema } from "../../../components/checkout/rules";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from '@hookform/error-message';
import { useRouter } from "next/router";

interface Props {
    data: any,
    updateData: (newData: any) => void,
    handlePrevStep: () => void,
    activeStep: number
}

const PaymentData: NextPage<Props> = ({ data, updateData, handlePrevStep, activeStep }: Props) => {
    const router = useRouter();

    type DataForm = yup.InferType<typeof schema>

    const {
        control,
        register,
        formState: { errors },
        handleSubmit,
        getValues,
    } = useForm<DataForm>({ resolver: yupResolver(schema), defaultValues: {} });

    const onSubmit = async (data: any) => {
        router.push(`/`);
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
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Button variant="outlined" onClick={handlePrevStep}>Anterior</Button>
                <Button variant="contained" type="submit">Enviar</Button>
            </Box>
        </form>
    );
};

export default PaymentData;