<template>
  <h1>Instructions</h1>
  <p>
    Welcome to Quizathon! Jump into the quiz action by checking out the 'How to
    Play' guide on this very page. Ready, set, quiz!
  </p>
  <h2>How to Play:</h2>
  <p>
    1. Select a 'category' or opt for 'start random quiz' to dive into a varied
    mix of categories and difficulties, ranging from easy to hard questions.
  </p>
  <picture>
    <source
      srcset="/src/assets/instructions_img/desktopstart.png"
      media="(min-width: 800px)"
    />
    <img src="/src/assets/instructions_img/mobilestart.png" alt="" />
  </picture>
  <hr />
  <p>
    2. Once you've chosen a category, proceed to pick a difficulty level, then
    hit 'start quiz'. Or, for a mixture of easy, medium, and hard questions,
    simply click 'start quiz' right away.
  </p>
  <img
    class="desktop-img"
    src="/src/assets/instructions_img/selectdifficulty.png"
    alt=""
  />
  <hr />
  <p>3. Now, select your answer by clicking on one of the provided options.</p>
  <picture>
    <source
      srcset="/src/assets/instructions_img/quizstartdesktop.png"
      media="(min-width: 800px)"
    />
    <img
      class="desktop-img-alt"
      src="/src/assets/instructions_img/quizstart.png"
      alt=""
    />
  </picture>
  <hr />
  <p>
    4. Click 'confirm' to reveal whether the answer was correct or incorrect.
  </p>
  <picture>
    <source
      srcset="/src/assets/instructions_img/quizselectdesktop.png"
      media="(min-width: 800px)"
    />
    <img
      class="desktop-img-alt"
      src="/src/assets/instructions_img/quizselect.png"
      alt=""
    />
  </picture>
  <hr />
  <p>
    5. Green color signifies a correct response, while a red color indicates an
    incorrect choice. Press 'next' to proceed to the following question.
  </p>
  <p class="description">Correct answer</p>
  <picture>
    <source
      srcset="/src/assets/instructions_img/quizcorrectdesktop.png"
      media="(min-width: 800px)"
    />
    <img
      class="desktop-img-alt"
      src="/src/assets/instructions_img/quizcorrect.png"
      alt=""
    />
  </picture>
  <p class="description">Incorrect answer</p>
  <picture>
    <source
      srcset="/src/assets/instructions_img/quizwrongdesktop.png"
      media="(min-width: 800px)"
    />
    <img
      class="desktop-img-alt"
      src="/src/assets/instructions_img/quizwrong.png"
      alt=""
    />
  </picture>
  <hr />
  <p>
    6. Once all questions are answered, you'll see a summary of your results,
    with options to replay the quiz or return home to explore other categories.
  </p>
  <img
    class="desktop-img"
    src="/src/assets/instructions_img/quizsummary.png"
    alt=""
  />
</template>

<style scoped>
h1 {
  color: var(--Main-color);
}

h2 {
  color: var(--Main-color);
  margin-top: 20px;
  font-size: 30px;
}

p {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin-top: 30px;
  margin-bottom: 10px;
  color: #272727;
  font-size: 18px;
  width: 25rem;
  line-height: 1.3;
  text-align: center;
}

hr {
  border: 1px solid var(--Main-color);
  margin-bottom: 12px;
  border-radius: 6px;
  width: 100%;
}

.description {
  font-size: 18px;
  color: var(--Main-color);
  margin-bottom: 0;
}

img {
  width: 300px;
  padding: 20px;
  /* border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  border: solid 2px var(--Main-color); */
  margin-bottom: 10px;
}

/* @media (min-width: 900px) {
  p {
    font-size: 20px;
    width: 40rem;
  }
} */

@media (min-width: 800px) {
  p {
    font-size: 20px;
    width: 40rem;
  }

  img {
    width: 700px;
  }

  .desktop-img {
    width: 400px;
  }

  .desktop-img-alt {
    width: 500px;
  }
  hr {
    width: 70%;
  }
}

@media (min-width: 1400px) {
  hr {
    width: 60%;
  }
}
</style>
