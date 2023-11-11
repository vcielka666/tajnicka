document.addEventListener('DOMContentLoaded', function() {
    const slut = document.querySelector('.ponozka');

    const answers = {
        'prva_otazka': {answer: 'horse', imgClass: 'horseIMG', isCorrect: false},
        'druha_otazka': {answer: 'latex', imgClass: 'latexIMG', isCorrect: false},
        'tretia_otazka': {answer: 'uchyl', imgClass: 'uchylIMG', isCorrect: false},
        'stvrta_otazka': {answer: 'pervitin', imgClass: 'pikoIMG', isCorrect: false}
    };

    let correctAnswersCount = 0;

    function checkAllAnswers() {
        if (correctAnswersCount === Object.keys(answers).length) {
            slut.style.display = 'block';
        }
    }

    for (let question in answers) {
        const inputElement = document.querySelector(`.${question} input`);
        const associatedImage = document.querySelector(`.${answers[question].imgClass}`);

        inputElement.addEventListener('input', function() {
            if (inputElement.value.toLowerCase() === answers[question].answer && !answers[question].isCorrect) {
                associatedImage.style.opacity = '1';
                answers[question].isCorrect = true;
                correctAnswersCount++;
                checkAllAnswers();
            } else if(inputElement.value.toLowerCase() !== answers[question].answer && answers[question].isCorrect) {
                associatedImage.style.opacity = '0';
                answers[question].isCorrect = false;
                correctAnswersCount--;
            }
        });
    }
});
