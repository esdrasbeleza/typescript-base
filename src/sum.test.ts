import sum from './sum';

it('adds 1 + 1 to equal 2', () => {
    const result = sum(1, 1);
    expect(result).toBe(2);
});
