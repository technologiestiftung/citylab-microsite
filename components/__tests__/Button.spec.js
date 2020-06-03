import { shallowMount } from "@vue/test-utils";
import Button from "../Button";

describe("Button", () => {
  test("mounts properly", () => {
    const wrapper = shallowMount(Button);
    expect(wrapper.exists()).toBeTruthy();
  });
});