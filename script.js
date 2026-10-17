const questions = [
  {
    question: "Uma criança sente que precisa seguir padrões de beleza adultos para receber elogios nas redes sociais. O que isso pode indicar?",
    answers: ["Que ela gosta de tecnologia, apenas.", "Uma possível influência da adultização.", "Que ela já tem responsabilidades de adulto.", "Que isso acontece com todas as crianças."],
    correct: 1,
    explanation: "A adultização pode acontecer quando expectativas, padrões ou comportamentos do mundo adulto são impostos ou incentivados antes do tempo. É importante observar o contexto, sem tirar conclusões automáticas."
  },
  {
    question: "O que significa adultização infantil?",
    answers: ["Ensinar uma criança a organizar seus brinquedos.", "Permitir que a criança escolha uma brincadeira.", "Atribuir ou incentivar comportamentos, aparência ou responsabilidades adultas antes da fase adequada.", "Toda e qualquer utilização da internet por crianças."],
    correct: 2,
    explanation: "Adultização é o processo em que crianças são aproximadas de padrões, papéis ou responsabilidades adultos de forma inadequada à sua idade. Não é sinônimo de toda participação infantil na internet."
  },
  {
    question: "Uma publicação viraliza porque mostra uma criança fazendo poses sensuais copiadas de adultos. Qual é a atitude mais responsável?",
    answers: ["Compartilhar para aumentar o alcance.", "Fazer piada nos comentários.", "Avaliar os riscos, evitar compartilhar e conversar com um adulto responsável.", "Presumir que não há problema porque muitas pessoas curtiram."],
    correct: 2,
    explanation: "Curtidas e visualizações não garantem que um conteúdo seja adequado. Evitar ampliar a exposição e buscar orientação responsável ajuda a proteger a criança."
  },
  {
    question: "Por que a busca por curtidas e comentários pode ser um problema para crianças?",
    answers: ["Porque toda rede social é necessariamente prejudicial.", "Porque pode aumentar a pressão por aparência, aprovação e popularidade.", "Porque crianças nunca devem conversar com amigos online.", "Porque curtidas sempre causam danos."],
    correct: 1,
    explanation: "A pressão por aprovação pode influenciar autoestima e comportamento. Os efeitos variam entre pessoas e situações; por isso, acompanhamento e diálogo são importantes."
  },
  {
    question: "Quem tem responsabilidade na proteção das crianças no ambiente digital?",
    answers: ["Somente a própria criança.", "Somente os professores.", "Família, sociedade, poder público e plataformas, cada um dentro de suas responsabilidades.", "Ninguém, porque a internet não tem regras."],
    correct: 2,
    explanation: "A proteção é compartilhada. Crianças precisam de orientação e escuta, enquanto adultos, instituições, poder público e plataformas têm deveres de cuidado e proteção."
  },
  {
    question: "Um responsável publica fotos e detalhes íntimos da rotina da criança sem pensar nas consequências. Qual risco merece atenção?",
    answers: ["A publicação desaparece sempre depois de 24 horas.", "A exposição pode afetar a privacidade e permitir que imagens circulem fora do controle da família.", "Só existe risco se a criança tiver muitos seguidores.", "Fotos publicadas por familiares nunca oferecem riscos."],
    correct: 1,
    explanation: "Imagens e informações podem ser copiadas, salvas e compartilhadas. Antes de publicar, é importante proteger a privacidade, evitar dados identificáveis e considerar o interesse da criança."
  },
  {
    question: "Qual é um sinal de que uma tendência online pode estar colocando pressão inadequada sobre uma criança?",
    answers: ["Ela brinca com colegas da mesma idade.", "Ela sente que precisa parecer mais velha ou agir como adulto para ser aceita.", "Ela aprende uma música infantil.", "Ela pede ajuda para usar um aplicativo."],
    correct: 1,
    explanation: "Sentir que precisa parecer mais velha para receber aceitação pode ser um sinal de pressão adulta. O ideal é conversar sem culpar ou envergonhar a criança."
  },
  {
    question: "Como conversar com uma criança sobre conteúdo inadequado que ela viu online?",
    answers: ["Culpá-la por ter visto o conteúdo.", "Proibir toda conversa sobre o assunto.", "Ouvir com calma, acolher, explicar os riscos de forma adequada à idade e procurar ajuda se necessário.", "Publicar a história para que outras pessoas julguem."],
    correct: 2,
    explanation: "Uma conversa acolhedora ajuda a criança a pedir ajuda sem medo. Evite culpabilizar; se houver suspeita de exploração ou violência, procure os canais de proteção adequados."
  },
  {
    question: "Qual afirmação sobre a legislação brasileira de proteção à infância é mais adequada?",
    answers: ["A internet está fora de qualquer regra.", "O ECA reconhece crianças e adolescentes como pessoas em desenvolvimento que devem ter seus direitos protegidos.", "Só existe proteção legal quando uma publicação viraliza.", "Toda foto de criança na internet é automaticamente crime."],
    correct: 1,
    explanation: "O ECA estabelece direitos e proteção integral. A avaliação de uma situação específica depende dos fatos e da legislação aplicável; não é correto afirmar que toda publicação é crime."
  },
  {
    question: "Qual atitude ajuda a construir um ambiente digital mais seguro para crianças?",
    answers: ["Compartilhar tudo sem perguntar.", "Medir o valor da criança pelo número de seguidores.", "Combinar limites, respeitar a privacidade, acompanhar o uso e manter diálogo aberto.", "Ignorar sinais de desconforto para evitar conflitos."],
    correct: 2,
    explanation: "Limites adequados à idade, privacidade, acompanhamento e diálogo são medidas úteis. A criança deve saber que pode procurar um adulto de confiança se algo a deixar desconfortável."
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const startBtn = document.getElementById("start-btn");
const quizSection = document.getElementById("quiz");
const questionCounter = document.getElementById("question-counter");
const scorePill = document.getElementById("score-pill");
const progressFill = document.getElementById("progress-fill");
const progressTrack = document.getElementById("progress-track");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const feedbackTitle = document.getElementById("feedback-title");
const feedbackText = document.getElementById("feedback-text");
const nextBtn = document.getElementById("next-btn");
const results = document.getElementById("results");
const finalScore = document.getElementById("final-score");
const resultHeading = document.getElementById("result-heading");
const resultMessage = document.getElementById("result-message");
const restartBtn = document.getElementById("restart-btn");

function renderQuestion() {
  answered = false;
  const item = questions[currentQuestion];
  questionCounter.textContent = `Pergunta ${currentQuestion + 1} de ${questions.length}`;
  scorePill.textContent = `Acertos: ${score}`;
  progressFill.style.width = `${(currentQuestion / questions.length) * 100}%`;
  progressTrack.setAttribute("aria-valuenow", String(currentQuestion));
  questionText.textContent = item.question;
  answersContainer.innerHTML = "";
  feedback.hidden = true;
  feedback.className = "feedback";
  nextBtn.disabled = true;
  nextBtn.textContent = currentQuestion === questions.length - 1 ? "Ver resultado →" : "Próxima pergunta →";

  item.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.type = "button";
    button.dataset.index = String(index);
    const letter = document.createElement("span");
    letter.className = "answer-letter";
    letter.textContent = String.fromCharCode(65 + index);
    const answerText = document.createElement("span");
    answerText.textContent = answer;
    button.append(letter, answerText);
    button.addEventListener("click", () => selectAnswer(index));
    answersContainer.appendChild(button);
  });
}

function selectAnswer(index) {
  if (answered) return;
  answered = true;
  const item = questions[currentQuestion];
  const isCorrect = index === item.correct;
  if (isCorrect) score += 1;

  [...answersContainer.querySelectorAll(".answer")].forEach((button, buttonIndex) => {
    button.disabled = true;
    if (buttonIndex === item.correct) button.classList.add("correct");
    else if (buttonIndex === index) button.classList.add("incorrect");
  });

  feedback.hidden = false;
  feedback.className = `feedback ${isCorrect ? "good" : "needs-work"}`;
  feedbackTitle.textContent = isCorrect ? "Isso mesmo! ✨" : "Vamos aprender juntos 💡";
  feedbackText.textContent = item.explanation;
  scorePill.textContent = `Acertos: ${score}`;
  nextBtn.disabled = false;
}

function showResults() {
  quizSection.hidden = true;
  results.hidden = false;
  progressFill.style.width = "100%";
  progressTrack.setAttribute("aria-valuenow", String(questions.length));
  finalScore.textContent = String(score);

  if (score >= 8) {
    resultHeading.textContent = "Mandou muito bem!";
    resultMessage.textContent = "Você demonstrou conhecer vários pontos importantes sobre a adultização e a proteção da infância. Continue consultando fontes confiáveis e compartilhando informação com responsabilidade.";
  } else if (score >= 5) {
    resultHeading.textContent = "Você está no caminho!";
    resultMessage.textContent = "Você já reconhece algumas questões importantes. Releia as explicações e explore as fontes oficiais abaixo para aprofundar seu conhecimento.";
  } else {
    resultHeading.textContent = "Aprender é o primeiro passo!";
    resultMessage.textContent = "O tema é complexo e merece atenção. Use o resultado como ponto de partida: leia as explicações, converse com pessoas de confiança e consulte as fontes abaixo.";
  }
  results.scrollIntoView({ behavior: "smooth", block: "start" });
}

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  quizSection.hidden = false;
  results.hidden = true;
  renderQuestion();
  quizSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

nextBtn.addEventListener("click", () => {
  if (!answered) return;
  if (currentQuestion < questions.length - 1) {
    currentQuestion += 1;
    renderQuestion();
  } else {
    showResults();
  }
});

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", startQuiz);
renderQuestion();
