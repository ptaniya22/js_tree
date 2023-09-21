//document.getElementById('tree').innerHTML - заменяет содержимое  id элемента в html

let count = prompt('Enter the number of symbols');
if (isNaN(count)) {
  alert('Error!');
  count = 'Error!';
} else {
  console.log('кол-во элементов - ', count);
  let fillSmb = prompt('Enter the symbol to fill the shape');
  let stopSmb = prompt('Enter the symbol to finish of string');

  let spaceStr = '';
  let tempStr = '';

  document.getElementById('tree').innerHTML;

  for (let i = 0; i < count; i++) {
    spaceStr = '';

    for (let j = 0; j < count - 1 - i; j++) {
      // console.log('spaceStr is', spaceStr);
      spaceStr = spaceStr + ' ';
    }
    // console.log('spaceStr is', spaceStr);
    // tempStr = tempStr + spaceStr;
    console.log(spaceStr + stopSmb + tempStr + tempStr + stopSmb + spaceStr);
    document.getElementById('tree').innerHTML =
      document.getElementById('tree').innerHTML +
      '<p class="wraper-text">' +
      (spaceStr + stopSmb + tempStr + tempStr + stopSmb + spaceStr) +
      '</p>';
    // console.log(spaceStr);
    tempStr = fillSmb + tempStr;
  }
}
