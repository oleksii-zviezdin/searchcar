import { GalleryCatalog } from 'components/Catalog/Catalog.styled';
import { CatalogItems } from './CatalogItems';

export const CatalogGallery = ({ data, handleFavorite }) => {
  return (
    <GalleryCatalog>
      <CatalogItems data={data} handleFavorite={handleFavorite}></CatalogItems>
    </GalleryCatalog>
  );
};
