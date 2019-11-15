// const elems = document.querySelectorAll('.nav-link');
// elems.forEach((el) => {
//   const item = el;
//   item.onclick = () => {
//     const acElem = document.querySelector('.nav-link.active');
//     acElem.classList.remove('active');
//     item.classList.add('active');
//   };
// });

export default () => {
  const handle = ({ target }) => {
    const nav = target.closest('.nav');
    const current = nav.querySelector('a.active');
    current.classList.remove('active');
    const currentTabContentId = current.hash.slice(1);
    const currentTabContent = document.getElementById(currentTabContentId);
    currentTabContent.classList.remove('active');
    target.classList.add('active');
    const nextTabContentId = target.hash.slice(1);
    const nextTabContent = document.getElementById(nextTabContentId);
    nextTabContent.classList.add('active');
  };

  const links = document.querySelectorAll('a[data-toggle]');
  links.forEach((element) => {
    element.addEventListener('click', handle);
  });
};
