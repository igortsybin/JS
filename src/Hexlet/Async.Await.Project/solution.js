import url from 'url';

// BEGIN (write your solution here)
import querystring from 'querystring';

export default (address, paramObj) => {
  if (!paramObj) {
    return address;
  }
  const Url = url.parse(address);
  console.log(Url);
  const { query } = url.parse(address);
  console.log(query);

}

// END
