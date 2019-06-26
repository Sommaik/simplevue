import Login from "@/views/Login.vue";
import { shallowMount } from "@vue/test-utils";

describe("login page", () => {
  it("should have user text field", () => {
    const wrapper = shallowMount(Login);
    const userId = wrapper.find("#userId");
    expect(userId.exists()).toBe(true);
  });

  it("should have password field", () => {
    const wrapper = shallowMount(Login);
    const password = wrapper.find("#password");
    expect(password.exists()).toBe(true);
    expect(password.element.getAttribute("type")).toEqual("password");
  });

  it("should have submit button", () => {
    const wrapper = shallowMount(Login);
    const button = wrapper.find("button");
    expect(button.exists()).toBe(true);
  });

  it("should user = admin, password = admin", () => {
    const wrapper = shallowMount(Login);
    const userId = wrapper.find("#userId");
    userId.setValue("admin");
    const password = wrapper.find("#password");
    password.setValue("pwd");

    expect(wrapper.vm.$data).toEqual({
      userId: "admin",
      password: "pwd"
    });
  });

  it("should submit user = admin, password = admin to server", () => {
    const wrapper = shallowMount(Login, {
      methods: {
        onFormSubmit() {
          console.log("on form submit in test case");
        }
      }
    });
    const userId = wrapper.find("#userId");
    userId.setValue("admin");
    const password = wrapper.find("#password");
    password.setValue("pwd");

    expect(wrapper.vm.$data).toEqual({
      userId: "admin",
      password: "pwd"
    });
    const button = wrapper.find("button");
    button.trigger("click");
  });
});
