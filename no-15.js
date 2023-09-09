const choices = ["gunting", "batu", "kertas"];
const playerChoice = 'batu'
const computerChoice = choices[Math.floor(Math.random() * 3)];

console.log(`Pilihan Kamu: ${playerChoice}`);
console.log(`Pilihan Komputer: ${computerChoice}`);

if (playerChoice === computerChoice) {
  console.log("Seri!");
} else if (
  (playerChoice === "gunting" && computerChoice === "kertas") ||
  (playerChoice === "batu" && computerChoice === "gunting") ||
  (playerChoice === "kertas" && computerChoice === "batu")
) {
  console.log("Kamu Menang!");
} else {
  console.log("Komputer Menang!");
}
  




