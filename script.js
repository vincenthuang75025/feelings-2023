function myfunction(){


	var x = 360*2; //min value
	var y = 360*5; // max value

	var deg = Math.floor(Math.random() * (x - y)) + y;

	document.getElementById('box').style.transform = "rotate("+deg+"deg)";

	var element = document.getElementById('mainbox');
	element.classList.remove('animate');
	setTimeout(function(){
		element.classList.add('animate');
	}, 2000); //5000 = 5 second
}

window.onload = () => {
    document.getElementById("box").addEventListener("mouseover", mouseOverFunction);
}

mouseOverFunction = () => {
// this function changes the background of an element.
  // document.querySelector('#div-that-will-have-bg-change').style.backgroundImage="url('https://apicture.com/some-picture.png')";
  console.log("hi");
}
