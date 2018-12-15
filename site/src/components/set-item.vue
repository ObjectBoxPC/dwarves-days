<template>
	<v-list-tile>
		{{ item }} ({{ explanation }})
	</v-list-tile>
</template>

<script lang="ts">
	import { Vue, Component, Prop } from 'vue-property-decorator';

	@Component
	export default class SetItem extends Vue {
		@Prop(String) item!: string;
		@Prop(String) explanation!: string;
	}
</script>