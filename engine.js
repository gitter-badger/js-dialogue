// Welcoming message, change to anything you want.
console.log("Bot: Hello, dear user.");
// The bot asks your name, no need to change it.
console.log("Bot: What is your name?");
var name = prompt("What is your name?");
  // You say that your name == var name;
console.log(name + ": My name is " + name + ".");
// The dialogue continiues, and this is the first branching choice.
console.log("Bot: How is your day going?");
/* The text in brackets shows what are the possible choices.
The '...' means that any other choice will work.  */
var text = prompt("How is your day going? (good, bad, normal, ...)");
  // When you type 'good'.
if (text === "good") {
  console.log(name + ": My day? It is going good.");
  // The bot's response.
  console.log("Bot: Very nice! I hope they happiness continiues!");
  // The player's auto-response.
  console.log(name + ": Ah, thank you! I hope you have a nice day too!");
}
// When you type 'bad'.
else if (text === "bad") {
  console.log(name + ": My day? It is going badly.");
  console.log("Bot: Don't be sad! The day is going to be good - believe it!");
  console.log(name + ": Thank you for your support...");
}
// When you type 'normal'.
else if (text === "normal"){
    console.log(name + ": My day? Eh, it is going normal."); console.log("Bot: Cheer up! :)"); console.log(name + ": :)");
  }
  // When you type something else.
else {
  console.log(name + ": ...");
  console.log("Bot: ...");
}
