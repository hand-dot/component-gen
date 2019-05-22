import React from "react";
import { storiesOf } from "@storybook/react";
import <%= classify(name) %> from "./<%= classify(name) %>";

storiesOf("<%= path %>/<%= classify(name) %>", module).add("no props", () => <<%= classify(name) %> />);
