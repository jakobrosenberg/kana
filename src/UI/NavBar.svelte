<script>
    export let borderPosition;
</script>

<style>

    .navbar {
        padding: 0 1.6rem;
        min-height: 4.8rem;
    }

    .navbar.top {
        border-top: 1px solid #CCC;
    }

    .navbar.bottom {
        border-bottom: 1px solid #CCC;
    }

</style>

<nav class="navbar {borderPosition}">
    <slot></slot>
</nav>