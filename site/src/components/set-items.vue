<template functional>
	<v-list>
		<v-list-group append-icon="" v-for="item in props.items" :key="itemName">
			<v-list-item-title slot="activator">
				{{ item.itemName }}
			</v-list-item-title>
			<v-list-item color="grey darken-2">
				{{ item.setName }}
			</v-list-item>
		</v-list-group>
	</v-list>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ResultItem } from 'dwarves-days';

@Component
export default class SetItems extends Vue {
	@Prop(Array) public items!: ResultItem[];
}
</script>