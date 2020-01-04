<script>
    import Hiragana from './hiragana.js'
</script>

<style>
    .c-character-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }

    .c-character-grid__item {
        border-bottom: 1px solid #CCC;
        padding: 2rem;
        border-right: 1px solid #CCC;
        text-align: center;
    }

    .c-character-grid__item:nth-child(5n) {
        border-right: none;
    }
</style>

<ul class="c-character-grid">
    {#each Hiragana as character }
        <li class="c-character-grid__item">
            <a href="/character/{character.romaji}">{character.character}</a>
            <!-- {character.romaji} -->
        </li>
    {/each}
</ul>