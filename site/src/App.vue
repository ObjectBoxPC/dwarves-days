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
							</v-card-text>
							<set-items :items="items"/>
						</v-card>
					</v-flex>
					<v-flex>
						<v-btn block color="primary" @click="setItems">New Set</v-btn>
					</v-flex>
				</center-layout>
			</v-container>
		</v-content>
		<v-footer height="auto">
			<v-layout>
				<v-flex xs12>
					<v-card flat tile color="grey lighten-3" class="text-xs-center">
						<v-card-text><a href="https://github.com/philipchungtech/dwarves-days">Source code</a> on GitHub</v-card-text>
						<v-card-text>Based on the <a href="https://xkcd.com/1417/">xkcd comic “Seven”</a> and <a href="https://explainxkcd.com/wiki/index.php/1417:_Seven">analysis by explain xkcd</a></v-card-text>
					</v-card>
				</v-flex>
			</v-layout>
		</v-footer>
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
