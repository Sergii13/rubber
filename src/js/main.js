import "../scss/style.scss";
import "./files/script.js";
import * as Functions from "./files/functions.js";
import { SelectConstructor } from "./libs/select.js";
import "./files/sliders.js";
//svg-sprite
import "virtual:svg-icons-register";

Functions.menuInit();
Functions.spollers();
new SelectConstructor({});
