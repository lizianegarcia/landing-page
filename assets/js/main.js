// ------- ANIMAÇÕES --------
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  ScrollReveal().reveal(".container .letter-b", {
    duration: 1000,
    delay: 1000,
  });
  ScrollReveal().reveal(".container img", {
    duration: 1000,
    delay: 1500,
  });
  ScrollReveal().reveal(".container .text__left", {
    ...scrollRevealOption,
    origin: "right",
    delay: 2000,
  });
  ScrollReveal().reveal(".container .text__right", {
    ...scrollRevealOption,
    origin: "left",
    delay: 2000,
  });
  ScrollReveal().reveal(".container .explore", {
    duration: 1000,
    delay: 2500,
  });
  ScrollReveal().reveal(".container h5", {
    duration: 1000,
    interval: 500,
    delay: 3000,
  });
  ScrollReveal().reveal(".text", {
    duration: 400,
    delay: 800,
  });

// ------- MODAL ---------
  const button = document.querySelector(".contact");
  const modal = document.querySelector("dialog");
  const buttonClose = document.querySelector("dialog button");
  const body = document.body;
  
button.onclick = function () {
  modal.showModal();
  buttonClose.focus();
  body.setAttribute('ariahidden', true);
  body.setAttribute('tabindex', '-1');

};

buttonClose.onclick = function () {
  modal.close();
  body.setAttribute('ariahidden', false);
  body.setAttribute('tabindex', '0');
};

// ----------- VALIDAÇÃO DE CAMPOS FORM -------------
const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".input-required");
const spans = document.querySelectorAll(".span-required")
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const handlePhone = (e) => {
  let input = e.target
  input.value = phoneMask(input.value)
}
const phoneMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g,'')
  value = value.replace(/(\d{2})(\d)/,"($1) $2")
  value = value.replace(/(\d)(\d{4})$/,"$1-$2")
  return value
}

function setError (index) {
  inputs[index].style.border = '2px solid #fc6c6b';
  spans[index].style.display = 'block';
};

function removeError (index) {
  inputs[index].style.border = '';
  spans[index].style.display = 'none';
};

function nameValidate () {
  if(inputs[0].value.length < 3) {
    setError(0);
  } else {
    removeError(0);
  }
};

function emailValidate () {
  if(!emailRegex.test(inputs[1].value)) {
    setError(1);
  } else {
    removeError(1);
  }
}

function messageValidate () {
  if(inputs[2].value.length < 10) {
    setError(2);
  } else {
    removeError(2);
  }
};


form.addEventListener('submit', e => {
  e.preventDefault();
  nameValidate();
  emailValidate();
  messageValidate();
  modal.close();
});


