import React from "react";
import { Favorites } from "@/widgets/favorites";
import DefaultLayout from "@/shared/ui/layout/DefaultLayout";

const FavoritesPage = () => {
  return (
    <DefaultLayout>
      <Favorites />
    </DefaultLayout>
  );
};

export default FavoritesPage;
