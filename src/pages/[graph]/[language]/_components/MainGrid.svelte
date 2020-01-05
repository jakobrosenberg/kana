<script>
  import * as data from "../_datasets";

  import { url, params } from "@sveltech/routify";

  const languages = { hiragana: "Hiragana", katana: "Katana" };
  $: ({ graph, language } = $params);
  $: dataset = data[graph][language];
</script>

<ul class="c-character-grid">
  {#each dataset as character}
    {#if character.character == ''}
      <li class="c-character-grid__item">
        <!-- Cell for layout purposes -->
      </li>
    {:else}
      <li class="c-character-grid__item">
        <a
          href={$url('/:graph/:language/:detail/', {
            detail: character.romaji,
            language
          })}>
          {character.character}
        </a>
        <!-- {character.romaji} -->
      </li>
    {/if}
  {/each}
</ul>
