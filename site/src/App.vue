<template>
	<v-app>
		<v-content>
			<v-container>
				<center-layout>
					<v-flex>
						<v-card>
							<v-card-text>
								<div class="title">Can you name the {{ items[0].setName }}?</div>
							</v-card-text>
						</v-card>
					</v-flex>
					<v-flex>
						<v-card>
							<v-card-text>
								<div class="title">Sure, there's, um…</div>
								<set-items :items="items"/>
							</v-card-text>
						</v-card>
					</v-flex>
					<v-flex>
						<v-btn block color="primary" @click="setItems">New Set</v-btn>
					</v-flex>
				</center-layout>
			</v-container>
		</v-content>
	</v-app>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import CenterLayout from './components/center-layout.vue';
import SetItems from './components/set-items.vue';
import { getItems, SETS, ResultItem } from 'dwarves-days';

@Component({
	components: {
		CenterLayout,
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
