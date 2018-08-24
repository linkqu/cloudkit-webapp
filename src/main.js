import {Button} from "./components/Button";
import {Color} from "./components/Color";

let button = new Button({
    text: 'Button',
    classes: ['button', 'button-success']
});
let buttonElement = button.createFragment();
