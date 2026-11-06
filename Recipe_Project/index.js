
let newListItem = document.createElement('li');
newListItem.textContent = '(optional) lime wedges';
document.querySelector('.ingredients').appendChild(newListItem);

let newInstructions = document.createElement('li');
newInstructions.textContent = '(optional) Feel free to squeeze some juice to the pizza with the lime wedges for that zesty flavor!';
document.querySelector('.finish-it').appendChild(newInstructions);




    const check = document.getElementById(".ingredients");

    let checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "id";

    var label = document.createElement("label");

    label.htmlFor = "id";

    var label = document.createElement("label");

    label.htmlFor = "id";

    label.appendChild(
        document.createTextNode("This create the label for checkbox.")

    );

    .ingredients.appendChild(checkbox);
    .ingredients.appendChild(label);