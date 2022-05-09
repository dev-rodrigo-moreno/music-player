var rewind = document.getElementsByClassName("btn")[0];
var TenToLeft = document.getElementsByClassName("btn")[1];
var play = document.getElementsByClassName("btn")[2];
var stop = document.getElementsByClassName("btn")[3];
var TenToRight = document.getElementsByClassName("btn")[4];
var forward = document.getElementsByClassName("btn")[5];

var titulo = document.getElementById("titulo");
var letra = document.getElementById("lyrics")
var audio = document.getElementById("audio");

var TempoAtual = document.getElementById("tempo-atual")
var DuracaoTotal = document.getElementById("duracao-total")

var progresso = document.getElementById("progresso")

var i = false

let index = 0

// dados
var data = [{
    titulo1: "Friends (feat. BloodPop) - Justin Bieber",
    lyrics: "I was wonderin' 'bout your mama<br>  Did she get that job she wanted?<br> Sold that car that gave her problems?<br> I'm just curious 'bout her, honest<br> Know you're wonderin' why I been callin'<br> Like I got ulterior motives<br> Know we didn't end this so good<br> But you know we had something so good<br> So I'm wonderin'<br> Can we still be friends?<br> Can we still be friends?<br> Doesn't have to end<br> And if it ends<br> Can we be friends?<br> Can we be friends?<br> Can we be friends?<br> Wonderin' if you've got a body<br> To hold you tighter since I left<br> Wonderin' if you think about me<br> Actually, don't answer that<br> Know you're wonderin' why I been callin'<br> Like I got ulterior motives<br> Know we didn't end this so good<br> But you know we had something so good<br> So I'm wonderin'<br> Can we still be friends?<br> Can we still be friends?<br> Doesn't have to end<br> And if it ends<br> Can we be friends?<br> Can we be friends? <br>And if it ends<br> Can we be friends? <br>Know you're wonderin' why I've been callin'<br> Like I got ulterior motives<br> Know we didn't end this so good<br> But you know we had something so good<br> I'm wondering<br> Can we still be friends?<br> Can we still be friends?<br> Doesn't have to end<br> And if it ends<br> Can we be friends?<br>",
    file: "assets/musicas/justin-bieber-bloodpop-friends.mp3"
},
{
    titulo1: "Money - Lisa(blackpink)",
    lyrics: "It's the end of the month and the weekend<br> I'ma spend this check, everything on me, yeah<br> I'ma tip myself, I'ma spend it on myself<br> I'ma drop it like it's pouring<br> I'ma pour it on myself<br> Check, check, check, check that money<br> Making bank account number (yikes)<br> That's that shit that's never getting bounced on ya<br>  Bitch, I do the money dance<br> I just made a hundred bands<br> When the store says<br> Sign for it, I'ma leave my autograph<br> Dolla' bills, dolla' bills<br> Watch it fallin' for me<br> I love the way that feels<br> Dolla' bills, dolla' bills<br> Keep on fallin' for me<br> I love the way it feels<br>  I came here to drop some money<br> Dropping all my money<br> Drop some money, all this bread<br> So yummy, yeah<br> Twerking, twerking, when I buy the things I like<br> Dolla', dollas dropping on my ass tonight<br> Everyone silent<br> Listen to my money talk<br> Spend how I like it<br> Yeah, everyone know what I mean, mean<br> When they see green<br> When they see green, that mean' go<br> Give me what the hell I want<br> Give me what the hell I want<br> Check that money<br> Making bank account number (yikes)<br> That's that shit that's never getting bounced on ya<br>  Bitch, I do the money dance<br> I just made a hundred bands<br> When the store says<br> Sign for it, I'ma leave my autograph<br>  Dolla' bills, dolla' bills<br> Watch it fallin' for me<br> I love the way that feels<br>  Dolla' bills, dolla' bills<br> Keep on fallin' for me<br> I love the way it feels<br> I came here to drop some money<br> Dropping all my money<br> Drop some money, all this bread<br> So yummy, yeah<br> Twerking, twerking, when I buy the things I like<br> Dolla', dollas dropping on my ass tonight<br> (Drop some money, dropping all my money)<br> (Drop some money, all this bread so yummy, yeah)<br> Drop some money, dropping all my money<br> Drop some money, all this bread so yummy,<br> yeah<br> My money moves, money I choose<br> Celine my shoes, walking on you<br> My money rules<br> My money moves, money I choose<br> Watch how my wons and yens and dollars<br> Be dropping on you, you, you<br> (Dun, dun-dun-dun-dun-dun)<br> (Dun, dun-dun-dun-dun-dun-dun)<br> (Dun, dun-dun-dun-dun-dun, dun, dun)<br> Dropping on you<br> (Dun, dun-dun-dun-dun-dun)<br> (Dun, dun-dun-dun-dun-dun-dun)<br> (Dun, dun-dun-dun-dun-dun, dun, dun)<br> Dropping on you<br>",
    file: "assets/musicas/lisa-money.mp3",
},
{
    titulo1: "STAY - The Kid LAROI and Justin Bieber",
    lyrics: "I do the same thing I told you that I never would<br> I told you I'd change, even when I knew I never could<br> I know that I can't find nobody else as good as you<br> I need you to stay, need you to stay, hey (Oh)<br> I get drunk, wake up, I'm wasted still<br> I realize the time that I wasted here<br> I feel like you can't feel the way I feel<br> Oh, I'll be fucked up if you can't be right here<br>  Oh, ooh-woah (Oh, ooh-woah, ooh-woah)<br> Oh, ooh-woah (Oh, ooh-woah, ooh-woah)<br> Oh, ooh-woah (Oh, ooh-woah, ooh-woah)<br> Oh, I'll be fucked up if you can't be right here<br> I do the same thing I told you that I never would<br> I told you I'd change, even when I knew I never could<br> I know that I can't find nobody else as good as you<br> I need you to stay, need you to stay, hey<br> I do the same thing I told you that I never would<br> I told you I'd change, even when I knew I never could<br> I know that I can't find nobody else as good as you<br> I need you to stay, need you to stay, hey<br> When I'm away from you, I miss your touch (Ooh)<br> You're the reason I believe in love (Ooh)<br> It's been difficult for me to trust (Ooh)<br> And I'm afraid that I'ma fuck it up (Ooh)<br> Ain't no way that I can leave you stranded<br> 'Cause you ain't ever left me empty-handed<br> And you know that I know that I can't live without you<br> So, baby, stay<br> Oh, ooh-woah (Oh, ooh-woah, ooh-woah)<br> Oh, ooh-woah (Oh, ooh-woah, ooh-woah)<br> Oh, ooh-woah (Oh, ooh-woah, ooh-woah)<br> I'll be fucked up if you can't be right here<br>  I do the same thing I told you that I never would<br> I told you I'd change, even when I knew I never could<br> I know that I can't find nobody else as good as you<br> I need you to stay, need you to stay, hey<br> I do the same thing I told you that I never would<br> I told you I'd change, even when I knew I never could<br> I know that I can't find nobody else as good as you<br> I need you to stay, need you to stay, hey<br> Woah-oh<br> I need you to stay, need you to stay, hey<br>",
    file: "assets/musicas/stay.mp3",
},
]

localStorage.setItem("newData", JSON.stringify(data))
let musics = JSON.parse(localStorage.newData)


function principal() {
    titulo.innerHTML = musics[index].titulo1
    letra.innerHTML = musics[index].lyrics
    audio.src = musics[index].file
}

principal()

rewind.addEventListener("click", () => {
    i = false
    index--
    if (index < 0) {
        index = musics.length - 1
    }
    principal()
    executando()
})

TenToLeft.addEventListener("click", () => {
    audio.currentTime -= 10
})

play.addEventListener("click", () => {
    executando()

})

stop.addEventListener("click", () => {
    audio.pause()
    audio.currentTime = 0
    play.setAttribute("src", "assets/botoes/play.png")
    stop.style.display = "none"
    i = false
})

TenToRight.addEventListener("click", () => {
    audio.currentTime += 10
})

forward.addEventListener("click", next)

function next(){
    i = false
    index++
    if (index > musics.length - 1) {
        index = 0
    }
    principal()
    executando()
}



function executando() {
    if (i == false) {
        audio.play()
        play.setAttribute("src", "assets/botoes/pause.png")
        stop.style.display = "inline-block"
        i = true
    }
    else {
        audio.pause();
        play.setAttribute("src", "assets/botoes/play.png");
        stop.style.display = "none"
        i = false;
    }
}


audio.addEventListener("timeupdate", () => {
    let porcent = Math.floor(audio.currentTime / audio.duration * 100)
    progresso.value = porcent
    TempoAtual.innerHTML = SecundosEmMinutos(Math.floor(audio.currentTime))
    DuracaoTotal.innerHTML = SecundosEmMinutos(Math.floor(audio.duration))
    if (audio.currentTime == audio.duration) {
        next()
    }
})

function SecundosEmMinutos(secundo){
    let minutos = Math.floor(secundo/60);
    let secundos = secundo % 60

    if (secundos < 10) {
        secundos = '0' + secundos
    }

    return minutos + ":" + secundos
}

addEventListener("change", ()=>{
    i = false
    audio.currentTime = progresso.value / progresso.max * audio.duration
    executando()
    audio.play()    
})