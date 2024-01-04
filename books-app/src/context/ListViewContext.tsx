import React from "react";

interface IListViewContext {
  listView: boolean,
  setListView: (listView: boolean) => void
}

const ListViewContext = React.createContext<IListViewContext>({listView: false, setListView: () => {}});

export default ListViewContext;
