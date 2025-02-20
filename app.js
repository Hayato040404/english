// ───────── 自動生成エンジン ─────────
// 各レッスンは generator 関数により、ランダムな英文・日本語訳・テンプレートで自動生成されます

const grammarRules = {
  // 挨拶（Greetings）
  greetings: {
    type: "translation",
    generator: function() {
      const greetingsList = [
        { en: "Hello", jp: "こんにちは" },
        { en: "Good morning", jp: "おはようございます" },
        { en: "Good afternoon", jp: "こんにちは" },
        { en: "Good evening", jp: "こんばんは" },
        { en: "How are you?", jp: "お元気ですか？" },
        { en: "Hi", jp: "やあ" }
      ];
      const templates = [
        'Translate the phrase "{jp}" into English.',
        'What is the English for "{jp}"?',
        '英語で「{jp}」は何と言いますか？'
      ];
      const item = greetingsList[Math.floor(Math.random() * greetingsList.length)];
      const templateStr = templates[Math.floor(Math.random() * templates.length)];
      return { ...item, template: templateStr };
    }
  },
  // 一般的なフレーズ（Phrases）
  phrases: {
    type: "translation",
    generator: function() {
      const phrasesList = [
        { en: "Thank you", jp: "ありがとう" },
        { en: "Excuse me", jp: "すみません" },
        { en: "I'm sorry", jp: "ごめんなさい" },
        { en: "Please", jp: "お願いします" },
        { en: "Yes", jp: "はい" },
        { en: "No", jp: "いいえ" },
        { en: "Goodbye", jp: "さようなら" }
      ];
      const templates = [
        'Translate the phrase "{jp}" into English.',
        'How do you say "{jp}" in English?',
        '「{jp}」を英語で表現すると？'
      ];
      const item = phrasesList[Math.floor(Math.random() * phrasesList.length)];
      const templateStr = templates[Math.floor(Math.random() * templates.length)];
      return { ...item, template: templateStr };
    }
  },
  // 現在進行形（Present Continuous）
  presentContinuous: {
    type: "sentence",
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
      const be = (subj === "I") ? "am" : (["He", "She"].includes(subj) ? "is" : "are");
      const enSentence = `${subj} ${be} ${verb.ing} ${obj.en}.`;
      const jpSubjects = { "I": "私は", "He": "彼は", "She": "彼女は", "We": "私たちは", "They": "彼らは" };
      const jpSentence = `${jpSubjects[subj]}${obj.jp}${verb.jp}。`;
      const templates = [
        'Translate the sentence "{jp}" into English in the present continuous form.',
        '「{jp}」を現在進行形の英文に変換せよ。'
      ];
      const templateStr = templates[Math.floor(Math.random() * templates.length)];
      return { jp: jpSentence, en: enSentence, template: templateStr };
    }
  },
  // be動詞（Be Verb）
  beVerb: {
    type: "fill-in-the-blank",
    generator: function() {
      const subjects = ["I", "He", "She", "We", "They"];
      const forms = [
        { answer: "am", jp: "～です（私の場合）" },
        { answer: "is", jp: "～です（彼・彼女の場合）" },
        { answer: "are", jp: "～です（複数の場合）" }
      ];
      const subj = subjects[Math.floor(Math.random() * subjects.length)];
      let candidates;
      if (subj === "I") {
        candidates = forms.filter(f => f.answer === "am");
      } else if (["He", "She"].includes(subj)) {
        candidates = forms.filter(f => f.answer === "is");
      } else {
        candidates = forms.filter(f => f.answer === "are");
      }
      const chosen = candidates[0];
      const jpSubjects = { "I": "私は", "He": "彼は", "She": "彼女は", "We": "私たちは", "They": "彼らは" };
      const sentence = `${subj} ___ happy.`;
      const templates = [
        'Complete the sentence: "{sentence}"',
        '次の英文の空欄を埋めよ："{sentence}"'
      ];
      const templateStr = templates[Math.floor(Math.random() * templates.length)];
      return { sentence, answer: chosen.answer, template: templateStr };
    }
  },
  // will の使い方（Will）
  will: {
    type: "fill-in-the-blank",
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
      const templates = [
        'Complete the sentence: "{sentence}"',
        '次の文の空欄を埋めよ："{sentence}"'
      ];
      const templateStr = templates[Math.floor(Math.random() * templates.length)];
      return { sentence, answer: "will", template: templateStr };
    }
  },
  // 過去形（Math）
  past: {
    type: "math",
    generator: function() {
      const num1 = Math.floor(Math.random() * 10) + 1;
      const num2 = Math.floor(Math.random() * 10) + 1;
      return { num1, num2, answer: (num1 + num2).toString(), template: 'What is {num1} + {num2}?' };
    }
  },
  // 未来形（Future）
  future: {
    type: "verb",
    generator: function() {
      const verbs = [
        { base: "go", future: "will go", jp: "行く" },
        { base: "eat", future: "will eat", jp: "食べる" },
        { base: "see", future: "will see", jp: "見る" },
        { base: "do", future: "will do", jp: "する" },
        { base: "come", future: "will come", jp: "来る" },
        { base: "write", future: "will write", jp: "書く" }
      ];
      const templates = [
        'What is the future form of "{base}"?',
        '「{base}」の未来形は何ですか？'
      ];
      const verb = verbs[Math.floor(Math.random() * verbs.length)];
      const templateStr = templates[Math.floor(Math.random() * templates.length)];
      return { ...verb, template: templateStr };
    }
  },
  // 助動詞（Modals）
  modals: {
    type: "fill-in-the-blank",
    generator: function() {
      const sentences = [
        { sentence: "You ____ finish your homework.", answer: "should", jp: "あなたは宿題を終えるべきだ。" },
        { sentence: "I ____ swim when I was young.", answer: "could", jp: "私は若い頃、泳ぐことができた。" },
        { sentence: "He ____ be at home now.", answer: "might", jp: "彼は今家にいるかもしれない。" },
        { sentence: "They ____ arrive on time if they hurry.", answer: "can", jp: "急げば彼らは時間通りに到着できる。" },
        { sentence: "We ____ take an umbrella.", answer: "must", jp: "私たちは傘を持っていく必要がある。" }
      ];
      const templates = [
        'Complete the sentence with an appropriate modal: "{sentence}"',
        '適切な助動詞を入れて次の文を完成させよ："{sentence}"'
      ];
      const item = sentences[Math.floor(Math.random() * sentences.length)];
      const templateStr = templates[Math.floor(Math.random() * templates.length)];
      return { ...item, template: templateStr };
    }
  },
  // 比較級（Comparative）
  comparative: {
    type: "fill-in-the-blank",
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
      const templates = [
        'Fill in the blank with the correct comparative form: "{sentence}"',
        '適切な比較級を入れて次の文を完成させよ："{sentence}"'
      ];
      const templateStr = templates[Math.floor(Math.random() * templates.length)];
      return { sentence, answer: adj.comparative, template: templateStr };
    }
  },
  // 疑問文の作り方（Question Formation）
  questionFormation: {
    type: "writing",
    generator: function() {
      const statements = [
        { statement: "You are coming to the party.", answer: "Are you coming to the party?", jp: "あなたはパーティーに来る。" },
        { statement: "He can play the piano.", answer: "Can he play the piano?", jp: "彼はピアノを弾ける。" },
        { statement: "They have finished their work.", answer: "Have they finished their work?", jp: "彼らは仕事を終えた。" },
        { statement: "She likes ice cream.", answer: "Does she like ice cream?", jp: "彼女はアイスクリームが好きだ。" }
      ];
      const templates = [
        'Change the following statement into a question: "{statement}"',
        '次の平叙文を疑問文に変換せよ："{statement}"'
      ];
      const item = statements[Math.floor(Math.random() * statements.length)];
      const templateStr = templates[Math.floor(Math.random() * templates.length)];
      return { ...item, template: templateStr };
    }
  },
  // 条件文（Conditional）
  conditional: {
    type: "fill-in-the-blank",
    generator: function() {
      const conditionals = [
        { sentence: "If it rains, we ____ stay at home.", answer: "will", jp: "もし雨が降ったら、私たちは家にいるだろう。" },
        { sentence: "If I had time, I ____ travel more.", answer: "would", jp: "もし時間があったら、もっと旅行するだろう。" },
        { sentence: "If you study hard, you ____ pass the exam.", answer: "will", jp: "一生懸命勉強すれば、試験に合格するだろう。" },
        { sentence: "If he were here, he ____ help us.", answer: "would", jp: "もし彼がここにいたら、私たちを助けるだろう。" }
      ];
      const templates = [
        'Complete the conditional sentence: "{sentence}"',
        '次の条件文の空欄を埋めよ："{sentence}"'
      ];
      const item = conditionals[Math.floor(Math.random() * conditionals.length)];
      const templateStr = templates[Math.floor(Math.random() * templates.length)];
      return { ...item, template: templateStr };
    }
  },
  // 受動態（Passive Voice）
  passiveVoice: {
    type: "writing",
    generator: function() {
      const subjects = ["The chef", "The teacher", "The manager", "The artist", "The engineer"];
      const verbs = [
        { active: "cooks", passive: "is cooked", base: "cook", jp: "料理する" },
        { active: "explains", passive: "is explained", base: "explain", jp: "説明する" },
        { active: "builds", passive: "is built", base: "build", jp: "建てる" },
        { active: "designs", passive: "is designed", base: "design", jp: "デザインする" },
        { active: "paints", passive: "is painted", base: "paint", jp: "描く" }
      ];
      const objects = [
        { text: "the meal", jp: "料理" },
        { text: "the lesson", jp: "授業" },
        { text: "the house", jp: "家" },
        { text: "a portrait", jp: "肖像画" },
        { text: "the project", jp: "プロジェクト" }
      ];
      const subject = subjects[Math.floor(Math.random() * subjects.length)];
      const verb = verbs[Math.floor(Math.random() * verbs.length)];
      const object = objects[Math.floor(Math.random() * objects.length)];
      const activeSentence = `${subject} ${verb.active} ${object.text}.`;
      const passiveSentence = `${object.text.charAt(0).toUpperCase() + object.text.slice(1)} ${verb.passive} by ${subject.toLowerCase()}.`;
      const templates = [
        'Change the following sentence into passive voice: "{sentence}"',
        '次の文を受動態に書き換えよ："{sentence}"'
      ];
      const templateStr = templates[Math.floor(Math.random() * templates.length)];
      return { sentence: activeSentence, answer: passiveSentence, template: templateStr };
    }
  },
  // リスニング問題（Listening）
  listening: {
    type: "listening",
    generator: function() {
      const sentences = [
        { en: "The cat is sleeping on the mat.", jp: "猫がマットの上で寝ています" },
        { en: "She is reading a book in the library.", jp: "彼女は図書館で本を読んでいます" },
        { en: "They are playing soccer in the park.", jp: "彼らは公園でサッカーをしています" },
        { en: "I am cooking dinner for my family.", jp: "家族のために夕食を作っています" },
        { en: "He is driving to work every day.", jp: "彼は毎日車で仕事に行っています" }
      ];
      const templates = [
        'Listen to the audio and type what you hear.',
        'リスニング：音声を聞いて、その内容を入力してください。'
      ];
      const item = sentences[Math.floor(Math.random() * sentences.length)];
      const templateStr = templates[Math.floor(Math.random() * templates.length)];
      return { ...item, template: templateStr };
    }
  },
  // スピーキング（Speaking）重点練習
  speaking: {
    type: "speaking",
    generator: function() {
      const prompts = [
        { en: "Describe your favorite hobby.", jp: "あなたの好きな趣味について話してください。" },
        { en: "Tell me about your last vacation.", jp: "最後の休暇について話してください。" },
        { en: "What do you do on weekends?", jp: "週末は何をしますか？" },
        { en: "How do you get to work?", jp: "仕事へはどのように行きますか？" },
        { en: "What is your favorite food?", jp: "あなたの好きな食べ物は何ですか？" }
      ];
      const templates = [
        'Speak the following prompt: "{jp}" and then record your answer.',
        'スピーキング：次の指示に従って話してください：「{jp}」'
      ];
      const item = prompts[Math.floor(Math.random() * prompts.length)];
      const templateStr = templates[Math.floor(Math.random() * templates.length)];
      return { ...item, template: templateStr };
    }
  }
};

// ───────── ユーザー成績管理（localStorage） ─────────
function updatePerformance(topic, isCorrect) {
  let data = JSON.parse(localStorage.getItem("performanceData") || "{}");
  if (!data[topic]) { data[topic] = { correct: 0, total: 0 }; }
  data[topic].total++;
  if (isCorrect) { data[topic].correct++; }
  localStorage.setItem("performanceData", JSON.stringify(data));
}

function getPerformanceData() {
  return JSON.parse(localStorage.getItem("performanceData") || "{}");
}

function getWeakTopics() {
  const data = getPerformanceData();
  const weak = [];
  for (let topic in data) {
    if (data[topic].total >= 3 && (data[topic].correct / data[topic].total) < 0.6) {
      weak.push(topic);
    }
  }
  return weak;
}

// ───────── グローバルコイン管理 ─────────
function getCoins() {
  return parseInt(localStorage.getItem("coins") || "0");
}
function addCoins(amount) {
  localStorage.setItem("coins", (getCoins() + amount).toString());
}

// ───────── Daily Lesson 機能 ─────────
function getTodayDate() {
  return new Date().toISOString().split("T")[0];
}

function getDailyLessonStatus() {
  return {
    lastDate: localStorage.getItem("lastDailyLesson"),
    streak: parseInt(localStorage.getItem("dailyStreak") || "0")
  };
}

function updateDailyLessonStatus() {
  const today = getTodayDate();
  const status = getDailyLessonStatus();
  if (status.lastDate === today) return status;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split("T")[0];
  let newStreak = (status.lastDate === yesterdayStr) ? status.streak + 1 : 1;
  const earnedCoins = 10 + newStreak;  // Daily Lesson 報酬
  localStorage.setItem("lastDailyLesson", today);
  localStorage.setItem("dailyStreak", newStreak.toString());
  addCoins(earnedCoins);
  return { newStreak, earnedCoins, coins: getCoins() };
}

function generateDailyQuestions(count) {
  const topics = ["greetings", "phrases", "presentContinuous", "beVerb", "will", "modals", "comparative", "conditional", "passiveVoice", "past", "future", "questionFormation", "listening", "speaking"];
  const questions = [];
  for (let i = 0; i < count; i++) {
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    questions.push(generateQuestion(randomTopic));
  }
  return questions;
}

// ───────── 問題生成 ─────────
function generateQuestion(topic) {
  const rule = grammarRules[topic];
  if (!rule) {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return {
      type: Math.random() < 0.5 ? "multiple" : "writing",
      question: `What is ${num1} + ${num2}?`,
      answer: (num1 + num2).toString(),
      options: [ (num1+num2).toString(), (num1+num2+1).toString(), (num1+num2-1).toString(), (num1+num2+2).toString() ]
    };
  }
  
  let dataItem = rule.generator ? rule.generator() : {};
  let templateStr = dataItem.template || rule.template;
  if (Array.isArray(templateStr)) {
    templateStr = templateStr[Math.floor(Math.random() * templateStr.length)];
  }
  
  let questionText = templateStr;
  for (let key in dataItem) {
    questionText = questionText.replace(`{${key}}`, dataItem[key]);
  }
  
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
  } else if (rule.type === "listening" || rule.type === "speaking") {
    correctAnswer = dataItem.en;
  }
  
  if (rule.type === "listening" || rule.type === "speaking") {
    return {
      type: rule.type,
      question: questionText,
      answer: correctAnswer
    };
  }
  
  const qType = Math.random() < 0.5 ? "multiple" : "writing";
  if (qType === "multiple" && rule.generator && rule.type !== "writing") {
    let wrongOptions = [];
    for (let i = 0; i < 10 && wrongOptions.length < 3; i++) {
      const candidate = rule.generator();
      let candidateAnswer;
      if (rule.type === "translation" || rule.type === "sentence") {
        candidateAnswer = candidate.en;
      } else if (rule.type === "fill-in-the-blank") {
        candidateAnswer = candidate.answer;
      } else if (rule.type === "verb") {
        candidateAnswer = candidate.future;
      }
      if (candidateAnswer && candidateAnswer !== correctAnswer && !wrongOptions.includes(candidateAnswer)) {
        wrongOptions.push(candidateAnswer);
      }
    }
    if (wrongOptions.length < 3) {
      wrongOptions = wrongOptions.concat(["option1", "option2", "option3"]).slice(0, 3);
    }
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

function autoGenerateQuestions(topic, count) {
  const questions = [];
  for (let i = 0; i < count; i++) {
    questions.push(generateQuestion(topic));
  }
  return questions;
}

// ───────── UI処理 ─────────

// 固定ステージ＋苦手なコンテンツ＋新規ステージ（リスニング＆スピーキング重点練習）
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
  },
  {
    name: "Stage 4: リスニング重点練習",
    lessons: [
      { name: "Lesson 1: リスニング集中", topic: "listening" }
    ]
  },
  {
    name: "Stage 5: スピーキング重点練習",
    lessons: [
      { name: "Lesson 1: スピーキング挑戦", topic: "speaking" }
    ]
  }
];

let currentStageIndex = null;
let currentLessonIndex = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let currentTopic = null;

function showStages() {
  hideAllSections();
  document.getElementById("stage-selection").classList.remove("hidden");
  const stagesList = document.getElementById("stages-list");
  stagesList.innerHTML = "";
  
  // Daily Lesson ボタン設定
  const dailyBtn = document.getElementById("daily-lesson-btn");
  const dailyStatus = getDailyLessonStatus();
  const today = getTodayDate();
  let dailyText = "Daily Lesson";
  if (dailyStatus.lastDate === today) {
    dailyText += ` (完了済み / Streak: ${dailyStatus.streak}日)`;
    dailyBtn.style.opacity = "0.6";
    dailyBtn.style.pointerEvents = "none";
  } else {
    dailyText += " (今日のレッスン)";
    dailyBtn.style.opacity = "1";
    dailyBtn.style.pointerEvents = "auto";
    dailyBtn.onclick = startDailyLesson;
  }
  dailyBtn.innerText = dailyText;
  
  // ユーザー保有コイン表示
  const coinDisplay = document.getElementById("coin-display");
  coinDisplay.innerText = `保有コイン: ${getCoins()}`;
  
  // 固定ステージ表示
  stages.forEach((stage, index) => {
    const stageDiv = document.createElement("div");
    stageDiv.classList.add("stage");
    stageDiv.innerText = stage.name;
    stageDiv.onclick = () => showLessons(index);
    stagesList.appendChild(stageDiv);
  });
  
  // 苦手なコンテンツステージ
  const weakTopics = getWeakTopics();
  if (weakTopics.length > 0) {
    const weakStage = document.createElement("div");
    weakStage.classList.add("stage");
    weakStage.innerText = "苦手なコンテンツ";
    weakStage.onclick = showWeakLessons;
    stagesList.appendChild(weakStage);
  }
}

function showLessons(stageIndex) {
  currentStageIndex = stageIndex;
  hideAllSections();
  document.getElementById("lesson-selection").classList.remove("hidden");
  document.getElementById("stage-title").innerText = stages[stageIndex].name;
  const lessonsList = document.getElementById("lessons-list");
  lessonsList.innerHTML = "";
  stages[stageIndex].lessons.forEach(lesson => {
    const lessonDiv = document.createElement("div");
    lessonDiv.classList.add("lesson");
    lessonDiv.innerText = lesson.name;
    lessonDiv.onclick = () => startLesson(lesson);
    lessonsList.appendChild(lessonDiv);
  });
}

function showWeakLessons() {
  hideAllSections();
  document.getElementById("lesson-selection").classList.remove("hidden");
  document.getElementById("stage-title").innerText = "苦手なコンテンツ";
  const lessonsList = document.getElementById("lessons-list");
  lessonsList.innerHTML = "";
  const weakTopics = getWeakTopics();
  if (weakTopics.length === 0) {
    lessonsList.innerHTML = "<p>苦手なコンテンツはありません！</p>";
  } else {
    weakTopics.forEach(topic => {
      const lessonDiv = document.createElement("div");
      lessonDiv.classList.add("lesson");
      lessonDiv.innerText = "苦手: " + topic;
      lessonDiv.onclick = () => startWeakLesson(topic);
      lessonsList.appendChild(lessonDiv);
    });
  }
}

function backToStages() {
  showStages();
}

function backToLessons() {
  if (currentStageIndex !== null) {
    showLessons(currentStageIndex);
  } else {
    showWeakLessons();
  }
}

function startLesson(lesson) {
  currentTopic = lesson.topic;
  hideAllSections();
  document.getElementById("lesson-container").classList.remove("hidden");
  document.getElementById("lesson-title").innerText = lesson.name;
  currentQuestions = autoGenerateQuestions(currentTopic, 10);
  currentQuestionIndex = 0;
  addCoins(5);  // 通常レッスン完了で5コイン獲得
  updateProgress();
  loadQuestion();
}

function startDailyLesson() {
  currentTopic = "daily";
  hideAllSections();
  document.getElementById("lesson-container").classList.remove("hidden");
  document.getElementById("lesson-title").innerText = "Daily Lesson";
  currentQuestions = generateDailyQuestions(10);
  currentQuestionIndex = 0;
  updateProgress();
  loadQuestion();
}

function startWeakLesson(topic) {
  currentTopic = topic;
  hideAllSections();
  document.getElementById("lesson-container").classList.remove("hidden");
  document.getElementById("lesson-title").innerText = "苦手: " + topic;
  currentQuestions = autoGenerateQuestions(topic, 10);
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
  document.getElementById("feedback").innerText = "";
  const questionData = currentQuestions[currentQuestionIndex];
  const container = document.getElementById("question-container");
  container.innerHTML = "";
  const qElem = document.createElement("div");
  qElem.classList.add("question");
  qElem.innerText = questionData.question;
  container.appendChild(qElem);
  
  // 【Hint】ボタン表示（writing・listening・speakingなら表示）
  const hintBtn = document.getElementById("hint-btn");
  hintBtn.style.display = (questionData.type === "writing" || questionData.type === "listening" || questionData.type === "speaking") ? "inline-block" : "none";
  
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
      document.getElementById("next-btn").focus();
    };
    container.appendChild(submitBtn);
  } else if (questionData.type === "listening") {
    const playBtn = document.createElement("button");
    playBtn.innerText = "再生 / Play Audio";
    playBtn.onclick = () => {
      const utterance = new SpeechSynthesisUtterance(questionData.answer);
      utterance.lang = "en-US";
      speechSynthesis.speak(utterance);
    };
    container.appendChild(playBtn);
    
    const replayBtn = document.createElement("button");
    replayBtn.innerText = "再生リプレイ (2コイン)";
    replayBtn.onclick = () => {
      if (getCoins() >= 2) {
        addCoins(-2);
        updateCoinDisplay();
        const utterance = new SpeechSynthesisUtterance(questionData.answer);
        utterance.lang = "en-US";
        speechSynthesis.speak(utterance);
      } else {
        document.getElementById("feedback").innerText = "コインが足りません！";
        document.getElementById("feedback").style.color = "red";
      }
    };
    container.appendChild(replayBtn);
    
    const input = document.createElement("input");
    input.type = "text";
    input.classList.add("writing-answer");
    input.placeholder = "聞こえた内容を入力...";
    container.appendChild(input);
    
    const submitBtn = document.createElement("button");
    submitBtn.innerText = "採点する";
    submitBtn.onclick = () => {
      checkWritingAnswer(input.value);
      document.getElementById("next-btn").focus();
    };
    container.appendChild(submitBtn);
  } else if (questionData.type === "speaking") {
    const playPromptBtn = document.createElement("button");
    playPromptBtn.innerText = "模範音声再生 / Play Prompt";
    playPromptBtn.onclick = () => {
      const utterance = new SpeechSynthesisUtterance(questionData.answer);
      utterance.lang = "en-US";
      speechSynthesis.speak(utterance);
    };
    container.appendChild(playPromptBtn);
    
    const speakingNote = document.createElement("p");
    speakingNote.innerText = "自分で声に出して練習してください。模範音声を参考にしましょう。";
    container.appendChild(speakingNote);
    
    const input = document.createElement("input");
    input.type = "text";
    input.classList.add("writing-answer");
    input.placeholder = "模範解答と比較するために入力（任意）...";
    container.appendChild(input);
    
    const submitBtn = document.createElement("button");
    submitBtn.innerText = "採点する";
    submitBtn.onclick = () => {
      checkWritingAnswer(input.value);
      document.getElementById("next-btn").focus();
    };
    container.appendChild(submitBtn);
  }
  
  document.getElementById("next-btn").disabled = false;
}

function showHint() {
  if (getCoins() < 5) {
    document.getElementById("feedback").innerText = "コインが足りません！";
    document.getElementById("feedback").style.color = "red";
    return;
  }
  addCoins(-5);
  updateCoinDisplay();
  const qData = currentQuestions[currentQuestionIndex];
  let hint = qData.answer.charAt(0) + "_".repeat(qData.answer.length - 1);
  document.getElementById("feedback").innerText = "ヒント: " + hint;
  document.getElementById("feedback").style.color = "blue";
}

function checkMultipleAnswer(element, selectedOption) {
  const qData = currentQuestions[currentQuestionIndex];
  const feedbackDiv = document.getElementById("feedback");
  let isCorrect = false;
  if (selectedOption === qData.answer) {
    element.style.backgroundColor = "#a5d6a7";
    feedbackDiv.innerText = "正解！";
    feedbackDiv.style.color = "green";
    isCorrect = true;
  } else {
    element.style.backgroundColor = "#ef9a9a";
    feedbackDiv.innerText = "不正解。正しい答えは「" + qData.answer + "」です。";
    feedbackDiv.style.color = "red";
  }
  updatePerformance(currentTopic, isCorrect);
  Array.from(document.getElementsByClassName("option")).forEach(opt => {
    opt.style.pointerEvents = "none";
  });
  document.getElementById("next-btn").disabled = false;
}

function checkWritingAnswer(userInput) {
  const qData = currentQuestions[currentQuestionIndex];
  const cleanedInput = userInput.trim().toLowerCase();
  const correctAnswer = qData.answer.trim().toLowerCase();
  const feedbackDiv = document.getElementById("feedback");
  let isCorrect = false;
  if (cleanedInput === correctAnswer) {
    feedbackDiv.innerText = "正解！";
    feedbackDiv.style.color = "green";
    isCorrect = true;
  } else {
    feedbackDiv.innerText = "不正解。正しい答えは「" + qData.answer + "」です。";
    feedbackDiv.style.color = "red";
  }
  updatePerformance(currentTopic, isCorrect);
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
    if (currentTopic === "daily") {
      const status = updateDailyLessonStatus();
      document.getElementById("feedback").innerText = `おめでとう！ ${status.earnedCoins}コイン獲得！ 連続日数: ${status.newStreak}日`;
    } else if (currentTopic !== "daily") {
      addCoins(5);
      document.getElementById("feedback").innerText = "このレッスン完了で5コイン獲得！";
    }
    alert("このレッスンは終了です！");
    backToLessons();
  }
}

function updateProgress() {
  const progressElem = document.getElementById("progress");
  const progressPercent = ((currentQuestionIndex) / currentQuestions.length) * 100;
  progressElem.style.width = `${progressPercent}%`;
}

function updateCoinDisplay() {
  const coinDisplay = document.getElementById("coin-display");
  coinDisplay.innerText = `保有コイン: ${getCoins()}`;
}

function generateDailyQuestions(count) {
  const topics = ["greetings", "phrases", "presentContinuous", "beVerb", "will", "modals", "comparative", "conditional", "passiveVoice", "past", "future", "questionFormation", "listening", "speaking"];
  const questions = [];
  for (let i = 0; i < count; i++) {
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    questions.push(generateQuestion(randomTopic));
  }
  return questions;
}

window.onload = showStages;
