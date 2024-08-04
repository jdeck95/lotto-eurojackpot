import { mount, type VueWrapper } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { setActivePinia } from 'pinia';
import { Quasar } from 'quasar';
import { beforeEach, describe, expect, it } from 'vitest';
import NavBar from '../../../src/components/layout/NavBar.vue';
import router from '@/router';

describe('NavBar', () => {
  let wrapper: VueWrapper<any>;

  const pinia = createTestingPinia();
  setActivePinia(pinia);

  beforeEach(() => {
    wrapper = mount(NavBar, {
      global: {
        plugins: [Quasar, pinia, router],
      },
    });
  });

  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
