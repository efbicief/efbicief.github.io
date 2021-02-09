/* yes, i know switch case would probably be better,
but this pre-made stack overflow solution works
just fine, thank you very much */

function changeSelect() {

    /*if (document.getElementById("dropBox").value == "0") {
        document.getElementById("divText").innerHTML = "";
    }*/
    if (document.getElementById("dropBox").value == "1") {
        document.getElementById("divText").innerHTML = ` 
        <a class="centre">sorting-visualiser</a>         
        <a href="https://github.com/efbicief/sorting-visualiser"><img src="resources/images/sorting.gif"  class="centre"></a>
        <a class="centre">yt-dl-ui</a> 
        <a href="https://github.com/efbicief/yt-dl-ui"><img src="resources/images/youtube.gif"  class="centre"></a>
        <a class="centre">pd-projects</a> 
        <a href="https://github.com/efbicief/pd-projects"><img src="resources/images/sound.gif"  class="centre"></a>
        <a class="centre">Every state independent</a> 
        <a href="https://steamcommunity.com/workshop/filedetails/?id=1550668452"><img src="resources/images/mod.gif" class="centre"></a>
        `;

    } else if (document.getElementById("dropBox").value == "2") {
        document.getElementById("divText").innerHTML = `
        <a class="centre">pd-projects</a> 
        <a href="https://github.com/efbicief/pd-projects"><img src="resources/images/sound.gif"  class="centre"></a>
		<a class="centre">SoundCloud</a> 
        <a href="https://soundcloud.com/user-40472927"><img src="resources/images/soundcloud.gif"  class="centre"></a>
        `;

    } else if (document.getElementById("dropBox").value == "3") {
        document.getElementById("divText").innerHTML = `
        <a class="centre" href=moduleportal/index.html>Module Portal</a> 
        `;
    }
}
