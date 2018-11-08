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

// function increaseRankBy (n) {
//   const nodes = document.querySelectorAll('.ranked-list')
// }


function increaseRankBy(n) {
  const nodes = document.querySelectorAll('.ranked-list')

  for (let i = 0, i < nodes.length; i++) {
    let children = nodes[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}
