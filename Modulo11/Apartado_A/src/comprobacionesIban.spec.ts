import { ibanBienFormado } from "./comprobacionesIban";

describe("IbanBienFormado", () => {
    test.each([
        ["ES21 1465 0100 72 2030876293", true],
        ["ES2114650100722030876293", true],    
        ["ES21-1465-0100-72-2030876293", true],    
        ["ES6621000418401234567891", true]
    ])(
        "Debería el número %p devolver el valor %p", 
        (accountNumber : string, expected : boolean) => {
        expect(ibanBienFormado(accountNumber)).toBe(expected);
        });
});