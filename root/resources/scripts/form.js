/*
SARAH'S CAKE SHOP
Form Javascript Code

Kyle Lehmann
lehmannkylej@gmail.com
Created: 5-3-2018

Filename: form.js
SUPPORTING FILES: N/A

Last Edited: 5-3-2018
*/

/*
===================
SHOW ADDITONAL INFO
===================
*/

function subCake() {
  if (document.getElementById('cake').checked == true) {
    document.getElementById('moreInfo').style.display = 'block';

    document.getElementById('cakeFormhead').style.display = 'block';
    document.getElementById('shopFormhead').style.display = 'none';
    document.getElementById('weddingFormhead').style.display = 'none';
    document.getElementById('donateFormhead').style.display = 'none';
    document.getElementById('otherFormhead').style.display = 'none';

    document.getElementById('dateLabel').style.display = 'block';
    document.getElementById('date').style.display = 'block';

    document.getElementById('donDateLabel').style.display = 'none';
    document.getElementById('donDate').style.display = 'none';

    document.getElementById('eventLabel').style.display = 'block';
    document.getElementById('event').style.display = 'block';

    document.getElementById('servingsLabel').style.display = 'block';
    document.getElementById('servings').style.display = 'block';

    document.getElementById('itemsLabel').style.display = 'block';
    document.getElementById('items').style.display = 'block';

    document.getElementById('addInfoLabel').style.display = 'block';
    document.getElementById('addInfo').style.display = 'block';

    document.getElementById('orgNameLabel').style.display = 'none';
    document.getElementById('orgName').style.display = 'none';

    document.getElementById('taxIDLabel').style.display = 'none';
    document.getElementById('taxID').style.display = 'none';

    document.getElementById('descripLabel').style.display = 'none';
    document.getElementById('descrip').style.display = 'none';
  }
}

function subShop() {
  if (document.getElementById('shop').checked == true) {
    document.getElementById('cakeFormhead').style.display = 'none';
    document.getElementById('shopFormhead').style.display = 'block';
    document.getElementById('weddingFormhead').style.display = 'none';
    document.getElementById('donateFormhead').style.display = 'none';
    document.getElementById('otherFormhead').style.display = 'none';

    document.getElementById('moreInfo').style.display = 'block';

    document.getElementById('dateLabel').style.display = 'block';
    document.getElementById('date').style.display = 'block';

    document.getElementById('donDateLabel').style.display = 'none';
    document.getElementById('donDate').style.display = 'none';

    document.getElementById('eventLabel').style.display = 'block';
    document.getElementById('event').style.display = 'block';

    document.getElementById('servingsLabel').style.display = 'block';
    document.getElementById('servings').style.display = 'block';

    document.getElementById('itemsLabel').style.display = 'block';
    document.getElementById('items').style.display = 'block';

    document.getElementById('addInfoLabel').style.display = 'block';
    document.getElementById('addInfo').style.display = 'block';

    document.getElementById('orgNameLabel').style.display = 'none';
    document.getElementById('orgName').style.display = 'none';

    document.getElementById('taxIDLabel').style.display = 'none';
    document.getElementById('taxID').style.display = 'none';

    document.getElementById('descripLabel').style.display = 'none';
    document.getElementById('descrip').style.display = 'none';
  }
}

function subWedding() {
  if (document.getElementById('wedding').checked == true) {
    document.getElementById('cakeFormhead').style.display = 'none';
    document.getElementById('shopFormhead').style.display = 'none';
    document.getElementById('weddingFormhead').style.display = 'block';
    document.getElementById('donateFormhead').style.display = 'none';
    document.getElementById('otherFormhead').style.display = 'none';

    document.getElementById('moreInfo').style.display = 'block';

    document.getElementById('dateLabel').style.display = 'block';
    document.getElementById('date').style.display = 'block';

    document.getElementById('donDateLabel').style.display = 'none';
    document.getElementById('donDate').style.display = 'none';

    document.getElementById('eventLabel').style.display = 'none';
    document.getElementById('event').style.display = 'none';

    document.getElementById('servingsLabel').style.display = 'block';
    document.getElementById('servings').style.display = 'block';

    document.getElementById('itemsLabel').style.display = 'block';
    document.getElementById('items').style.display = 'block';

    document.getElementById('addInfoLabel').style.display = 'block';
    document.getElementById('addInfo').style.display = 'block';

    document.getElementById('orgNameLabel').style.display = 'none';
    document.getElementById('orgName').style.display = 'none';

    document.getElementById('taxIDLabel').style.display = 'none';
    document.getElementById('taxID').style.display = 'none';

    document.getElementById('descripLabel').style.display = 'none';
    document.getElementById('descrip').style.display = 'none';
  }
}

function subDonate() {
  if (document.getElementById('donate').checked == true) {
    document.getElementById('cakeFormhead').style.display = 'none';
    document.getElementById('shopFormhead').style.display = 'none';
    document.getElementById('weddingFormhead').style.display = 'none';
    document.getElementById('donateFormhead').style.display = 'block';
    document.getElementById('otherFormhead').style.display = 'none';

    document.getElementById('moreInfo').style.display = 'block';

    document.getElementById('dateLabel').style.display = 'block';
    document.getElementById('date').style.display = 'block';

    document.getElementById('donDateLabel').style.display = 'block';
    document.getElementById('donDate').style.display = 'block';

    document.getElementById('eventLabel').style.display = 'none';
    document.getElementById('event').style.display = 'none';

    document.getElementById('servingsLabel').style.display = 'none';
    document.getElementById('servings').style.display = 'none';

    document.getElementById('itemsLabel').style.display = 'none';
    document.getElementById('items').style.display = 'none';

    document.getElementById('addInfoLabel').style.display = 'none';
    document.getElementById('addInfo').style.display = 'none';

    document.getElementById('orgNameLabel').style.display = 'block';
    document.getElementById('orgName').style.display = 'block';

    document.getElementById('taxIDLabel').style.display = 'block';
    document.getElementById('taxID').style.display = 'block';

    document.getElementById('descripLabel').style.display = 'block';
    document.getElementById('descrip').style.display = 'block';
  }
}

function subOther() {
  if (document.getElementById('other').checked == true) {
    document.getElementById('cakeFormhead').style.display = 'none';
    document.getElementById('shopFormhead').style.display = 'none';
    document.getElementById('weddingFormhead').style.display = 'none';
    document.getElementById('donateFormhead').style.display = 'none';
    document.getElementById('otherFormhead').style.display = 'block';

    document.getElementById('moreInfo').style.display = 'block';

    document.getElementById('dateLabel').style.display = 'none';
    document.getElementById('date').style.display = 'none';

    document.getElementById('donDateLabel').style.display = 'none';
    document.getElementById('donDate').style.display = 'none';

    document.getElementById('eventLabel').style.display = 'none';
    document.getElementById('event').style.display = 'none';

    document.getElementById('servingsLabel').style.display = 'none';
    document.getElementById('servings').style.display = 'none';

    document.getElementById('itemsLabel').style.display = 'none';
    document.getElementById('items').style.display = 'none';

    document.getElementById('addInfoLabel').style.display = 'none';
    document.getElementById('addInfo').style.display = 'none';

    document.getElementById('orgNameLabel').style.display = 'none';
    document.getElementById('orgName').style.display = 'none';

    document.getElementById('taxIDLabel').style.display = 'none';
    document.getElementById('taxID').style.display = 'none';

    document.getElementById('descripLabel').style.display = 'block';
    document.getElementById('descrip').style.display = 'block';
  }
}
