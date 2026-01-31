'use strict';
(function (document, Preact, PreactHooks, DwarvesDays) {
	var h = Preact.h;

	function App() {
		var itemsState = PreactHooks.useState([]);

		function updateItems() {
			var items = DwarvesDays.getItems(DwarvesDays.SETS);
			itemsState[1](items);
		}

		PreactHooks.useEffect(function () {
			updateItems();
		}, []);

		if (itemsState[0].length === 0) {
			return null;
		}

		return [
			h(
				Question,
				{ setName: itemsState[0][0].setName }
			),
			h(
				Answer,
				{ items: itemsState[0] }
			),
			h(
				NewSetButton,
				{ onClick: updateItems }
			),
		];
	}

	function Question(props) {
		return h(
			'p',
			{ className: 'notice question' },
			'Can you name the ' + props.setName + '?'
		);
	}

	function Answer(props) {
		return h(
			'div',
			{ className: 'notice answer' },
			h(
				'p',
				null,
				'Sure, there’s, um…'
			),
			props.items.map(function (item, i) {
				return h(
					'details',
					{ key: item.itemName },
					h(
						'summary',
						null,
						item.itemName
					),
					h(
						'p',
						null,
						item.setName
					)
				);
			})
		);
	}

	function NewSetButton(props) {
		return h(
			'button',
			{ onClick: props.onClick },
			'New Set'
		);
	}

	Preact.render(h(App), document.getElementById('app'));
})(document, preact, preactHooks, dwarvesDays);