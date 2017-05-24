import { l, isEmpty, head, tail, cons, reverse } from 'hexlet-pairs-data';
import { name, value, node, is, toString } from 'hexlet-html-tags';
import { reverse as reverseStr } from './strings';

// BEGIN (write your solution here)
export const map = (func, list) => {



  const iter = (current, acc) => {

    if (isEmpty(current)) return reverse(acc);

    return iter(tail(current), cons(func(head(current)), acc));


  }
  return iter(list, l());


}

export const mirror = (dom) => {

  //node => reverseStr(value(node))
  return map(element => node(name(element), reverseStr(value(element))), dom);


//return cons(head(dom), mirror(tail(dom)));

}
// END

export const b2p = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }

  let newElement;
  const element = head(elements);
  if (is('blockquote', element)) {
    newElement = node('p', value(element));
  } else {
    newElement = element;
  }

  return cons(newElement, b2p(tail(elements)));
};
// BEGIN
export const extractHeaders = (elements) => {
  const filtered = filter(element => is('h2', element), elements);
  return map(element => node('p', value(element)), filtered);
};

export const wordsCount = (tagName, word, elements) => {
  const filtered = filter(element => is(tagName, element), elements);
  const values = map(element => value(element), filtered);
  return reduce((text, acc) => wc(word, text) + acc, 0, values);
};
// END
