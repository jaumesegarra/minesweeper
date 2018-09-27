export const changePage = (route, params) => (
	{
		type: 'CHANGE_PAGE',
		payload: {
			route: route,
			params: params
		}
	}
)