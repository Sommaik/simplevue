import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Public from "./views/Public.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Private from "@/views/Private.vue";
import User from "@/views/user/User.vue";
import UserForm from "@/views/user/Form.vue";
import UserList from "@/views/user/List.vue";
import Post from "@/views/jsonplaceholder/Post.vue";
import JsonPlaceHolder from "@/views/jsonplaceholder/JsonPlaceHolder.vue";
import JPHUser from "@/views/jsonplaceholder/User.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Public,
      children: [
        {
          path: "",
          name: "home",
          component: Home
        },
        {
          path: "login",
          name: "login",
          component: Login
        },
        {
          path: "register",
          name: "register",
          component: Register
        },
        {
          path: "about",
          name: "about",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
        }
      ]
    },
    {
      path: "/admin",
      component: Private,
      children: [
        {
          path: "user",
          component: User,
          children: [
            {
              path: "form/:id",
              component: UserForm
            },
            {
              path: "list",
              component: UserList
            }
          ]
        },
        {
          path: "jsonplaceholder",
          component: JsonPlaceHolder,
          children: [
            {
              path: "users",
              component: JPHUser
            },
            {
              path: "posts/:userId",
              component: Post
            }
          ]
        }
      ]
    }
  ]
});
