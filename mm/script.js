function playGame(choice) {
        // Giải phóng kết quả cũ
        document.getElementById('result').innerText = ''  ;
        document.getElementById('dice1').innerText = '🎲';
        document.getElementById('dice2').innerText = '🎲';
        document.getElementById('dice3').innerText = '🎲';

        // Tạo kết quả xí ngầu
        const dice1 = Math.floor(Math.random() * 6) + 1;
        const dice2 = Math.floor(Math.random() * 6) + 1;
        const dice3 = Math.floor(Math.random() * 6) + 1;

        // Hiển thị xí ngầu
        document.getElementById('dice1').innerText = `🎲 ${dice1}`;
        document.getElementById('dice2').innerText = `🎲 ${dice2}`;
        document.getElementById('dice3').innerText = `🎲 ${dice3}`;

        // Tính tổng xí ngầu
        const total = dice1 + dice2 + dice3;

        // Kiểm tra kết quả
        const isTai = total > 10;
        const isXiu = total <= 10;

        // Kiểm tra kết quả dựa trên sự lựa chọn
        if (choice === 'tai' && isTai) {
            document.getElementById('result').innerText = `Chúc mừng! Bạn thắng (Tài). Tổng xí ngầu: ${total}`;
        } else if (choice === 'xiu' && isXiu) {
            document.getElementById('result').innerText = `Chúc mừng! Bạn thắng (Xỉu). Tổng xí ngầu: ${total}`;
        } else {
            document.getElementById('result').innerText = `Rất tiếc! Bạn thua. Tổng xí ngầu: ${total}`;
        }
    }

