
// ==========================================
// THE LAST KEY TO KNOWLEDGE
// MAIN JAVASCRIPT
// ==========================================

// ---------- 1. DỮ LIỆU CÂU HỎI ----------

const questionBank = [
    {
        id: 1,
        difficulty: "Dễ",
        question: "Đâu KHÔNG phải là ưu điểm của giao tiếp trên không gian mạng?",
        options: [
            "A. Tính tiện lợi",
            "B. Tiết kiệm thời gian",
            "C. Có nguy cơ mất an toàn thông tin",
            "D. Có nhiều công cụ giao tiếp đa dạng"
        ],
        answer: 2,
        explanation: "Nguy cơ mất an toàn thông tin là một hạn chế, không phải ưu điểm của giao tiếp trực tuyến."
    },
    {
        id: 2,
        difficulty: "Dễ",
        question: "Hành vi nào KHÔNG thể hiện cách ứng xử nhân văn trên không gian mạng?",
        options: [
            "A. Đăng tải thông tin chưa được kiểm chứng",
            "B. Tôn trọng quyền riêng tư của người khác",
            "C. Sử dụng ngôn ngữ phù hợp",
            "D. Chia sẻ thông tin chính xác, đáng tin cậy"
        ],
        answer: 0,
        explanation: "Đăng tải thông tin chưa được kiểm chứng có thể gây hiểu lầm và ảnh hưởng đến người khác."
    },
    {
        id: 3,
        difficulty: "Dễ",
        question: "Đâu là một ưu điểm của giao tiếp trên không gian mạng?",
        options: [
            "A. Mở rộng các mối quan hệ xã hội",
            "B. Thiếu các tín hiệu giao tiếp phi ngôn ngữ",
            "C. Có thể xảy ra sự cố kỹ thuật",
            "D. Có nguy cơ bị tấn công mạng"
        ],
        answer: 0,
        explanation: "Giao tiếp trực tuyến giúp con người kết nối với nhiều người ở những địa điểm khác nhau."
    },
    {
        id: 4,
        difficulty: "Khó",
        question: "Đâu KHÔNG thuộc bốn khía cạnh của ứng xử nhân văn trên không gian mạng?",
        options: [
            "A. Tôn trọng",
            "B. Lịch sự",
            "C. Thấu hiểu",
            "D. Cạnh tranh"
        ],
        answer: 3,
        explanation: "Bốn khía cạnh được đề cập gồm tôn trọng, lịch sự, thấu hiểu và hỗ trợ."
    },
    {
        id: 5,
        difficulty: "Dễ",
        question: "Hành động nào thể hiện sự tôn trọng khi giao tiếp trên mạng?",
        options: [
            "A. Đăng ảnh riêng tư của bạn để trêu chọc",
            "B. Lắng nghe ý kiến khác biệt và tôn trọng quyền riêng tư",
            "C. Chia sẻ tin đồn gây chú ý",
            "D. Dùng lời mỉa mai để hạ thấp người khác"
        ],
        answer: 1,
        explanation: "Lắng nghe ý kiến khác biệt và tôn trọng quyền riêng tư là biểu hiện của sự tôn trọng."
    },
    {
        id: 6,
        difficulty: "Trung bình",
        question: "Vì sao nhắn tin có thể gây hiểu lầm nhiều hơn giao tiếp trực tiếp?",
        options: [
            "A. Do mạng thường xuyên bị chậm",
            "B. Người nhận không nhìn thấy nét mặt, ánh mắt, cử chỉ và giọng điệu",
            "C. Do ứng dụng tự thay đổi nội dung tin nhắn",
            "D. Vì người nhắn không có thời gian suy nghĩ"
        ],
        answer: 1,
        explanation: "Tin nhắn thường thiếu các tín hiệu phi ngôn ngữ nên người nhận có thể hiểu sai ý của người gửi."
    },
    {
        id: 7,
        difficulty: "Khó",
        question: "Việc kiểm chứng nguồn tin trước khi chia sẻ thể hiện khía cạnh nào của ứng xử nhân văn?",
        options: [
            "A. Lịch sự",
            "B. Hỗ trợ",
            "C. Thấu hiểu",
            "D. Cảnh giác"
        ],
        answer: 0,
        explanation: "Theo nội dung bài học, lịch sự còn thể hiện ở việc sử dụng ngôn ngữ đúng mực và chỉ chia sẻ thông tin đã được kiểm chứng."
    },
    {
        id: 8,
        difficulty: "Trung bình",
        question: "Mục đích của việc tự kiểm tra và giữ bình tĩnh trước khi bình luận là gì?",
        options: [
            "A. Tăng lượt tương tác",
            "B. Tránh bình luận khiêu khích hoặc công kích cá nhân mất kiểm soát",
            "C. Che giấu danh tính",
            "D. Thể hiện bản thân vượt trội"
        ],
        answer: 1,
        explanation: "Giữ bình tĩnh giúp chúng ta tránh những lời nói gây tổn thương và mâu thuẫn không cần thiết."
    },
    {
        id: 9,
        difficulty: "Trung bình",
        question: "Mối quan hệ giữa ứng xử nhân văn trên mạng và ngoài đời thực là gì?",
        options: [
            "A. Hoàn toàn khác biệt",
            "B. Ứng xử trên mạng là sự tiếp nối đạo đức trong đời thực",
            "C. Chỉ cần thiết khi sử dụng tài khoản thật",
            "D. Các chuẩn mực truyền thống không còn áp dụng"
        ],
        answer: 1,
        explanation: "Dù ở môi trường nào, mỗi người vẫn cần tôn trọng và có trách nhiệm với người khác."
    },
    {
        id: 10,
        difficulty: "Khó",
        question: "Vì sao khó xây dựng mối quan hệ thân thiết nếu chỉ giao tiếp trực tuyến?",
        options: [
            "A. Các nền tảng giới hạn thời gian trò chuyện",
            "B. Thiếu tương tác trực tiếp và trải nghiệm chung ngoài đời làm giảm chiều sâu cảm xúc",
            "C. Chi phí Internet quá cao",
            "D. Công cụ trực tuyến chỉ dành cho công việc quản trị"
        ],
        answer: 1,
        explanation: "Những trải nghiệm trực tiếp và sự tương tác ngoài đời góp phần tạo nên sự gắn kết sâu sắc."
    },
    {
        id: 11,
        difficulty: "Trung bình",
        question: "Khi thấy bài viết chế giễu ngoại hình một bạn học cùng những bình luận ác ý, bạn nên làm gì?",
        options: [
            "A. Chia sẻ bài viết để hỏi xem có đúng không",
            "B. Không tham gia chế giễu, báo cáo bài viết và riêng tư động viên bạn",
            "C. Tranh cãi công khai với tất cả mọi người",
            "D. Lưu bài viết để trêu chọc bạn sau này"
        ],
        answer: 1,
        explanation: "Không tiếp tay cho hành vi bắt nạt trực tuyến, đồng thời báo cáo nội dung và hỗ trợ người bị ảnh hưởng."
    },
    {
        id: 12,
        difficulty: "Trung bình",
        question: "Trong cuộc thảo luận nhóm trực tuyến, hai thành viên tranh cãi và công kích nhau. Nếu là trưởng nhóm, bạn nên làm gì?",
        options: [
            "A. Xóa cả hai thành viên mà không giải thích",
            "B. Nhắc mọi người bình tĩnh, tôn trọng nhau và quay lại mục tiêu chung",
            "C. Tắt tiếng tất cả và tự quyết định",
            "D. Đứng về phía người bạn thân"
        ],
        answer: 1,
        explanation: "Trưởng nhóm cần điều hòa cuộc thảo luận, khuyến khích sự tôn trọng và hướng mọi người về mục tiêu chung."
    },
    {
        id: 13,
        difficulty: "Dễ",
        question: "Người lạ gửi đường link nhận thưởng và yêu cầu đăng nhập tài khoản mạng xã hội. Bạn nên làm gì?",
        options: [
            "A. Nhấn vào đường link",
            "B. Không truy cập, chặn người gửi và cảnh báo bạn bè",
            "C. Chuyển tiếp đường link cho người khác",
            "D. Chửi mắng người gửi"
        ],
        answer: 1,
        explanation: "Không truy cập đường link đáng ngờ, không cung cấp thông tin đăng nhập và không phát tán đường link độc hại."
    }
];


// ---------- 2. NGÂN HÀNG MẬT MÃ ----------

const passwordBank = [
    { word: "SAFE", clue: "Một từ tiếng Anh chỉ trạng thái an toàn, không gặp nguy hiểm." },
    { word: "CODE", clue: "Một hệ thống ký hiệu hoặc câu lệnh được sử dụng trong lập trình." },
    { word: "CHAT", clue: "Hoạt động trò chuyện trực tuyến giữa mọi người." },
    { word: "WISE", clue: "Một từ tiếng Anh có nghĩa là khôn ngoan." },
    { word: "KIND", clue: "Một từ tiếng Anh chỉ người tử tế, tốt bụng." },
    { word: "HELP", clue: "Một từ tiếng Anh có nghĩa là giúp đỡ." },
    { word: "LINK", clue: "Một đường liên kết dẫn đến trang hoặc tài nguyên trên Internet." },
    { word: "USER", clue: "Một từ tiếng Anh chỉ người sử dụng hệ thống." },
    { word: "OPEN", clue: "Một từ tiếng Anh có nghĩa là mở." },
    { word: "TRUE", clue: "Một từ tiếng Anh có nghĩa là đúng hoặc sự thật." },
    { word: "FAIR", clue: "Một từ tiếng Anh chỉ sự công bằng." },
    { word: "CARE", clue: "Một từ tiếng Anh có nghĩa là quan tâm, chăm sóc." },
    { word: "NEWS", clue: "Một từ tiếng Anh có nghĩa là tin tức." },
    { word: "TEAM", clue: "Một nhóm người cùng phối hợp để đạt mục tiêu." },
    { word: "TEXT", clue: "Một từ tiếng Anh chỉ văn bản hoặc nội dung chữ viết." },
    { word: "READ", clue: "Một từ tiếng Anh có nghĩa là đọc." },
    { word: "TALK", clue: "Một từ tiếng Anh có nghĩa là nói chuyện." },
    { word: "PLAY", clue: "Một từ tiếng Anh có nghĩa là chơi." },
    { word: "RICH", clue: "Một từ tiếng Anh có nghĩa là giàu có." },
    { word: "MANG", clue: "Một từ tiếng Việt không dấu, chỉ môi trường kết nối các thiết bị và người dùng trên Internet." }
];


// ---------- 3. BIẾN TRẠNG THÁI ----------

let currentLock = null;
let currentQuestionIndex = 0;

let attempts = {};
let unlockedLocks = [];
let collectedLetters = [];

let lockLetters = {};
let currentPassword = "";
let currentClue = "";

let previousPassword = "";

let gameEnded = false;


// ---------- 4. CÁC HÀM TIỆN ÍCH ----------

function shuffleArray(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}


function hideAll() {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.add("hidden");
    });

    document.getElementById("question-modal").classList.add("hidden");
}


function showScreen(id) {
    hideAll();
    document.getElementById(id).classList.remove("hidden");
}


// ---------- 5. MENU VÀ LUẬT CHƠI ----------

function showRules() {
    showScreen("rules");
}


function backToMenu() {
    showScreen("menu");
}


function startGame() {
    initializeGame();
    showScreen("game");
}


// ---------- 6. KHỞI TẠO GAME ----------

function initializeGame() {
    currentLock = null;
    currentQuestionIndex = 0;

    attempts = {
        1: 3,
        2: 3,
        3: 3,
        4: 3
    };

    unlockedLocks = [];
    collectedLetters = [];
    lockLetters = {};
    gameEnded = false;

    // Chọn mật mã ngẫu nhiên, tránh lặp lại lượt trước nếu có thể.
    let availablePasswords = passwordBank.filter(
        item => item.word !== previousPassword
    );

    if (availablePasswords.length === 0) {
        availablePasswords = passwordBank;
    }

    const selectedPassword = availablePasswords[
        Math.floor(Math.random() * availablePasswords.length)
    ];

    currentPassword = selectedPassword.word;
    currentClue = selectedPassword.clue;

    previousPassword = currentPassword;

    // Xáo trộn các chữ cái và phân phối cho 4 ổ khóa.
    const shuffledLetters = shuffleArray(currentPassword.split(""));

    for (let i = 1; i <= 4; i++) {
        lockLetters[i] = shuffledLetters[i - 1];
    }

    // Xáo trộn thứ tự câu hỏi cho từng ổ khóa.
    // Chọn ngẫu nhiên 12 câu hỏi
const selectedQuestions = shuffleArray(questionBank)
    .slice(0, 12)
    .map(question => ({ ...question }));

// Tạo 12 vị trí đáp án đúng:
// A, B, C, D xuất hiện đúng 3 lần mỗi vị trí.
const answerPositions = shuffleArray([
    0, 0, 0,
    1, 1, 1,
    2, 2, 2,
    3, 3, 3
]);

// Gán vị trí đáp án đúng cho từng câu
selectedQuestions.forEach((question, index) => {
    question.correctPosition = answerPositions[index];
});

window.lockQuestions = {};

for (let i = 1; i <= 4; i++) {
    window.lockQuestions[i] = selectedQuestions.slice(
        (i - 1) * 3,
        i * 3
    );
}
    // Đưa các phần tử giao diện về trạng thái ban đầu.
    for (let i = 1; i <= 4; i++) {
        const card = document.getElementById(`lock-${i}`);

        card.classList.remove("unlocked");
        card.disabled = false;

        document.getElementById(`status-${i}`).textContent = "Chưa mở";
        document.getElementById(`attempts-${i}`).textContent = "3 lượt sai";
    }

    document.getElementById("collected-letters").innerHTML = `
        <span class="empty-letter">?</span>
        <span class="empty-letter">?</span>
        <span class="empty-letter">?</span>
        <span class="empty-letter">?</span>
    `;

    document.getElementById("final-clue").textContent =
        "Hãy mở các ổ khóa nhỏ để nhận gợi ý.";

    document.getElementById("password-input").value = "";
    document.getElementById("password-input").disabled = true;
    document.getElementById("password-button").disabled = true;

    document.getElementById("password-message").textContent = "";
    document.getElementById("password-message").className = "message";
}


// ---------- 7. MỞ Ổ KHÓA NHỎ ----------

function openLock(lockNumber) {
    if (gameEnded) return;

    if (unlockedLocks.includes(lockNumber)) return;

    if (attempts[lockNumber] <= 0) return;

    currentLock = lockNumber;
    currentQuestionIndex = 0;

    document.getElementById("question-modal").classList.remove("hidden");

    showQuestion();
}


function closeQuestion() {
    document.getElementById("question-modal").classList.add("hidden");
    currentLock = null;
}


// ---------- 8. HIỂN THỊ CÂU HỎI ----------

function showQuestion() {
    if (gameEnded || currentLock === null) return;

    const questions = window.lockQuestions[currentLock];
    const question = questions[currentQuestionIndex];

    document.getElementById("question-lock-name").textContent =
        `Ổ KHÓA 0${currentLock}`;

    document.getElementById("question-number").textContent =
        `CÂU ${currentQuestionIndex + 1}/3`;

    document.getElementById("question-attempts").textContent =
        `${attempts[currentLock]} lượt sai còn lại`;

    document.getElementById("question-text").textContent =
        question.question;

    document.getElementById("question-feedback").textContent = "";
    document.getElementById("question-feedback").className = "message";

    // Tách đáp án đúng và các đáp án sai
    const correctOption = question.options[question.answer]
        .replace(/^[A-D]\.\s*/, "");

    const wrongOptions = question.options
        .filter((_, index) => index !== question.answer)
        .map(option => option.replace(/^[A-D]\.\s*/, ""));

    // Xáo trộn các đáp án sai
    const shuffledWrongOptions = shuffleArray(wrongOptions);

    // Chèn đáp án đúng vào vị trí đã được phân phối
    const displayOptions = [...shuffledWrongOptions];

    currentCorrectIndex = question.correctPosition;

    displayOptions.splice(currentCorrectIndex, 0, correctOption);

    // Hiển thị phương án A, B, C, D
    const optionsContainer = document.getElementById("answer-options");

    optionsContainer.innerHTML = "";

    displayOptions.forEach((option, index) => {
        const button = document.createElement("button");

        button.className = "answer-option";

        button.textContent =
            `${String.fromCharCode(65 + index)}. ${option}`;

        button.onclick = () => checkAnswer(index);

        optionsContainer.appendChild(button);
    });
}

// ---------- 9. KIỂM TRA ĐÁP ÁN ----------

function checkAnswer(selectedAnswer) {
    if (gameEnded || currentLock === null) return;

    const questions = window.lockQuestions[currentLock];
    const question = questions[currentQuestionIndex];

    const feedback = document.getElementById("question-feedback");
    const optionButtons = document.querySelectorAll(".answer-option");

    // Khóa các phương án để tránh nhấn liên tục.
    optionButtons.forEach(button => {
        button.disabled = true;
    });

    if (selectedAnswer === currentCorrectIndex) {

        optionButtons[selectedAnswer].classList.add("correct");

        feedback.textContent = "Chính xác! " + question.explanation;
        feedback.className = "message success";

        currentQuestionIndex++;

        setTimeout(() => {
            if (gameEnded) return;

            if (currentQuestionIndex < 3) {
                showQuestion();
            } else {
                unlockMiniLock();
            }
        }, 1300);

    } else {

        attempts[currentLock]--;

        updateAttempts();

        optionButtons[selectedAnswer].classList.add("wrong");

        feedback.textContent =
            "Chưa chính xác! " + question.explanation;

        feedback.className = "message error";

        if (attempts[currentLock] <= 0) {

            setTimeout(() => {
                endGame();
            }, 1200);

        } else {

            setTimeout(() => {
                if (gameEnded) return;

                optionButtons.forEach(button => {
                    button.disabled = false;
                });

                feedback.textContent =
                    `Bạn còn ${attempts[currentLock]} lượt sai. Hãy thử lại!`;

                feedback.className = "message error";
            }, 1100);
        }
    }
}


// ---------- 10. CẬP NHẬT SỐ LƯỢT ----------

function updateAttempts() {
    const remaining = attempts[currentLock];

    document.getElementById("attempts-" + currentLock).textContent =
        `${remaining} lượt sai`;

    document.getElementById("question-attempts").textContent =
        `${remaining} lượt sai còn lại`;
}


// ---------- 11. MỞ KHÓA NHỎ VÀ NHẬN CHỮ CÁI ----------

function unlockMiniLock() {
    if (gameEnded) return;

    const letter = lockLetters[currentLock];

    unlockedLocks.push(currentLock);
    collectedLetters.push(letter);

    const card = document.getElementById(`lock-${currentLock}`);

    card.classList.add("unlocked");
    card.disabled = true;

    card.querySelector(".lock-icon").textContent = "🔓";

    document.getElementById(`status-${currentLock}`).textContent =
        "Đã mở thành công";

    document.getElementById(`attempts-${currentLock}`).textContent =
        "Hoàn thành";

    document.getElementById("question-modal").classList.add("hidden");

    updateCollectedLetters();

    currentLock = null;

    // Khi đã mở đủ 4 ổ khóa.
    if (unlockedLocks.length === 4) {
        activateFinalLock();
    }
}


// ---------- 12. CẬP NHẬT CHỮ CÁI ----------

function updateCollectedLetters() {
    const container = document.getElementById("collected-letters");

    container.innerHTML = "";

    collectedLetters.forEach(letter => {
        const span = document.createElement("span");

        span.textContent = letter;

        container.appendChild(span);
    });

    for (let i = collectedLetters.length; i < 4; i++) {
        const span = document.createElement("span");

        span.className = "empty-letter";
        span.textContent = "?";

        container.appendChild(span);
    }
}


// ---------- 13. KÍCH HOẠT Ổ KHÓA LỚN ----------

function activateFinalLock() {
    document.getElementById("final-clue").textContent =
        "GỢI Ý: " + currentClue;

    document.getElementById("password-input").disabled = false;
    document.getElementById("password-button").disabled = false;

    document.getElementById("password-input").focus();

    document.getElementById("password-message").textContent =
        "Bạn đã có đủ bốn chữ cái. Hãy giải mật mã cuối cùng!";
}


// ---------- 14. KIỂM TRA MẬT MÃ ----------

function checkPassword() {
    if (gameEnded || unlockedLocks.length !== 4) return;

    const input = document.getElementById("password-input");

    const enteredPassword = input.value.trim().toUpperCase();

    const message = document.getElementById("password-message");

    if (enteredPassword === currentPassword) {
        showVictory();
    } else {
        message.textContent = "Mật mã chưa chính xác. Hãy thử lại!";
        message.className = "message error";

        input.value = "";
        input.focus();
    }
}


// Cho phép nhấn Enter để xác nhận mật mã.
document.getElementById("password-input").addEventListener("keydown", event => {
    if (event.key === "Enter") {
        checkPassword();
    }
});


// ---------- 15. GAME OVER ----------

function endGame() {
    if (gameEnded) return;

    gameEnded = true;

    document.getElementById("question-modal").classList.add("hidden");

    showScreen("game-over");
}


// ---------- 16. CHIẾN THẮNG ----------

function showVictory() {
    gameEnded = true;

    document.getElementById("victory-password").textContent =
        currentPassword;

    showScreen("victory");
}


// ---------- 17. CHƠI LẠI TỪ ĐẦU ----------

function restartGame() {
    initializeGame();

    showScreen("game");
}
