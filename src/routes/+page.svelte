<script lang="ts">
	import dayjs  from 'dayjs';
	import { tasks } from '$lib/stores/tasks';
    import { fade } from 'svelte/transition';
	import Header from '../lib/Header.svelte';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import Input from '$lib/input.svelte';
    import List from '$lib/list.svelte';

</script>

<div class="flex flex-col gap-8  max-w-screen-lg mx-auto sm:p-4 pt-8 md:p-8 xl:p-16">

<Header/>
<Input/>
<List/>

<div class="" >
	<html lang="ar" dir="ltr"><LightSwitch /></html>
	
</div>
</div>
