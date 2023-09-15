import { FC } from "react";
import { CustomInput } from "../inputs/custom-input.component"; import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { schema } from "../../../components/checkout/rules/personal-data-rules";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from '@hookform/error-message';

interface Props{
    data: any,
    updateData: (newData: any) => void,
    handleNextStep: () => void
}

export const PersonalData: FC<Props> = ({ data, updateData, handleNextStep }:Props ) => {
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
        updateData({ personalData: dataValues });
        handleNextStep()
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h5" mb={2}>Datos personales</Typography>
            <Box mb={2}>
                <CustomInput
                    type="text"
                    name="name"
                    label="Nombre"
                    control={control}
                    defaultValue={data.name}
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
                    defaultValue={data.lastName}
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
                    defaultValue={data.email}
                    placeholder="Ej: mail@ejemplo.com"
                />
                <Typography variant="caption" color="red">
                    <ErrorMessage errors={errors} name="email" />
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Button variant="outlined" type="submit">Siguiente</Button>
            </Box>
        </form>
    );
};