import * as React from 'react';
import ListItem from './ListItem';
import ListTitle from './ListTitle';
import ListDetail from './ListDetail';

export interface ListDescProps {
  title?: string;
  children?: React.ReactNode;
}

const ListDesc = ({title, children, ...props}: ListDescProps): JSX.Element => {
  return <ListItem description={true} {...props}>
    <ListTitle>{title}</ListTitle>
    <ListDetail>{children || '-'}</ListDetail>
  </ListItem>;
};

export default ListDesc;
