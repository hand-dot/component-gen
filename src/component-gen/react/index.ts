import {
  Rule,
  apply,
  url,
  template,
  mergeWith,
  move
} from "@angular-devkit/schematics";
import { strings } from "@angular-devkit/core";

export interface ComponentOptions {
  path: string;
  name: string;
}

export function generateComponent(options: ComponentOptions): Rule {
  return () => {
    const path = `${options.path}/${strings.classify(options.name)}`;

    const templateSource = apply(url("../files/react"), [
      template({ ...strings, ...options }),
      move(path)
    ]);

    return mergeWith(templateSource);
  };
}
