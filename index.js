const input = document.querySelector('#guess');
const button = document.querySelector('#btn');
const answer = Math.floor(Math.random() * 20) + 1;

button.addEventListener('click', play);
input.addEventListener('keypress', function(e) {
    if (e.keyCode === 13)
    play();
})

function play() {

    const userNumber = document.querySelector('#guess').value;
    if (userNumber < 1 || userNumber > 20) {
        Swal.fire({
            icon: 'error',
            title: 'Ой!',
            text: 'Введи число от 1 до 20!',
        })
    }

    else if (isNaN(userNumber)) {
        Swal.fire({
            icon: 'error',
            title: 'Ой!',
            text: 'Нужно ввести число!',
        })
    }

    else {
        if (userNumber < answer) {
            Swal.fire('Попробуй число повыше!',
            'Компьютер пока побеждает!')
        }
        else if (userNumber > answer) {
            Swal.fire('Попробуй число пониже!',
            'Компьютер пока побеждает!')
        }
        else {
            Swal.fire({
                title: 'Победа!',
                imageUrl: 'https://images.unsplash.com/photo-1569705460033-cfaa4bf9f822?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmV0dGl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=60',
                imageWidth: 600,
                imageHeight: 400,
                imageAlt: 'Custom image',
            })
        }
    }

}