<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-primary">
      <div class="container">
        <nuxt-link :to="{name: 'index'}" class="navbar-brand" >Homepage</nuxt-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <nuxt-link :to="{name: 'chuck'}" class="nav-link" activeClass="active" >Chuck Norris Facts</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col">
          <nuxt class="mt-4"/>
        </div>
      </div>
    </div>
  </div>
</template>
