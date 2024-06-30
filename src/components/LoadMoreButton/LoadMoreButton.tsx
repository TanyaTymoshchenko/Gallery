import css from "./LoadMoreButton.module.css";
import { LoadMoreButtonTypes } from "./LoadMoreButton.types";

export default function LoadMoreButton({ onClick }: LoadMoreButtonTypes) {
  return (
    <button className={css.button} onClick={onClick}>
      Load more
    </button>
  );
}