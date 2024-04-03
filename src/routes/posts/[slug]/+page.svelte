<script>
    export let data;
    let {post} = data;

</script>


<svelte:head>
{#if post}
    <title>{post.title.rendered}</title>
    <meta property="og:title" content="{post.title.rendered}">
    <meta property="og:description" content="{post.excerpt?.rendered}">
    <meta property="og:image" content="{post['_embedded']['wp:featuredmedia'][0].source_url}">
{/if}
</svelte:head>

<div class="text-lg">
{#if post}
    <h1 class="text-3xl font-bold my-4">{post.title.rendered}</h1>
{/if}
</div>