<template>
  <div>
    <b-container>
      <b-row>
        <b-navbar toggleable="md" type="light" variant="default">

          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

          <b-navbar-brand :to="{name: 'index'}">Homepage</b-navbar-brand>

          <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
              <b-nav-item to="chuck">Chuck Norris Facts</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-row>
      <b-row>
        <b-col xs="12">
          <nuxt/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
