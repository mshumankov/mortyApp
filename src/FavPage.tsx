import React, { useContext } from "react";
import { Store } from "./Store";
import { toggleFavAction } from "./Actions";
import { IEpisodeProps } from "./interfaces";

const EpisodeList = React.lazy((): any => import("./EpisodesList"));

export default function FavPage(): JSX.Element {
  const { state, dispatch } = useContext(Store);
  const props: IEpisodeProps = {
    episodes: state.favourites,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <section className="episode-layout">
        <EpisodeList {...props} />
      </section>
    </React.Suspense>
  );
}
