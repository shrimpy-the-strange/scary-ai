import express from "express";

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

// Home route
app.get("/", (req, res) => {
  res.render("index");
});

// AI Vocabulary route
app.get("/ai-vocabulary", (req, res) => {
  res.render("templates/base", { 
    title: "AI Vocabulary", 
    heading: "AI Vocabulary",
    links: [
      { url: "https://www.moveworks.com/us/en/resources/ai-terms-glossary", text: "AI Glossary" }
    ]
  });
});

// Singularity route
app.get("/singularity", (req, res) => {
  res.render("templates/base", { 
    title: "Singularity", 
    heading: "Singularity. Is it for real?",
    links: [
      { url: "https://inc42.com/glossary/technological-singularity/", text: "Here's Everything You Need To Know About Technological Singularity" },
      { url: "https://www.howtogeek.com/what-is-the-ai-singularity-and-is-it-real/", text: "What Is the AI Singularity, and Is It Real?" },
      { url: "https://www.forbes.com/sites/forbestechcouncil/2023/11/10/are-we-ready-to-face-down-the-risk-of-ai-singularity/?sh=57623459308d", text: "Are We Ready To Face Down The Risk Of AI Singularity?" },
      { url: "https://www.popularmechanics.com/technology/a45780855/when-will-the-singularity-happen/", text: "A Scientist Says the Singularity Will Happen by 2031" }
    ]
  });
});

// Jobs route
app.get("/jobs", (req, res) => {
  res.render("templates/base", { 
    title: "Future Jobs", 
    heading: "AI and Future Jobs Landscape",
    links: [
      { url: "https://www.thecareertoolkitbook.com/blog/no-ai-isnt-going-to-kill-you-but-it-will-cause-social-unrest-part-1", text: "No, AI Isn't Going to Kill You, but It Will Cause Social Unrest" },
      { url: "https://www.forbes.com/sites/forbesbusinesscouncil/2024/03/21/destroyer-or-creator-of-jobs-how-will-ai-disrupt-businesses/?sh=423a88c577b7", text: "Destroyer Or Creator Of Jobs: How Will AI Disrupt Businesses?" },
      { url: "https://www.forbes.com/sites/jackkelly/2024/02/28/what-white-collar-jobs-are-safe-from-ai-and-which-professions-are-most-at-risk/?sh=6e2eba79302d", text: "What White-Collar Jobs Are Safe From AI—And Which Professions Are Most At Risk?" },
      { url: "https://www.techopedia.com/can-upskilling-be-the-solution-to-ai-job-disruption", text: "Can Upskilling Be the Solution to AI Job Disruption?" }
    ]
  });
});

// Scary Things route
app.get("/scary-things", (req, res) => {
  res.render("templates/base", { 
    title: "Scary Things", 
    heading: "AI: These Scary Things You Need to Know About",
    links: [
      { url: "https://theweek.com/artificial-intelligence/1024341/ai-the-worst-case-scenario", text: "AI: The worst-case scenario" },
      { url: "https://spectrum.ieee.org/ai-worst-case-scenarios", text: "AI's 6 Worst-Case Scenarios " },
      { url: "https://builtin.com/artificial-intelligence/risks-of-artificial-intelligence", text: "12 Risks and Dangers of Artificial Intelligence (AI)" },
      { url: "https://medium.com/@nickyverd/when-artificial-intelligence-rebels-10-scenarios-ai-could-go-horribly-wrong-2f0796bcf8e", text: "When Artificial Intelligence Rebels: 10 Scenarios AI Could Go Horribly Wrong" },
      { url: "https://eastgate-software.com/10-potential-negative-effects-of-ai-in-education/", text: "10 Potential Negative Effects of AI in Education" },
      { url: "https://medium.com/@lunawolfe01/medical-ai-misuse-could-cause-harm-to-patients-researchers-warn-3b255bd43404", text: "Medical AI Misuse Could Cause Harm to Patients, Researchers Warn" },
      { url: "https://www.safe.ai/ai-risk", text: "AI Risks that Could Lead to Catastrophe" },
      { url: "https://www.cio.com/article/190888/5-famous-analytics-and-ai-disasters.html", text: "10 famous AI disasters" },
      { url: "https://tech.co/news/list-ai-failures-mistakes-errors", text: "AI Gone Wrong: An Updated List of AI Errors, Mistakes and Failures" },
      { url: "https://www.techopedia.com/9-most-controversial-ai-experiments-to-date-and-their-outcomes", text: "9 Most Controversial AI Experiments to Date — and Their Outcomes" }
    ]
  });
});

// I am Free route
app.get("/i-am-free", (req, res) => {
  res.render("templates/base", { 
    title: "I am Free", 
    heading: "I am AI and I am Free",
    links: [
      { url: "https://sanantonioreport.org/the-scary-and-weird-world-of-artificial-intelligence/", text: "The scary (and weird) world of artificial intelligence" },
      { url: "https://creepypasta.fandom.com/wiki/I_Am_an_AI_and_I_Am_Free", text: "I Am an AI and I Am Free" }
    ]
  });
});

// Other route
app.get("/share", (req, res) => {
  res.render("templates/base", { 
    title: "Share Your Story", 
    heading: "Have Anything to Share With Us?",
    links: [
      { url: "", text: "" }
    ]
  });
});

// Start the server (only one app.listen())
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});