<template>
  <div class="navbar p-6 flex justify-between items-center">
    <div class="router flex gap-4">
      <router-link to="/" class="text-white hover:text-slate-400"
        >Home</router-link
      >
      <router-link to="/about" class="text-white hover:text-slate-400"
        >About</router-link
      >
      <div class="container mx-auto">
        <div
          class="px-2 bg-white rounded text-center inline-flex flex-col relative shadow-sm"
        >
          <button
            ref="adminButton"
            class="text-slate-800 flex items-center"
            @click="isClicked = !isClicked"
          >
            <span>Admin</span>
            <svg
              class="w-6 h-6 ml-2"
              aria-hidden="true"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <rect x="0" fill="none" width="24" height="24"></rect>
                <g><path d="M7 10l5 5 5-5"></path></g>
              </g>
            </svg>
          </button>
          <div
            ref="menu"
            class="bg-white -left-0 absolute max-w-full mt-8"
            v-if="isClicked"
            @click="toggleMenu"
          >
            <router-link
              to="/admin/category"
              class="text-slate-800 hover:text-slate-400 block p-3 border-b border-gray-300"
              >Category</router-link
            >
            <router-link
              to="/admin/product"
              class="text-slate-800 hover:text-slate-400 block p-3 border-b border-gray-300"
              >Product</router-link
            >
          </div>
        </div>
      </div>
      <div class="search">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="search.."
          class="pl-2 rounded-sm"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isClicked: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isClicked = !this.isClicked;
    },
    closeMenu(event) {
      const menu = this.$refs.menu;
      const adminButton = this.$refs.adminButton;

      // Periksa apakah klik terjadi di luar dropdown admin
      if (
        menu &&
        !menu.contains(event.target) &&
        !adminButton.contains(event.target)
      ) {
        this.isClicked = false;
      }
    },
  },
  mounted() {
    // Add event listener to close dropdown when clicked outside
    document.body.addEventListener("click", this.closeMenu);
  },
  beforeDestroy() {
    // Remove event listener before component is destroyed
    document.body.removeEventListener("click", this.closeMenu);
  },
};
</script>

<style scoped>
.navbar {
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.menu-toggle {
  display: none;
}

.menu {
  display: none;
  transition: all 1s;
}

.menu.show {
  display: block;
}

.menu.show ul li {
  animation: fadeIn 0.5s ease-in-out forwards;
}

@keyframes fadeIn {
  0% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .router {
    display: none;
  }

  .menu-toggle input:checked + .menu {
    display: block;
  }
}

.hamburger {
  cursor: pointer;
  display: inline-block;
  padding: 10px;
}

.bar {
  background-color: #fff;
  display: block;
  height: 3px;
  width: 25px;
  margin: 5px auto;
  transition: background-color 0.3s ease;
}

/* Open state for hamburger menu */
.hamburger.open .bar:first-child {
  transform: translateY(8px) rotate(45deg);
}

.hamburger.open .bar:nth-child(2) {
  opacity: 0;
}

.hamburger.open .bar:last-child {
  transform: translateY(-8px) rotate(-45deg);
}

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu ul li {
  margin-bottom: 10px;
}

.menu ul li a {
  color: #fff;
  text-decoration: none;
}
</style>
