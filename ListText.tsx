import * as React from 'react';
import classNames from 'classnames';

export interface ListTextProps {
  as?: React.ElementType;
  className?: string;
}

const ListText = (props: ListTextProps): JSX.Element => {
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
        'list-text'
      )}
    />
  );
};

ListText.defaultProps = {
  as: 'div',
};

export default ListText;
