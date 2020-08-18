
import { shallowMount } from '@vue/test-utils';
import BookList from '@/components/BookList.vue';

describe('BookList component', () => {
  it('is imported correctly', () => {
    // this is just here
    expect(true).toBe(true);
  });
  it('list header should have Title, Author and Read? columns', () => {
    const wrapper = shallowMount(BookList, {
      propsData: {
        books: []
      }
    });

    expect(wrapper.text().split(' ')).toContain('Title');
    expect(wrapper.text().split(' ')).toContain('Author');
    expect(wrapper.text().split(' ')).toContain('Read?');

  });
  it('testing one book item', () => {
    const wrapper = shallowMount(BookList, {
      propsData: {
        books: [
          {
            title: 'jump',
            author: 'harry',
            read: false,
          }
        ]
      }
    });
    //console.log('testing jump title')
    //console.log(wrapper.text().split(' '))

    expect(wrapper.text().split(' ')).toContain('jump');
    expect(wrapper.text().split(' ')).toContain('harry');
    expect(wrapper.text().split(' ')).toContain('No');
  });
});
