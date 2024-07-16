
<script lang="ts">
    import dayjs from "dayjs";
    import { tasks } from "./stores/tasks";

    let title="";

function addtask(){
	tasks.update((currenttask)=> {
currenttask.push({
	title,
	assigndate: dayjs().format(),
	isdone:false,
})
return currenttask;
	});
	title='';

}
</script>

<div class="input-group input-group-divider flex justify-between ">
	<input bind:value={title} class="flex-1 !bg-slate-600" type="search" placeholder="عنوان المهمة..." />
	<button on:click={addtask} class="variant-soft-secondary">اضافة</button>
	
</div >
