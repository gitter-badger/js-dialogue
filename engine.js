// Welcoming message, change to anything you want.
console.log("Бот: Привет, дорогой пользователь.");
// The Бот asks your name, no need to change it.
console.log("Бот: Как тебя зовут?");
var name = prompt("Как тебя зовут?");
  // You say that your name == var name;
console.log(name + ": Меня зовут " + name + ".");
// The dialogue continiues, and this is the first branching choice.
console.log("Бот: Как идёт твой день?");
/* The text in brackets shows what are the possible choices.
The '...' means that any other choice will work.  */
var text = prompt("Как идёт твой день? (хорошо, плохо, нормально, ...)");
  // When you type 'хорошо'.
if (text === "хорошо") {
  console.log(name + ": Мой день? Он идёт хорошо.");
  // The Бот's response.
  console.log("Бот: Очень хорошо! Надеюсь он продолжит быть хорошим!");
  // The player's auto-response.
  console.log(name + ": Ах, спасибо! Мне хочется, чтобы твой день был хорошым тоже!");
}
// When you type 'плохо'.
else if (text === "плохо") {
  console.log(name + ": Мой день? Он идёт плохо.");
  console.log("Бот: Не грусти! The day is going to be хорошо - believe it!");
  console.log(name + ": Thank you for your support...");
}
// When you type 'нормально'.
else if (text === "нормально"){
    console.log(name + ": Мой день? Eh, it is going нормально."); console.log("Бот: Cheer up! :)"); console.log(name + ": :)");
  }
  // When you type something else.
  else {
    console.log(name + ": ...");
    console.log("Бот: ...");
}
console.log("Бот: So... What are you doing?");
 var text = prompt("So... What are you doing?(nothing, coding, playing, ...)")
 if (text === "nothing") {
   console.log(name + ": ...I am doing nothing. And you are?");
   console.log("Бот: I? I am talking with YOU :)");
 }
   else if (text === "coding") {
     console.log(name + ": ...Uh, what? I can't talk with you, I am coding ; )");
     console.log("Бот: Oh, okay! ; )");
 }
     else if (text === "playing") {
       console.log(name + ": Oh, I am playing =)");
       console.log("Бот: Nice! =)");
     }
     else {
       console.log(name + ": ...");
       console.log("Бот: ...");
     }
