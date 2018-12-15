<template>
	<ul>
		<li v-for="item in items" :key="item.itemName">
			{{ item.itemName }} ({{ item.setName }})
		</li>
	</ul>
</template>

<script lang="ts">
	import { Vue, Component, Prop } from 'vue-property-decorator';
	import { ResultItem } from 'dwarves-days';

	@Component
	export default class SetItems extends Vue {
		@Prop(Array) items!: ResultItem[];
	}
</script>