var iteration = -1;

const NUM_SECTORS = 36;

myfunction = () => {
	iteration = (iteration + 1) % NUM_SECTORS;
	var index = ORDER[iteration]

	var deg = index * 10;
	if (iteration % 2 == 0) { // so that we spin a couple revolutions each time
		deg += 720;
	}

	document.getElementById('box').style.transform = "rotate(" + deg + "deg)";

	var element = document.getElementById('mainbox');
	element.classList.remove('animate');
	setTimeout(() => {
		element.classList.add('animate');
		var feeling = FEELINGS[index]
		document.getElementById("feeling").textContent = MOMENTS[feeling];
		if (feeling in TEXTS) {
			document.getElementById("feeling-content").textContent = TEXTS[feeling];
			document.getElementById("feeling-content").style.backgroundImage = "url(null.png)";
		} else {
			document.getElementById("feeling-content").textContent = "";
			document.getElementById("feeling-content").style.backgroundImage = 'url("img/' + feeling + '.png")';
		}
	}, 2000);
}

const ORDER = [17, 9, 27, 2, 22, 11, 18, 4, 20, 1, 25, 3, 16, 30, 21, 31, 28, 33, 29, 5, 23, 32, 7, 24, 10, 12, 35, 19, 6, 13, 0, 26, 34, 15, 8, 14];

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
	"confident": "overcoming my fear of the Mission District", "important": "assembling a sound system for an a cappella concert", "appreciated": "friends telling me I inspire them \uD83E\uDD7A", "enlightened": "finally understanding refraction after ~10 years (thanks 3B1B!)", "accomplished": "emceeing MIT's largest dance show", "surprised": "realizing my former boss liked me and what I interpreted as dislike was just an esclating series of miscommunications",
	"hopeful": "my first non-sucky day in SF, when I found a cool park and got my glasses fixed and saw friends at a party", "creative": "visiting Shinkai's real-life anime inspirations", "cheerful": "playing with the dogs at work!", "energetic": "doing the crosstown trail with friends <3", "fascinated": "seeing a hybrid-use bookstore, cafe, and music venue", "daring": "driving through a snowstorm in Iceland (I'd never driven in winter weather before)",
	"overwhelmed": "debugging massive hardware failures", "insecure": "thinking about SF dating dynamics", "inadequate": "spending 10 hours failing to set up basic devtools on my first day of work", "helpless": "when panic attacks and a racing heart kept me up until 6am", "discouraged": "months of minor leg injuries and anxiety relapses", "confused": "attending a cat party"
}

const TEXTS = {
	"hurt": "\"since the heart feels pain so easily, some believe that life is pain\"",
	"heartbroken": "\"don't wonder how you will deal with this. you ARE dealing with it. don't wonder how you will get over it. you will NEVER get over it\"",
	"guilty": "\"the problem with believing external events are out of your control is that this belief is often self-fulfilling. for instance: you see your friend making bad choices, you tell yourself that your friend's behavior is beyond your control, and as a result you decide not to explain to your friend how they're being dumb, thereby ensuring you have no say in your friend's decisions\"",
	"loved": "\"i realized i was getting everything i could possibly want from my friends without really having done anything to deserve it all and that moment was so fucking sublime i started sobbing. it dawned on me that maybe the les miserables lyric i'd been listening to for the last ten years - to love another person is to see the face of god - wasn't an exaggeration after all\"",
	"pensive": "\"i want to live in a world where young people choose to work on interesting, impactful, and difficult problems\"",
	"insecure": "\"do not kill the part of you that is cringe. kill the part that cringes\""
}
