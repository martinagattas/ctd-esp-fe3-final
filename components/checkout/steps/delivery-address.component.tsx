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

interface Props {
    data: any,
    updateData: (newData: any) => void,
    handleNextStep: () => void,
    handlePrevStep: () => void,
    activeStep: number
}

const DeliveryAddress: NextPage<Props> = ({ data, updateData, handleNextStep, handlePrevStep, activeStep }:Props ) => {
    type DataForm = yup.InferType<typeof schema>

    const {
        control,
        register,
        formState: { errors },
        handleSubmit,
        getValues,
    } = useForm<DataForm>({ resolver: yupResolver(schema), defaultValues: {} });

    const onSubmit = async (data: any) => {
        handleNextStep()
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Button variant="outlined" onClick={handlePrevStep}>Anterior</Button>
                <Button variant="outlined" type="submit">Siguiente</Button>
            </Box>
        </form>
    );
};

export default DeliveryAddress;