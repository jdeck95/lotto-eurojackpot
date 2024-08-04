import { mount, type VueWrapper } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { setActivePinia } from 'pinia';
import { Quasar } from 'quasar';
import { beforeEach, describe, expect, it } from 'vitest';
import DrawResults from '../../src/components/DrawResults.vue';

describe('DrawResults', () => {
  let wrapper: VueWrapper<any>;

  const pinia = createTestingPinia();
  setActivePinia(pinia);

  beforeEach(() => {
    wrapper = mount(DrawResults, {
      global: {
        plugins: [Quasar, pinia],
      },
      props: {
        numbers: ['1', '2', '3', '4', '5', '6'],
        additionalNumbers: ['1', '2'],
      },
    });
  });

  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
