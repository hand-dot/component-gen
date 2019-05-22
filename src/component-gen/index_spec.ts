import { Tree } from "@angular-devkit/schematics";
import { SchematicTestRunner } from "@angular-devkit/schematics/testing";
import * as path from "path";

const collectionPath = path.join(__dirname, "../collection.json");

describe("component-gen", () => {
  it("works", () => {
    const runner = new SchematicTestRunner("schematics", collectionPath);
    const tree = runner.runSchematic(
      "component-gen",
      { path: "src/components", name: "Header" },
      Tree.empty()
    );

    expect(tree.files).toEqual([
      "/src/components/Header/index.js",
      "/src/components/Header/Header.jsx",
      "/src/components/Header/Header.stories.js",
      "/src/components/Header/Header.test.js"
    ]);
  });
});
