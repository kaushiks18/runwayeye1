document.addEventListener('DOMContentLoaded', function() {
    const preOrderButton = document.querySelector('.cta-button');
    preOrderButton.addEventListener('click', function(event) {
        event.preventDefault();
        window.open('book.html', '_blank');
    });
});
