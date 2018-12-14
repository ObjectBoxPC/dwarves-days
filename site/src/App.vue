<template>
	<div>
		<template v-for="item in items">
			<set-item :item="item.itemName" :set="item.setName"/>
		</template>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import SetItem from './components/set-item.vue';
import { getItems, SETS, ResultItem } from 'dwarves-days';

@Component({
	components: {
		SetItem,
	},
})
export default class App extends Vue {
	items: ResultItem[];

	constructor() {
		super();
		this.items = getItems(SETS);
	}
}
</script>
