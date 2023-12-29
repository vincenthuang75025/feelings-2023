function myfunction() {


	var x = 360 * 2; //min value
	var y = 360 * 5; // max value

	var deg = Math.floor(Math.random() * (x - y)) + y;

	// console.log(deg % 360);

	document.getElementById('box').style.transform = "rotate(" + deg + "deg)";

	var element = document.getElementById('mainbox');
	element.classList.remove('animate');
	setTimeout(function () {
		element.classList.add('animate');
		angle = (5 + deg) % 360; // 5 is because of initial offset and 10 degree sectors
		var feeling = FEELINGS[Math.floor(angle / 10) % 36];
		document.getElementById("feeling").textContent = MOMENTS[feeling];
	}, 2000);
}

window.onload = () => {
	document.getElementById("box").addEventListener("mouseover", mouseOverFunction);
}

mouseOverFunction = () => {
	// this function changes the background of an element.
	// document.querySelector('#div-that-will-have-bg-change').style.backgroundImage="url('https://apicture.com/some-picture.png')";
	console.log("hi");
}

const FEELINGS = ["skeptical", "irritated", "jealous", "angry", "hostile", "hurt",
	"tired", "bored", "lonely", "heartbroken", "ashamed", "guilty",
	"thankful", "trusting", "care", "loved", "pensive", "relaxed",
	"confident", "important", "appreciated", "enlightened", "accomplished", "surprised",
	"hopeful", "creative", "cheerful", "energetic", "fascinated", "daring",
	"overwhelmed", "insecure", "inadequate", "helpless", "discouraged", "confused"];

const MOMENTS = {
	"skeptical": "about how cool Japan would be (I was so so so wrong)", "irritated": "when I had to commute to/from work three times in the same morning due to laundry issues", "jealous": "watching friends halfway across the country have fun without me", "angry": "reading reactions to current events on Twitter (I stopped)", "hostile": "fighting for arm space with other passengers on a flight :c", "hurt": "breakup.",
	"tired": "sleeping in classrooms for a week", "bored": "waiting for training experiments to run...", "lonely": "moving into a house with 39 strangers", "heartbroken": "leaving friends and Boston and MIT", "ashamed": "voice cracking during the literal climax of a concert", "guilty": "when I didn't bother trying to help someone because I assumed I couldn't help",
	"thankful": "for being on a team where work doesn't feel like work", "trusting": "opening my heart up to friends and strangers, over and over and over", "care": "for the health of my friends starting companies", "loved": "getting consoled by friends post-breakup", "pensive": "deciding whether or not to join Imbue", "relaxed": "napping on a glacier, feeling the sun on my face and the ice on my back",
	"confident": "overcoming my fear of the Mission District", "important": "assembling a sound system for an a cappella concert", "appreciated": "friends telling me I inspire them \uD83E\uDD7A", "enlightened": "watching the 3B1B video on refraction", "accomplished": "emceeing MIT's largest dance show", "surprised": "realizing my former boss liked me and what I interpreted as dislike was just an esclating series of miscommunications",
	"hopeful": "the first non-sucky day in SF, when I found a cool park and got my glasses fixed and saw friends at a party", "creative": "visiting Shinkai's real-life anime inspirations", "cheerful": "playing with the dogs at work!", "energetic": "doing the crosstown trail with friends <3", "fascinated": "seeing a hybrid-use bookstore, cafe, and music venue", "daring": "driving through a snowstorm in Iceland",
	"overwhelmed": "debugging massive hardware failures", "insecure": "thinking about SF dating dynamics", "inadequate": "spending 10 hours failing to set up basic devtools on my first day of work", "helpless": "when panic attacks and a racing heart kept me up until 6am", "discouraged": "months of minor leg injuries and anxiety relapses", "confused": "attending a cat party"
}

const TEXTS = {
	"hurt": "since the heart feels pain so easily, some believe that life is pain",
	"heartbroken": "don't ask how you will get over this", "guilty": "https://mitadmissions.org/blogs/entry/you-can-care-about-things/",
	"loved": "mindslice quote abt sublime", "pensive": "job decision substack quote",
	"insecure": "do not kill the part of you that is cringe. kill the part that cringes"
}

const BGS = {
	"skeptical": "teamlab planets pic", "irritated": "generic laundry vinegar pic", "jealous": "some lxm brain scanner pic", "angry": "this vid will make you angry", "hostile": "KP airplane bathroom pic",
	"tired": "mit pic from june", "bored": "tqdm", "lonely": "20mish pic", "ashamed": "concert pic or musescore pic",
	"thankful": "imbue first fun friday pic", "trusting": "shrine wishes pic", "care": "neil laptop pic in jess nano chat (aug1)", "relaxed": "kq google photo",
	"confident": "mission street at night (google imgs)", "important": "mitadmissions concert pic", "appreciated": "for good musescore", "enlightened": "3b1b pic", "accomplished": "mc pic", "surprised": "koe no katachi pic",
	"hopeful": "patricia's green pic", "creative": "your name staircase", "cheerful": "jelly cone pic", "energetic": "crosstown trail pic", "fascinated": "iceland cafe", "daring": "grace iceland pic",
	"overwhelmed": "nsight screenshot", "inadequate": "kat screenshot", "helpless": "33 god vid: why are you so far from saving me?", "discouraged": "bojack pic", "confused": "cat party table pic"
}