
<script lang="ts">
    import dayjs from "dayjs";
    import { tasks } from "./stores/tasks";


    let title="";
 let targetday=dayjs().add(1,'hour').format('YYYY-MM-DDTHH:mm');
function addtask(){
	tasks.update((currenttask)=> {
currenttask.push({
	title,
	date: targetday,
	isdone:false,
})
return currenttask.sort((a:Task,b:Task) =>{
	//@ts-ignore
return dayjs(a.date).unix() - dayjs(b.date).unix();
});
	});
	title='';

}
</script>

<div class="!bg-white border-gray-950 input-group input-group-divider flex flex-col lg:flex-row justify-between  rounded-none ">
	<input bind:value={title} class="flex-1 " type="search" placeholder="عنوان المهمة..." />
	<html lang="en" dir="ltr">	<input   
	bind:value={targetday}
	class="input rounded-none lg:w-fit " title="Input (datetime-local)" type="datetime-local" />
	</html>
</div >

	<button on:click={addtask} class=" bg-gray-200 !border-black h-20  p-7 ">
		<span class="mx-auto text-2xl">اضافة</span>
	</button>
	

