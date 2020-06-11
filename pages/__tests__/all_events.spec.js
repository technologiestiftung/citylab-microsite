import { shallowMount } from "@vue/test-utils";
import allEvents from "../all_events";
// https://kentcdodds.com/blog/why-i-never-use-shallow-rendering
describe("allEvents", () => {
  const wrapper = shallowMount(allEvents, {
    data() {
      return {};
    },
  });

  test("mounts properly", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test("sorts dates chronologically using a Vue mixin", () => {
    const sortDatesChronologically = wrapper.vm.sortDatesChronologically;

    const received = sortDatesChronologically([
      { date: "2020-03-18" },
      { date: "2020-03-24" },
      { date: "2020-03-03" },
    ]);

    const expected = [
      { date: "2020-03-03" },
      { date: "2020-03-18" },
      { date: "2020-03-24" },
    ];

    expect(received).toEqual(expected);
  });
});
