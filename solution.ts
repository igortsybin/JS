const buildNode = require('./buildNode');

const argTypes = {
    body: arg => typeof arg === 'string',
    children: arg => arg instanceof Array,
    attributes: arg => arg instanceof Object,
};

const argDo = {
    body: arg => arg,
    children: arg => arg.map(a => parse(a)),
    attributes: arg => arg,
};

const getAttrName = (arg) =>
    Object.keys(argTypes).filter(key => argTypes[key](arg))[0];

const parse = (data) => {
    const args = data.slice(1)
        .reduce((acc, arg) => ({...acc, [getAttrName(arg)]: argDo[getAttrName(arg)](arg) }), { name: data[0], attributes: {}, body: '', children: [] });
    return buildNode(args.name, args.attributes, args.body, args.children);
};

export default parse;