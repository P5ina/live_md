import { EditorView } from 'codemirror';

export const theme = EditorView.theme(
	{
		'&': {
			color: 'var(--color-foreground)',
			backgroundColor: 'var(--color-background)',
			border: '1px solid var(--color-border)',
			borderRadius: 'var(--radius-md)',
			fontSize: 'var(--text-base)',
			height: '100%'
		},

		'.cm-content': {
			caretColor: 'var(--color-foreground)'
		},

		'.cm-cursor, .cm-dropCursor': { borderLeftColor: 'var(--color-foreground)' },
		'&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection':
			{ backgroundColor: 'var(--color-secondary)' },

		// '.cm-panels': { backgroundColor: darkBackground, color: ivory },
		// '.cm-panels.cm-panels-top': { borderBottom: '2px solid black' },
		// '.cm-panels.cm-panels-bottom': { borderTop: '2px solid black' },

		'.cm-searchMatch': {
			backgroundColor: '#72a1ff59',
			outline: '1px solid #457dff'
		},
		'.cm-searchMatch.cm-searchMatch-selected': {
			backgroundColor: '#6199ff2f'
		},

		'.cm-activeLine': { backgroundColor: '#6699ff0b' },
		'.cm-selectionMatch': { backgroundColor: '#aafe661a' },

		'&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket': {
			backgroundColor: 'var(--color-muted-foreground)'
		},

		'.cm-gutters': {
			display: 'none'
		},

		'.cm-activeLineGutter': {
			display: 'none'
		},

		'.cm-foldPlaceholder': {
			backgroundColor: 'transparent',
			border: 'none',
			color: '#ddd'
		},

		'.cm-scroller': {
			overflow: 'auto'
		}

		// '.cm-tooltip': {
		// 	border: 'none',
		// 	backgroundColor: tooltipBackground
		// },
		// '.cm-tooltip .cm-tooltip-arrow:before': {
		// 	borderTopColor: 'transparent',
		// 	borderBottomColor: 'transparent'
		// },
		// '.cm-tooltip .cm-tooltip-arrow:after': {
		// 	borderTopColor: tooltipBackground,
		// 	borderBottomColor: tooltipBackground
		// },
		// '.cm-tooltip-autocomplete': {
		// 	'& > ul > li[aria-selected]': {
		// 		backgroundColor: 'var(--color-background)',
		// 		color: 'var(--color-foreground)'
		// 	}
		// }
	},
	{ dark: true }
);
