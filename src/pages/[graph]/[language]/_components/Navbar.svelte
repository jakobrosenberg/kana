<script>
  import { url, params } from "@sveltech/routify";

  import NavBar from "../../../../UI/NavBar.svelte";

  import Toolbar from "../../../../UI/Toolbar.svelte";
  import ToolbarGroup from "../../../../UI/ToolbarGroup.svelte";
  import ToolbarItem from "../../../../UI/ToolbarItem.svelte";
  import ToolbarTitle from "../../../../UI/ToolbarTitle.svelte";

  import Button from "../../../../UI/Button.svelte";
  import Icon from "../../../../UI/Icon.svelte";

  import SegmentedControl from "../../../../UI/SegmentedControl.svelte";
  import SegmentedControlItem from "../../../../UI/SegmentedControlItem.svelte";

  export let items, param
</script>

<NavBar borderPosition="top">

  <Toolbar>
    <ToolbarGroup align="justify">
      <ToolbarItem grow>
        <SegmentedControl>
          {#each items as [id, name]}
            <SegmentedControlItem
              href={$url(null, { [param]: id })}
              active={$params[param] === id}>
              {name}
            </SegmentedControlItem>
          {/each}
        </SegmentedControl>
      </ToolbarItem>
    </ToolbarGroup>
  </Toolbar>

</NavBar>
