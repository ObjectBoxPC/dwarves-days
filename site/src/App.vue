<template>
	<v-app>
		<v-main>
			<v-container>
				<center-layout>
					<v-flex>
						<v-card>
							<v-card-title>
								Can you name the {{ items[0].setName }}?
							</v-card-title>
						</v-card>
					</v-flex>
					<v-flex>
						<v-card>
							<v-card-title>
								Sure, there's, um…
							</v-card-title>
							<set-items :items="items"/>
						</v-card>
					</v-flex>
					<v-flex>
						<v-btn block color="primary" @click="setItems">New Set</v-btn>
					</v-flex>
				</center-layout>
			</v-container>
		</v-main>
		<v-footer height="auto" class="text-center">
			<center-layout>
				<p><a href="https://github.com/ObjectBoxPC/dwarves-days">Source code</a> on GitHub</p>
				<p>Based on the <a href="https://xkcd.com/1417/">xkcd comic “Seven”</a> and <a href="https://explainxkcd.com/wiki/index.php/1417:_Seven">analysis by explain xkcd</a></p>
			</center-layout>
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
	public items: ResultItem[] = [];

	public created() {
		this.setItems();
	}

	public setItems() {
		this.items = getItems(SETS);
	}
}
</script>
