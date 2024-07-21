<script lang="ts">
    import { ListBox, ListBoxItem, popup, type PopupSettings } from "@skeletonlabs/skeleton";

import {filter} from '$lib/stores/filter';
    import dayjs from "dayjs";
    import 'dayjs/locale/ar'
    
    dayjs.locale('ar');
    
    let period = dayjs().format('a')=="م"?'مساء':'صباح';
    


const popupCombobox: PopupSettings = {
	event: 'click',
	target: 'popupCombobox',
	placement: 'bottom',
	closeQuery: '.listbox-item'
};
				
    </script>
    <header class="flex justify-between ">
    
        <div>
    <h1 class="text-2xl lg:text-4xl">{period} الخير</h1>
    <h3 class="text-2xl text-gray-700">{dayjs().format('اليوم ، dddd D MMM YYYY')}</h3>
        </div>

        <button class="btn variant-filled w-48 justify-between bg-gray-700" use:popup={popupCombobox}>
            <span class="capitalize">{$filter ?? 'Trigger'}</span>
            <span class="text-4xl !m-0"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 50 50"><path fill="currentColor" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"/><path fill="currentColor" d="m25 34.4l-9.7-9.7l1.4-1.4l8.3 8.3l8.3-8.3l1.4 1.4z"/><path fill="currentColor" d="M24 16h2v17h-2z"/></svg></span>
        </button>
                           
<div class="card w-48 shadow-xl py-2 " data-popup="popupCombobox">
	<ListBox rounded="rounded-full">
		<ListBoxItem bind:group={$filter} name="medium" value="جميع المهام">جميع المهام</ListBoxItem>
		<ListBoxItem bind:group={$filter} name="medium" value="مهام اليوم">مهام اليوم</ListBoxItem>
	</ListBox>
	<div class="arrow bg-surface-100-800-token" />
</div>
					     
    </header>