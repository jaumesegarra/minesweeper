export const putScore = (user, boardSize, bombs, time) => (
	{
		type: 'PUT_SCORE',
		payload: {
			user: user, 
			boardSize: boardSize,
			bombs: bombs,
			time: time
		}	
	}
)