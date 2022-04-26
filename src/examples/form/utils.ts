import { delay } from '../../lib/utils';
import { FormDataShape, Out } from './type';

// form shape - should match the type
export const shape = { firstName: {}, lastName: { optional: true } };

export const cartoonCharacters = ['mickey', 'minnie', 'donald', 'popeye'];

export const apiCall = async (data: FormDataShape): Promise<Out> => {
  await delay();

  if (cartoonCharacters.includes(data.firstName.toLowerCase())) {
    return Promise.reject({
      firstName: ['Cartoon character names are not allowed']
    });
  }

  return { id: 2 };
};

export const onSuccess = (a: FormDataShape, b: Out) =>
  alert('form sent successfully' + b.id + ' ' + JSON.stringify(a));
