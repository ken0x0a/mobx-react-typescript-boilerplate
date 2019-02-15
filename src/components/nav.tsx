import * as React from "react";
import { Link } from "react-router-dom";

interface Route {
  path: string;
  label?: string;
}
export interface NavProps {
  routes: Route[];
}

export class Nav extends React.Component<NavProps, {}> {
  public render() {
    const { routes } = this.props;
    return (
      <div
        style={{
          width: 100,
          display: "flex",
          flexDirection: "column"
        }}
      >
        {routes.map(({ path, label }) => (
          <Link key={`${path}${label}`} to={path}>
            {label}
          </Link>
        ))}
      </div>
    );
  }
}
