<script>

    import NavBar from '../UI/NavBar.svelte';

    import Toolbar from '../UI/Toolbar.svelte';
    import ToolbarGroup from '../UI/ToolbarGroup.svelte';
    import ToolbarItem from '../UI/ToolbarItem.svelte';
    import ToolbarTitle from '../UI/ToolbarTitle.svelte';
    
    import Spacer from '../UI/Spacer.svelte';

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
                <ToolbarTitle>Quiz</ToolbarTitle>
            </ToolbarItem>
        </ToolbarGroup>
        <ToolbarGroup align="right">
            <ToolbarItem>
            </ToolbarItem>
        </ToolbarGroup>
    </Toolbar>
</NavBar>

<Spacer>
    <p>Todo: implement quiz.</p>
</Spacer>