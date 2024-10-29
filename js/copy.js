function copyEmail(){
    const email = 'a.kaipzhanov@gmail.com';

    const tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand("copy");

    document.body.removeChild(tempInput);

    const tooltip = document.querySelector('.contacts__copy .tooltip');
    tooltip.textContent = 'Скопировано!';

    setTimeout(() => {
        tooltip.textContent = "Скопировать";
    }, 1000)
}