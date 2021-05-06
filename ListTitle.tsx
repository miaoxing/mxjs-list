import * as React from 'react';
import classNames from 'classnames';

export interface ListTitleProps {
  as?: React.ElementType;
  className?: string;
}

const ListTitle = (props: ListTitleProps): JSX.Element => {
  const {
    as: Component,
    className,
    ...rest
  } = props;

  return (
    <Component
      {...rest}
      className={classNames(
        className,
        'list-title'
      )}
    />
  );
};

ListTitle.defaultProps = {
  as: 'h5',
};

export default ListTitle;
