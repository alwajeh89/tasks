<script lang="ts">
	import { tasks } from '$lib/stores/tasks';
    import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

</script>

<ol class="gap-2 flex flex-col">
{#each $tasks as task }
<li class="bg-gray-500 p-4 rounded-full flex justify-between items-center">
    <div class=" checkbox-wrapper-41 ">	
        <input type="checkbox" >
                <span class="mr-2">
            {task.title}
        </span>
    </div>
    <div class=" flex  gap-1">
        
        <button class=" btn variant-filled-surface ">
            
            {dayjs().to(dayjs(task.assigndate))}
        </button>
        <button class=" btn variant-filled-surface p-[0.75rem] ">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="3.75" d="M12.01 12v.01H12V12zm7 0v.01H19V12zm-14 0v.01H5V12z"/></svg>
        	</button>
    </div>
        
        </li>
{/each}
</ol>