// import parse from '../solution';
const solution = require('../solution');
const PairedTag = require('../PairedTag');
const SingleTag = require('../SingleTag');


// describe('HtmlBuilder', () => {
//     it('#parse', () => {
const data = ['html', [
    ['head', [
        ['title', 'hello, hexlet!'],
    ]],
    ['body', [
        ['h1', { class: 'header' }, 'html builder example'],
        ['div', [
            ['span', 'span text'],
            ['hr'],
        ]],
    ]],
]];

const ast = solution.parse(data);
const expected = new PairedTag('html', {}, '', [
    new PairedTag('head', {}, '', [
        new PairedTag('title', {}, 'hello, hexlet!'),
    ]),
    new PairedTag('body', {}, '', [
        new PairedTag('h1', { class: 'header' }, 'html builder example'),
        new PairedTag('div', {}, '', [
            new PairedTag('span', {}, 'span text'),
            new SingleTag('hr'),
        ]),
    ]),
]);

expect(ast).toEqual(expected);
// });

    // it('#toString', () => {
    const data1 = ['html', [
        ['head', [
            ['title', 'hello, hexlet!'],
        ]],
        ['body', [
            ['div', { class: 'separator' }],
            ['h1', { class: 'header' }, 'html builder example'],
            ['div', [
                ['img', { class: 'image', href: '#' }],
                ['span', 'span text2'],
            ]],
        ]],
    ]];

    const ast1 = solution.parse(data1);
    const expected1 = `<html><head><title>hello, hexlet!</title></head><body><div class="separator"></div><h1 class="header">html builder example</h1><div><img class="image" href="#"><span>span text2</span></div></body></html>`;
    expect(ast1.toString()).toEqual(expected1);

// });
// });