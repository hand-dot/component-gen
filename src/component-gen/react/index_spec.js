"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const testing_1 = require("@angular-devkit/schematics/testing");
const path = require("path");
const collectionPath = path.join(__dirname, "../../collection.json");
describe("component-gen", () => {
    it("react schematics works", () => {
        const runner = new testing_1.SchematicTestRunner("schematics", collectionPath);
        const tree = runner.runSchematic("react", { path: "src/components", name: "Header" }, schematics_1.Tree.empty());
        expect(tree.files).toEqual([
            "/src/components/Header/index.js",
            "/src/components/Header/Header.jsx",
            "/src/components/Header/Header.stories.js",
            "/src/components/Header/Header.test.js"
        ]);
    });
});
//# sourceMappingURL=index_spec.js.map