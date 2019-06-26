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
    const $router = {};
    $router.replace = jest.fn();
    $router.replace.mockImplementation(url => {
      expect(url).toEqual("/register");
    });

    const wrapper = shallowMount(Login, {
      mocks: {
        $router
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
    const $router = {
      replace: jest.fn()
    };
    $router.replace.mockImplementation(url => {
      expect(url).toEqual("/admin/user/list");
    });

    jest.mock("axios");
    axios.post = jest.fn();
    axios.post.mockResolvedValue({ data: { success: true, msg: "xxx" } });
    jest.spyOn(window, "alert").mockImplementation(msg => {
      // console.log(msg);
      expect(msg).toEqual("warning xxx");
    });

    const wrapper = shallowMount(Login, {
      mocks: { $router }
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
