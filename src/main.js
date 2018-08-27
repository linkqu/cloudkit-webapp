import {Button} from "./components/Button";
import {Color} from "./components/Color";
import {TextField} from "./components/TextField";

let button = new Button({
    text: "Button",
    classes: ["button", "button-outline"],
    css: {
       "fontSize": "12px"
    },
    parent: document.body
});

let textField = new TextField({
    width: "200px",
    classes: ["text-field"],
    css: {
        "fontSize": "12px"
    },
    parent: document.body
});
