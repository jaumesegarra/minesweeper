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
		type: 'PUT_BOMBS',
		position: position
	}
)

export const finishAsLost = (data) => (
	{
		type: 'FINISH_AS_LOST',
		exploitedBomb: exploitedBomb
	}
)