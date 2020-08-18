import { shallowMount } from '@vue/test-utils';
import Alert from '@/components/Alert.vue'

const factory = (values = {}) => {
  return shallowMount(Alert, {
    propsData:{
      ...values
    }
  });
}

describe('Alert component', () => {
  it('shows message passed to it', () => {
    const wrapper = factory({message: 'Success'})

    expect(wrapper.text()).toMatch('Success');
  })
})
