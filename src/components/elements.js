/**
 * Holds the presentational elements 
 */

export const stockContainerElement = (root) => {
  const containerElement = document.createElement('div');
  containerElement.classList.add('stocks');
  root.appendChild(containerElement);
  return containerElement;
};
