"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const crmRoutes_1 = __importDefault(require("./src/routes/crmRoutes"));
const app = express_1.default();
const PORT = 3000;
// mongoose connection
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connect("mongodb://livdev:mbcloWX2nMV13VV5@cluster0-jvhtg.mongodb.net/test?retryWrites=true&w=majority", {
    useMongoClient: true
});
// bodyparser setup
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
crmRoutes_1.default(app);
// serving static files
app.use(express_1.default.static("public"));
app.get("/", (req, res) => res.send(`Node and express server is running on port ${PORT}`));
app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));
