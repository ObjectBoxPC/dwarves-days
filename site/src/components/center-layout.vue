<template>
	<v-layout justify-center>
		<v-flex xs12 sm8>
			<v-container grid-list-xl>
				<v-layout column>
					<slot/>
				</v-layout>
			</v-container>
		</v-flex>
	</v-layout>
</template>