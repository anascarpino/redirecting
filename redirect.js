function getMobileOperatingSystem() {
	if(navigator.userAgent.match(/Android/i)){
		return "https://play.google.com/";
	}else if(navigator.userAgent.match(/iPhone/i)){
		return "https://itunes.apple.com/br/genre/ios/id36?mt=8";
	}else if(navigator.userAgent.match(/iPod/i)){
		return "https://itunes.apple.com/br/genre/ios/id36?mt=8";
	}else if(navigator.userAgent.match(/iPad/i)){
		return "https://itunes.apple.com/br/genre/ios/id36?mt=8";
	}else{
		return "https://google.com/";
	}
}
			