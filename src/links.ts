export const links: { [menu: string]: { name: string; link: string } } = {
  list: { name: 'List', link: '/list' },
  layout: { name: 'Layout', link: '/layout' },
  view: { name: 'View', link: '/view' }
};

export const menus: { name: string; link: string }[] = Object.values(links);

export default links;
