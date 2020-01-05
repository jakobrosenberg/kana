<script>
  console.log("foo");
  // UI controls

  import {onDestroy} from 'svelte'

  import * as data from "./_datasets";

  import Icon from "../../../UI/Icon.svelte";
  import Button from "../../../UI/Button.svelte";
  import ButtonToolbar from "../../../UI/ButtonToolbar.svelte";
  import NavBar from "../../../UI/Navbar.svelte";

  import Toolbar from "../../../UI/Toolbar.svelte";
  import ToolbarGroup from "../../../UI/ToolbarGroup.svelte";
  import ToolbarItem from "../../../UI/ToolbarItem.svelte";
  import ToolbarTitle from "../../../UI/ToolbarTitle.svelte";

  // Persistent functions

  import { autoplayEnabled } from "../../stores/autoplay.js";
  import { romajiEnabled } from "../../stores/romaji.js";

  function toggleAutoplay() {
    autoplayEnabled.update(autoplayEnabled => !autoplayEnabled);
  }

  function toggleRomaji() {
    romajiEnabled.update(romajiEnabled => !romajiEnabled);
  }
  onDestroy(()=>{console.log('destroyedd')})

  // State initial show

  import { url, params, goto, context } from "@sveltech/routify";
  $: ({ graph, language, detail } = $context.route.params);
  

  $: currentDataSet = data[graph][language].filter(function(el) {
    return el.character;
  });

  $: current = currentDataSet && currentDataSet
    .map(function(e) {
      return e.romaji;
    })
    .indexOf(detail);
  $: curEq = currentDataSet && currentDataSet[current].romaji;

  const clamp = (number, min, max) => Math.min(Math.max(number, min), max);

  function prev(e) {
    current = clamp(--current, 0, currentDataSet.length - 1);
  }
  function next(e) {
    current = clamp(++current, 0, currentDataSet.length - 1);
  }

  // Shortcuts
  const ARROW_LEFT = 37;
  const ARROW_RIGHT = 39;

  function handleShortcut(e) {
    if (e.keyCode === ARROW_LEFT) {
      prev();
    }
    if (e.keyCode === ARROW_RIGHT) {
      next();
    }
  }
</script>

<style>
  .detail {
    font-family: sans-serif;
    text-align: center;
    padding: 2rem;
    margin: 0 auto;
    user-select: none;
    width: 20rem;
  }

  .character {
    font-size: 9.6rem;
  }

  .romaji {
    margin-top: 1rem;
    font-size: 2.8rem;
  }

  audio {
    display: block;
    margin: 2rem auto;
  }

  .flex {
    display: flex;
    align-items: center;
    padding: 2rem;
  }
</style>

<svelte:window on:keyup={handleShortcut} />

<NavBar borderPosition="bottom">
  <Toolbar>
    <ToolbarGroup align="left">
      <ToolbarItem>
        <Button variant="ghost" icon="chevron-left" href={$url('../../../')}>
          Back
        </Button>
      </ToolbarItem>
    </ToolbarGroup>
  </Toolbar>
</NavBar>

<div class="flex">
  <Button
    on:click={prev}
    variant="ghost"
    disabled={current == 0}
    layout="icon-only"
    icon="chevron-left">
    Previous
  </Button>

  {#each currentDataSet as character, index}
    {#if current == index}
      <div class="detail">
        <div class="character">{character.character}</div>
        {#if $romajiEnabled}
          <div class="romaji">{character.romaji}</div>
        {/if}
        <audio src="/audio/{curEq}.mp3" autoplay={$autoplayEnabled} controls />
      </div>
    {/if}
  {:else}
    <p>No dataset defined.</p>
  {/each}

  <Button
    on:click={next}
    variant="ghost"
    layout="icon-only"
    icon="chevron-right">
    Next
  </Button>
</div>

<NavBar borderPosition="top">
  <Toolbar>
    <ToolbarGroup align="left">
      <ToolbarItem>
        <ButtonToolbar>
          <Button on:click={toggleRomaji}>
            Romaji
            {#if $romajiEnabled}on{:else}off{/if}
          </Button>
          <Button on:click={toggleAutoplay}>
            Autoplay sound
            {#if $autoplayEnabled}on{:else}off{/if}
          </Button>
        </ButtonToolbar>
      </ToolbarItem>
    </ToolbarGroup>
  </Toolbar>
</NavBar>
