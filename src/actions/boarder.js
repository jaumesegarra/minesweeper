export const reset = () => (
	{
		type: 'RESET'
	}
)

export const newGame = (data) => (
	{
		type: 'NEW_GAME',
		boardX: boardX,
		boardY: boardY,
		bombs: bombs,
		level: level
	}
)

export const putBombs = (data) => (
	{
		type: 'PUT_BOMBS',
		firstDiscovered: firstDiscovered
	}
)

export const discoverSquare = (data) => (
	{
		type: 'DISCOVER_SQUARE',
		discovered: position
	}
)

export const toggleMarkDoubtSquare = (data) => (
	{
		type: 'TOGGLE_MARK_DOUBT_SQUARE',
		discovered: position
	}
)