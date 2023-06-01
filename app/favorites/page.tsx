import getCurrentUser from "../actions/getCurrentUser";
import { getFavoriteListings } from "../actions/getFavoriteListings";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import FavoritesClient from "./FavoritesClient";

const FavoriteListingPage = async () => {
  const favoriteListings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }

  if (favoriteListings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you have no favorite listings"
        />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <FavoritesClient
        currentUser={currentUser}
        favoriteListings={favoriteListings}
      />
    </ClientOnly>
  );
};

export default FavoriteListingPage;
