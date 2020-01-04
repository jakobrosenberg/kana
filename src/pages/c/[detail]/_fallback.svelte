<script>
  import Button from '../../../UI/Button.svelte';
  import ButtonToolbar from '../../../UI/ButtonToolbar.svelte';
  import Navbar from '../../../UI/Navbar.svelte';

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
  import { goto } from '@sveltech/routify'


  function test() {
      var next = 'e';
      var currentPos = Hiragana.map(function(e) { return e.romaji; }).indexOf(detail);
      var maxLength = Hiragana.length;
      console.log(currentPos);
      console.log(maxLength);
      $goto('/c/'+(parseInt(currentPos+1))+'/hiragana')
  }

</script>

<style>

    .detail {
        font-family: sans-serif;
        text-align: center;
        background: red;
        padding: 2rem;
        display: inline-block
    }

    .character {
        font-size: 9.6rem;
    }

    audio {
        visibility: hidden;
    }

</style>

<Navbar borderPosition="bottom">
    <Button href="/">Back</Button>
</Navbar>

{#if language == "hiragana"}
    {#each Hiragana as character }
        {#if character.romaji == detail }
        <div class="detail" on:click={test}>
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
        Autoplay sound {#if $autoplayEnabled}on{:else}off{/if}
    </Button>
</ButtonToolbar>
