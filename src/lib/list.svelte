<script lang="ts">
	import { fade } from 'svelte/transition';
	import { tasks } from '$lib/stores/tasks';
    import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
import Task from '$lib/Task.svelte';


</script>
{#if $tasks.length==0}
    ppp
{:else}
{#if $tasks.filter((task) => !task.isdone).length>0}
    

<ol transition:fade class="gap-2 flex flex-col">
    <h2 class=" text-2xl"> المهام المتبقية :</h2>
</ol>

<Task done={false}/>
{/if}
{#if $tasks.filter((task) => task.isdone).length>0}
<ol transition:fade class="gap-2 flex flex-col">
    <h2 class="text-2xl"> المهام المكتملة :</h2>
    
    <Task done={true}/>

</ol>
{/if}

{/if}