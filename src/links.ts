export const links: { [menu: string]: { name: string; link: string } } = {
  list: { name: "Table", link: "/table" },
  layout: { name: "Layout", link: "/layout" },
  view: { name: "View", link: "/view" },
  card: { name: "Card", link: "/card" },
  form: { name: "Form", link: "/form" },
  loadDataAsync: { name: "Load Data Async", link: "/load-data-async" },
  notifications: { name: "Notifications", link: "/notifications" },
  code: { name: "Code", link: "/code" },
  listAssign: { name: "List Assign", link: "/list-assign" },
  buttons: { name: "Buttons", link: "/buttons" },
  badge: { name: "Badge", link: "/badge" },
  statusChange: { name: "Status Change", link: "/status-change" },
  simpleList: { name: "Simple list", link: "/simple-list" },
  toggle: { name: "Toggle", link: "/toggle" },
  tabs: { name: "Tabs", link: "/tabs" },
  fileUpload: { name: "File Upload", link: "/file-upload" },
  detail: { name: "Detail", link: "/detail" },
  // download: { name: "Download", link: "/download" },
  // auth: { name: "Auth", link: "/auth" },
  // superadmin: { name: "Superadmin", link: "/superadmin" },
  // crudBrowser: { name: "Crud Browser", link: "/crud-browser" },
  // dateRange: { name: "Date Range", link: "/date-range" },
};

export const menus: { name: string; link: string }[] = Object.values(links);

export default links;
