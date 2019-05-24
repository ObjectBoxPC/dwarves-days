<template functional>
	<v-list>
		<v-list-group append-icon="" v-for="item in props.items" :key="itemName">
			<v-list-tile slot="activator">
				{{ item.itemName }}
			</v-list-tile>
			<v-list-tile color="grey darken-2">
				{{ item.setName }}
			</v-list-tile>
		</v-list-group>
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