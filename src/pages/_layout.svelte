<script>

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

<slot></slot>

<NavBar borderPosition="top">

    <Toolbar>
        <ToolbarGroup align="justify">
            <ToolbarItem grow>
                <SegmentedControl>
                    <!-- Todo add selected state based on segment -->
                    <SegmentedControlItem href="/">Hiragana</SegmentedControlItem>
                    <SegmentedControlItem href="/katakana">Katakana</SegmentedControlItem>
                </SegmentedControl>
            </ToolbarItem>
        </ToolbarGroup>
    </Toolbar>

</NavBar>