<script lang="ts">
  import { tagsState } from './state.svelte';
  import Tag from './lib/Tag.svelte';
  import { createTags, randomSelect } from './js/helpers';

  let tagsEl;

  function handleEnter(e) {
    if (e.key !== 'Enter') return;
    else {
      e.preventDefault();
      tagsState.tags = createTags(input);

      const times = 30;

      const interval = setInterval(() => {
        const randomTag = Math.floor(Math.random() * tagsState.tags.length);
        isHighlighted = randomTag;
      }, 100);

      setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
          const randomTag = Math.floor(Math.random() * tagsState.tags.length);
          isHighlighted = randomTag;
        }, 100);
      }, times * 100);
    }
  }

  let input = $state();
  let isHighlighted = $state('');
</script>

<div class="container">
  <h3>
    Enter all of the choices divided by a comma (',') <br />Press enter when
    you're done
  </h3>
  <textarea
    bind:value={input}
    id="textarea"
    placeholder="Enter choices here..."
    onkeydown={handleEnter}></textarea>

  <div bind:this={tagsEl} id="tags">
    {#if tagsState.tags.length}
      {#each tagsState.tags as tag, idx (idx)}
        <Tag
          id={tagsState.tags.findIndex(el => el === tag)}
          {tag}
          {isHighlighted} />
      {/each}
    {/if}
  </div>
</div>

<style lang="scss">
  @use './scss/vars';

  .container {
    width: 100%;
    min-height: 45%;
  }

  @media screen and (min-width: vars.$mobile) {
    .container {
      max-width: 500px;
    }
  }
  h3 {
    color: #fff;
    margin: 10px 0 20px;
    text-align: center;
  }

  textarea {
    border: none;
    display: block;
    width: 100%;
    height: 100px;
    font-family: inherit;
    padding: 10px;
    margin: 0 0 20px;
    font-size: 1rem;
    &:focus {
      outline: none;
    }
  }

  #tags {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>
