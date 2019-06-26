import Login from "@/views/Login.vue";
import { shallowMount } from "@vue/test-utils";
import axios from "axios";

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

  it("should have register button", () => {
    const wrapper = shallowMount(Login);
    const button = wrapper.find("#register");
    expect(button.exists()).toBe(true);
  });

  it("should have register button", () => {
    const $route = {};
    $route.replace = jest.fn();
    $route.replace.mockImplementation(url => {
      expect(url).toEqual("/register");
    });

    const wrapper = shallowMount(Login, {
      mocks: {
        $route
      }
    });
    const button = wrapper.find("#register");
    button.trigger("click");
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
    const $route = {
      replace: jest.fn()
    };
    $route.replace.mockImplementation(url => {
      expect(url).toEqual("/admin/user/list");
    });

    jest.mock("axios");
    axios.post = jest.fn();
    axios.post.mockResolvedValue({ data: { success: true, msg: "xxxxx" } });
    jest.spyOn(window, "alert").mockImplementation(msg => {
      console.log(msg);
    });

    const wrapper = shallowMount(Login, {
      mocks: { $route }
    });
    const userId = wrapper.find("#userId");
    userId.setValue("admin");
    const password = wrapper.find("#password");
    password.setValue("pwd");

    expect(wrapper.vm.$data).toEqual({
      userId: "admin",
      password: "pwd"
    });
    const form = wrapper.find("form");
    form.trigger("submit");
    expect(axios.post).toBeCalledWith("http://localhost:3000/login", {
      password: "pwd",
      userId: "admin"
    });
  });
});
