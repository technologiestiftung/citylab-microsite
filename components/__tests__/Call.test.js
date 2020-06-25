import { render } from '@testing-library/vue';
import Call from '../Call';
import { content } from '../../assets/content';
describe('Call', () => {
  test('mounts/renders properly', () => {
    const { getByText, getAllByTestId } = render(Call, {
      props: {
        content,
        lang: 'en',
      },
    });
    const callButton = getByText(content['en'].call.cta);
    const callTitle = getByText(content['en'].call.title);
    const callIntro = getByText(content['en'].call.bullets_intro);
    const allListItems = getAllByTestId(/call-list-items/i);
    expect(callButton).toBeInTheDocument();
    expect(callTitle).toBeInTheDocument();
    expect(callIntro).toBeInTheDocument();
    expect(allListItems.length).toBe(content['en'].call.bullets.length);
    for (const i in content['en'].call.bullets) {
      const item = getByText(content['en'].call.bullets[i]);
      expect(item).toBeInTheDocument();
    }
  });
});
