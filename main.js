
// var declarations 
var slider = document.getElementById("slider");
var about = document.getElementById("aboutSection");
var item1 = document.getElementById ("item1");
var item2 = document.getElementById ("item2");
var item3 = document.getElementById ("item3");
var item4 = document.getElementById ("item4");
var item5 = document.getElementById ("item5");
var item6 = document.getElementById ("item6");
var item7 = document.getElementById ("item7");
var myStory = document.getElementById("myStory");
var currentSentence;
var sentences = [
"My name is Vered Rekanati",
"Originally I'm from Israel, and currently I live in Princeton, NJ",
"I received my Free Code Camp Front End Certificate on April 2017",
"My goal as a Web Developer is to work with Non-Profit Organizations",
"I have a Master's degree in History from the Hebrew University",
"I love Coding, Challenges, and Design!"
]


// ---------------------------

// sets the sentences slider
var index = 0;

function slide() {
	slider.textContent = sentences[index];
	index++;
	if (index >= sentences.length) {
		index = 0;
	}
}

setInterval(slide, 3000);

// adds smooth scrolling
// function smooth-scroll() {
// 		var aboutSection = document.getElementById("aboutSection").scrollIntoView(
// 			{ behavior: 'smooth' }
// 			);

// }

about.addEventListener("mouseout", function() {
	myStory.textContent = "Choose an image to see more";
});

item1.addEventListener("mouseover", function() {
	myStory.textContent = "The most challenging milestone in my coding journey";
});

item2.addEventListener("mouseover", function() {
	myStory.textContent = "I've completed 2 Half Marathons and a Tough Mudder!";
});

item3.addEventListener("mouseover", function() {
	myStory.textContent = "Apollo's favorite food is actually... carrots";
});

item4.addEventListener("mouseover", function() {
	myStory.textContent = "Five minutes from our place";
});

item5.addEventListener("mouseover", function() {
	myStory.textContent = "These shoes hiked in 3 different continents";
});

item6.addEventListener("mouseover", function() {
	myStory.textContent = "After my family, hummus is the thing I miss the most in Israel...";
});

item7.addEventListener("mouseover", function() {
	myStory.textContent = "Education is always worth it";
});









