import * as yup from "yup";

export const schema = yup.object({
    address: yup
        .string()
        .required("Ingresa una dirección")
        .min(5, "La dirección debe tener al menos 5 caracteres")
        .max(20, "La dirección debe tener máximo 20 caracteres"),
    apartment: yup.string().notRequired(),
    city: yup.string().required("Ingresa la ciudad"),
    province: yup.string().required("Ingresa la provincia"),
    zipCode: yup.string().required("Ingresa el código postal")
});