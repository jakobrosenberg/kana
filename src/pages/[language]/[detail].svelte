<script>
  import Button from '../../UI/Button.svelte';

  import { autoplayEnabled } from '../autoplay.js';

  function toggleAutoplay() {
    autoplayEnabled.update(autoplayEnabled => !autoplayEnabled);
  }

  import Hiragana from '../hiragana.js';
  import Katakana from '../katakana.js';
  import { params } from '@sveltech/routify';

  export let detail;
  export let language;

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
    .character {
        font-size: 9.6rem;
    }
</style>


<Button href="/">Back</Button>
{language}
{detail}
{#if language == "hiragana"}
    {#each Hiragana as character }
        {#if character.romaji == detail }
        <div class="detail">
            <div class="character">{character.character}</div>
            {#if showRomaji}<div class="romaji">{character.romaji}</div>{/if}
        </div>
        {/if}
    {/each}
{:else}
    {#each Katakana as character }
        {#if character.romaji == detail }
        <div class="detail">
            <div class="character">{character.character}</div>
            {#if showRomaji}<div class="romaji">{character.romaji}</div>{/if}
        </div>
        {/if}
    {/each}
{/if}

<audio src="/audio/{detail}.mp3" autoplay={$autoplayEnabled} controls />

<Button on:click="{toggleRomaji}">Toggle romaji</Button>
<Button on:click="{toggleAutoplay}">Toggle autoplay</Button>
