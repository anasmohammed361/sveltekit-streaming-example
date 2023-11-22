<script lang="ts">
    export let data;
    $:({stream:{promise}}=data)
</script>

{#await promise}
    <p>wait</p>
{:then data} 
    <p>{data}</p>
{/await}