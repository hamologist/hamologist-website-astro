<style>
  nav {
    font-size: 1.5rem;
    margin-top: 3rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .container {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    max-width: var(--content-width);
  }

  .push-right {
    margin-left: auto;
  }

  nav a {
    text-decoration: none;
    color: var(--main-text-color);
  }

  nav a:hover {
    text-decoration: underline;
  }

  nav button {
    all: unset;
    cursor: pointer;
  }

  nav img {
    vertical-align: bottom;
  }

  @media screen and (min-width: 636px) {
    .nav-items {
      display: flex;
      gap: 2rem;
    }

    .nav-menu {
      display: none;
    }
  }

  @media screen and (max-width: 636px) {
    .nav-items {
      display: none;
    }

    .nav-items a {
      padding: 1.5rem;
    }

    .nav-close {
      padding-top: 1.5rem;
      padding-bottom: 1.0rem;
      padding-right: 1.5rem;
      padding-left: 4.0rem;
    }

    .nav-close img {
      width: 2.0rem;
      height: 2.0rem;
    }
  }

  .nav-close {
    display: none;
  }

  .show-nav-menu{
    position: fixed;
    inset: 0;
    background: var(--secondary-background);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
  }

  .show-nav-menu .nav-close{
    display: block;
  }
</style>

<script lang="ts">
  import { openModals } from "../services/store";
  let showNavMenu = false;

  function handleNavMenuClick() {
    showNavMenu = true;
    openModals.update(current => {
      const update = new Set(current);
      update.add('NAV_MENU');

      return update;
    });
  }

  function handleNavCloseClick() {
    showNavMenu = false;
    openModals.update(current => {
      const update = new Set(current);
      if (update.has('NAV_MENU')) {
        update.delete('NAV_MENU');
      }

      return update;
    });
  }
</script>

<nav>
  <div class="container">
    <div>
      <a href="/">
        <img src="/icons/house.svg" />
        <span>Jordan Paris</span>
      </a>
    </div>
    <div class="push-right">
      <button class="nav-menu" on:click={handleNavMenuClick}>
        <img src="/icons/menu.svg" />
      </button>
      <div class="nav-items" class:show-nav-menu={showNavMenu}>
        <button class="nav-close" on:click={handleNavCloseClick}>
          <img src="/icons/cancel.svg" />
        </button>
        <a href="/projects">Projects</a>
        <!-- Disabled until actual blog posts are written
        <a href="/blog">Blog</a>
        -->
      </div>
    </div>
  </div>
</nav>

