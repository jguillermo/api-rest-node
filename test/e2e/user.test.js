const request = require('@request');

describe('List User', () => {
    test('List all users', async () => {
        let { body, statusCode } = await request('users');
        expect(statusCode).toEqual(200);
        expect(body).toEqual([
            {"id": "365d624e-8bd9-4644-86f8-ee6b98dfd036", "name": "jose"}, 
            {"id": "040a1a2c-2e00-437d-a6e6-f05b0704dfad", "name": "jose"}
        ]);
    });
});