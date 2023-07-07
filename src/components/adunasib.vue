<template>
  <div class="app">
    <h1>Batu, Gunting, Kertas</h1>
    <div v-if="!gameOver">
      <p>Pilih pilihan Anda:</p>
      <div class="choices">
        <div
          v-for="(choice, index) in choices"
          :key="index"
          @click="playGame(index)"
          :class="['choice', { active: choice.active }]"
        >
          {{ choice.name }}
        </div>
      </div>
    </div>
    <div v-else>
      <p>Permainan selesai.</p>
      <p>Hasil: {{ result }}</p>
      <button @click="restartGame">Mulai Ulang</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      choices: [
        { name: "Batu", active: false },
        { name: "Gunting", active: false },
        { name: "Kertas", active: false },
      ],
      gameOver: false,
      result: "",
    };
  },
  methods: {
    playGame(index) {
      const userChoice = this.choices[index].name;
      const computerChoice = this.choices[
        Math.floor(Math.random() * this.choices.length)
      ].name;
      this.choices.forEach((choice) => (choice.active = false));
      this.choices[index].active = true;
      this.determineWinner(userChoice, computerChoice);
      this.gameOver = true;
    },
    determineWinner(userChoice, computerChoice) {
      if (userChoice === computerChoice) {
        this.result = "Seri";
      } else if (
        (userChoice === "Batu" && computerChoice === "Gunting") ||
        (userChoice === "Gunting" && computerChoice === "Kertas") ||
        (userChoice === "Kertas" && computerChoice === "Batu")
      ) {
        this.result = "Anda Menang!";
      } else {
        this.result = "Anda Kalah!";
      }
    },
    restartGame() {
      this.choices.forEach((choice) => (choice.active = false));
      this.gameOver = false;
      this.result = "";
    },
  },
};
</script>

<style>
.app {
  text-align: center;
  margin-top: 100px;
}
.choices {
  display: flex;
  justify-content: center;
}
.choice {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border: 1px solid #47f9ff;
  margin: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
}
.choice.active {
  background-color: rgb(10, 138, 180);
}
button adunasib-widget {
  margin-top: 20px;
  font-size: 24px;
}
.adunasib-widget h1 {
  color: #e63a0b;
  font-size: 24px;
  margin-bottom: 20px;
}

</style>
