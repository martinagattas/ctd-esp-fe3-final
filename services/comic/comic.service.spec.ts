import { getComicById } from "./comic.service";
import comic from "dh-marvel/test/mocks/comic";
import comicWithoutStock from "dh-marvel/test/mocks/comicWithoutStock";

const mockFetch = async (url: string): Promise<Response> => {
    if (url.endsWith("/api/comics/1")) {
        return Promise.resolve({
            json: async () => ({
                ...comic,
                price: 72,
                oldPrice: 87,
                stock: 2
            })
        } as Response);
    } else if (url.endsWith("/api/comics/10")) {
        return Promise.resolve({
            json: async () => ({
                ...comicWithoutStock,
                price: 48,
                oldPrice: 48,
                stock: 0
            })
        } as Response);
    } else {
        return Promise.resolve({
            json: async () => null
        } as Response);
    }
};

beforeEach(() => {
    (global as any).fetch = mockFetch;
});

afterEach(() => {
    delete (global as any).fetch;
});

describe('ComicLocalApiService', () => {
    describe('when fetching comic', () => {
        describe('when comic is found', () => {
            it('should return a valid comic', async () => {
                const data = await getComicById(1);
                expect(data).toStrictEqual({
                    ...comic,
                    price: 72,
                    oldPrice: 87,
                    stock: 2
                });
            });
        });

        describe('when comic is found with id that ends with 0', () => {
            it('should return a valid comic without stock', async () => {
                const data = await getComicById(10);
                expect(data).toStrictEqual({
                    ...comicWithoutStock,
                    price: 48,
                    oldPrice: 48,
                    stock: 0
                });
            });
        });

        describe('when comic not found', () => {
            it('should return a null response', async () => {
                const data = await getComicById(99);
                expect(data).toBeNull();
            });
        });
    });
});