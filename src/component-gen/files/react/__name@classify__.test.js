import React from "react";
import ReactDOM from "react-dom";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";
import { <%= classify(name) %> } from "./<%= classify(name) %>";

describe('<%= classify(name) %>', () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<<%= classify(name) %> />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("renders correctly", () => {
        const wrapper = shallow(<<%= classify(name) %> />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
