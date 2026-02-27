import React, { useMemo, useState } from "react";
import Badge from "../components/Badge";
import Button from "../components/Button";

const FUN_FACTS = [
  "Left-handedness is commonly estimated around ~10% of the population (varies by study and definition).",
  "Many everyday objects assume right-handed use: scissors, can openers, desk arms, and tool grips.",
  "Smudging ink is a classic lefty problem because many writing systems flow left-to-right.",
  "In some cultures and historical contexts, the left hand carried negative or “unclean” associations.",
  "Lefties often develop ambidextrous workarounds just to get through standard tasks.",
  "Sports gear and coaching cues can default to right-handed assumptions lefties adapt or improvise.",
  "Creativity correlations are often claimed in pop culture; evidence is mixed, consider it folk wisdom, not destiny.",
  "Left-handed athletes can be strategically “unexpected” in certain matchups (context matters!).",
  "Tool ergonomics is real: mirrored bevels, grips, and layouts can reduce fatigue and improve accuracy.",
  "Reclaiming language can be powerful: what was labeled “wrong” becomes a banner.",
];

const FAMOUS_LEFTIES = [
  {
    name: "Leonardo da Vinci",
    category: "Artist / Inventor",
    line: "Sketches, mirrors, and genius level tinkering.",
  },
  {
    name: "Jimi Hendrix",
    category: "Musician",
    line: "Turned the guitar upside down and history with it.",
  },
  {
    name: "Paul McCartney",
    category: "Musician",
    line: "Bass lines that walk like they own the street.",
  },
  {
    name: "Prince",
    category: "Musician",
    line: "Virtuosity with a mischievous grin.",
  },
  {
    name: "Billie Eilish",
    category: "Musician",
    line: "Whispers that hit like a siren.",
  },
  {
    name: "Keanu Reeves",
    category: "Actor",
    line: "Calm chaos. Soft spoken legend energy.",
  },
  {
    name: "Scarlett Johansson",
    category: "Actor",
    line: "Leading roles with sharp edges.",
  },
  {
    name: "Barack Obama",
    category: "Leader",
    line: "Southpaw signatures in the history books.",
  },
  {
    name: "Napoleon Bonaparte",
    category: "Leader",
    line: "Small hand, big appetite for maps.",
  },
  {
    name: "Marie Curie",
    category: "Scientist",
    line: "Radiant brilliance, literally.",
  },
  {
    name: "Albert Einstein",
    category: "Scientist",
    line: "Relativity and unruly hair.",
  },
  {
    name: "Oprah Winfrey",
    category: "Creator",
    line: "Storytelling as an empire.",
  },
  {
    name: "Rafael Nadal",
    category: "Athlete",
    line: "Spin and angles that feel unfair.",
  },
  { name: "Babe Ruth", category: "Athlete", line: "Swing like a myth." },
  { name: "Lady Gaga", category: "Musician", line: "Pop as performance art." },
  { name: "Kurt Cobain", category: "Musician", line: "Raw chords, raw nerve." },
];

const QUIZ = [
  {
    q: "When you use scissors, do they…",
    a: [
      "Chew paper like a demon",
      "Work fine, somehow",
      "Only if you hold them upside down",
    ],
    w: [3, 1, 2],
  },
  {
    q: "Writing by hand feels like…",
    a: [
      "A smear campaign against me",
      "Mostly fine",
      "Depends on the pen, I’m picky",
    ],
    w: [3, 1, 2],
  },
  {
    q: "Your relationship with right handed tools is…",
    a: [
      "An enemies-to-lovers arc (still enemies)",
      "We coexist",
      "I swap hands and move on",
    ],
    w: [3, 1, 2],
  },
  {
    q: "Pick a vibe:",
    a: ["Punk zine chaos", "Clean minimal order", "Witchy craft table"],
    w: [3, 1, 2],
  },
  {
    q: "You see a ‘right-handed only’ object. You…",
    a: [
      "Re-engineer it out of spite",
      "Ask for help",
      "Buy a lefty version immediately",
    ],
    w: [3, 1, 2],
  },
];

function resultText(score) {
  if (score >= 13)
    return "Full Devil’s Hand lefty: certified rebel, tool slayer, unapologetic southpaw.";
  if (score >= 9)
    return "Lefty coded: you’ve adapted… but you deserve better gear.";
  return "Honorary lefty ally: you respect the struggle and you support the coven.";
}

export default function Lore() {
  const [answers, setAnswers] = useState(Array(QUIZ.length).fill(null));
  const score = useMemo(() => {
    return answers.reduce((a, idx, i) => {
      if (idx == null) return a;
      return a + QUIZ[i].w[idx];
    }, 0);
  }, [answers]);

  const complete = answers.every((x) => x != null);

  return (
    <div className="container stackLg">
      <header className="pageHead">
        <h1 className="h1">Left Hand Lore</h1>
        <p className="lead muted">
          Fun facts, famous lefties, and a tiny quiz to see how cursed
          (affectionate) you are.
        </p>
      </header>

      <section className="panel tornAll">
        <div className="sectionHead">
          <h2 className="h2">Fun Facts</h2>
          <Badge tone="neon">Zine notes</Badge>
        </div>
        <ul className="facts">
          {FUN_FACTS.map((f) => (
            <li key={f} className="fact">
              <span className="burst" aria-hidden="true">
                ✷
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <p className="muted small">
          Some points above are cultural observations or “often claimed” lore.
          Treat them as fun prompts, not medical advice or destiny.
        </p>
      </section>

      <section className="panel tornAll">
        <div className="sectionHead">
          <h2 className="h2">Famous Lefties</h2>
          <Badge tone="blood">12+</Badge>
        </div>

        <div
          className="famousGrid"
          role="list"
          aria-label="Famous left handed people list"
        >
          {FAMOUS_LEFTIES.map((p) => (
            <div
              className="famousCard cardHover tornAll"
              role="listitem"
              key={p.name}
            >
              <div className="famousTop">
                <strong>{p.name}</strong>
                <Badge tone="paper">{p.category}</Badge>
              </div>
              <p className="muted">{p.line}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="panel tornAll">
        <div className="sectionHead">
          <h2 className="h2">Are you a Devil’s Hand lefty?</h2>
          <Badge tone="neon">Quiz</Badge>
        </div>

        <form className="quiz" aria-label="Lefty quiz">
          {QUIZ.map((q, i) => (
            <fieldset className="quizQ tornAll" key={q.q}>
              <legend className="quizLegend">
                <span className="muted">Q{i + 1}.</span> {q.q}
              </legend>

              <div className="quizOpts">
                {q.a.map((opt, idx) => {
                  const id = `q${i}-a${idx}`;
                  return (
                    <label className="radio" htmlFor={id} key={opt}>
                      <input
                        id={id}
                        name={`q-${i}`}
                        type="radio"
                        checked={answers[i] === idx}
                        onChange={() =>
                          setAnswers((arr) => {
                            const next = [...arr];
                            next[i] = idx;
                            return next;
                          })
                        }
                      />
                      <span>{opt}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          ))}
        </form>

        <div className="quizResult tornAll">
          <div className="quizResultTitle">Result</div>
          {complete ? (
            <p className="lead">{resultText(score)}</p>
          ) : (
            <p className="muted">Answer all questions to reveal your fate.</p>
          )}
          <div className="quizActions">
            <Button
              variant="ghost"
              type="button"
              onClick={() => setAnswers(Array(QUIZ.length).fill(null))}
            >
              Reset quiz
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
