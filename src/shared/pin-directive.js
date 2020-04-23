function applyStyle(element, binding) {
  // if (binding.arg !== 'position') return;
  // Object.keys(binding.modifiers).forEach((key) => {
  //   element.style[key] = '5px';
  // });
  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });
  element.style.position = 'absolute';
  // element.style.bottom = '5px';
  // element.style.right = '5px';
}

// export default {
//   bind: (element, binding) => {
//     applyStyle(element, binding);
//   },
//   update: (element, binding) => {
//     applyStyle(element, binding);
//   },
//   // inserted: (element, binding) => {},
// fires when bound element is inserted in parent node
//   // componenentUpdated: (element, binding) => {}
// fires only after all children have been updated
//   // unbind: (element, binding) => {}
// fires when directive is unbound from parent component
// };


// shorthand for directive to bind and update
export default function (element, binding) {
  applyStyle(element, binding);
}
