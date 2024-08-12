import express from "express";
import cors from "cors";
const app = express();
const port = 3000;

const movieData = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    rank: 1,
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    image:
      "https://img.sflix.to/xxrz/250x400/224/e0/89/e0898dd2a6184b11b7e01f155eaa8f75/e0898dd2a6184b11b7e01f155eaa8f75.jpg",
    genre: "Drama",
    rating: 9.3,
    year: 1994,
    cast: ["Tim Robbins", "Morgan Freeman"],
    release: "1994-09-23",
    duration: "142 minutes",
    country: "USA",
    production: "Castle Rock Entertainment",
  },
  {
    id: 2,
    title: "The Godfather",
    rank: 2,
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    image:
      "https://img.sflix.to/xxrz/250x400/224/1e/fe/1efe7a04df2a551d7a218247f0e4da89/1efe7a04df2a551d7a218247f0e4da89.jpg",
    genre: "Crime",
    rating: 9.2,
    year: 1972,
    cast: ["Marlon Brando", "Al Pacino"],
    release: "1972-03-24",
    duration: "175 minutes",
    country: "USA",
    production: "Paramount Pictures",
  },
  {
    id: 3,
    title: "The Dark Knight",
    rank: 3,
    rating: 9.0,
    description:
      "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    image:
      "https://img.sflix.to/xxrz/250x400/224/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg",
    genre: "Action",
    year: 2008,
    cast: ["Christian Bale", "Heath Ledger"],
    release: "2008-07-18",
    duration: "152 minutes",
    country: "USA",
    production: "Warner Bros.",
  },
  {
    id: 4,
    title: "Pulp Fiction",
    rank: 4,
    rating: 8.9,
    description:
      "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    image:
      "https://img.sflix.to/xxrz/250x400/224/a0/fb/a0fb97aa81c5d6e644a3dae669253451/a0fb97aa81c5d6e644a3dae669253451.jpg",
    genre: "Crime",
    year: 1994,
    cast: ["Christian Bale", "Heath Ledger"],
    release: "2008-07-18",
    duration: "152 minutes",
    country: "USA",
    production: "Warner Bros.",
  },
  {
    id: 5,
    title: "Schindler's List",
    rank: 5,
    rating: 8.9,
    description:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    image:
      "https://img.sflix.to/xxrz/250x400/224/79/63/79639547f58acbb296e660ad640ad6a8/79639547f58acbb296e660ad640ad6a8.jpg",
    genre: "Biography",
    year: 1993,
    cast: ["Liam Neeson", "Ralph Fiennes"],
    release: "1993-12-15",
    duration: "195 minutes",
    country: "USA",
    production: "Universal Pictures",
  },
  {
    id: 6,
    title: "12 Angry Men",
    rank: 6,
    rating: 8.9,
    description:
      "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    image:
      "https://img.sflix.to/xxrz/250x400/224/c8/74/c874bf61f9a89b0651052fbd738e7501/c874bf61f9a89b0651052fbd738e7501.jpg",
    genre: "Drama",
    year: 1957,
    cast: ["Henry Fonda", "Lee J. Cobb"],
    release: "1957-04-10",
    duration: "96 minutes",
    country: "USA",
    production: "United Artists",
  },
  {
    id: 7,
    title: "The Lord of the Rings: The Return of the King",
    rank: 7,
    rating: 8.9,
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    image:
      "https://img.sflix.to/xxrz/250x400/224/06/d5/06d5a29c758764d7725c2b4b015980bc/06d5a29c758764d7725c2b4b015980bc.jpg",
    genre: "Adventure",
    year: 2003,
    cast: ["Elijah Wood", "Viggo Mortensen"],
    release: "2003-12-17",
    duration: "201 minutes",
    country: "USA",
    production: "New Line Cinema",
  },
  {
    id: 8,
    title: "Forrest Gump",
    rank: 8,
    rating: 8.8,
    description:
      "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
    image:
      "https://img.sflix.to/xxrz/250x400/224/b6/c5/b6c5f5949fe301897b5203a2a04ee047/b6c5f5949fe301897b5203a2a04ee047.jpg",
    genre: "Drama",
    year: 1994,
    cast: ["Tom Hanks", "Robin Wright"],
    release: "1994-07-06",
    duration: "142 minutes",
    country: "USA",
    production: "Paramount Pictures",
  },
  {
    id: 9,
    title: "Fight Club",
    rank: 9,
    rating: 8.8,
    description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    image:
      "https://img.sflix.to/xxrz/250x400/224/c8/67/c867cdf6d0a0683fa88ada21ec51671a/c867cdf6d0a0683fa88ada21ec51671a.jpg",
    genre: "Drama",
    year: 1999,
    cast: ["Brad Pitt", "Edward Norton"],
    release: "1999-10-15",
    duration: "139 minutes",
    country: "USA",
    production: "20th Century Fox",
  },
  {
    id: 10,
    title: "Inception",
    rank: 10,
    rating: 8.8,
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    image:
      "https://img.sflix.to/xxrz/250x400/224/2d/03/2d0304dfe44b3e7e2cccc313b7ec6104/2d0304dfe44b3e7e2cccc313b7ec6104.jpg",
    genre: "Sci-Fi",
    year: 2010,
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
    release: "2010-07-16",
    duration: "148 minutes",
    country: "USA",
    production: "Warner Bros.",
  },
  {
    id: 11,
    title: "The Matrix",
    rank: 11,
    rating: 8.7,
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    image:
      "https://img.sflix.to/xxrz/250x400/224/e5/10/e510db60b0ea7b6584ee972b466cc212/e510db60b0ea7b6584ee972b466cc212.jpg",
    genre: "Sci-Fi",
    year: 1999,
    cast: ["Keanu Reeves", "Laurence Fishburne"],
    release: "1999-03-31",
    duration: "136 minutes",
    country: "USA",
    production: "Warner Bros.",
  },
  {
    id: 12,
    title: "Goodfellas",
    rank: 12,
    rating: 8.7,
    description:
      "The description of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.",
    image:
      "https://img.sflix.to/xxrz/250x400/224/ec/f1/ecf1fc3c211808903aca841b83c6553b/ecf1fc3c211808903aca841b83c6553b.jpg",
    genre: "Biography",
    year: 1990,
    cast: ["Robert De Niro", "Ray Liotta"],
    release: "1990-09-19",
    duration: "145 minutes",
    country: "USA",
    production: "Warner Bros.",
  },
  {
    id: 13,
    title: "The Silence of the Lambs",
    rank: 13,
    rating: 8.6,
    description:
      "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    image:
      "https://img.sflix.to/xxrz/250x400/224/1a/48/1a487cd4d8b1f1141f853ef20f6b515f/1a487cd4d8b1f1141f853ef20f6b515f.jpg",
    genre: "Thriller",
    year: 1991,
    cast: ["Jodie Foster", "Anthony Hopkins", "Scott Glenn"],
    country: "United States",
    production: "Strong Heart/Demme Production",
    duration: "118 minutes",
    release: "1991-02-14",
  },
  {
    id: 14,
    title: "City of God",
    rank: 14,
    rating: 8.6,
    description:
      "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
    image:
      "https://img.sflix.to/xxrz/250x400/224/e4/42/e4426aa00eaa00b5adaad84245aefc04/e4426aa00eaa00b5adaad84245aefc04.jpg",
    genre: "Crime",
    year: 2002,
    cast: ["Alexandre Rodrigues", "Leandro Firmino", "Phellipe Haagensen"],
    country: "Brazil",
    production: "O2 Filmes / VideoFilmes",
    duration: "130 minutes",
    release: "2002-02-13",
  },
  {
    id: 15,
    title: "Se7en",
    rank: 15,
    rating: 8.6,
    description:
      "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    image:
      "https://img.sflix.to/xxrz/250x400/224/bf/bd/bfbd1ea96fb959c7c93df98b9ea726ce/bfbd1ea96fb959c7c93df98b9ea726ce.jpg",
    genre: "Crime",
    year: 1995,
    cast: ["Brad Pitt", "Morgan Freeman", "Kevin Spacey"],
    country: "United States",
    production: "New Line Cinema",
    duration: "127 minutes",
    release: "1995-09-22",
  },
  {
    id: 16,
    title: "The Usual Suspects",
    rank: 16,
    rating: 8.5,
    description:
      "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which begin when five criminals meet at a seemingly random police lineup.",
    image:
      "https://img.sflix.to/xxrz/250x400/224/ff/62/ff624c7d24be0716d3029f3db7cafc26/ff624c7d24be0716d3029f3db7cafc26.jpg",
    genre: "Crime",
    year: 1995,
    cast: ["Kevin Spacey", "Gabriel Byrne", "Chazz Palminteri"],
    country: "United States",
    production: "PolyGram Filmed Entertainment / Spelling Films International",
    duration: "106 minutes",
    release: "1995-07-19",
  },
  {
    id: 17,
    title: "Interstellar",
    rank: 17,
    rating: 8.6,
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    image:
      "https://img.sflix.to/xxrz/250x400/224/82/71/82718ed9a7ece105be98bb3d48dd57bf/82718ed9a7ece105be98bb3d48dd57bf.jpg",
    genre: "Adventure",
    year: 2014,
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    country: "United States",
    production: "Syncopy / Lynda Obst Productions",
    duration: "169 minutes",
    release: "2014-11-07",
  },
  {
    id: 18,
    title: "The Lion King",
    rank: 18,
    rating: 8.5,
    description:
      "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    image:
      "https://img.sflix.to/xxrz/250x400/224/09/39/0939b44d470ba3abf94fb06700a6db4e/0939b44d470ba3abf94fb06700a6db4e.jpg",
    genre: "Animation",
    year: 1994,
    cast: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
    country: "United States",
    production: "Walt Disney Pictures",
    duration: "88 minutes",
    release: "1994-06-15",
  },
  {
    id: 19,
    title: "Back to the Future",
    rank: 19,
    rating: 8.5,
    description:
      "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",
    image:
      "https://img.sflix.to/xxrz/250x400/224/b6/e6/b6e67b956864f5ada9f0488e21d59738/b6e67b956864f5ada9f0488e21d59738.jpg",
    genre: "Adventure",
    year: 1985,
    cast: ["Michael J. Fox", "Christopher Lloyd", "Lea Thompson"],
    country: "United States",
    production: "Universal Pictures / Amblin Entertainment",
    duration: "116 minutes",
    release: "1985-07-03",
  },
  {
    id: 20,
    title: "Terminator 2: Judgment Day",
    rank: 20,
    rating: 8.5,
    description:
      "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg.",
    image:
      "https://img.sflix.to/xxrz/250x400/224/f6/64/f6644b2f85e6714527b09f6dc1acad85/f6644b2f85e6714527b09f6dc1acad85.jpg",
    genre: "Action",
    year: 1991,
    cast: ["Arnold Schwarzenegger", "Linda Hamilton", "Edward Furlong"],
    country: "United States",
    production: "Carolco Pictures / Pacific Western / Lightstorm Entertainment",
    duration: "137 minutes",
    release: "1991-07-01",
  },
  {
    id: 21,
    title: "The Green Mile",
    rank: 21,
    rating: 8.6,
    description:
      "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    image:
      "https://img.sflix.to/xxrz/250x400/224/09/3d/093da636d5369a76fc8e05382ee1c5c6/093da636d5369a76fc8e05382ee1c5c6.jpg",
    genre: "Drama",
    year: 1999,
    cast: ["Tom Hanks", "Michael Clarke Duncan", "David Morse"],
    country: "United States",
    production: "Castle Rock Entertainment / Darkwoods Productions",
    duration: "189 minutes",
    release: "1999-12-10",
  },
  {
    id: 22,
    title: "Gladiator",
    rank: 22,
    rating: 8.5,
    description:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    image:
      "https://img.sflix.to/xxrz/250x400/224/41/f8/41f82dc5091f91b2e033576a3d84387d/41f82dc5091f91b2e033576a3d84387d.jpg",
    genre: "Action",
    year: 2000,
    cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
    country: "United States",
    production:
      "DreamWorks Pictures / Universal Pictures / Scott Free Productions",
    duration: "155 minutes",
    release: "2000-05-01",
  },
  {
    id: 23,
    title: "Parasite",
    rank: 23,
    rating: 8.6,
    description:
      "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    image:
      "https://img.sflix.to/xxrz/250x400/224/46/7d/467dcdb02f64901ea63dd3f549959f5f/467dcdb02f64901ea63dd3f549959f5f.jpg",
    genre: "Thriller",
    year: 2019,
  },
  {
    id: 24,
    title: "The Prestige",
    rank: 24,
    rating: 8.5,
    description:
      "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
    image:
      "https://img.sflix.to/xxrz/250x400/224/3a/6b/3a6be33857c387793d5f4a578b1aa65c/3a6be33857c387793d5f4a578b1aa65c.jpg",
    genre: "Drama",
    year: 2006,
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
    country: "South Korea",
    production: "Barunson E&A / CJ Entertainment",
    duration: "132 minutes",
    release: "2019-05-21",
  },
  {
    id: 25,
    title: "Dune: Part Two",
    rank: 1,
    description:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against those who destroyed his family.",
    image:
      "https://img.sflix.to/xxrz/250x400/224/1b/2e/1b2e7f907e0eabd02ddca00c9a3ca2a4/1b2e7f907e0eabd02ddca00c9a3ca2a4.jpg",
    genre: "Sci-Fi",
    rating: null,
    year: 2024,
    cast: [
      "Josh Brolin",
      "Dave Bautista",
      "Tony Cook",
      "Italo Amerighi",
      "Stellan Skarsgård",
    ],
    country: "United States of America",
    production: "Legendary Pictures / Legendary Entertainment",
    duration: "167 minutes",
    release: "2024-02-27",
  },
  {
    id: 26,
    title: "Avatar 3",
    rank: 2,
    description:
      "Jake Sully and Neytiri lead their family against a new threat to Pandora.",
    image:
      "https://img.sflix.to/xxrz/250x400/224/1e/c6/1ec694a9d587d509ec7a9be815aacfac/1ec694a9d587d509ec7a9be815aacfac.jpg",
    genre: "Adventure",
    year: 2025,
    rating: null,
    release: null,
    duration: "120 minutes",
    production: null,
    country: "USA",
    cast: null,
  },
  {
    id: 27,
    title: "Guardians of the Galaxy Vol. 3",
    rank: 3,
    description:
      "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
    image:
      "https://img.sflix.to/xxrz/250x400/224/91/67/91670229ac9f3b6fb4d242d6b5511644/91670229ac9f3b6fb4d242d6b5511644.jpg",
    genre: "Action",
    year: 2024,
    rating: null,
    release: null,
    duration: "120 minutes",
    production: null,
    country: "USA",
    cast: null,
  },
  {
    id: 28,
    title: "Indiana Jones and the Dial of Destiny",
    rank: 4,
    description:
      "Indiana Jones races against time to retrieve a legendary artifact that can change the course of hidescription.",
    image:
      "https://img.sflix.to/xxrz/250x400/224/08/2f/082f965e49698aa881adb68a83add432/082f965e49698aa881adb68a83add432.jpg",
    genre: "Adventure",
    year: 2024,
    rating: null,
    release: null,
    duration: "120 minutes",
    production: null,
    country: "USA",
    cast: null,
  },
  {
    id: 29,
    title: "Mission: Impossible - Dead Reckoning Part Two",
    rank: 5,
    description:
      "Ethan Hunt and his team must track down a terrifying new weapon that threatens all of humanity.",
    image:
      "https://img.sflix.to/xxrz/250x400/224/e5/a0/e5a02d6b78afd13554c6737c1da83cae/e5a02d6b78afd13554c6737c1da83cae.jpg",
    genre: "Action",
    rating: null,
    year: 2024,
    release: null,
    duration: "120 minutes",
    production: null,
    country: "USA",
    cast: null,
  },
  {
    id: 30,
    title: "Spider-Man: Beyond the Spider-Verse",
    rank: 6,
    description:
      "Miles Morales embarks on a journey across the multiverse to save his loved ones and the other Spider-People.",
    image:
      "https://img.sflix.to/xxrz/250x400/224/36/48/3648dca4831c487896bd2193c43e98e2/3648dca4831c487896bd2193c43e98e2.jpg",
    genre: "Animation",
    year: 2024,
    rating: "",
    release: "",
    duration: "120 minutes",
    production: "",
    country: "USA",
    cast: "",
  },
  {
    id: 31,
    title: "John Wick: Chapter 5",
    rank: 7,
    description:
      "John Wick faces his deadliest opponents yet as he uncovers the path to defeating the High Table.",
    image:
      "https://img.sflix.to/xxrz/250x400/224/1e/9e/1e9efbf118acd1e7661d144868dc5ef5/1e9efbf118acd1e7661d144868dc5ef5.jpg",
    genre: "Action",
    year: 2024,
    rating: null,
    release: null,
    duration: "120 minutes",
    production: null,
    country: "USA",
    cast: null,
  },
  {
    id: 32,
    title: "Fantastic Beasts 4",
    rank: 8,
    description:
      "Newt Scamander and his friends continue their battle against the dark wizard Grindelwald.",
    image:
      "https://img.sflix.to/xxrz/250x400/224/17/6a/176a20f346fd851a98c88f6c46acb6f5/176a20f346fd851a98c88f6c46acb6f5.jpg",
    genre: "Fantasy",
    year: 2024,
    rating: null,
    release: null,
    duration: "120 minutes",
    production: null,
    country: "USA",
    cast: null,
  },
  {
    id: 33,
    title: "In The Name of the Son",
    rank: null,
    description:
      "JThe powerful story of Mags Riordan, a Dingle, Ireland woman who, having lost three children in separate tragic circumstances, was inspired to set up a clinic in Malawi, saving thousands of lives.",
    image:
      "https://img.sflix.to/xxrz/250x400/224/f7/24/f72443bece828885e832c187027312e5/f72443bece828885e832c187027312e5.jpg",
    genre: "Documentary",
    rating: null,
    year: null,
    release: null,
    duration: "50 minutes",
    production: "RTE",
    country: "Ireland",
    cast: null,
  },
  {
    id: 34,
    title: "Secret Society of Lies",
    rank: null,
    description:
      "JThe powerful story of Mags Riordan, a Dingle, Ireland woman who, having lost three children in separate tragic circumstances, was inspired to set up a clinic in Malawi, saving thousands of lives.",
    image:
      "https://img.sflix.to/xxrz/250x400/224/6d/3e/6d3e66ebe4dc4233c6a8fe8d27712bfe/6d3e66ebe4dc4233c6a8fe8d27712bfe.jpg",
    genre: "Thriller",
    rating: null,
    year: null,
    release: null,
    duration: "88 min",
    production: "NGN Productions / Coco Productions",
    country: "United States of America",
    cast: [
      "Kristen Vaganos",
      "Luke Charles Stafford",
      "Azizi Donnelly",
      "Justin Berti",
      "Kate Schettler",
    ],
  },
];

app.use(cors());

app.get("/movies", (req, res) => {
  res.json(movieData);
});
app.get(`/movies/:id`, (req, res) => {
  const movie = movieData.find((m) => m.id === parseInt(req.params.id));
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).send("Movie not found");
  }
});

app.listen(port, () => {
  console.log(`Movie API is running at http://localhost:${port}`);
});
