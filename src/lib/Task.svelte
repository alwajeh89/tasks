<script lang="ts">
import { slide } from 'svelte/transition';
import { quintOut } from 'svelte/easing';
import { tasks } from '$lib/stores/tasks';
import dayjs from 'dayjs'    
import relativeTime from 'dayjs/plugin/relativeTime';
import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';
import {filter} from '$lib/stores/filter';

dayjs.extend(relativeTime);

const modalStore = getModalStore();




export let done:boolean;


function confirmdelete(task:Task){
    const modal: ModalSettings = {
	type: 'confirm',
	// Data
	title: 'حذف المهمة',
	body: `سيتم حذف المهمة :"${task.title}"`,
	// TRUE if confirm pressed, FALSE if cancel pressed
    buttonTextCancel:"الغاء",
    buttonTextConfirm:"تأكيد",
	response: (r: boolean) => {
        if(r){
tasks.update( (currentTasks) => {
    let index =currentTasks.indexOf(task)
currentTasks.splice(index,1);
return currentTasks;
})
        }
    },

  
};
modalStore.trigger(modal);
}

function applyFilter(filter:typeof $filter,task:Task):boolean{
    switch(filter){
    case 'مهام اليوم':
        //@ts-ignore
    return dayjs(task.date).unix() - dayjs().unix() <= 24*60*60;
    case 'جميع المهام':
    default:
        return true;
    }
}



</script>
{#each $tasks as task }
{#if task.isdone == done && applyFilter($filter,task)}

<li transition:slide={{ delay: 100, duration: 300, easing: quintOut, axis: 'y' }}
 class="bg-[#a4c2d8] p-4 rounded-full flex justify-between items-center h-18">
    <div class=" checkbox-wrapper-41  ">	
        <input bind:checked={task.isdone} type="checkbox" >
                <span class="mr-2">
            {task.title}
        </span>
    </div>
    <div class=" flex  gap-2">
        
        <button  class=" button-49 btn bg-[#436985] h-16 w-36 ">

            {dayjs().to(dayjs(task.date))}
        </button>
        <button on:click={() => confirmdelete(task)}   class="bg-white btn border-2 border-black p-[0.75rem] ">
            <svg class=" w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="black" d="M38 7H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m0 12H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2m0 12H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2"/><circle cx="38" cy="38" r="10" fill="white"/><g fill="black"><path d="m43.31 41.181l-2.12 2.122l-8.485-8.484l2.121-2.122z"/><path d="m34.819 43.31l-2.122-2.12l8.484-8.485l2.122 2.121z"/></g></svg>
            </div>  
        </li> 
{/if}

{/each}
