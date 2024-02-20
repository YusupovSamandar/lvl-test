interface QuizQuestion {
  question: string;
  choices: string[];
  type: "a2" | "b1" | "b2";
  correctAnswer: string;
}

interface Quiz {
  questions: QuizQuestion[];
}
const quiz: Quiz = {
  questions: [
    {
      question: "She  is looking for a job. What is she ____?",
      choices: [
        "is she looking",
        "is she's looking for",
        "is she looking for",
        "None of the above",
      ],
      type: "a2",
      correctAnswer: "is she looking for", // c
    },
    {
      question:
        "A:we don't have any bread\nB: Really ? I_some from the shop then.",
      choices: ["get", "will get", "'m going to get", "None of the above"],
      type: "a2",
      correctAnswer: "will get", // b
    },
    {
      question: "Chloe invited____her friends to her birthday party",
      choices: ["most of", "most", "the most", "None of the above"],
      type: "a2",
      correctAnswer: "most of", // A
    },
    {
      question: "If you _ now, you _ the train.",
      choices: [
        "don't leave / 'll miss",
        "won't leave / miss",
        "would leave / 'll miss",
        "None of the above",
      ],
      type: "a2",
      correctAnswer: "don't leave / 'll miss", // A
    },
    {
      question: "If we_the bus,we __late.",
      choices: [
        "don't catch / 'll be late",
        "don't catch / are",
        "will catch/ 'll be late",
        "None of the above",
      ],
      type: "a2",
      correctAnswer: "don't catch / 'll be late", // A
    },
    {
      question: "What____tell  Peter?",
      choices: ["Should I", "Should I do", "do I should", "None of the above"],
      type: "a2",
      correctAnswer: "Should I", // A
    },
    {
      question: " It's possible that I will come tomorow .I_tomorow",
      choices: [
        "may come",
        "might not come",
        "should come",
        "None of the above",
      ],
      type: "a2",
      correctAnswer: "may come", // A
    },
    {
      question: "I've had this car____years ",
      choices: ["for", "since", "yet", "None of the above"],
      type: "a2",
      correctAnswer: "for", // a
    },
    {
      question: "What's the name of the man____lives next door?",
      choices: ["that be", "who", "where", "None of the above"],
      type: "a2",
      correctAnswer: "who", // B
    },
    {
      question: "I want to watch the film ___ everybody's talking about.",
      choices: ["that it", "who", "which", "what"],
      type: "a2",
      correctAnswer: "which", // C
    },
    {
      question: "Linda is a___ girl ,she rarely speaks at all",
      choices: ["shy", "rude", "outgoing", "None of the above"],
      type: "a2",
      correctAnswer: "shy", // A
    },
    {
      question: "The bus was really_,so we couldn't get a seat .",
      choices: ["modern", "safe", "crowded", "None of the above"],
      type: "a2",
      correctAnswer: "crowded", // C
    },
    
    // b1 
    {
      question: "I_bus on Mondays",
      choices: ["'m going to work with", "'m going to work by", "go to work by", "None of the above"],
      type: "b1",
      correctAnswer: "go to work by", // C
    },
    {
      question: "He loves gardening .He _ a gardener all his life",
      choices: ["has been", "was", "is", "None of the above"],
      type: "b1",
      correctAnswer: "has been", // A
    },
    {
      question: "___ a ghost?",
      choices: ["Have you ever seen", "Did you ever see", "Have you ever see", "None of the above"],
      type: "b1",
      correctAnswer: "Have you ever seen", // A
    },
    {
      question: "I'm __in the gym",
      choices: ["the fittest", "fit", "fitter", "None of the above"],
      type: "b1",
      correctAnswer: "the fittest", // A
    },
    {
      question: "We must learn to love _before we can love others",
      choices: ["our", "ourselves", "us", "None of the above"],
      type: "b1",
      correctAnswer: "ourselves", // B
    },
    {
      question: " I_about that if I were you .",
      choices: ["didn't worry", "wouldn't worry", "hadn't worried", "None of the above"],
      type: "b1",
      correctAnswer: "wouldn't worry", // B
    },
    {
      question: " If you _so much noise ,I could concentrate .",
      choices: ["didn't  make", "wouldn't make", "won't  make", "None of the above"],
      type: "b1",
      correctAnswer: "didn't  make", // A
    },
    {
      question: "she was under a lot of pressure ,she never complained .",
      choices: ["Also", "Although", "In fact", "None of the above"],
      type: "b1",
      correctAnswer: "Although", // B
    },
    {
      question: "The litter ____ a week  ago .",
      choices: ["has been posted", "was post", "was posted", "None of the above"],
      type: "b1",
      correctAnswer: "was posted", // C
    },
    {
      question: "Henry and Julie have just arrived . ____?",
      choices: ["they have", "haven't they", "have they", "None of the above"],
      type: "b1",
      correctAnswer: "haven't they", // B
    },
    {
      question: "I love the smell of freshly _bread",
      choices: ["roasted", "baked", "fried", "None of the above"],
      type: "b1",
      correctAnswer: "baked", // B
    },
    {
      question: "Maria has a _job working  a few days a week in a clothes shop .",
      choices: ["full time", "workplace", "part time", "None of the above"],
      type: "b1",
      correctAnswer: "part time", // C
    },

    // b2

    {
      question: "The smell of fish is awful ,but you _to it after a couple of months on the job.",
      choices: ["use", "get used", "used", "None of the above"],
      type: "b2",
      correctAnswer: "get used", // B
    },
    {
      question: "This book belongs to somebody .Who __?",
      choices: ["does it belong to", "does it belong", "belongs to", "None of the above"],
      type: "b2",
      correctAnswer: "does it belong to", // A
    },
    {
      question: "The more you have ,the_you want.",
      choices: ["most", "more", "richer", "None of the above"],
      type: "b2",
      correctAnswer: "more", // B
    },
    {
      question: "I____for my keys since yesterday, but I ____them.",
      choices: ["'ve been looking /haven't found", "'ve been looking / haven't been finding .", "'ve looked / haven't been finding", "None of the above"],
      type: "b2",
      correctAnswer: "'ve been looking /haven't found", // A
    },
    {
      question: "Is everything OK? You__you have cried .",
      choices: ["look", "seem like", "look as though", "None of the above"],
      type: "b2",
      correctAnswer: "look as though", // C
    },
    {
      question: "If she ____more experienced ,she would be more likely to get the job.",
      choices: ["was", "had been", "would be", "None of the above"],
      type: "b2",
      correctAnswer: "was", // A
    },
    {
      question: "If I _her ,she might feel a bit better .",
      choices: ["was calling", "called", "would call", "None of the above"],
      type: "b2",
      correctAnswer: "called", // B
    },
    {
      question: "I wish I _ a better job .I don't enjoy this kind of work ",
      choices: ["would have had", "would have", "had", "None of the above"],
      type: "b2",
      correctAnswer: "had", // C
    },
    {
      question: "I wish you_your bedroom .It's a mess!",
      choices: ["tidied up", "would tidy up", "had tidied up", "None of the above"],
      type: "b2",
      correctAnswer: "would tidy up", // B
    },
    {
      question: "I don't have my watch .I'm __at the shop.",
      choices: ["having to repair it", "having it repaired", "repairing", "None of the above"],
      type: "b2",
      correctAnswer: "having it repaired", // B
    },
    {
      question: "It's very _today .I feel so hot and sweaty .",
      choices: ["foggy", "hazy", "muggy", "None of the above"],
      type: "b2",
      correctAnswer: "muggy", // C
    },
    {
      question: "A ____claims he saw two armed men entering the building.",
      choices: ["victim", "jury", "witness", "None of the above"],
      type: "b2",
      correctAnswer: "witness", // C
    },
  ],
};
export default quiz;
