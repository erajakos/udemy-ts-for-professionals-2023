"use strict";
// npm i express
// types missing..
// npm i @types/express
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', function (req, res) {
    res.send('moro');
});
app.listen(3000, () => {
    console.log("Server started");
});
