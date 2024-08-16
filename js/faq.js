document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll(".faq-item__question");

    questions.forEach(function(question) {
        question.addEventListener("click", function() {
            const answer = this.nextElementSibling;

            if (answer.classList.contains("open")) {
                answer.classList.remove("open");
            } else {
                // Fechar todas as outras respostas antes de abrir a atual
                document.querySelectorAll(".faq-item__answer").forEach(function(item) {
                    item.classList.remove("open");
                });

                answer.classList.add("open");
            }
        });
    });
});
