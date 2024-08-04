import { mount, type VueWrapper } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { setActivePinia } from 'pinia';
import { Quasar } from 'quasar';
import { beforeEach, describe, expect, it } from 'vitest';
import GameCard from '../../src/components/GameCard.vue';

describe('GameCard', () => {
  let wrapper: VueWrapper<any>;

  const pinia = createTestingPinia();
  setActivePinia(pinia);

  beforeEach(() => {
    wrapper = mount(GameCard, {
      global: {
        plugins: [Quasar, pinia],
      },
      props: {
        title: 'Game Title',
        route: '/game',
        buttonLabel: 'button',
      },
    });
  });

  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
