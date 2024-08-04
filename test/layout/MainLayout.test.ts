import { mount, type VueWrapper } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { setActivePinia } from 'pinia';
import { Quasar } from 'quasar';
import { beforeEach, describe, expect, it } from 'vitest';
import MainLayout from '../../src/layout/MainLayout.vue';
import router from '@/router';

describe('MainLayout', () => {
  let wrapper: VueWrapper<any>;

  const pinia = createTestingPinia();
  setActivePinia(pinia);

  beforeEach(() => {
    wrapper = mount(MainLayout, {
      global: {
        plugins: [Quasar, pinia, router],
      },
    });
  });

  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
