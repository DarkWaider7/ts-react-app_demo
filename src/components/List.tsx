import { FC } from "react";
interface ListProps<T> {
  itmes: T[];
  renderItem: (item: T) => React.ReactNode;
}

export default function List<T>(props: ListProps<T>) {
  return <div>{props.itmes.map(props.renderItem)}</div>;
}
