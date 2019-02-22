<template>
  <div class="share">
    <a
      class="facebook"
      onclick="gtag('event', 'share', { 'event_label': 'Facebook' });"
      target="_blank"
      :href="`http://www.facebook.com/sharer.php?u=${url}`"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path
          d="M18.768 7.465H14.5V5.56c0-.896.594-1.105 1.012-1.105H18.5V.513L14.171.5C10.244.5 9.5 3.438 9.5 5.32v2.144h-3v4h3v12h5v-12h3.851l.417-3.999z"
        ></path>
        <path fill="none" d="M0 0h24v24H0z"></path>
      </svg>
      <span>Share</span>
    </a>
    <a
      class="twitter"
      onclick="gtag('event', 'share', { 'event_label': 'Twitter' });"
      target="_blank"
      :href="`http://twitter.com/share?url=${url}`"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path
          d="M23.444 4.834c-.814.363-1.5.375-2.227.016.938-.562.981-.957 1.32-2.019-.878.521-1.851.9-2.886 1.104a4.545 4.545 0 0 0-7.743 4.145 12.897 12.897 0 0 1-9.366-4.748 4.525 4.525 0 0 0-.615 2.285c0 1.577.803 2.967 2.021 3.782a4.527 4.527 0 0 1-2.057-.568l-.001.057a4.547 4.547 0 0 0 3.646 4.456 4.575 4.575 0 0 1-2.053.079 4.551 4.551 0 0 0 4.245 3.155A9.138 9.138 0 0 1 1 18.459 12.865 12.865 0 0 0 7.966 20.5c8.358 0 12.928-6.924  12.928-12.929 0-.198-.003-.393-.012-.588.887-.64 1.953-1.237 2.562-2.149z"
        ></path>
        <path fill="none" d="M0 0h24v24H0z"></path>
      </svg>
      <span>Tweet</span>
    </a>
    <a
      class="mail"
      onclick="gtag('event', 'share', { 'event_label': 'Mail' });"
      target="_blank"
      :href="`mailto:?body=${url}`"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path
          d="M12.002 12.36l10.095-8.03A1.99 1.99 0 0 0 21.001 4h-18c-.387 0-.746.115-1.053.307l10.054 8.053z"
        ></path>
        <path
          d="M22.764 5.076l-10.468 8.315a.488.488 0 0 1-.594-.001L1.26 5.036c-.16.287-.259.612-.26.964v11c.001 1.103.898 2 2.001 2h17.998c1.103 0 2-.897 2.001-2V6c0-.335-.09-.647-.236-.924z"
        ></path>
        <g>
          <path fill="none" d="M0 0h24v24H0z"></path>
        </g>
      </svg>
      <span>Email</span>
    </a>
    <a
      class="whatsapp"
      onclick="gtag('event', 'share', { 'event_label': 'Whatsapp' });"
      :href="`whatsapp://send?text=${url}`"
      data-action="share/whatsapp/share"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M11.999.68C5.658.68.499 5.797.499 12.089c0 2.497.815 4.809 2.191 6.69l-1.436 4.238 4.419-1.404A11.49 11.49 0 0 0 12 23.5c6.34 0 11.499-5.118 11.499-11.41 0-6.291-5.158-11.41-11.5-11.41zm4.448 17.698c-.615.056-.615.5-4.023-.831-3.408-1.332-5.56-4.801-5.728-5.023C5.124 10.449 4.711 8.25 6.5 6.309c.567-.613 1.976-.588 2.292.168.279.665.95 2.303 1.034 2.469.084.167.141.361.028.582-.134.267-.273.58-.838 1.138-.168.166-.343.346-.147.678.195.334.867 1.422 1.864 2.305 1.281 1.133 2.361 1.484 2.696 1.65.335.166.531.139.727-.084.195-.223.839-.971 1.062-1.304.224-.333.447-.277.755-.166.307.11 1.955.915 2.291 1.082.335.165.559.25.642.388.504.84-.692 3.004-2.459 3.163z"
        ></path>
        <path fill="none" d="M0 0h24v24H0z"></path>
      </svg>
      <span>Whatsapp</span>
    </a>
  </div>
</template>

<script>
export default {
  computed: {
    // TODO either hide share comp on pages and front, or create article layout with it
    url: function() {
      return window.location.href;
    },
  },
};
</script>

<style lang="scss">
.share {
  margin-top: 2em;
  padding-top: 2em;
  box-shadow: 0 -0.3px;
  display: flex;
  flex-direction: column;
  a {
    flex: 1;
    color: #fff !important;
    text-transform: uppercase;
    font-size: 0.8em;
    border-radius: 2px;
    box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    padding: 0.25em 0.75em;
    margin: 0.25em 0;
    &:hover {
      text-decoration: none;
      border: none;
      color: #fff;
    }
    svg {
      fill: #fff;
      width: 16px;
      height: 16px;
      margin-right: 0.5em;
    }
  }
}

@media (min-width: 600px) {
  .share {
    flex-direction: row;
    a {
      margin: 0 0.5em;
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
}

a.mail {
  background-color: #545454;
}

a.facebook {
  background-color: #4267b2;
}

a.twitter {
  background-color: #1da1f2;
}

a.whatsapp {
  background-color: #09cb2a;
}
</style>



