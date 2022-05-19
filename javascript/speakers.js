const speakerSection = document.querySelector(".subsection");

const speakersProgram = [
  {
    image: "../images/shaq.jpg",
    icon: "../images/pattern.jpg",
    name: "Shaq Deff",
    label: "Audio Engineer and CEO of BLACK",
    description: `Shaq is the CEO of one of the biggest fashion companies know as BLACK, other than that he's also an audio engineer by profession and has worked with major labels globally.`,
  },
  {
    image: "../images/gee.jpg",
    icon: "../images/pattern.jpg",
    name: "GG The Ascendant",
    label: "Artist and CEO of Sawasawa Brand",
    description: ` GG is an outstanding musician and also the founder of Sawasawa brand. Her famous looks are known to be exquisite and she also holds a high rank in the fashion industry.`,
  },
  {
    image: "../images/eve.jpg",
    icon: "../images/pattern.jpg",
    name: "Eve Mwangi",
    label: "Audio Engineer and CEO of BLACK",
    description: `Eve is the mastermind behind the forever 21 brand that has held the position of the best branding in women fashion`,
  },
  {
    image: "../images/lucas.jpg",
    icon: "../images/pattern.jpg",
    name: "Lucas Lorenge",
    label: "Founder of Akiba Agency",
    description: `Lucas is among the successful men that have held the mens fashion for a long time. He has a successful agency that is well known for modelling.`,
  },
  {
    image: "../images/olive.jpg",
    icon: "../images/pattern.jpg",
    name: "Olive Gathoni",
    label: "Miss World 2020",
    description: `Olive is a top tier model who has emerged the the top in almost every modeling competitions`,
  },
  {
    image: "../images/virgil.jpg",
    icon: "../images/pattern.jpg",
    name: "Virgil Abloh",
    label:
      "Founder and CEO of Off-White and Artistic Director of menswear at Louis Vuitton",
    description: `   The best for last as they say. Virgil is a high end artichect and also a fashion designer who is known globally for his famous brand Louis Vuitton.`,
  },
];

for (let i = 0; i < speakersProgram.length; i += 1) {
  const fetchSpeakers = speakerSection.innerHTML;
  speakerSection.innerHTML = `<div class="subsection-items">
          <div class="subsection-img">
            <img
              src="${speakersProgram[i].image}"
              alt="A guy in a suit"
              class="speaker-img"
            />
            <img
              src="${speakersProgram[i].icon}"
              alt="A pattern of rectangles"
              class="main-logo"
            />
          </div>
          <div class="speaker-description">
            <h3>${speakersProgram[i].name}</h3>
            <span class="subsection-label"
              >${speakersProgram[i].label}</span
            >
            <p>
              ${speakersProgram[i].description}
            </p>
          </div>
        </div>${fetchSpeakers}`;
}
