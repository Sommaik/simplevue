import Register from "@/views/Register.vue";
import { shallowMount, createLocalVue, mount } from "@vue/test-utils";
import BootstrapVue from "bootstrap-vue";
import Vuelidate from "vuelidate";
describe("register page", () => {
  const localVue = createLocalVue();

  beforeAll(() => {
    localVue.use(BootstrapVue);
    localVue.use(Vuelidate);
  });

  it("should have user text field", () => {
    const wrapper = shallowMount(Register, {
      localVue
    });
    const userId = wrapper.find("#userId");
    expect(userId.exists()).toBe(true);
  });

  it("should have name text field", () => {
    const wrapper = shallowMount(Register, {
      localVue
    });
    const name = wrapper.find("#name");
    expect(name.exists()).toBe(true);
  });

  it("should have two password field", () => {
    const wrapper = mount(Register, {
      localVue
    });
    const password = wrapper.findAll("input[type=password]");
    expect(password.length).toBe(2);
  });

  it("should have register button", () => {
    const wrapper = mount(Register, {
      localVue
    });
    const button = wrapper.find("button");
    expect(button.exists()).toBe(true);
    expect(button.text()).toEqual("Register");
  });

  it("should validate valid", () => {
    const wrapper = mount(Register, { localVue });
    const userId = wrapper.find("#userId");
    userId.setValue("admin");
    const name = wrapper.find("#name");
    name.setValue("Jame Bond");
    const password = wrapper.find("#password");
    password.setValue("123456");
    const rePassword = wrapper.find("#repassword");
    rePassword.setValue("123456");

    expect(wrapper.vm.$data.registerForm).toEqual({
      userId: "admin",
      name: "Jame Bond",
      password: "123456",
      repassword: "123456"
    });

    expect(wrapper.vm.$v.registerForm.$invalid).toBe(false);
  });

  it("should validate invalid password", () => {
    const wrapper = mount(Register, { localVue });
    const password = wrapper.find("#password");
    password.setValue("123456");
    const rePassword = wrapper.find("#repassword");
    rePassword.setValue("123");

    expect(wrapper.vm.$v.registerForm.$invalid).toBe(true);
  });

  it("should submit to server", () => {
    const onFormSubmit = jest.fn();
    const wrapper = mount(Register, {
      methods: {
        onFormSubmit
      },
      localVue
    });

    const userId = wrapper.find("#userId");
    userId.setValue("admin");
    const name = wrapper.find("#name");
    name.setValue("Jame Bond");
    const password = wrapper.find("#password");
    password.setValue("123456");
    const rePassword = wrapper.find("#repassword");
    rePassword.setValue("123456");
    const form = wrapper.find("form");
    form.trigger("submit");
    expect(onFormSubmit).toHaveBeenCalled();
  });
});
