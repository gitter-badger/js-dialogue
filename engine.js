document.write("Bot: Hello, dear user.<br>");
document.write("Bot: What is your name?<br>");
var name = prompt("What is your name?")
document.write(name + ": My name is " + name + ".<br>");
document.write("Bot: How is your day going?");
var text = prompt("How is your day going? (good, bad, normal, ...)")
if (text == "good") [
  document.write(name + ": My day? It is going good.");
  ]
  else if (text == "bad") [
    document.write(name + ": My day? It is going badly.");
    ]
    else if (text == "normal") [
      document.write(name + ": My day? Eh, it is going normal.");
      ]
      else [
        document.write(name + ": ...");
        ]
