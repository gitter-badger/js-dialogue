console.log("Bot: Hello, dear user.");
console.log("Bot: What is your name?");
var name = prompt("What is your name?")
console.log(name + ": My name is " + name + ".");
console.log("Bot: How is your day going?");
var text = prompt("How is your day going? (good, bad, normal, ...)")
if (text === "good") {
  console.log(name + ": My day? It is going good.");
  console.log("Bot: Very nice! I hope they happiness continiues!");
  console.log(name + ": Ah, thank you! I hope you have a nice day too!");
  }
  else if (text === "bad") {
    console.log(name + ": My day? It is going badly.");
    console.log("Bot: Don't be sad! The day is going to be good - believe it!");
    console.log(name + ": Thank you for your support...");
    }
    else if (text === "normal") {
      console.log(name + ": My day? Eh, it is going normal.");
      console.log("Bot: Cheer up! :)");
      console.log(name + ": :)");
      }
        else {
        console.log(name + ": ...");
        console.log("Bot: ...");
        }
console.log("Bot: So... What are you doing?");
var text = prompt("So... What are you doing?(nothing, coding, playing, ...)")
if (text === "nothing") {
  console.log(name + ": ...I am doing nothing. And you are?");
  console.log("Bot: I? I am talking with YOU :)");
}
  else if (text === "coding") {
    console.log(name + ": ...Uh, what? I can't talk with you, I am coding ; )");
    console.log("Bot: Oh, okay! ; )");
}
    else if (text === "playing") {
      console.log(name + ": Oh, I am playing =)");
      console.log("Bot: Nice! =)");
    }
    else {
      console.log(name + ": ...");
      console.log("Bot: ...");
    }
