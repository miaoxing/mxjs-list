import * as React from 'react';
import classNames from 'classnames';

export interface ListDetailProps {
  as?: React.ElementType;
  className?: string;
}

const ListDetail = (props: ListDetailProps): JSX.Element => {
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
        'list-detail'
      )}
    />
  );
};

ListDetail.defaultProps = {
  as: 'div',
};

export default ListDetail;
