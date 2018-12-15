<template>
	<v-list>
		<v-list-tile v-for="item in items" :key="item.itemName">
			{{ item.itemName }} ({{ item.setName }})
		</v-list-tile>
	</v-list>
</template>

<script lang="ts">
	import { Vue, Component, Prop } from 'vue-property-decorator';
	import { ResultItem } from 'dwarves-days';

	@Component
	export default class SetItems extends Vue {
		@Prop(Array) items!: ResultItem[];
	}
</script>