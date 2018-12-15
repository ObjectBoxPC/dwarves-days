<template>
	<div>
		<set-items :items="items"/>
		<button @click="setItems">New Set</button>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import SetItems from './components/set-items.vue';
import { getItems, SETS, ResultItem } from 'dwarves-days';

@Component({
	components: {
		SetItems,
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
