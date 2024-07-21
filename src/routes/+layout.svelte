<script lang="ts">
	import '../app.postcss';
	import { Modal, getModalStore, initializeStores } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	initializeStores();

</script>
<Modal buttonPositive="bg-green-800" buttonNeutral="bg-red-500" regionFooter='flex justify-end gap-1'/>

<slot />
