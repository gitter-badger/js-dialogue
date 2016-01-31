// Welcoming message, change to anything you want.
document.write("Bot: Hello, dear user.<br>");
// The bot asks your name, no need to change it.
document.write("Bot: What is your name?<br>");
var name = prompt("What is your name?")
// You say that your name == var name;
document.write(name + ": My name is " + name + ".<br>");
// The dialogue continiues, and this is the first branching choice.
document.write("Bot: How is your day going?");
/* The text in brackets shows what are the possible choices.
The '...' means that any other choice will work.  */
var text = prompt("How is your day going? (good, bad, normal, ...)")
// When you type 'good'.
if (text == "good") [
  document.write(name + ": My day? It is going good.");
  ]
  // When you type 'bad'.
  else if (text == "bad") [
    document.write(name + ": My day? It is going badly.");
    ]
    // When you type 'normal'.
    else if (text == "normal") [
      document.write(name + ": My day? Eh, it is going normal.");
      ]
      // When you type something else.
      else [
        document.write(name + ": ...");
        ]
