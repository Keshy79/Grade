var song = "audio/fucx.mp3"
var songToPlay = new Audio(song)

var song = "audio/mumu.mp3"
var EFail = new Audio(song)

var song = "audio/songD.mp3"
var songD = new Audio(song)

var song = "audio/songC.mp3"
var songC = new Audio(song)

var song = "audio/songB.mp3"
var songB = new Audio(song)

var song = "audio/songA.mp3"
var songA = new Audio(song)



function  checkvalue() {
    if (num.value != "") {
        if (num.value >= 0 && num.value <30) {
            console.log("F-FAIL")
            show.innerHTML = "F-FAIL😢🥹🙈"
            songToPlay.play()
        }else if (num.value >= 30 && num.value <45) {
            console.log("E-FAIR")
            show.innerHTML = "E-FAIR 😢😒"
            EFail.play()
        } else if (num.value >= 45 && num.value <50) {
            console.log("D-PASS")
            show.innerHTML = "D-PASS🤨😥"
            songD.play()
        }else if (num.value >= 50 && num.value <70) {
            console.log("C-GOOD")
            show.innerHTML = "C-GOOD😊😉😆"
            songC.play()
        }else if (num.value >= 70 && num.value <80) {
            console.log("B-VERY GOOD")
            show.innerHTML = "B-VERY GOOD👍😍😘"
            songB.play()
        }else if (num.value >= 80 && num.value <=100) {
            console.log("A-EXCELLENT")
            show.innerHTML = "A-EXCELLENT🤩🥰🤣"
            songA.play()
        }
    }
}