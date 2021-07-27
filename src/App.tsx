import React from 'react';
import { BrowserRouter as Router, Route, RouteComponentProps, Switch } from "react-router-dom";
import routes from './config/routes';

const App: React.FunctionComponent<{}> = props => {
	return (
		<Router>
			<Switch>
				{routes.map((route, index) => {
					return (
						<Route
							key={index}
							path={route.path}
							exact={route.exact}
							render={(props: RouteComponentProps<any>) => (
								<route.component
									name={route.name}
									{...props}
									{...route.props}
								/>
							)}
						/>
					)
				})}
			</Switch>
		</Router>
	)
}

export default App;