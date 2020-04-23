<template>
  <div id="app">
    <!-- Root foo: {{ rootFoo }} <br>
    robots foo: {{ robotsFoo }}<br>
    Users foo: {{ usersFoo }} <br> -->
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link active-class="active" :to="{ name: 'Home' }" class="nav-link" exact>
              <img src="./assets/build-a-bot-logo.png" alt="" class="logo">
              Build a bot
            </router-link>
          </li>
          <li class="nav-item">
            <router-link active-class="active" :to="{ name: 'Build' }" class="nav-link" exact>
              Build
            </router-link>
          </li>
          <li class="nav-item">
            <router-link active-class="active" :to="{ name: 'BrowseParts' }" class="nav-link" axact>
              Browse
            </router-link>
          </li>
          <li class="nav-item cart">
            <router-link active-class="active" :to="{ name: 'Cart' }" class="nav-link" exact>
              Cart
            </router-link>
            <div class="cart-items">
              {{ cart.length }}
            </div>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar"></router-view>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex';

export default {
  name: 'App',
  computed: {
    // ...mapState({ rootFoo: 'foo', usersFoo: (state) => state.usersModule.foo }),
    // ...mapState('robotsModule', { robotsFoo: 'foo' }), // only works for namespaced module
    // rootFoo() {
    //   return this.$store.state.foo;
    // },
    cart() {
      return this.$store.state.robotsModule.cart;
    },
  },
};
</script>
<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
</style>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
main {
  /* margin: 0 auto; */
  padding: 30px;
  background-color: white;
  width: 964px;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.nav-item.cart {
  position: relative;
  margin-left: auto;
  border-right: none;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link{
  text-decoration: none;
  color: inherit;
}
.nav-link.active{
  color: white;
}
.container{
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}
.aside{
  padding: 30px;
  background-color: #aaa;
  width: 100px;
  min-height: 300px;
}
.cart-items {
  position: absolute;
  top: -5px;
  right: -9px;
  font-size: 18px;
  width: 20px;
  text-align: center;
  display: inline-block;
  border-radius: 100px;
  background-color: mediumseagreen;
}
</style>
