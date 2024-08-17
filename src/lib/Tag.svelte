<script>
  let { id, tag, isHighlighted } = $props();
</script>

<span {id} class={`tag ${isHighlighted === id ? 'highlight' : ''}`}>{tag}</span>

<style lang="scss">
  .tag {
    background-color: #f0932b;
    color: #fff;
    border-radius: 50px;
    padding: 10px 20px;
    font-size: 0.875rem;

    &.highlight {
      background-color: #273c75;
    }
  }
</style>
