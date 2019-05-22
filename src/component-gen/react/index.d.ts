import { Rule } from "@angular-devkit/schematics";
export interface ComponentOptions {
    path: string;
    name: string;
}
export declare function generateComponent(options: ComponentOptions): Rule;
