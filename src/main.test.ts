import { Main } from './main';

test('app setup', async () => {
    const main = new Main();
    expect(main.setup()).toBeDefined();
});