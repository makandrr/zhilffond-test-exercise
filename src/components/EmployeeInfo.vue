<script setup>
const props = defineProps(['employee'])
</script>

<template>
  <section class="employee-info">
    <div class="avatar">
      <img src="/userPlaceholder.png" alt="" />
    </div>
    <div class="info">
      <div class="header">
        <h1>{{ props.employee.name }}</h1>
        <p class="meta-info"><span class="label">email:</span> {{ props.employee.email }}</p>
        <p class="meta-info"><span class="label">phone:</span> {{ props.employee.phone }}</p>
      </div>
      <div class="content">
        <h2>О себе:</h2>
        <p class="about">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.employee-info {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  padding: 0 1.25rem;
  & > * {
    flex-grow: 1;
    flex-basis: calc((50rem - 100%) * 999);
  }
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.avatar {
  aspect-ratio: 13 / 9;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--c-white-dark);
  align-self: flex-start;

  img {
    inline-size: 100%;
    block-size: 100%;
    object-fit: cover;
  }
}

h1 {
  font-weight: 600;
  font-size: 1rem;
  color: hsl(0, 0%, 0%);
}

h2 {
  font-weight: 600;
  font-size: 1rem;
}

.meta-info {
  font-size: 0.87rem;
  color: var(--c-grey);
  margin-top: 0.4rem;
  span {
    font-size: 1rem;
    font-weight: 600;
    color: var(--c-black);
  }
}

.about {
  font-size: 0.87rem;
  color: var(--c-grey);
  margin-top: 1.7rem;
}
</style>
