const ALERT_SHOW_TIME = 5000;

const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.width = '50%';
  alertContainer.style.minHeight = '50px';
  alertContainer.style.lineHeight = '1em';
  alertContainer.style.lineheight = '5px';
  alertContainer.style.transform = 'translate(-50%, -50%)';
  alertContainer.style.left = '50%';
  alertContainer.style.top = '50%';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  document.body.append(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {isEscapeKey, showAlert};
