import React from 'react';
import { NavLink } from 'react-router-dom';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import EmptyWrapper from "./EmptyWrapper";

const Breadcrumbs = withBreadcrumbs()(({ breadcrumbs }) => (
    <nav className='breadcrumb'>
        <ol>
            {breadcrumbs.map(({ match, breadcrumb }) => (
                <EmptyWrapper key={match.url}>
                    {match.url === '/home' ? '' :
                        <li>
                            <NavLink to={match.url} exact key={match.url}>{breadcrumb.props.children.replaceAll("-", " ")}</NavLink>
                        </li>
                    }
                </EmptyWrapper>
            ))}
        </ol>
    </nav>
));

export default Breadcrumbs;
