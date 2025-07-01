// ==============================
// ボタン選択系のハンドラまとめ
// ==============================

// 撮影内容の選択
let selectedPhotoType = '';
function selectPhototype(element) {
    document.querySelectorAll('.phototype-buttons button').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
    selectedPhotoType = element.innerText;
    console.log('選択された撮影内容:', selectedPhotoType);
}

// 自然分娩 or 帝王切開
function selectchildbirth(element) {
    document.querySelectorAll('.childbirth-buttons button').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
    childbirthCount = element.innerText;
    selectedchildbirthTime = childbirthTimes[childbirthCount] || '';
    console.log('選択された出産方法:', childbirthCount);
    fetchAvailability(currentDate);
}

// お子様の性別
function selectchildsgender(element) {
    document.querySelectorAll('.childsgender-buttons button').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
    childsgenderCount = element.innerText;
    selectedChildGender = element.innerText;
    console.log('選択された性別:', selectedChildGender);
    fetchAvailability(currentDate);
}

// ご兄弟の性別
function selectBrothersgender(element) {
    document.querySelectorAll('.Brothersgender-buttons button').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
    BrothersgenderCount = element.innerText;
    selectedBrothersGender = element.innerText;
    console.log('兄弟の性別:', selectedBrothersGender);
    fetchAvailability(currentDate);
}

// 生花撮影の有無
function selectFreshflowerphotography(element) {
    document.querySelectorAll('.Freshflowerphotography-buttons button').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
    FreshflowerphotographyCount = element.innerText;
    selectedFreshFlowerOption = element.innerText;
    console.log('生花撮影希望:', selectedFreshFlowerOption);
    fetchAvailability(currentDate);
}

// ヘアメイクの有無
function selectadulthairmakeup(element) {
    document.querySelectorAll('.adulthairmakeup-buttons button').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
    adulthairmakeupCount = element.innerText;
    selectedHairMakeupOption = element.innerText;
    console.log('ヘアメイク希望:', selectedHairMakeupOption);
    fetchAvailability(currentDate);
}

// お支度風景撮影の有無（七五三・お宮参り）
function selectPreparationPhoto(element) {
    document.querySelectorAll('.preparationphoto-buttons button').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
    preparationPhotoOption = element.innerText;
    console.log('選択されたお支度風景撮影の有無:', preparationPhotoOption);
}

// 着物レンタル希望の有無（任意追記あり）
function selectKimonoRental(element) {
    document.querySelectorAll('.kimono-buttons button').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
    kimonoRentalOption = element.innerText;
    console.log('選択された着物レンタル希望:', kimonoRentalOption);

    const followupMessage = document.getElementById('kimono-followup');
    if (kimonoRentalOption === '有り') {
        followupMessage.style.display = 'block';
    } else {
        followupMessage.style.display = 'none';
    }
}

// お支度希望の有無
function selectHairMakeup(element) {
    document.querySelectorAll('.hairmakeup-buttons button').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
    hairMakeupOption = element.innerText;
    console.log('選択されたお支度希望:', hairMakeupOption);
}

// メニューセクション切り替え
function showMenu(menu) {
    // すべてのボタン非アクティブに
    document.querySelectorAll('.menu-sections button').forEach(btn => btn.classList.remove('active'));
    // すべてのセクション非表示に
    document.querySelectorAll('.menu-section').forEach(section => {
        section.classList.remove('active');
        section.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
    });

    // 該当ボタン・セクションを有効化
    const selectedButton = document.querySelector(`.menu-sections button[onclick="showMenu('${menu}')"]`);
    if (selectedButton) {
        selectedButton.classList.add('active');
        selectedMenu = selectedButton.innerText;
    }

    document.getElementById(menu).classList.add('active');

    // トリートメントテキストや価格のリセット
    document.getElementById('treatment-text').innerHTML = '';
    selectedSymptom = '';
    irradiationsCount = '';
    menuPrice = 0;
    optionsPrice = 0;
    totalAmount = 0;

    updateDisplayInfo();
}
