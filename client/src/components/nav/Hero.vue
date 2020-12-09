<template>
  <div>
    <h1 class="block-effect" style="--td: 1.25s; margin: 0">
      <div class="block-reveal" style="--bc: #4040bf; --d: .1s"><strong class="nav-text">Business Blvd.</strong></div>
    </h1>
  </div>
</template>
<style scoped>

.nav-text{
  color: #1B5299;
}

/* reset */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  font-family: Avenir, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}


/* other */
.info {
  margin: 2px 0;
  text-align: center;
}

p {
  color: #2e2e2e;
}


/* block-$ */
.block-effect {
  font-size: 2em;
}

.block-reveal {
  --t: calc(var(--td) + var(--d));

  color: transparent;
  padding: 4px;

  position: relative;
  overflow: hidden;

  animation: revealBlock 0s var(--t) forwards;
}

.block-reveal::after {
  content: '';

  width: 0%;
  height: 100%;
  padding-bottom: 4px;

  position: absolute;
  top: 0;
  left: 0;

  background: var(--bc);
  animation: revealingIn var(--td) var(--d) forwards, revealingOut var(--td) var(--t) forwards;
}


/* animations */
@keyframes revealBlock {
  100% {
    color: #0f0f0f;
  }
}

@keyframes revealingIn {

  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
}

@keyframes revealingOut {

  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(100%);
  }

}
</style>