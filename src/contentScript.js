function addStyles() {
  const styles = `
    .injected-checkbox-container {
      padding-left: 12px;
      padding-top: 6px; 
    }
    .injected-label {
      display: inline-block;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
    }
  `;
  const styleElement = document.createElement('style');
  styleElement.innerHTML = styles;
  document.head.appendChild(styleElement);
}

function toggleCheckboxStatus(checkbox) {
  const orderId = checkbox.getAttribute('data-order-id');
  const isChecked = checkbox.checked;

  chrome.storage.sync.get('checkboxStatus', (data) => {
    let checkboxStatus = data.checkboxStatus || {};
    checkboxStatus[orderId] = isChecked;
    chrome.storage.sync.set({ checkboxStatus }, () => {
      console.log('Checkbox status saved');
    });
  });
}

function restoreCheckboxStatus(checkbox) {
  const orderId = checkbox.getAttribute('data-order-id');

  chrome.storage.sync.get('checkboxStatus', (data) => {
    const checkboxStatus = data.checkboxStatus || {};
    if (checkboxStatus.hasOwnProperty(orderId)) {
      checkbox.checked = checkboxStatus[orderId];
    }
  });
}

function injectCheckbox(targetElement, orderId) {
  const checkboxContainer = document.createElement('div');
  checkboxContainer.className = 'a-row injected-checkbox-container';

  const labelElement = document.createElement('label');
  labelElement.className = 'injected-label';

  const inputElement = document.createElement('input');
  inputElement.type = 'checkbox';
  inputElement.id = 'addToBuyAndShip';
  inputElement.name = 'addToBuyAndShip';

  const labelText = document.createTextNode(' Added to Buyandship?');

  labelElement.appendChild(inputElement);
  labelElement.appendChild(labelText);
  checkboxContainer.appendChild(labelElement);
  targetElement.prepend(checkboxContainer);

  inputElement.setAttribute('data-order-id', orderId);
  inputElement.addEventListener('change', () => {
    toggleCheckboxStatus(inputElement);
  });

  restoreCheckboxStatus(inputElement);
}


function injectCheckboxes() {
  const targetElements = document.querySelectorAll('.a-color-offset-background');

  targetElements.forEach((element, index) => {
    const orderId = `order-${index}`; // Replace this with a unique identifier for each order
    injectCheckbox(element, orderId);
  });
}

addStyles();
injectCheckboxes();