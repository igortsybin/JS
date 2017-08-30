import qs from 'querystring';
import url from 'url';
import solution from '../solution';

describe('MergeParams', () => {
  it('without params 1', () => {
    const address = 'https://ru.hexlet.io/';
    const actual = solution(address);
    expect(actual).toBe(address);
  });

  it('without params 2', () => {
    const address = 'https://yandex.com/?page=10&per=5';
    const actual = solution(address);
    expect(actual).toBe(address);
  });

  it('add and update params', () => {
    const address = 'amazon.com/search?page=10&per=5';
    const actual = solution(address, { page: 100, per: 8, order: 'desc' });
    expect(actual).toBe('amazon.com/search?page=100&per=8&order=desc');
  });

  it('removes params with `null` value', () => {
    const address = 'amazon.com/search?page=10&per=5';
    const actual = solution(address, { order: 'desc', per: null });
    const query = qs.parse(url.parse(actual).query);
    expect(actual).toContain('amazon.com/search?');
    expect(query.order).toBe('desc');
    expect(query.page).toBe('10');
    expect(query.per).toBeUndefined();
  });
});
