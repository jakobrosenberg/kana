<script>
  import Navbar from "./_components/Navbar.svelte";
  import { url, goto, context, isActive, params } from "@sveltech/routify";

  const mainTabs = [["mono", "Monograph"], ["di", "Digraph"]];
  const secondaryTabs = [["hiragana", "Hiragana"], ["katakana", "Katakana"]];
</script>


<h1 style="font-weight: bold; font-size: 2.4rem; text-align: center; padding: 20px 0">
  {$params.language}
</h1>


<Navbar items={mainTabs} param="graph" />
<Navbar items={secondaryTabs} param="language" />

<slot />
