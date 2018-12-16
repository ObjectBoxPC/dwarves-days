<template>
	<v-list-group append-icon="">
		<v-list-tile slot="activator">
			{{ item }}
		</v-list-tile>
		<v-list-tile color="grey darken-2">
			{{ explanation }}
		</v-list-tile>
	</v-list-group>
</template>

<script lang="ts">
	import { Vue, Component, Prop } from 'vue-property-decorator';

	@Component
	export default class SetItem extends Vue {
		@Prop(String) item!: string;
		@Prop(String) explanation!: string;
	}
</script>