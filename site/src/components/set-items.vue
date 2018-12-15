<template>
	<v-list>
		<set-item
			v-for="item in items"
			:key="item.itemName"
			:item="item.itemName"
			:explanation="item.setName"
		/>
	</v-list>
</template>

<script lang="ts">
	import { Vue, Component, Prop } from 'vue-property-decorator';
	import SetItem from './set-item.vue';
	import { ResultItem } from 'dwarves-days';

	@Component({
		components: {
			SetItem,
		}
	})
	export default class SetItems extends Vue {
		@Prop(Array) items!: ResultItem[];
	}
</script>