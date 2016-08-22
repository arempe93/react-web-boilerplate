module.exports = function(source) {
  this.cacheable();
  return `@import './src/containers/App/styles/index.scss';
    ${source}`;
}
