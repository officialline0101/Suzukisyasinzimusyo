function selectDate(cell) {
  if (cell.classList.contains('unavailable')) return;
  document.querySelectorAll('.calendar td').forEach(td => td.classList.remove('selected'));
  cell.classList.add('selected');
  console.log('日付選択:', cell.dataset.date);
}