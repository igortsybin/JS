import diff from '../diff';

describe('Diff', () => {
  it('should work', (done) => {
    diff('__test__/fixtures/file1', '__test__/fixtures/file2', (err, data) => {
      expect(data).toEqual([]);
      done();
    });
  });

  it('should work 2', (done) => {
    diff('__test__/fixtures/file1', '__test__/fixtures/file3', (err, data) => {
      expect(data).toEqual([[null, 'hello, world']]);
      done();
    });
  });

  it('should work 3', (done) => {
    diff('__test__/fixtures/file3', '__test__/fixtures/file2', (err, data) => {
      expect(data).toEqual([['hello, world', null]]);
      done();
    });
  });

  it('should work 4', (done) => {
    diff('__test__/fixtures/file4', '__test__/fixtures/file5', (err, data) => {
      const result = [
        ['text', 'ext'],
        ['', 'haha'],
        ['ehu', ''],
        ['', 'text'],
        ['aha', null],
      ];
      expect(data).toEqual(result);
      done();
    });
  });

  it('should work 5', (done) => {
    diff('__test__/fixtures/file5', '__test__/fixtures/file4', (err, data) => {
      const result = [
        ['ext', 'text'],
        ['haha', ''],
        ['', 'ehu'],
        ['text', ''],
        [null, 'aha'],
      ];
      expect(data).toEqual(result);
      done();
    });
  });

  it('shouldn\'t work 1', (done) => {
    diff('non-existent file', '__test__/fixtures/file5', (err, data) => {
      expect(err.errno).toBe(-2);
      done();
    });
  });

  it('shouldn\'t work 2', (done) => {
    diff('__test__/fixtures/file4', 'non-existent file', (err, data) => {
      expect(err.code).toEqual('ENOENT');
      done();
    });
  });
});
