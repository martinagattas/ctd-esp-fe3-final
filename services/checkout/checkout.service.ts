import { Checkout } from "types/checkout.types";

export const checkoutPayment = async (data: Checkout): Promise<any> => {
    const checkoutData = JSON.stringify(data);
    const response = await fetch(`/api/checkout`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: "POST",
        body: checkoutData,
    });

    return await response.json();
}