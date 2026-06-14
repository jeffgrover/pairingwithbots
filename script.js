const signals = [
  "AI does not replace senior engineers. It rewards the dangerous ones.",
  "The bottleneck moved from typing code to deciding what code deserves to exist.",
  "Fast is useful. Fast plus judgment is unfair.",
  "An LLM can write code. A veteran knows when to make it stop."
];

const transcript = [
  "$ define problem --real --messy",
  "Found: unclear scope, legacy edges, missing tests",
  "",
  "$ ask-ai --fanout implementation options",
  "Generated: 4 paths, 2 traps, 1 useful shortcut",
  "",
  "$ apply-judgment --delete-the-clever-stuff",
  "Kept: readable code, boring architecture, testable seams",
  "",
  "$ ship --with-tests --without-drama",
  "Released: production value, not a demo hallucination"
];

const signalText = document.querySelector("#signalText");
const terminalText = document.querySelector("#terminalText");
let signalIndex = 0;

function rotateSignal() {
  signalIndex = (signalIndex + 1) % signals.length;
  signalText.textContent = signals[signalIndex];
}

function typeTranscript() {
  let line = 0;
  let char = 0;

  function tick() {
    if (line >= transcript.length) return;

    const current = transcript[line];
    terminalText.textContent = transcript.slice(0, line).join("\n");
    if (line > 0) terminalText.textContent += "\n";
    terminalText.textContent += current.slice(0, char);

    char += 1;
    if (char > current.length) {
      line += 1;
      char = 0;
      window.setTimeout(tick, 260);
      return;
    }

    window.setTimeout(tick, 18);
  }

  tick();
}

window.setInterval(rotateSignal, 3600);
typeTranscript();
