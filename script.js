document.getElementById('yes').addEventListener('click', function() {
    document.getElementById('result').innerHTML = 'Obrigado por aceitar!';
});

document.getElementById('no').addEventListener('mouseover', function() {
    document.getElementById('result').innerHTML = 'Você disse não... 😢';
});

document.getElementById('no').addEventListener('mouseout', function() {
    document.getElementById('result').innerHTML = '';
});
