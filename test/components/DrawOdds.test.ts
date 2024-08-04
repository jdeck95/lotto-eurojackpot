import { mount, type VueWrapper } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { setActivePinia } from 'pinia';
import { Quasar } from 'quasar';
import { beforeEach, describe, expect, it } from 'vitest';
import DrawOdds from '../../src/components/DrawOdds.vue';

describe('DrawOdds', () => {
  let wrapper: VueWrapper<any>;

  const pinia = createTestingPinia();
  setActivePinia(pinia);

  beforeEach(() => {
    wrapper = mount(DrawOdds, {
      global: {
        plugins: [Quasar, pinia],
      },
      props: {
        odds: [
          {
            numberOfWinners: '12',
            winningClass: 1,
            odd: '123456',
          },
        ],
      },
    });
  });

  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
