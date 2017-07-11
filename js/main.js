//array of horoscope signs
var hSigns = [
  {
    sign : "aries",
    fortune : "Courageous, energetic, willful, commanding, leading. Often leads when following would be best course of action.",
    date : "Mar 20 – Apr 20",
    image : "img/Aries.jpg",
  },
  {
    sign : "taurus",
    fortune :"Pleasure seeking, loves control, dependable, grounded, provokes slowly, and highly sensual in nature.",
    date : "Apr 20 – May 21",
    image : "img/taurus.jpg",
  },
  {
    sign : "gemini",
    fortune : "Cerebral, chatty, loves learning and education, charming, and adventurous.",
    date : "May 21 – Jun 21",
    image : "img/gemini.jpg",
  },
  {
    sign : "cancer",
    fortune : "Emotional, group oriented, seeks security, family.",
    date : "Jun 21 – Jul 23",
    image : "img/cancer.jpg",
  },
  {
    sign : "leo",
    fortune : "Generous, organized, protective, beautiful.",
    date : "Jul 23 – Aug 23",
    image : "img/leo.jpg"
  },
  {
    sign : "virgo",
    fortune : "Particular, logical, practical, sense of duty, critical.",
    date : "Aug 23 – Sep 23",
    image : "img/virgo.jpg",
  },
  {
    sign : "libra",
    fortune : "Balanced, seeks beauty, sense of justice.",
    date : "Sep 23 – Oct 23",
    image :"img/libra.jpg",
  },
  {
    sign : "scorpio",
    fortune : "Passionate, exacting, loves extremes, combative, reflective.",
    date : "Oct 23 – Nov 22",
    image :"img/scorpio.jpg",
  },
  {
    sign : "sagittarius",
    fortune : "Happy, absent minded, creative, adventurous.",
    date : "Nov 22 – Dec 22",
    image :"img/sagittarius.jpg",
  },
  {
    sign : "capricorn",
    fortune : "Timeless, driven, calculating, ambitious.",
    date : "Dec 23 – Jan 20",
    image :"img/capricorn.jpg",
  },
  {
    sign : "aquarius",
    fortune : "Forward thinking, communicative, people oriented, stubborn, generous, and dedicated.",
    date : "Jan 20 – Feb 18",
    image :"img/aquarius.jpg",
  },
  {
    sign : "pisces",
    fortune : "Likeable, energetic, passionate, sensitive.",
    date : "Feb 18 – Mar 20",
    image :"img/pisces.jpg",
  },
]

//Target Button so that the enter key will retrieve input from user data
var btn = document.getElementById("userdata");
    btn.addEventListener("keypress", function enterKey(e) {
    if (e.keyCode == 13) {
        horoscope();
    }
},false);

function horoscope () {
// input from user to search for horoscope sign
	var userdata = document.getElementById("userdata").value;

// Make sure userdata exsits
	console.log(userdata);
	console.log("users value is: " + userdata);

//for loop for hSigns Array
  for (var i = 0; i < hSigns.length; i++) {
  

//if user input matches a horoscope sign then...
    if (userdata.toLowerCase() === hSigns[i].sign) {
//get objects(sign, image, date, and fortune) and display to console
          console.log("current zodiac sign in loop is: " + hSigns[i].sign);
          console.log("current zodiac sign in loop is: " + hSigns[i].date);
          console.log("current zodiac sign in loop is: " + hSigns[i].image);
          console.log("current zodiac sign in loop is: " + hSigns[i].fortune);
//get objects (sign, image, date, and fortune) and display to document
      document.getElementById('sign').innerHTML = userdata;
      document.getElementById('image').src = hSigns[i].image;
      document.getElementById('date').textContent = hSigns[i].date;
      document.getElementById("horoscope").textContent = "Your best attributes are: " + hSigns[i].fortune;
      return;
    };
// If user does not enter value that is in hSigns, display "Not one of the signs.Try Again!"
    document.getElementById('sign').innerHTML = "Not one of the signs.Try Again!";
    document.getElementById('image').src = "img/zodiac.jpg";
    document.getElementById('date').textContent = " ";
    document.getElementById("horoscope").textContent = " ";
  };
};
