
const questions = document.querySelectorAll('.faq');

questions.forEach(question => {
    const answer = question.querySelector('.answer');
    const icon_img = question.querySelector('.q-img');

    question.addEventListener('click', () => {
        answer.classList.toggle("answer-active");
        icon_img.classList.toggle("q-img-r");
    });
});