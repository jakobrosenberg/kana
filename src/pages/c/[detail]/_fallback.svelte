<script>
  import Button from '../../../UI/Button.svelte';
  import ButtonToolbar from '../../../UI/ButtonToolbar.svelte';

  import { autoplayEnabled } from '../../stores/autoplay.js';
  import { romajiEnabled } from '../../stores/romaji.js';

  function toggleAutoplay() {
    autoplayEnabled.update(autoplayEnabled => !autoplayEnabled);
  }

  function toggleRomaji() {
    romajiEnabled.update(romajiEnabled => !romajiEnabled);
  }

  import Hiragana from '../../hiragana.js';
  import Katakana from '../../katakana.js';
  import { url, params, leftover } from '@sveltech/routify';

  let language = $leftover;

  export let detail;



</script>

<style>

    .detail {
        font-family: sans-serif;
        text-align: center;
    }
    .character {
        font-size: 9.6rem;
    }
    audio {
        visibility: hidden;
    }

</style>

<Button href="/">Back</Button>

{#if language == "hiragana"}
    {#each Hiragana as character }
        {#if character.romaji == detail }
        <div class="detail">
            <div class="character">{character.character}</div>
            {#if $romajiEnabled}<div class="romaji">{character.romaji}</div>{/if}
        </div>
        {/if}
    {/each}
{:else}
    {#each Katakana as character }
        {#if character.romaji == detail }
        <div class="detail">
            <div class="character">{character.character}</div>
            {#if $romajiEnabled}<div class="romaji">{character.romaji}</div>{/if}
        </div>
        {/if}
    {/each}
{/if}

<audio src="/audio/{detail}.mp3" autoplay={$autoplayEnabled} controls />
<ButtonToolbar>
    <Button on:click="{toggleRomaji}">
        Romaji {#if $romajiEnabled}on{:else}off{/if}
    </Button>
    <Button on:click="{toggleAutoplay}">
        Autoplay {#if $autoplayEnabled}on{:else}off{/if}
    </Button>
</ButtonToolbar>
