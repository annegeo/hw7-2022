var video =  document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	console.log(video)
	video.autoplay = false
	video.loop = false
});

document.querySelector("#play").addEventListener("click", function() {
	video.play()
	console.log("play")
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	console.log("volume curr = " + video.volume * 100 + "%")
	
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause() 
	console.log("pause")
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.9
	console.log("New Speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate = video.playbackRate/ 0.9
	console.log("New Speed is " + video.playbackRate)
})

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 >= video.duration){
		video.currentTime = 0
	}
	else{
		video.currentTime = video.currentTime + 10
	}
	console.log("Location is " + video.currentTime)
});

document.querySelector("#mute").addEventListener("click",function(){
	if (video.muted === true){
		video.muted = false
		document.querySelector("#mute").innerHTML = "Mute"
	}
	else{
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"

	}
});

document.querySelector("#slider").addEventListener("click", function(){
	var slider = document.querySelector("#slider")
	video.volume = slider.value/100
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"

});

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool")
});
