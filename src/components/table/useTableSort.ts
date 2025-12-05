import { useState } from "react";

export type Order = "asc" | "desc";

export function useTableSort<T>(initialKey: keyof T) {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof T>(initialKey);

  const toggle = (key: keyof T) => {
    if (orderBy === key) setOrder((o) => (o === "asc" ? "desc" : "asc"));
    else {
      setOrderBy(key);
      setOrder("asc");
    }
  };

  return { order, orderBy, toggle };
}
