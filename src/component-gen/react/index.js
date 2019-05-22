"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
function generateComponent(options) {
    return () => {
        const path = `${options.path}/${core_1.strings.classify(options.name)}`;
        const templateSource = schematics_1.apply(schematics_1.url("../files/react"), [
            schematics_1.template(Object.assign({}, core_1.strings, options)),
            schematics_1.move(path)
        ]);
        return schematics_1.mergeWith(templateSource);
    };
}
exports.generateComponent = generateComponent;
//# sourceMappingURL=index.js.map