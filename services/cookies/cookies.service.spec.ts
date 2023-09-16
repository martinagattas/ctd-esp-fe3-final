import { getCookie, setCookie } from "./cookies.service";

describe('CookieService', () => {
    it('should set and get a cookie successfully', () => {
        const cookieName = "testCookie";
        const cookieValue = "testValue";

        setCookie(cookieName, cookieValue, 10);

        const retrievedValue = getCookie(cookieName);

        expect(retrievedValue).toBe(cookieValue);
    });
});