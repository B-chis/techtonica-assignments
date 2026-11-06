
let newListItem = document.createElement('li');
newListItem.textContent = '(optional) lime wedges';
document.querySelector('.ingredients').appendChild(newListItem);

let newInstructions = document.createElement('li');
newInstructions.textContent = '(optional) Feel free to squeeze some juice to the pizza with the lime wedges for that zesty flavor!';
document.querySelector('.finish-it').appendChild(newInstructions);




    const zero = document.getElementById('zero');

    let checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "id";

    var label = document.createElement("label");

    label.htmlFor = "id";

    var label = document.createElement("label");

    label.htmlFor = "id";

    const removeZero = document.getElementById('zero');
    removeZero.textContent = "";
     label.appendChild(
        document.createTextNode('Lime juice')

    );

    zero.appendChild(checkbox);
    zero.appendChild(label);


    const one = document.getElementById('one');

    let checkboxOne = document.createElement("input");

    checkboxOne.type = "checkbox";
    checkboxOne.name = "name";
    checkboxOne.value = "value";
    checkboxOne.id = "id";

    var labelOne = document.createElement("labelOne");

    labelOne.htmlFor = "id";

    var labelOne = document.createElement("labelOne");

    labelOne.htmlFor = "id";

    const removeOne = document.getElementById('one');
    removeOne.textContent = "";
     labelOne.appendChild(
        document.createTextNode('Corn kernels (fresh or canned)')

    );

    one.appendChild(checkboxOne);
    one.appendChild(labelOne);


     const two = document.getElementById('two');

    let checkboxTwo = document.createElement("input");

    checkboxTwo.type = "checkbox";
    checkboxTwo.name = "name";
    checkboxTwo.value = "value";
    checkboxTwo.id = "id";

    var labelTwo = document.createElement("labelOne");

    labelTwo.htmlFor = "id";

    var labelTwo = document.createElement("labelOne");

    labelTwo.htmlFor = "id";

    const removeTwo = document.getElementById('two');
    removeTwo.textContent = "";
     labelTwo.appendChild(
        document.createTextNode('Valentina (or you favorite hot sauce for Elote)')

    );

    two.appendChild(checkboxTwo);
    two.appendChild(labelTwo);