import Provider from './provider';

describe("Test provider class", () => {
    it("should return same instance", () => {
        const p1 = Provider.getInstance();
        const p2 = Provider.getInstance();

        expect(p1).toEqual(p2);
    });

    
})