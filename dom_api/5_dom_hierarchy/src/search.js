const search = (document, tag) => {
  const coll = [...document.children];
  const initAcc = coll.filter((item) => item.tagName === tag.toUpperCase());
  return coll.reduce((acc, child) => [...acc, ...search(child, tag)], initAcc);
};

export default search;
