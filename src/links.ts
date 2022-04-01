export const links: { [menu: string]: { name: string; link: string } } = {
  list: { name: 'List', link: '/list' },
  layout: { name: 'Layout', link: '/layout' },
  view: { name: 'View', link: '/view' },
  card: { name: 'Card', link: '/card' },
  form: { name: 'Form', link: '/form' },
  loadDataAsync: { name: 'Load Data Async', link: '/load-data-async' },
  notifications: { name: 'Notifications', link: '/notifications' },
  code: { name: 'Code', link: '/code' },
  listAssign: { name: 'List Assign', link: '/list-assign' },
  buttons: { name: 'Buttons', link: '/buttons' },
  download: { name: 'Download', link: '/download' }
};

export const menus: { name: string; link: string }[] = Object.values(links);

export default links;
