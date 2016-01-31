document.write("Bot: Hello, dear user.<br>");
document.write("Bot: What is your name?<br>");
var name = prompt("What is your name?")
document.write(name + ": My name is " + name + ".<br>");
document.write("Bot: How is your day going?");
var text = prompt("How is your day going? (good, bad, normal, ...)")
if (text == "good") [
  document.write(name + ": My day? It is going good.");
  document.write("Bot: Very nice! I hope they happiness continiues!");
  document.write(name + ": Ah, thank you! I hope you have a nice day too!");
  ]
  else if (text == "bad") [
    document.write(name + ": My day? It is going badly.");
    document.write("Bot: Don't be sad! The day is going to be good - believe it!");
    document.write(name + ": Thank you for your support...");
    ]
    else if (text == "normal") [
      document.write(name + ": My day? Eh, it is going normal.");
      document.write("Bot: Cheer up! :)");
      document.write(name + ": :)");
      ]
      else [
        document.write(name + ": ...");
        document.write("Bot: ...");
        ]
