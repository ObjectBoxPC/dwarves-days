'use strict';
(function (document, Preact, PreactHooks, ReactBootstrap, DwarvesDays) {
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

		return h(
			ReactBootstrap.Container,
			{ fluid: 'sm' },
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
			)
		);
	}

	function Question(props) {
		return h(
			ReactBootstrap.Row,
			null,
			h(
				ReactBootstrap.Col,
				null,
				h(
					ReactBootstrap.Card,
					{ className: 'question' },
					h(
						ReactBootstrap.Card.Body,
						null,
						h(
							'p',
							null,
							'Can you name the ' + props.setName + '?'
						)
					)
				)
			)
		);
	}

	function Answer(props) {
		return h(
			ReactBootstrap.Row,
			null,
			h(
				ReactBootstrap.Col,
				null,
				h(
					ReactBootstrap.Card,
					{ className: 'answer' },
					h(
						ReactBootstrap.Card.Header,
						null,
						h(
							'p',
							null,
							'Sure, there’s, um…'
						)
					),
					h(
						ReactBootstrap.Card.Body,
						null,
						h(
							ReactBootstrap.Accordion,
							{ as: 'ul' },
							props.items.map(function (item, i) {
								return h(
									AnswerItem,
									{
										item: item,
										index: i,
										key: item.itemName,
									}
								);
							})
						)
					)
				)
			)
		);
	}

	function AnswerItem(props) {
		return h(
			ReactBootstrap.Card,
			{ as: 'li' },
			h(
				ReactBootstrap.Accordion.Toggle,
				{
					as: ReactBootstrap.Button,
					eventKey: String(props.index),
					variant: 'light',
					className: 'card-header text-left',
				},
				props.item.itemName
			),
			h(
				ReactBootstrap.Accordion.Collapse,
				{ eventKey: String(props.index) },
				h(
					ReactBootstrap.Card.Body,
					null,
					h(
						'p',
						null,
						props.item.setName
					)
				)
			)
		);
	}

	function NewSetButton(props) {
		return h(
			ReactBootstrap.Row,
			null,
			h(
				ReactBootstrap.Col,
				null,
				h(
					ReactBootstrap.Button,
					{ onClick: props.onClick, block: true },
					'New Set'
				)
			)
		);
	}

	Preact.render(h(App), document.getElementById('app'));
})(document, preact, preactHooks, ReactBootstrap, dwarvesDays);