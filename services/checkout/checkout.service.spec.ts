import { checkoutPayment } from "./checkout.service";

describe('CheckoutService', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should make a successful payment', async () => {
        const mockData = { status: 'success', message: 'Payment successful' };
        const mockResponse = {
            json: jest.fn().mockResolvedValue(mockData),
        };
        jest.spyOn(global, 'fetch').mockResolvedValue(mockResponse as any);

        const checkoutData = {
            customer: {
                name: "Martina",
                lastname: "Gattas",
                email: "martigattas@hotmail.com",
                address: {
                    address1: "Cerro Alegre 123",
                    address2: "",
                    city: "Godoy Cruz",
                    state: "Mendoza",
                    zipCode: "5501",
                },
            },
            card: {
                number: "4242424242424242",
                cvc: "000",
                expDate: "10/24",
                nameOnCard: "MARTINA GATTAS",
            },
            order: {
                name: "Marvel Previews (2017)",
                image: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
                price: 72,
            },
        };
        const response = await checkoutPayment(checkoutData);

        expect(response).toEqual(mockData);
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith('/api/checkout', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(checkoutData),
        });
    });

    it('should handle a card without authorization error', async () => {
        const mockError = new Error('The card cannot authorize the payment. Please call your bank before try again');
        jest.spyOn(global, 'fetch').mockRejectedValue(mockError);

        const checkoutData = {
            customer: {
                name: "Martina",
                lastname: "Gattas",
                email: "martigattas@hotmail.com",
                address: {
                    address1: "Cerro Alegre 123",
                    address2: "",
                    city: "Godoy Cruz",
                    state: "Mendoza",
                    zipCode: "5501",
                },
            },
            card: {
                number: "4000400040004000",
                cvc: "000",
                expDate: "10/24",
                nameOnCard: "MARTINA GATTAS",
            },
            order: {
                name: "Marvel Previews (2017)",
                image: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
                price: 72,
            },
        };
        try {
            await checkoutPayment(checkoutData);
        } catch (error) {
            expect(error).toEqual(mockError);
            expect(fetch).toHaveBeenCalledTimes(1);
            expect(fetch).toHaveBeenCalledWith('/api/checkout', {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(checkoutData),
            });
        }
    });
});