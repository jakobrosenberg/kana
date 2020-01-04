<script>
    import Katakana from './katakana.js';
    import { url } from '@sveltech/routify';

    import NavBar from '../UI/NavBar.svelte';

    import Toolbar from '../UI/Toolbar.svelte';
    import ToolbarGroup from '../UI/ToolbarGroup.svelte';
    import ToolbarItem from '../UI/ToolbarItem.svelte';
    import ToolbarTitle from '../UI/ToolbarTitle.svelte';

    import Button from '../UI/Button.svelte';
    import Icon from '../UI/Icon.svelte';

    import SegmentedControl from '../UI/SegmentedControl.svelte';
    import SegmentedControlItem from '../UI/SegmentedControlItem.svelte';

</script>

<NavBar borderPosition="bottom">
    <Toolbar>
        <ToolbarGroup align="left">
        </ToolbarGroup>
        <ToolbarGroup align="center">
            <ToolbarItem>
                <ToolbarTitle>Katakana</ToolbarTitle>
            </ToolbarItem>
        </ToolbarGroup>
        <ToolbarGroup align="right">
            <ToolbarItem>
            </ToolbarItem>
        </ToolbarGroup>
    </Toolbar>
</NavBar>

<ul class="c-character-grid">
    {#each Katakana as character }
        <li class="c-character-grid__item">
            <a href={$url('/c/:detail/katakana', { detail: character.romaji })}>
                {character.character}
            </a>
            <!-- {character.romaji} -->
        </li>
    {/each}
</ul>
