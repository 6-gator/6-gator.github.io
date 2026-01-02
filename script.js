function checkAccess(event) {
    event.preventDefault();

    const input = document.getElementById('passwordField');
    const pass = input.value;
    const correctPassword = "gator";

    if (pass === correctPassword) {
        window.location.href = "https://www.google.com";
    } else {
        input.value = "";
        input.focus();
    }
}

document.getElementById('access').addEventListener('submit', checkAccess);

document.addEventListener('click', () => {
    document.getElementById('passwordField').focus();
});
