<template>
  <header>
    <h1>E-Commerce Store</h1>
    <nav>
      <RouterLink to="/"> Home </RouterLink>
      <RouterLink to="/categories"> Categories </RouterLink>
      <RouterLink to="/products"> Products </RouterLink>
      <RouterLink to="/cart"> 🛒 </RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
header {
  background-color: #1f2937; /* Dark background */
  padding: 1.5rem 2rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header h1 {
  font-size: 1.5rem;
}

nav {
  display: flex;
  gap: 1.5rem;
}

nav a {
  color: #d1d5db;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  padding: 4px 0;
  transition: color 0.3s;
}

nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: #10b981;
  transition: width 0.3s ease;
}

nav a:hover {
  color: #ffffff;
}

nav a:hover::after {
  width: 100%;
}

/* Active route styling */
.router-link-active {
  color: #ffffff;
}

.router-link-active::after {
  width: 100%;
}
</style>
