<template>
  <div id="app">
    <div>
  <b-navbar type="dark" variant="dark">
        <b-navbar-brand href="#">Team Fight Tactics Data</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#"><router-link to="/">Home</router-link></b-nav-item>
            <b-nav-item
              ><router-link to="/Items">Items</router-link></b-nav-item
            >
            <b-nav-item
              ><router-link to="/Champions">Champions</router-link></b-nav-item
            >
            <b-nav-item
              ><router-link to="/TeamComps">Comps</router-link></b-nav-item
            >
            <b-nav-item
              ><router-link to="/Stats">Stats</router-link></b-nav-item
            >
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search Summoner"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Search</b-button
              >
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
<div class="bgimg">

</div>
    <router-view />


  </div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
