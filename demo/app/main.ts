// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";

require("nativescript-plugin-firebase");
const firebase = require("nativescript-plugin-firebase/app");
firebase.initializeApp({
    persist: false
}).then(() => console.log("Firebase initialized in main.ts"));

platformNativeScriptDynamic().bootstrapModule(AppModule);