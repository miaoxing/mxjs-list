import * as React from 'react';
import {render} from '@testing-library/react';
import List, {ListProps} from '../List';

describe('list', () => {
  test('List', () => {
    const result = render(<List/>);
    expect(result.container).toMatchSnapshot();
  });

  test('List as HTML Element', () => {
    const result = render(<List as="div"/>);
    expect(result.container).toMatchSnapshot();
  });

  test('List as Component', () => {
    const Component = (props: ListProps) => {
      return <span {...props}/>;
    };
    const result = render(<List as={Component}/>);
    expect(result.container).toMatchSnapshot();
  });
});
