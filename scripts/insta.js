// TODO FIGURE OUT HOW TO LIMIT API REQUESTS TO UNDER 10,000
// ? ONE RESULT ONLY TO LIMIT QUOTA TILL I FIGURE IT OUT
// *https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCgyu3ReOEELPLsV-U9cSt_A&maxResults=1&order=date&key=AIzaSyCbAG7ngnf0ORE5-n9IqI_-j-fAVxPhMKk

// fetch(
//   "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCgyu3ReOEELPLsV-U9cSt_A&maxResults=10&order=date&key=AIzaSyCbAG7ngnf0ORE5-n9IqI_-j-fAVxPhMKk"
// ).then((result)=>{

// 	let data = result.json();

// 	let videos = data.items;

// 	console.log(data)

// 	let battlesDiv = document.getElementById('battles');
// 	for (let video of videos) {
// 		console.log(video.snippet.thumbnails.default.url)
// 		battlesDiv.innerHTML += `<img src="${video.snippet.thumbnails.default.url}">`;
// 	}

// })
