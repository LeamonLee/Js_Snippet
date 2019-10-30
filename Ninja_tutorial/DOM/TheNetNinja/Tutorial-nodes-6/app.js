const banner = document.querySelector('#page-banner');

// it's gonna return a number
console.log('#page-banner node type is:', banner.nodeType);
// it's gonna return element name ex: div
console.log('#page-banner node name is:', banner.nodeName);
console.log('#page-banner has child nodes:', banner.hasChildNodes());

// if we pass in true into clonNode(), it's gonna return all of the nested elements inside it.
// however, if we didn't pass in true, it's only gonna return itself without any elements inside it. 
const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);
