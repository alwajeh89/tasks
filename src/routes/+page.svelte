<script lang="ts">

import dayjs from "dayjs";
import 'dayjs/locale/ar'

dayjs.locale('ar');

let period = dayjs().format('a')=="م"?'مساء':'صباح';

</script>

<div>
<header class="flex justify-between p-12">

	<div>
<h1 class=" text-4xl">{period} الخير</h1>
<h3 class="text-2xl text-surface-900/40">{dayjs().format('اليوم ، dddd D MMM YYYY')}</h3>
	</div>
	<div class="bg-gray-500 h-16 w-32 ">

	</div>
</header>
</div>