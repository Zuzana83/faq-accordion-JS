    // Solution #1
    const questions = document.querySelectorAll(".accordion-item");

    questions.forEach(function(question) {
        const btn = question.querySelector(".accordion-question-wrapper");
        // console.log(btn);
        btn.addEventListener("click", function() {
            questions.forEach(function(item) {
                if(item != question) {
                    item.classList.remove("show");
                }
            });
            question.classList.toggle("show");
            console.log("button clicked!")
        });
    });

    //   Solution #2
      // const questions = document.querySelectorAll(".accordion-question");

      // questions.forEach((question) => {
      //     question.addEventListener("click", function(e) {
      //         const currentQuestion = e.target.parentElement.parentElement;

      //         currentQuestion.classList.toggle("show");
      //     });
      // });
