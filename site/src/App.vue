<template>
	<div>
		<set-item
			v-for="item in items"
			:key="item.itemName"
			:item="item.itemName"
			:set="item.setName"
		/>
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
