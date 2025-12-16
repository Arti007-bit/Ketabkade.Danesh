// عناصر
const assistantBtn = document.createElement("div");
assistantBtn.id = "book-assistant-btn";
assistantBtn.innerText = "📚";

const assistantBox = document.createElement("div");
assistantBox.id = "book-assistant-box";

assistantBox.innerHTML = `
  <div class="assistant-header">
    دستیار کتابکده
    <span id="assistant-close">×</span>
  </div>
  <div id="assistant-messages">
    <div class="bot-msg">
      سلام 👋  
      اسم کتاب یا حس‌وحالت رو بنویس تا راهنمایی‌ات کنم.
    </div>
  </div>
  <div class="assistant-input">
    <input id="assistant-input-text" placeholder="مثلاً انگیزه، تمرکز، معنا">
    <button id="assistant-send">ارسال</button>
  </div>
`;

document.body.appendChild(assistantBtn);
document.body.appendChild(assistantBox);

// باز و بسته شدن
assistantBtn.onclick = () => assistantBox.style.display = "flex";
assistantBox.querySelector("#assistant-close").onclick = () =>
  assistantBox.style.display = "none";

// ارسال پیام
document.getElementById("assistant-send").onclick = sendMessage;
document.getElementById("assistant-input-text")
  .addEventListener("keypress", e => e.key === "Enter" && sendMessage());

function sendMessage() {
  const input = document.getElementById("assistant-input-text");
  const text = input.value.trim();
  if (!text) return;

  addMsg(text, "user");
  input.value = "";

  setTimeout(() => {
    addMsg(getSuggestion(text), "bot");
  }, 400);
}

function addMsg(text, sender) {
  const div = document.createElement("div");
  div.className = sender === "user" ? "user-msg" : "bot-msg";
  div.innerHTML = text;
  document.getElementById("assistant-messages").appendChild(div);
}

// منطق پیشنهاد بر اساس کتاب‌های سایت تو
function getSuggestion(text) {
  text = text.toLowerCase();

  if (text.includes("عادت") || text.includes("انگیزه")) {
    return "📘 <b>قدرت عادت</b><br>برای ساختن رفتارهای پایدار و تغییر زندگی.";
  }
  
if (text.includes("درون") || text.includes("انگیزه")) {
    return "📘 <b> چهار میثاق </b><br>برای ساختن رفتارهای پایدار و تغییر زندگی.";
}
  
  if (text.includes("معنا") || text.includes("افسردگی")) {
    return "📗 <b>انسان در جستجوی معنا</b><br>برای پیدا کردن معنا حتی در سخت‌ترین شرایط.";
  }

  if (text.includes("پول") || text.includes("ثروت")) {
    return "📙 <b>پدر پولدار، پدر بی‌پول</b><br>برای تغییر نگرش مالی.";
    
  }

  
  if (text.includes("تمرکز") || text.includes(" غرور")) {
    return "📙 <b> قله ها و دره ها </b><br> برای نحوه مدیریت شرایط بالاو پایین زندگی .";
    
  }

  if (text.includes("باور") || text.includes("ذهن")) {
    return "📕 <b>چهار اثر فلورانس اسکاول شین</b><br>قدرت باور و کلام.";
  }

if (text.includes("عادت") || text.includes("انگیزه")) {
    return "📘 <b>دوازده ستون موفقیت</b><br>برای برجای گذاشتن رفتارها و میراث قوی قدرت مند زندگی.";
                }

if (text.includes("دوست") || text.includes("ارتباط")) {
    return "📘 <b> آیین دوست یابی </b><br> برای ساختن رابط مکمو صمیمانه برای انواع دوستی هاو معاشرت ها .";
}

  
  return "می‌تونی درباره انگیزه، معنا، پول یا ذهن سؤال بپرسی 🙂";
}
