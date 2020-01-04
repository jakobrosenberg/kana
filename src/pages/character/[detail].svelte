<script>

  import { autoplayEnabled } from '../autoplay.js';

  function toggleAutoplay() {
    autoplayEnabled.update(autoplayEnabled => !autoplayEnabled);
  }

  import Hiragana from '../hiragana.js'
  import { params } from '@sveltech/routify'
  export let detail;

  let showRomaji = true;

  function toggleRomaji() {
      showRomaji = !showRomaji;
  }
</script>

<style>
    .detail {
        font-family: sans-serif;
        text-align: center;
    }
    .hiragana {
        font-size: 9.6rem;
    }
</style>

<a href="/">Back</a>

{#each Hiragana as character }
    {#if character.romaji == detail }
    <div class="detail">
        <div class="hiragana">{character.character}</div>
        {#if showRomaji}<div class="romaji">{character.romaji}</div>{/if}
    </div>
    {/if}
{/each}

<audio src="/audio/{detail}.mp3" autoplay={$autoplayEnabled} controls />

<button on:click="{toggleRomaji}">Toggle romaji</button>
<button on:click="{toggleAutoplay}">Toggle autoplay</button>
