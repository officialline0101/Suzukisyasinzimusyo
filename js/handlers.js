function selectSymptom(button) {
  button.classList.toggle('active');
  selectedSymptom = [button.innerText];
  console.log('選択されたメニュー:', selectedSymptom);
}