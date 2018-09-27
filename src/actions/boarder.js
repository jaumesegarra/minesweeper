export const resetGame = () => (
	{
		type: 'RESET'
	}
)

export const newGame = (size, bombs) => (
	{
		type: 'NEW_GAME',
		payload: {
			size: size,
			bombs: bombs
		}	
	}
)

export const putBombs = (firstDiscovered) => (
	{
		type: 'PUT_BOMBS',
		payload: {
			firstDiscovered: firstDiscovered
		}
	}
)

export const discoverSquare = (position) => (
	{
		type: 'DISCOVER_SQUARE',
		payload: {
			discovered: position
		}
	}
)

export const toggleMarkDoubtSquare = (position) => (
	{
		type: 'TOGGLE_MARK_DOUBT_SQUARE',
		payload: {
			discovered: position
		}
	}
)

export const putTime = (time) => (
	{
		type: 'PUT_TIME',
		payload: {
			time: time
		}
	}
)