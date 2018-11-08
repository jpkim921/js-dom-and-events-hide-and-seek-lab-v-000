function getFirstSelector (selector) {
  return document.querySelector(selector);
}

function nestedTarget () {
  return document.querySelector('#nested .target');
}

function deepestChild () {
  const nodes =  document.querySelectorAll('div#grand-node div')
  return nodes[nodes.length - 1]
}

function increaseRankBy (n) {
  const nodes = document.querySelectorAll('.ranked-list')
}
