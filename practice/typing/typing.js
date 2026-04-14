let string = ""

window.addEventListener('keydown', e =>
    {
        const key = e.key;
        if (key === "Backspace") {
            if (string != "") {
                string = string.slice(0,-1);
            }
        } else if (key === "Enter") {
            string += "\n";
        } else if (key === "Tab") {
            string += "\t"
        } else if (key != "Shift") {
            string += key;
        }

        if (string != "") {
            document.body.innerHTML = "<p>" + string + "</p>";
        } else {
            document.body.innerHTML = "<p>Type to make things show up!</p>"
        }
    }
);