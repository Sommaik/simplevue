import Login from "@/views/Login.vue";
import { shallowMount, createLocalVue, mount } from "@vue/test-utils";
import BootstrapVue from "bootstrap-vue";
import axios from "axios";
import Vuelidate from "vuelidate";

describe("login page", () => {
  const localVue = createLocalVue();

  beforeAll(() => {
    localVue.use(BootstrapVue);
    localVue.use(Vuelidate);
  });

  it("should have user text field", () => {
    const wrapper = shallowMount(Login, {
      localVue
    });
    const userId = wrapper.find("#userId");
    expect(userId.exists()).toBe(true);
  });

  it("should have password field", () => {
    const wrapper = shallowMount(Login, {
      localVue
    });
    const password = wrapper.find("#password");
    expect(password.exists()).toBe(true);
    expect(password.element.getAttribute("type")).toEqual("password");
  });

  it("should have submit button", () => {
    const wrapper = mount(Login, {
      localVue
    });
    const button = wrapper.find("button");
    expect(button.exists()).toBe(true);
  });

  it("should have register button", () => {
    const wrapper = shallowMount(Login, {
      localVue
    });
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
      localVue,
      mocks: {
        $router
      }
    });
    const button = wrapper.find("#register");
    button.trigger("click");
  });

  it("should user = admin, password = admin", () => {
    const wrapper = mount(Login, { localVue });
    const userId = wrapper.find("#userId");
    userId.setValue("admin");
    const password = wrapper.find("#password");
    password.setValue("pwd");

    expect(wrapper.vm.$data.userForm).toEqual({
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

    const wrapper = mount(Login, {
      localVue,
      mocks: { $router }
    });
    const userId = wrapper.find("#userId");
    userId.setValue("admin");
    const password = wrapper.find("#password");
    password.setValue("pwd123");

    expect(wrapper.vm.$data.userForm).toEqual({
      userId: "admin",
      password: "pwd123"
    });
    const form = wrapper.find("form");
    form.trigger("submit");
    expect(axios.post).toBeCalledWith("http://localhost:3000/login", {
      password: "pwd123",
      userId: "admin"
    });
  });

  it("should valid when userId = a and password = 123456", () => {
    const wrapper = mount(Login, {
      localVue
    });
    const userId = wrapper.find("#userId");
    userId.setValue("a");
    const password = wrapper.find("#password");
    password.setValue("123456");
    expect(wrapper.vm.$v.userForm.userId.$invalid).toBe(false);
    expect(wrapper.vm.$v.userForm.password.$invalid).toBe(false);
    expect(wrapper.vm.$v.userForm.$invalid).toBe(false);
  });

  it("should valid when userId = a and password = a", () => {
    const wrapper = mount(Login, {
      localVue
    });
    const userId = wrapper.find("#userId");
    userId.setValue("a");
    const password = wrapper.find("#password");
    password.setValue("a");
    expect(wrapper.vm.$v.userForm.userId.$invalid).toBe(false);
    expect(wrapper.vm.$v.userForm.password.$invalid).toBe(true);
    expect(wrapper.vm.$v.userForm.$invalid).toBe(true);
  });
});
