class CountdownTimer {
    constructor(title, targetDate) {
      this.title = title;
      this.targetDate = new Date(targetDate).getTime();
      this.timerElement = document.getElementById('countdown');
      this.titleElement = document.getElementById('timer_title'); // Fix typo in the ID
      this.start();
    }

    update() {
      const currentDate = new Date().getTime();
      const timeDifference = this.targetDate - currentDate;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        this.timerElement.innerHTML = `
          <div class="time">
            <span class="interval_countdown">${days}d</span>
            <span class="colon_countdown">:</span>
            <span class="interval_countdown">${hours}h</span>
            <span class="colon_countdown">:</span>
            <span class="interval_countdown">${minutes}m</span>
            <span class="colon_countdown">:</span>
            <span class="interval_countdown">${seconds}s</span>
          </div>
        `;
      } else {
        this.timerElement.innerHTML = 'Время истекло';
      }
    }

    updateTitle() {
        this.titleElement.textContent = `Осталось времени до ${this.title}`
    }

    start() {
      this.updateTitle();
      this.update();
      this.intervalId = setInterval(() => {
        this.update();
      }, 1000);
    }
  }

  const timerTitle = prompt('Введите название таймера:');
  const targetDate = prompt('Введите дату отсчета в формате YYYY-MM-DD HH:mm:ss:');

  const countdownTimer = new CountdownTimer(timerTitle, targetDate);
