const questions = [
    {
        question: "Hvad har Gangster-testen\n" +
            "til formål at teste? ",
        answers: {
            A: "Funktioner",
            B: "Navigation og undersider",
            C: "Alt",
            D: "Farvevalg"
        },
        correct: "B"
    },
    {
        question: "Hvad har Think-Out-Loud-testen\n" +
            "til formål at teste? ",
        answers: {
            A: "Navigation",
            B: "Kun funktioner",
            C: "Farvevalg",
            D: "Komplette siders funktion og design"
        },
        correct: "D"
    },
    {
        question: "Hvad er vigtigt, at brugeren gør i\n" +
            "Think-Out-Loud-testen?",
        answers: {
            A: "Snakker om deres hverdag",
            B: "Stiller spørgsmål",
            C: "Tænker højt",
            D: "Tier stille"
        },
        correct: "C"
    },
    {
        question: "Hvad er det vigtigste at gøre,\n" +
            "når man laver Gangster-testen?",
        answers: {
            A: "Hjælpe brugeren med at navigere",
            B: "Bede brugeren om at tænke højt",
            C: "Sætte brugeren ind et tilfældigt sted på siden",
            D: "Fortælle brugeren om hjemmesiden"
        },
        correct: "C"
    },
    {
        question: "Hvor manger brugere tester man\n" +
            "ad gangen i begge brugerteste?",
        answers: {
            A: "1",
            B: "2",
            C: "3",
            D: "Det er ligemeget"
        },
        correct: "A"
    },
    {
        question: "Hvad er noget brugeren skal gøre\n" +
            "i begge brugerteste?",
        answers: {
            A: "Fortælle deres mening",
            B: "Løse opgaver for at teste design",
            C: "Være trygge og tilpasse",
            D: "Gøre hvad de vil"
        },
        correct: "B"
    }
];

let currentIndex = 0;
let score = 0;
let answered = false;

const questionEl = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
    answered = false;

    const q = questions[currentIndex];
    questionEl.textContent = q.question;

    answerButtons.forEach(btn => {
        const key = btn.dataset.option;
        btn.textContent = key + ": " + q.answers[key];

        btn.classList.remove("correct", "wrong");
    });
}

answerButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (answered) return;

        answered = true;

        const selected = btn.dataset.option;
        const correct = questions[currentIndex].correct;

        if (selected === correct) {
            btn.classList.add("correct");
            score++;
        } else {
            btn.classList.add("wrong");

            // also highlight correct one
            document.querySelector(`[data-option="${correct}"]`)
                .classList.add("correct");
        }
    });
});

nextBtn.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");

    document.getElementById("score-text").textContent =
        `Du fik ${score} / ${questions.length} korrekt!`;
}

// start
loadQuestion();