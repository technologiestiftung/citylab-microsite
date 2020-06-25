import { render } from '@testing-library/vue';
import Button from '../Button';

describe('Button', () => {
  test('mounts properly', () => {
    const { getByText } = render(Button, {
      props: {
        label: 'hello',
      },
    });
    const button = getByText(/hello/i);
    // const wrapper = shallowMount(Button);
    expect(button).toBeDefined();
  });
});
