<template>
	<div>
		<set-item
			v-for="item in items"
			:key="item.itemName"
			:item="item.itemName"
			:set="item.setName"
		/>
		<button @click="setItems">New Set</button>
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
	items: ResultItem[] = [];

	created() {
		this.setItems();
	}

	setItems() {
		this.items = getItems(SETS);
	}
}
</script>
