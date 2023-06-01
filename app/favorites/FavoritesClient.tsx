import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/listings/ListingCard";
import { SafeListing, SafeUser } from "../types";

interface FavoritesClientProps {
  currentUser?: SafeUser | null;
  favoriteListings: SafeListing[];
}
const FavoritesClient: React.FC<FavoritesClientProps> = ({
  currentUser,
  favoriteListings,
}) => {
  return (
    <Container>
      <Heading title="Favorites" subtitle="List of places you favorited!" />
      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-8
        pt-24
        "
      >
        {favoriteListings.map((favorite) => (
          <ListingCard
            currentUser={currentUser}
            data={favorite}
            key={favorite.id}
          />
        ))}
      </div>
    </Container>
  );
};

export default FavoritesClient;
