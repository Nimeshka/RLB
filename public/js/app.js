let newLineSeparator = ''

function remove() {
  let text = document.getElementById('text').value
  document.getElementById('output').innerHTML = text.replace(
    /(\r\n|\n|\r)/gm,
    newLineSeparator
  )
  document.getElementById('copy-btn').style.display = 'block'
}

function toggleNewLineProp(checkbox) {
  newLineSeparator = checkbox.checked ? ' ' : ''
}

function copyToClipboard() {
  var range = document.createRange()
  range.selectNode(document.getElementById('output'))
  window.getSelection().removeAllRanges()
  window.getSelection().addRange(range)
  document.execCommand('copy')
  window.getSelection().removeAllRanges()

  document.getElementById('copied').style.display = 'block'

  setTimeout(() => {
    document.getElementById('copied').style.display = 'none'
  }, 2000)
}
