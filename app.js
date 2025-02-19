// ───────── 自動生成エンジン ─────────
// grammarRulesでは、各トピックごとにテンプレートとデータまたは generator 関数を定義しています。
// 複数のテンプレートや動的生成により、その都度異なる英文と日本語訳が出題されます。

const grammarRules = {
  // 既存トピック
  greetings: {
    type: "translation",
    template: [
      'Translate the phrase "{jp}" into English.',
      'What is the English for "{jp}"?',
      '英語で「{jp}」は何と言いますか？'
    ],
    data: [
      { en: "Hello", jp: "こんにちは" },
      { en: "Good morning", jp: "おはようございます" },
      { en: "Good afternoon", jp: "こんにちは" },
      { en: "Good evening", jp: "こんばんは" },
      { en: "How are you?", jp: "お元気ですか？" },
      { en: "Hi", jp: "やあ" }
    ]
  },
  phrases: {
    type: "translation",
    template: [
      'Translate the phrase "{jp}" into English.',
      'How do you say "{jp}" in English?',
      '「{jp}」を英語で表現すると？'
    ],
    data: [
      { en: "Thank you", jp: "ありがとう" },
      { en: "Excuse me", jp: "すみません" },
      { en: "I’m sorry", jp: "ごめんなさい" },
      { en: "Please", jp: "お願いします" },
      { en: "Yes", jp: "はい" },
      { en: "No", jp: "いいえ" },
      { en: "Goodbye", jp: "さようなら" }
    ]
  },
  presentContinuous: {
    type: "sentence",
    template: [
      'Translate the sentence "{jp}" into English in the present continuous form.',
      '「{jp}」を現在進行形の英文に変換せよ。'
    ],
    generator: function() {
      const subjects = ["I", "He", "She", "We", "They"];
      const verbs = [
        { base: "eat", ing: "eating", jp: "食事をしている" },
        { base: "read", ing: "reading", jp: "読んでいる" },
        { base: "run", ing: "running", jp: "走っている" },
        { base: "dance", ing: "dancing", jp: "踊っている" },
        { base: "play", ing: "playing", jp: "遊んでいる" },
        { base: "cook", ing: "cooking", jp: "料理している" },
        { base: "study", ing: "studying", jp: "勉強している" }
      ];
      const objects = [
        { en: "a book", jp: "本を" },
        { en: "dinner", jp: "夕食を" },
        { en: "a song", jp: "歌を" },
        { en: "at the park", jp: "公園で" },
        { en: "a letter", jp: "手紙を" },
        { en: "in the kitchen", jp: "台所で" }
      ];
      const subj = subjects[Math.floor(Math.random() * subjects.length)];
      const verb = verbs[Math.floor(Math.random() * verbs.length)];
      const obj = objects[Math.floor(Math.random() * objects.length)];
      const be = (subj === "I") ? "am" : (["He","She"].includes(subj) ? "is" : "are");
      const enSentence = `${subj} ${be} ${verb.ing} ${obj.en}.`;
      const jpSubjects = { "I": "私は", "He": "彼は", "She": "彼女は", "We": "私たちは", "They": "彼らは" };
      const jpSentence = `${jpSubjects[subj]}${obj.jp}${verb.jp}。`;
      return { jp: jpSentence, en: enSentence };
    }
  },
  beVerb: {
    type: "fill-in-the-blank",
    template: [
      'Complete the sentence: "{sentence}"',
      '次の英文の空欄を埋めよ："{sentence}"'
    ],
    generator: function() {
      const subjects = ["I", "He", "She", "We", "They"];
      const adjectives = [
        { adj: "happy", comparative: "より幸せ", jp: "幸せ" },
        { adj: "tired", comparative: "より疲れている", jp: "疲れている" },
        { adj: "smart", comparative: "より賢い", jp: "賢い" },
        { adj: "a student", jp: "学生" },
        { adj: "a doctor", jp: "医者" },
        { adj: "excited", jp: "ワクワクしている" }
      ];
      const subj = subjects[Math.floor(Math.random() * subjects.length)];
      const comp = adjectives[Math.floor(Math.random() * adjectives.length)];
      const be = (subj === "I") ? "am" : (["He","She"].includes(subj) ? "is" : "are");
      const sentence = `${subj} ___ ${comp.adj}.`;
      const jpSubjects = { "I": "私は", "He": "彼は", "She": "彼女は", "We": "私たちは", "They": "彼らは" };
      const jpSentence = `${jpSubjects[subj]}${comp.jp}です。`;
      return { sentence, answer: be };
    }
  },
  will: {
    type: "fill-in-the-blank",
    template: [
      'Complete the sentence: "{sentence}"',
      '次の文の空欄を埋めよ："{sentence}"'
    ],
    generator: function() {
      const subjects = ["I", "He", "She", "We", "They"];
      const verbs = [
        { base: "visit", jp: "訪れる" },
        { base: "call", jp: "電話する" },
        { base: "meet", jp: "会う" },
        { base: "buy", jp: "買う" },
        { base: "see", jp: "見る" },
        { base: "join", jp: "参加する" }
      ];
      const times = ["tomorrow", "next week", "soon", "later", "in the evening"];
      const subj = subjects[Math.floor(Math.random() * subjects.length)];
      const verb = verbs[Math.floor(Math.random() * verbs.length)];
      const time = times[Math.floor(Math.random() * times.length)];
      const sentence = `${subj} ____ ${verb.base} a friend ${time}.`;
      const jpSubjects = { "I": "私は", "He": "彼は", "She": "彼女は", "We": "私たちは", "They": "彼らは" };
      const jpTimes = { "tomorrow": "明日", "next week": "来週", "soon": "すぐに", "later": "後で", "in the evening": "夕方に" };
      const jpSentence = `${jpSubjects[subj]}${jpTimes[time]}友達を${verb.jp}。`;
      return { sentence, answer: "will" };
    }
  },
  past: {
    type: "math",
    template: 'What is {num1} + {num2}?',
    generator: function() {
      const num1 = Math.floor(Math.random() * 10) + 1;
      const num2 = Math.floor(Math.random() * 10) + 1;
      return { num1, num2, answer: (num1 + num2).toString() };
    }
  },
  future: {
    type: "verb",
    template: [
      'What is the future form of "{base}"?',
      '「{base}」の未来形は？'
    ],
    data: [
      { base: "go", future: "will go" },
      { base: "eat", future: "will eat" },
      { base: "see", future: "will see" },
      { base: "do", future: "will do" },
      { base: "come", future: "will come" },
      { base: "write", future: "will write" }
    ]
  },
  // ── 新規トピック ──
  modals: {
    type: "fill-in-the-blank",
    template: [
      'Complete the sentence with an appropriate modal: "{sentence}"',
      '適切な助動詞を入れて次の文を完成させよ："{sentence}"'
    ],
    generator: function() {
      const sentences = [
        { sentence: "You ____ finish your homework.", answer: "should", jp: "あなたは宿題を終えるべきだ。" },
        { sentence: "I ____ swim when I was young.", answer: "could", jp: "私は若い頃、泳ぐことができた。" },
        { sentence: "He ____ be at home now.", answer: "might", jp: "彼は今家にいるかもしれない。" },
        { sentence: "They ____ arrive on time if they hurry.", answer: "can", jp: "急げば彼らは時間通りに到着できる。" },
        { sentence: "We ____ take an umbrella.", answer: "must", jp: "私たちは傘を持っていく必要がある。" }
      ];
      return sentences[Math.floor(Math.random() * sentences.length)];
    }
  },
  comparative: {
    type: "fill-in-the-blank",
    template: [
      'Fill in the blank with the correct comparative form: "{sentence}"',
      '適切な比較級を入れて次の文を完成させよ："{sentence}"'
    ],
    generator: function() {
      const adjectives = [
        { positive: "fast", comparative: "faster" },
        { positive: "small", comparative: "smaller" },
        { positive: "big", comparative: "bigger" },
        { positive: "good", comparative: "better" },
        { positive: "bad", comparative: "worse" },
        { positive: "heavy", comparative: "heavier" },
        { positive: "cheap", comparative: "cheaper" }
      ];
      const items = [
        { item1: "This car", item2: "that car" },
        { item1: "My house", item2: "your house" },
        { item1: "This movie", item2: "that movie" },
        { item1: "This laptop", item2: "that laptop" }
      ];
      const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
      const pair = items[Math.floor(Math.random() * items.length)];
      const sentence = `${pair.item1} is ____ than ${pair.item2}.`;
      return { sentence, answer: adj.comparative };
    }
  },
  questionFormation: {
    type: "writing",
    template: [
      'Change the following statement into a question: "{statement}"',
      '次の平叙文を疑問文に変換せよ："{statement}"'
    ],
    generator: function() {
      const statements = [
        { statement: "You are coming to the party.", answer: "Are you coming to the party?", jp: "あなたはパーティーに来る。" },
        { statement: "He can play the piano.", answer: "Can he play the piano?", jp: "彼はピアノを弾ける。" },
        { statement: "They have finished their work.", answer: "Have they finished their work?", jp: "彼らは仕事を終えた。" },
        { statement: "She likes ice cream.", answer: "Does she like ice cream?", jp: "彼女はアイスクリームが好きだ。" }
      ];
      return statements[Math.floor(Math.random() * statements.length)];
    }
  },
  conditional: {
    type: "fill-in-the-blank",
    template: [
      'Complete the conditional sentence: "{sentence}"',
      '次の条件文の空欄を埋めよ："{sentence}"'
    ],
    generator: function() {
      const conditionals = [
        { sentence: "If it rains, we ____ stay at home.", answer: "will", jp: "もし雨が降ったら、私たちは家にいるだろう。" },
        { sentence: "If I had time, I ____ travel more.", answer: "would", jp: "もし時間があったら、もっと旅行するだろう。" },
        { sentence: "If you study hard, you ____ pass the exam.", answer: "will", jp: "一生懸命勉強すれば、試験に合格するだろう。" },
        { sentence: "If he were here, he ____ help us.", answer: "would", jp: "もし彼がここにいたら、私たちを助けるだろう。" }
      ];
      return conditionals[Math.floor(Math.random() * conditionals.length)];
    }
  },
  passiveVoice: {
    type: "writing",
    template: [
      'Change the following sentence into passive voice: "{sentence}"',
      '次の文を受動態に書き換えよ："{sentence}"'
    ],
    generator: function() {
      const sentences = [
        { sentence: "The chef cooks the meal.", answer: "The meal is cooked by the chef.", jp: "シェフが料理を作る。" },
        { sentence: "The teacher explains the lesson.", answer: "The lesson is explained by the teacher.", jp: "先生が授業を説明する。" },
        { sentence: "They built the house.", answer: "The house was built by them.", jp: "彼らが家を建てた。" },
        { sentence: "Someone cleans the room every day.", answer: "The room is cleaned every day.", jp: "毎日誰かが部屋を掃除する。" }
      ];
      return sentences[Math.floor(Math.random() * sentences.length)];
    }
  }
};

// generateQuestion()は指定トピックのルールに基づいて1問生成します。
// generatorがある場合はそれを優先し、テンプレート内の {key} は dataItem の値で置換します。

function generateQuestion(topic) {
  const rule = grammarRules[topic];
  if (!rule) {
    // 未定義トピックは算数問題にフォールバック
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return {
      type: Math.random() < 0.5 ? "multiple" : "writing",
      question: `What is ${num1} + ${num2}?`,
      answer: (num1 + num2).toString(),
      options: [ (num1+num2).toString(), (num1+num2+1).toString(), (num1+num2-1).toString(), (num1+num2+2).toString() ]
    };
  }
  
  // generatorがあれば使用、なければdataからランダム取得
  let dataItem;
  if (rule.generator) {
    dataItem = rule.generator();
  } else if (rule.data) {
    dataItem = rule.data[Math.floor(Math.random() * rule.data.length)];
  } else {
    dataItem = {};
  }
  
  // テンプレートが配列の場合はランダムに選択
  let templateStr = rule.template;
  if (Array.isArray(rule.template)) {
    templateStr = rule.template[Math.floor(Math.random() * rule.template.length)];
  }
  
  let questionText = templateStr;
  for (let key in dataItem) {
    questionText = questionText.replace(`{${key}}`, dataItem[key]);
  }
  
  // 正解の取り出し
  let correctAnswer;
  if (rule.type === "translation" || rule.type === "sentence") {
    correctAnswer = dataItem.en;
  } else if (rule.type === "fill-in-the-blank") {
    correctAnswer = dataItem.answer;
  } else if (rule.type === "verb") {
    correctAnswer = dataItem.future;
  } else if (rule.type === "math") {
    correctAnswer = dataItem.answer;
  } else if (rule.type === "writing") {
    correctAnswer = dataItem.answer;
  }
  
  // 出題形式をランダムに決定（multiple もしくは writing）
  const qType = Math.random() < 0.5 ? "multiple" : "writing";
  if (qType === "multiple" && rule.data && rule.data.length > 1) {
    let wrongPool = rule.data.filter(item => {
      let ans;
      if (rule.type === "translation" || rule.type === "sentence") {
        ans = item.en;
      } else if (rule.type === "fill-in-the-blank") {
        ans = item.answer;
      } else if (rule.type === "verb") {
        ans = item.future;
      }
      return ans && ans !== correctAnswer;
    });
    wrongPool.sort(() => 0.5 - Math.random());
    let wrongOptions = wrongPool.slice(0, 3).map(item => {
      if (rule.type === "translation" || rule.type === "sentence") {
        return item.en;
      } else if (rule.type === "fill-in-the-blank") {
        return item.answer;
      } else if (rule.type === "verb") {
        return item.future;
      } else {
        return "";
      }
    });
    const options = wrongOptions.concat(correctAnswer);
    options.sort(() => 0.5 - Math.random());
    return {
      type: "multiple",
      question: questionText,
      options: options,
      answer: correctAnswer
    };
  } else {
    return {
      type: "writing",
      question: questionText,
      answer: correctAnswer
    };
  }
}

// autoGenerateQuestions()は指定トピックでcount件の問題を生成します。
function autoGenerateQuestions(topic, count) {
  const questions = [];
  for (let i = 0; i < count; i++) {
    questions.push(generateQuestion(topic));
  }
  return questions;
}

// ───────── UI処理 ─────────
// ステージ／レッスンのデータ構造（日本語表記も充実）
const stages = [
  {
    name: "Stage 1: 基礎",
    lessons: [
      { name: "Lesson 1: 挨拶", topic: "greetings" },
      { name: "Lesson 2: 一般的なフレーズ", topic: "phrases" },
      { name: "Lesson 3: be動詞", topic: "beVerb" }
    ]
  },
  {
    name: "Stage 2: 中級",
    lessons: [
      { name: "Lesson 1: 過去形", topic: "past" },
      { name: "Lesson 2: 未来形", topic: "future" },
      { name: "Lesson 3: 現在進行形", topic: "presentContinuous" },
      { name: "Lesson 4: will の使い方", topic: "will" }
    ]
  },
  {
    name: "Stage 3: 上級",
    lessons: [
      { name: "Lesson 1: 助動詞 (Modals)", topic: "modals" },
      { name: "Lesson 2: 比較級 (Comparatives)", topic: "comparative" },
      { name: "Lesson 3: 疑問文の作り方", topic: "questionFormation" },
      { name: "Lesson 4: 条件文 (Conditionals)", topic: "conditional" },
      { name: "Lesson 5: 受動態 (Passive Voice)", topic: "passiveVoice" }
    ]
  }
];

let currentStageIndex = null;
let currentLessonIndex = null;
let currentQuestions = [];
let currentQuestionIndex = 0;

function showStages() {
  hideAllSections();
  document.getElementById("stage-selection").classList.remove("hidden");
  const stagesList = document.getElementById("stages-list");
  stagesList.innerHTML = "";
  stages.forEach((stage, index) => {
    const stageDiv = document.createElement("div");
    stageDiv.classList.add("stage");
    stageDiv.innerText = stage.name;
    stageDiv.onclick = () => showLessons(index);
    stagesList.appendChild(stageDiv);
  });
}

function showLessons(stageIndex) {
  currentStageIndex = stageIndex;
  hideAllSections();
  document.getElementById("lesson-selection").classList.remove("hidden");
  document.getElementById("stage-title").innerText = stages[stageIndex].name;
  const lessonsList = document.getElementById("lessons-list");
  lessonsList.innerHTML = "";
  stages[stageIndex].lessons.forEach((lesson, index) => {
    const lessonDiv = document.createElement("div");
    lessonDiv.classList.add("lesson");
    lessonDiv.innerText = lesson.name;
    lessonDiv.onclick = () => startLesson(index);
    lessonsList.appendChild(lessonDiv);
  });
}

function backToStages() {
  showStages();
}

function backToLessons() {
  showLessons(currentStageIndex);
}

function startLesson(lessonIndex) {
  currentLessonIndex = lessonIndex;
  hideAllSections();
  document.getElementById("lesson-container").classList.remove("hidden");

  const lesson = stages[currentStageIndex].lessons[lessonIndex];
  document.getElementById("lesson-title").innerText = lesson.name;

  // 自動生成エンジンで問題を生成（例：10問）
  currentQuestions = autoGenerateQuestions(lesson.topic, 10);
  currentQuestionIndex = 0;
  updateProgress();
  loadQuestion();
}

function hideAllSections() {
  document.getElementById("stage-selection").classList.add("hidden");
  document.getElementById("lesson-selection").classList.add("hidden");
  document.getElementById("lesson-container").classList.add("hidden");
}

function loadQuestion() {
  const questionData = currentQuestions[currentQuestionIndex];
  const container = document.getElementById("question-container");
  container.innerHTML = "";

  // 問題文表示
  const qElem = document.createElement("div");
  qElem.classList.add("question");
  qElem.innerText = questionData.question;
  container.appendChild(qElem);

  // 出題形式に応じたレンダリング
  if (questionData.type === "multiple") {
    const optionsDiv = document.createElement("div");
    optionsDiv.classList.add("options");
    questionData.options.forEach(option => {
      const optElem = document.createElement("div");
      optElem.classList.add("option");
      optElem.innerText = option;
      optElem.onclick = () => checkMultipleAnswer(optElem, option);
      optionsDiv.appendChild(optElem);
    });
    container.appendChild(optionsDiv);
  } else if (questionData.type === "writing") {
    const input = document.createElement("input");
    input.type = "text";
    input.classList.add("writing-answer");
    input.placeholder = "答えを入力...";
    container.appendChild(input);

    const submitBtn = document.createElement("button");
    submitBtn.innerText = "採点する";
    submitBtn.onclick = () => {
      checkWritingAnswer(input.value);
      // 回答後、次の問題へフォーカス移動
      document.getElementById("next-btn").focus();
    };
    container.appendChild(submitBtn);
  }
  
  document.getElementById("next-btn").disabled = true;
}

function checkMultipleAnswer(element, selectedOption) {
  const qData = currentQuestions[currentQuestionIndex];
  if (selectedOption === qData.answer) {
    element.style.backgroundColor = "#a5d6a7"; // 緑
    alert("正解！");
  } else {
    element.style.backgroundColor = "#ef9a9a"; // 赤
    alert("不正解。");
  }
  Array.from(document.getElementsByClassName("option")).forEach(opt => {
    opt.style.pointerEvents = "none";
  });
  document.getElementById("next-btn").disabled = false;
}

function checkWritingAnswer(userInput) {
  const qData = currentQuestions[currentQuestionIndex];
  const cleanedInput = userInput.trim().toLowerCase();
  const correctAnswer = qData.answer.trim().toLowerCase();
  if (cleanedInput === correctAnswer) {
    alert("正解！");
  } else {
    alert(`不正解。正しい答えは「${qData.answer}」です。`);
  }
  const container = document.getElementById("question-container");
  Array.from(container.getElementsByTagName("input")).forEach(inp => inp.disabled = true);
  Array.from(container.getElementsByTagName("button")).forEach(btn => btn.disabled = true);
  document.getElementById("next-btn").disabled = false;
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuestions.length) {
    updateProgress();
    loadQuestion();
  } else {
    alert("このレッスンは終了です！");
    backToLessons();
  }
}

function updateProgress() {
  const progressElem = document.getElementById("progress");
  const progressPercent = ((currentQuestionIndex) / currentQuestions.length) * 100;
  progressElem.style.width = `${progressPercent}%`;
}

window.onload = showStages;
