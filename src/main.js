const app = document.querySelector("#app-container");
const quizStartButton = document.querySelector("#quiz-start-button");
const quizStartButtonContainer = document.querySelector("#quiz-start-button-container");
const countdownContainer = document.querySelector("#countdown-container");
const questionContainer = document.querySelector("#question-container");
let isDialogMenuVisible = false;

const tooltipButton = document.querySelector("#tooltip-button").addEventListener("click", () => {
  if (!isDialogMenuVisible) {
    const dialogMenuContainer = document.createElement("div");
    dialogMenuContainer.classList = "dialog-menu-container";

    const dialogMenu = document.createElement("div");
    dialogMenu.classList = "dialog-menu";
    const contentList = document.createElement("ul");

    const rules = [
      "Bilsene uygulamasında 20 adet soru bulunmaktadır.",
      "Her soruda 4 şık bulunur.",
      "Her oynanışta rastgele 5 adet soru seçilir.",
      "Seçilen sorular 1 Hard, 2 Orta, 2 Basit soru şeklindedir.",
      "Soru puanlaması Hard: 30, Orta: 20, Basit: 15 şeklindedir.",
      "2 tane 1'er şık eleme, 2 tane de ipucu hakkım vardır. İstediğim soruda kullanabilirsin.",
    ];

    rules.forEach(rules => {
      const listItem = document.createElement("li");
      listItem.textContent = rules;
      contentList.appendChild(listItem);
    });

    dialogMenu.appendChild(contentList);

    const closeButton = document.createElement("button");
    closeButton.textContent = "Kapat";
    closeButton.classList = "dialog-menu-close-button";

    closeButton.addEventListener("click", () => {
      dialogMenuContainer.classList.remove("show");
      setTimeout(() => {
        app.removeChild(dialogMenuContainer);
        isDialogMenuVisible = false;
      }, 500);
    });

    const dialogMenuTitle = document.createElement("h3");
    dialogMenuTitle.textContent = "Bilgilendirme";
    dialogMenuTitle.classList = "dialog-menu-title";
    dialogMenuContainer.appendChild(dialogMenu);
    dialogMenu.appendChild(closeButton);
    dialogMenu.appendChild(dialogMenuTitle);
    app.appendChild(dialogMenuContainer);

    setTimeout(() => {
      dialogMenuContainer.classList.add("show");
    });
    isDialogMenuVisible = true;
  }
});

const questions = [
  {
    id: 1,
    soru: "Dünyanın en büyük okyanusu hangisidir?",
    zorluk: "Kolay",
    alan: "Coğrafya",
    secenekler: ["Hint Okyanusu", "Atlas Okyanusu", "Pasifik Okyanusu", "Arktik Okyanusu"],
    cevap: "Pasifik Okyanusu",
    hint: "Birçok ada ve kıyı ülkesine ev sahipliği yapmaktadır.",
  },
  {
    id: 2,
    soru: "İstanbul hangi kıtada yer almaktadır?",
    zorluk: "Kolay",
    alan: "Coğrafya",
    secenekler: ["Avrupa", "Asya", "Afrika", "Okyanusya"],
    cevap: "Avrupa",
    hint: "Şehir, Boğaziçi ile ayrılırken bir kısmı Avrupa kıtasında yer alır.",
  },
  {
    id: 3,
    soru: "Hangi gezegen Güneş Sistemi'nde en büyük boyuta sahiptir?",
    zorluk: "Kolay",
    alan: "Bilim",
    secenekler: ["Jüpiter", "Mars", "Venüs", "Satürn"],
    cevap: "Jüpiter",
    hint: "Gezegenin adı, Roma mitolojisindeki en büyük tanrıya atfen verilmiştir.",
  },
  {
    id: 4,
    soru: "İlk Türk kadın pilot kimdir?",
    zorluk: "Orta",
    alan: "Tarih",
    secenekler: ["Sabiha Gökçen", "Neslihan Yargıcı", "Havva Başak", "Ülkü Öztürk"],
    cevap: "Sabiha Gökçen",
    hint: "Kemal Atatürk tarafından 'Havacı Yüzbaşı' unvanı verilen kişidir.",
  },
  {
    id: 5,
    soru: "Ünlü ressam Leonardo da Vinci'nin en ünlü eseri hangisidir?",
    zorluk: "Orta",
    alan: "Sanat",
    secenekler: ["Mona Lisa", "Akşam Yemeği", "Vitruvius Adamı", "Son Akşam Yemeği"],
    cevap: "Mona Lisa",
    hint: "Tablo, Floransa'daki bir müzede sergilenmektedir ve gizemli bir gülümsemesi vardır.",
  },
  {
    id: 6,
    soru: "Hangi yıl Türkiye Cumhuriyeti ilan edilmiştir?",
    zorluk: "Kolay",
    alan: "Tarih",
    secenekler: ["1920", "1922", "1923", "1925"],
    cevap: "1923",
    hint: "Mustafa Kemal Atatürk'ün önderliğindeki Kurtuluş Savaşı sonrasında gerçekleşmiştir.",
  },
  {
    id: 7,
    soru: "Bir metrekare kaç metrekaredecimetredir?",
    zorluk: "Kolay",
    alan: "Matematik",
    secenekler: ["10", "100", "1000", "10000"],
    cevap: "100",
    hint: "1 metrekare = 100 cm x 100 cm",
  },
  {
    id: 8,
    soru: "Kimya periyodik tablosundaki Fe sembolü hangi elementi temsil eder?",
    zorluk: "Orta",
    alan: "Kimya",
    secenekler: ["Fosfor", "Flor", "Demir", "Kalsiyum"],
    cevap: "Demir",
    hint: "Demir, atom numarası 26 olan bir geçiş metalidir.",
  },
  {
    id: 9,
    soru: "Hangi gezegen güneş sistemimizde 'kırmızı gezegen' olarak bilinir?",
    zorluk: "Orta",
    alan: "Astronomi",
    secenekler: ["Mars", "Jüpiter", "Venüs", "Satürn"],
    cevap: "Mars",
    hint: "Gezegen, kızıl-kahverengi bir yüzeye sahiptir ve yüzeyindeki demir oksit nedeniyle kızıla yakın renkte görünür.",
  },
  {
    id: 10,
    soru: "Hangi ünlü bilim insanı yerçekimi kanununu keşfetmiştir?",
    zorluk: "Orta",
    alan: "Fizik",
    secenekler: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Marie Curie"],
    cevap: "Isaac Newton",
    hint: "Elma düşmesiyle ünlü bir hikayesi vardır.",
  },
  {
    id: 11,
    soru: "Hangi gezegen Güneş Sistemi'nde en hızlı dönüş yapan gezegendir?",
    zorluk: "Zor",
    alan: "Astronomi",
    secenekler: ["Dünya", "Jüpiter", "Venüs", "Mars"],
    cevap: "Jüpiter",
    hint: "Bir günü sadece yaklaşık 10 saat sürer.",
  },
  {
    id: 12,
    soru: "Hangi ülke piramitleriyle ünlüdür?",
    zorluk: "Kolay",
    alan: "Tarih",
    secenekler: ["Meksika", "Yunanistan", "Mısır", "Çin"],
    cevap: "Mısır",
    hint: "Nil Nehri'nin yanında yer alır.",
  },
  {
    id: 13,
    soru: "İnsan vücudunda kaç adet kalp bulunur?",
    zorluk: "Kolay",
    alan: "Biyoloji",
    secenekler: ["1", "2", "3", "4"],
    cevap: "1",
    hint: "Kalp, dolaşım sistemimizde önemli bir organdır.",
  },
  {
    id: 14,
    soru: "Hangi ünlü ressam 'Gece Bekçisi' adlı tabloyu yapmıştır?",
    zorluk: "Zor",
    alan: "Sanat",
    secenekler: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Rembrandt"],
    cevap: "Rembrandt",
    hint: "17. yüzyıl Hollanda ressamıdır.",
  },
  {
    id: 15,
    soru: "Hangi gezegen üzerinde yaşam olduğu keşfedilmiştir?",
    zorluk: "Zor",
    alan: "Astronomi",
    secenekler: ["Mars", "Jüpiter", "Venüs", "Uranüs"],
    cevap: "Daha keşfedilmedi",
    hint: "Şu anda bilimsel olarak doğrulanmış bir yaşam bulunmamaktadır.",
  },
  {
    id: 16,
    soru: "Hangi yıl Fransız Devrimi başlamıştır?",
    zorluk: "Orta",
    alan: "Tarih",
    secenekler: ["1789", "1804", "1848", "1871"],
    cevap: "1789",
    hint: "Bastille Hapishanesi'nin halk tarafından alınmasıyla başlamıştır.",
  },
  {
    id: 17,
    soru: "Hangi gezegen Güneş Sistemi'nde en büyük yüzey alanına sahiptir?",
    zorluk: "Zor",
    alan: "Astronomi",
    secenekler: ["Jüpiter", "Mars", "Venüs", "Satürn"],
    cevap: "Satürn",
    hint: "Gaz devi olan bu gezegenin etrafını halkalar sarmaktadır.",
  },
  {
    id: 18,
    soru: "Hangi element dünyanın en yaygın elementidir?",
    zorluk: "Orta",
    alan: "Kimya",
    secenekler: ["Demir", "Oksijen", "Hidrojen", "Karbon"],
    cevap: "Oksijen",
    hint: "Hava bileşiminde büyük oranda bulunur ve canlılar için önemlidir.",
  },
  {
    id: 19,
    soru: "Hangi ünlü bilim insanı E=mc^2 formülünü ortaya koymuştur?",
    zorluk: "Orta",
    alan: "Fizik",
    secenekler: ["Albert Einstein", "Isaac Newton", "Marie Curie", "Galileo Galilei"],
    cevap: "Albert Einstein",
    hint: "Genel görelilik teorisi ile tanınır ve ışığın hızını temel alır.",
  },
  {
    id: 20,
    soru: "Hangi ülke Eiffel Kulesi'ne ev sahipliği yapmaktadır?",
    zorluk: "Kolay",
    alan: "Turizm",
    secenekler: ["İngiltere", "Fransa", "İtalya", "Almanya"],
    cevap: "Fransa",
    hint: "Başkenti Paris'tir.",
  },
];

const RandomQuestion = (questions, DifficultyLevels) => {
  const selectedQuestions = [];
  const filteredQuestions = {};

  for (const question of questions) {
    filteredQuestions[question.zorluk] = filteredQuestions[question.zorluk] || [];
    filteredQuestions[question.zorluk].push(question);
  }

  for (const zorluk in DifficultyLevels) {
    const questionCount = DifficultyLevels[zorluk];
    const sorular = filteredQuestions[zorluk];

    for (let i = 0; i < questionCount; i++) {
      const randomNumberGenerator = Math.floor(Math.random() * sorular.length);
      selectedQuestions.push(sorular[randomNumberGenerator]);
      sorular.splice(randomNumberGenerator, 1);
    }
  }

  return selectedQuestions;
};

const DifficultyLevels = {
  Kolay: 2,
  Orta: 2,
  Zor: 1,
};

const selectedQuestions = RandomQuestion(questions, DifficultyLevels, 5);

let currentQuestionIndex = 0;
const answers = [];

let wandButtonCount = 0;
let hintButtonCount = 0;

const showQuestion = () => {
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = "";
  const currentQuestion = selectedQuestions[currentQuestionIndex];
  const questionArea = document.createElement("div");
  questionArea.classList.add("questions");

  const Buttons = document.createElement("div");
  Buttons.classList.add("quiz-buttons-container");

  const wandButton = document.createElement("button");
  wandButton.innerHTML = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    stroke="#fff"
    fill="transparent"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-flame"
  >
    <path
      d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
    />
  </svg>
`;
  wandButton.addEventListener("click", () => {
    if (wandButtonCount < 2) {
      removeIncorrectOptions();
      wandButtonCount++;
      if (wandButtonCount === 2) {
        wandButton.disabled = true;
      }
    }
  });
  Buttons.appendChild(wandButton);

  const hintButton = document.createElement("button");
  hintButton.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="transparent" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles">
  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
  <path d="M5 3v4"></path>
  <path d="M19 17v4"></path>
  <path d="M3 5h4"></path>
  <path d="M17 19h4"></path>
</svg>
`;
  hintButton.addEventListener("click", () => {
    if (hintButtonCount < 2) {
      QuestionTips();
      hintButtonCount++;
      if (hintButtonCount === 2) {
        hintButton.disabled = true;
      }
    }
  });

  const QuestionTips = () => {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    if (currentQuestion) {
      const hintMetni = currentQuestion.hint;
      alert(hintMetni);
    }
  };

  Buttons.appendChild(hintButton);

  questionArea.appendChild(Buttons);

  const questionDifficulty = document.createElement("span");
  questionDifficulty.textContent = `${currentQuestion.zorluk} / ${currentQuestion.alan} `;
  questionDifficulty.classList.add("question-difficulty");
  questionArea.appendChild(questionDifficulty);

  // TITLE * SORU BASLIGI
  const questionElement = document.createElement("p");
  questionElement.textContent = `${currentQuestion.soru}`;
  questionElement.classList.add("question-title");
  questionArea.appendChild(questionElement);

  // ANSWER * CEVAPLAR
  const optionsList = document.createElement("ul");
  for (const option of currentQuestion.secenekler) {
    const optionItem = document.createElement("li");
    optionItem.classList.add("question-option");

    const optionLabel = document.createElement("label");
    optionLabel.textContent = option;

    const optionInput = document.createElement("input");
    optionInput.type = "radio";
    optionInput.name = "answer";
    optionInput.value = option;

    optionLabel.appendChild(optionInput);
    optionItem.appendChild(optionLabel);
    optionsList.appendChild(optionItem);
  }
  questionArea.appendChild(optionsList);
  questionContainer.appendChild(questionArea);

  // İleri düğmesi
  const nextButton = document.createElement("button");
  nextButton.textContent =
    currentQuestionIndex < selectedQuestions.length - 1 ? "İleri" : "Sonuçları Göster";
  nextButton.classList.add("next-button");

  nextButton.addEventListener("click", () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    selectedOption
      ? ((answers[currentQuestionIndex] = selectedOption.value),
        currentQuestionIndex < selectedQuestions.length - 1
          ? (currentQuestionIndex++, showQuestion())
          : showResults())
      : alert("Lütfen bir seçenek seçiniz.");
  });

  questionArea.append(nextButton);

  // Geri düğmesi
  const previousButton = document.createElement("button");
  previousButton.textContent = "Geri";
  previousButton.classList.add("previous-button");

  currentQuestionIndex === 0 ? (previousButton.disabled = true) : "";
  previousButton.addEventListener("click", () => {
    currentQuestionIndex--;
    showQuestion();
  });
  questionArea.appendChild(previousButton);
};

const removeIncorrectOptions = () => {
  const options = document.querySelectorAll('input[name="answer"]');
  let incorrectOptionRemoved = false;

  options.forEach(option => {
    if (!isCorrectOption(option.value) && !incorrectOptionRemoved) {
      const optionItem = option.parentNode.parentNode;
      optionItem.parentNode.removeChild(optionItem);
      incorrectOptionRemoved = true;
    }
  });
};

const isCorrectOption = option => {
  return option === selectedQuestions[currentQuestionIndex].cevap;
};

const questionScore = {
  Basit: 15,
  Orta: 20,
  Hard: 30,
};

const showResults = () => {
  let correctCount = 0;
  let wrongCount = 0;
  let totalScore = 0;

  const resultContainer = document.createElement("div");
  resultContainer.classList.add("result-container");

  for (let i = 0; i < selectedQuestions.length; i++) {
    const question = selectedQuestions[i];
    const isCorrect = answers[i] === question.cevap;

    const questionResult = document.createElement("p");
    questionResult.textContent = question.soru;
    questionResult.classList.add(isCorrect ? "correct-answer" : "wrong-answer");
    resultContainer.appendChild(questionResult);
    isCorrect ? correctCount++ : wrongCount++;
  }

  const resultsContainer = document.createElement("div");
  resultsContainer.classList.add("results-container");

  const correctCountElement = document.createElement("p");
  correctCountElement.textContent = correctCount + ": Doğru Sayısı";
  resultsContainer.appendChild(correctCountElement);

  const wrongCountElement = document.createElement("p");
  wrongCountElement.textContent = wrongCount + ": Yanlış Sayısı";
  resultsContainer.appendChild(wrongCountElement);
  resultsContainer.appendChild(resultContainer);

  totalScore =
    correctCount * questionScore.Basit +
    correctCount * questionScore.Orta +
    correctCount * questionScore.Hard;

  const scoreElement = document.createElement("p");
  scoreElement.textContent = "Toplam Puan: " + totalScore;
  resultsContainer.appendChild(scoreElement);

  const restartButton = document.createElement("button");
  restartButton.textContent = "Quiz'i Yeniden Başlat";
  restartButton.classList.add("restart-button");
  restartButton.addEventListener("click", () => {
    window.location.reload();
  });
  resultsContainer.appendChild(restartButton);

  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = "";
  questionContainer.appendChild(resultsContainer);
};

quizStartButton.addEventListener("click", () => {
  quizStartButton.style.display = "none";
  let count = 5;
  countdownContainer.textContent = count;
  countdownContainer.style.display = "flex";

  const countdown = setInterval(() => {
    count--;
    count >= 0 ? (countdownContainer.textContent = count) : endCountdown();
  }, 1000);

  const endCountdown = () => {
    clearInterval(countdown);
    countdownContainer.remove();
    quizStartButtonContainer.remove();
    showQuestion();
  };
});
